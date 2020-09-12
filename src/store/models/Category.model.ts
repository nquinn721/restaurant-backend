import { Model } from "mobx-store-model/lib";

export class Category extends Model {
  route = "category";
  image = "";

  get IMAGE() {
    return "https://storage.cloud.google.com/restaurant-server/" + this.image;
  }
}
