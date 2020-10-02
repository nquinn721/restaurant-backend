<template lang="pug">
v-card.day-hours
  v-data-table(:headers="hoursHeaders" :items="[item]" hide-default-footer)
    template(v-slot:item.monday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.mondayOpen" @change="setOpen(item, 'monday')" :value="!!item.mondayStart")
      v-select.my-2( :disabled="!item.mondayOpen" :error="item.mondayConflict" styles="width:100px;font-size:11px" :items="Hours" v-model="item.mondayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.mondayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.mondayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
    template(v-slot:item.tuesday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.tuesdayOpen" @change="setOpen(item, 'tuesday')" :value="!!item.tuesdayStart")
      v-select.my-2( :disabled="!item.tuesdayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.tuesdayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.tuesdayOpen" :error="item.tuesdayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.tuesdayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
    template(v-slot:item.wednesday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.wednesdayOpen" @change="setOpen(item, 'wednesday')" :value="!!item.wednesdayStart")
      v-select.my-2( :disabled="!item.wednesdayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.wednesdayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.wednesdayOpen" :error="item.wednesdayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.wednesdayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
    template(v-slot:item.thursday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.thursdayOpen" @change="setOpen(item, 'thursday')" :value="!!item.thursdayStart")
      v-select.my-2( :disabled="!item.thursdayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.thursdayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.thursdayOpen" :error="item.thursdayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.thursdayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
    template(v-slot:item.friday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.fridayOpen" @change="setOpen(item, 'friday')" :value="!!item.fridayStart")
      v-select.my-2( :disabled="!item.fridayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.fridayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.fridayOpen" :error="item.fridayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.fridayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
    template(v-slot:item.saturday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.saturdayOpen" @change="setOpen(item, 'saturday')" :value="!!item.saturdayStart")
      v-select.my-2( :disabled="!item.saturdayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.saturdayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.saturdayOpen" :error="item.saturdayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.saturdayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
    template(v-slot:item.sunday="{ item }")
      v-checkbox.my-0(hide-details dense v-model="item.sundayOpen" @change="setOpen(item, 'sunday')" :value="!!item.sundayStart")
      v-select.my-2( :disabled="!item.sundayOpen" :error="item.mondayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.sundayStart" item-text="name" item-value="value" :return-object="false" dense outlined)
      v-select.my-2( :disabled="!item.sundayOpen" :error="item.sundayConflict" styles="width:105px;font-size:11px" :items="Hours" v-model="item.sundayEnd" item-text="name" item-value="value" :return-object="false" dense outlined)
      
</template>
<script>
import { Hours } from "@/store/models/data/Hours";
export default {
  props: ["item"],
  data() {
    return {
      Hours,
      hoursHeaders: [
        { text: "Monday", value: "monday" },
        { text: "Tuesday", value: "tuesday" },
        { text: "Wednesday", value: "wednesday" },
        { text: "Thursday", value: "thursday" },
        { text: "Friday", value: "friday" },
        { text: "Saturday", value: "saturday" },
        { text: "Sunday", value: "sunday" }
      ]
    };
  },
  methods: {
    setOpen(item, day) {
      const { prev } = this.item.getDay(day);

      if (prev && item[day + "Open"]) {
        item[day + "Start"] = item[prev.start];
        item[day + "End"] = item[prev.end];
      } else {
        item[day + "Start"] = null;
        item[day + "End"] = null;
      }
    }
  }
};
</script>
<style lang="scss">
.day-hours {
  .v-icon.v-icon {
    font-size: 13px !important;
  }
  .v-select__selections {
    font-size: 12px;
  }
}
</style>
