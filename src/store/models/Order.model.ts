import { Model } from "mobx-store-model";
import { computed } from "mobx";

export class Order extends Model {
  route = "order";
  getParams = {
    sort: "id,ASC",
    s: { status: { $ne: "complete" } },
  };
  status = "";

  @computed
  get isRecieved() {
    return this.status.match(/recieved/i);
  }
}
