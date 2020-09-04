import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";
import { Mod } from "./Mod.model";

export class Item extends Model {
  route = "item";
  getParams = { join: ["category||id"] };
  category: any = {};
  cost = 0;
  mods: Mod[] = [];

  get COST() {
    return `$${this.cost.toFixed(2)}`;
  }

  getDataFromStores() {
    this.category = MainStore.categories.getByIdSync(this.category?.id);
  }
}
