import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";
import { ModType } from "./ModType.model";

export class Mod extends Model {
  route = "modification";
  getParams: any = { join: ["item||name", "type"] };
  cost = 0;
  item: any = {};
  type: ModType = new ModType();

  get COST() {
    return `$${this.cost.toFixed(2)}`;
  }

  getDataFromStores() {
    this.item = MainStore.items.getByIdSync(this.item);
  }
}
