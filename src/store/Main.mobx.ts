import { Store } from "mobx-store-model";
import { Order } from "./models/Order.model";
class MainMobx {
  orders = new Store(Order);

  constructor() {
    this.orders.refreshData();
  }
}

export const MainStore = new MainMobx();
