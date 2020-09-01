import { Store } from "mobx-store-model";
import { Order } from "./models/Order.model";
import { Service } from "mobx-store-model";
import { Socket } from "./Socket.mobx";
Service.setBaseUrl("https://restaurant-server-288018.ue.r.appspot.com/");
class MainMobx {
  orders = new Store(Order);

  constructor() {
    this.orders.refreshData();
    Socket.on("order", (order: any) => {
      console.log("got order", order);

      this.orders.addObject(order);
    });
  }
}

export const MainStore = new MainMobx();
