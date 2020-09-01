import { Store } from "mobx-store-model";
import { Order } from "./models/Order.model";
import { Service } from "mobx-store-model";
Service.setBaseUrl("https://restaurant-server-288018.ue.r.appspot.com/");
class MainMobx {
  orders = new Store(Order);

  constructor() {
    this.orders.refreshData();
  }
}

export const MainStore = new MainMobx();
