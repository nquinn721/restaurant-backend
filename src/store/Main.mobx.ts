import { Store, Loader } from "mobx-store-model";
import { Order } from "./models/Order.model";
import { Service } from "mobx-store-model";
import { Socket } from "./Socket.mobx";
import { Category } from "./models/Category.model";
import { Item } from "./models/Item.model";
import { observable } from "mobx";
import { Side } from "./models/Side.model";
Service.setBaseUrl("https://restaurant-server-288018.ue.r.appspot.com/");
class MainMobx {
  orders = new Store(Order, "orders");
  categories = new Store(Category, "categories");
  items = new Store(Item, "items");
  sides = new Store(Side, "sides");

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
  MainStore.items,
  MainStore.sides,
]);
Loader.init();
