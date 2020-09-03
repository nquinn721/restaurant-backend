import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";

export class Item extends Model {
  route = "item";
  getParams = { join: ["category||id"] };
  category: any = {};
  cost = 0;

  get COST() {
    return `$${this.cost.toFixed(2)}`;
  }

  getDataFromStores() {
    this.category = MainStore.categories.getByIdSync(this.category?.id);
  }
}
