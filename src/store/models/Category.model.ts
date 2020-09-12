import { Model } from "mobx-store-model/lib";

export class Category extends Model {
  route = "category";
  image = "";

  get IMAGE() {
    return process.env.NODE_ENV === "production"
      ? "https://restaurant-server-288018.ue.r.appspot.com/"
      : "http://localhost:8080/" + this.image;
  }
}
