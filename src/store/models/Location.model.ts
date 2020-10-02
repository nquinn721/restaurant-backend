import { Model } from "mobx-store-model/lib";
import { MainStore } from "../Main.mobx";

export class Location extends Model {
  route = "location";

  address = "";
  sundayStart = "";
  sundayEnd = "";
  mondayStart = "";
  mondayEnd = "";
  tuesdayStart = "";
  tuesdayEnd = "";
  wednesdayStart = "";
  wednesdayEnd = "";
  thursdayStart = "";
  thursdayEnd = "";
  fridayStart = "";
  fridayEnd = "";
  saturdayStart = "";
  saturdayEnd = "";
  days = [
    { day: "Monday", start: "mondayStart", end: "mondayEnd" },
    { day: "Tuesday", start: "tuesdayStart", end: "tuesdayEnd" },
    { day: "Wednesday", start: "wednesdayStart", end: "wednesdayEnd" },
    { day: "Thursday", start: "thursdayStart", end: "thursdayEnd" },
    { day: "Friday", start: "fridayStart", end: "fridayEnd" },
    { day: "Saturday", start: "saturdayStart", end: "saturdayEnd" },
    { day: "Sunday", start: "sundayStart", end: "sundayEnd" },
  ];

  getDay(day: string) {
    let current, prev;

    this.days.find((v: any, i: number) => {
      if (v.start === day + "Start") {
        current = v;
        prev = this.days[i - 1] || {};
      }
    });
    return { current, prev };
  }
}
