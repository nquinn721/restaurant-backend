import { Store, Loader } from "mobx-store-model";
import { Order } from "./models/Order.model";
import { Service } from "mobx-store-model";
import { Socket } from "./Socket.mobx";
import { Category } from "./models/Category.model";
import { Item } from "./models/Item.model";
import { Side } from "./models/Side.model";
import { Mod } from "./models/Mod.model";
import { ModType } from "./models/ModType.model";
import { Location } from "./models/Location.model";
import { action, observable } from "mobx";
import { create, persist } from "mobx-persist";
import localForage from "localforage";
Service.setBaseUrl(
  process.env.NODE_ENV === "production"
    ? "https://restaurant-server-288018.ue.r.appspot.com/"
    : "http://localhost:8080/"
);

class MainMobx {
  @persist("object") @observable _currentLocation = new Location();
  orders = new Store(Order, "orders");
  categories = new Store(Category, "categories");
  items = new Store(Item, "items");
  sides = new Store(Side, "sides");
  mods = new Store(Mod, "mods");
  modTypes = new Store(ModType, "modtypes");
  locations = new Store(Location, "locations");
  ready = false;

  @persist("object") @observable user: any = {};
  @observable isLoggedIn = false;
  @observable isLoggingIn = false;
  @observable loginError = false;

  get currentLocation() {
    return this._currentLocation;
  }
  set currentLocation(location: any) {
    this._currentLocation = location;
    this.getOrders();
  }

  constructor() {
    this.getOrders();

    Socket.on("order", (order: any) => {
      this.orders.objects = [order].concat(this.orders.objects);
    });
  }

  getOrders() {
    if (this.ready && this.locations.ready) {
      this.orders.model.getParams.s.location = this.currentLocation.id;
      this.orders.refreshData();
    } else setTimeout(this.getOrders.bind(this), 400);
  }

  @action
  async login(creds: object) {
    this.isLoggingIn = true;
    const login = await Service.post("/auth/login", creds);
    Service.setBearerToken(login.access_token);

    localStorage.setItem("Authorization", login.access_token);
    this.user = login.user;

    localStorage.setItem("user", JSON.stringify(login.user));

    this.isLoggedIn = true;
    this.isLoggingIn = false;
    if (login.error || login.logout) {
      this.loginError = login.error || "";
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.user = login.user;
    }
  }

  @action
  logout() {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("user");
    this.isLoggedIn = false;
    this.isLoggingIn = false;
    this.user = {};
  }
}

export const MainStore = new MainMobx();
Loader.registerStores([
  MainStore.categories,
  MainStore.mods,
  MainStore.items,
  MainStore.sides,
  MainStore.modTypes,
  MainStore.locations,
]);
Loader.init();
const hydrate = create({
  storage: localForage,
  jsonify: false,
});

hydrate("main", MainStore).then(() => {
  MainStore.ready = true;
});
