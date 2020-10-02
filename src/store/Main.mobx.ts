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
Service.setBaseUrl(
  process.env.NODE_ENV === "production"
    ? "https://restaurant-server-288018.ue.r.appspot.com/"
    : "http://localhost:8080/"
);
class MainMobx {
  orders = new Store(Order, "orders");
  categories = new Store(Category, "categories");
  items = new Store(Item, "items");
  sides = new Store(Side, "sides");
  mods = new Store(Mod, "mods");
  modTypes = new Store(ModType, "modtypes");
  locations = new Store(Location, "locations");

  constructor() {
    Socket.on("order", (order: any) => {
      this.orders.objects = [order].concat(this.orders.objects);
    });
  }
}

export const MainStore = new MainMobx();
Loader.registerStores([
  MainStore.orders,
  MainStore.categories,
  MainStore.mods,
  MainStore.items,
  MainStore.sides,
  MainStore.modTypes,
  MainStore.locations,
]);
Loader.init();
