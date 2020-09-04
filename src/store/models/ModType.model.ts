import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";

export class ModType extends Model {
  route = "modification-type";
  getParams: any = { join: "item||name" };
}
