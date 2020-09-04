import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";
import { Mod } from "./Mod.model";

export class Item extends Model {
  route = "item";
  getParams = { sort: "id,ASC", join: ["category||id", "mods||id"] };
  category: any = {};
  cost = 0;
  mods: Mod[] = [];
  name = "";

  get COST() {
    return `$${this.cost.toFixed(2)}`;
  }

  getDataFromStores() {
    this.category = MainStore.categories.getByIdSync(this.category?.id);
    this.mods = MainStore.mods.getMultipleById(this.mods);
  }
}
