import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";

export const Types = ["toppings"];
export class Mod extends Model {
  route = "modification";
  getParams: any = { join: "item||name" };
  cost = 0;
  item: any = {};

  get COST() {
    return `$${this.cost.toFixed(2)}`;
  }

  getDataFromStores() {
    this.item = MainStore.items.getByIdSync(
      typeof this.item === "number" ? this.item : this.item.id
    );
  }
}
