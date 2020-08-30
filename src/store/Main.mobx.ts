import { Store, Loader, Service } from "mobx-store-model";
import { Item } from "./models/Item.model";
Service.setBaseUrl("https://elevated-column-284822.ue.r.appspot.com/");
class MainMobx {
  items = new Store(Item);
}

export const MainStore = new MainMobx();
Loader.registerStore(MainStore.items, "items");
Loader.init();
