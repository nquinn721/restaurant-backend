import { Model } from "mobx-store-model/lib";

export class Side extends Model {
  route = "side";
  cost = 0;

  get COST() {
    return `$${this.cost}`;
  }
}
