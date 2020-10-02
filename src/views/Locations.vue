<template lang="pug">
v-container
  BaseFormPage(title="Locations" :store="MainStore.locations" :headers="headers" form="FormsLocationForm" searchBy="name" width=1200 delete-prop="name")
</template>
<script>
import { MainStore } from "@/store/Main.mobx";
import BaseFormPage from "./templates/BaseFormPage";
export default {
  components: {
    BaseFormPage
  },
  data() {
    return {
      MainStore,
      headers: [
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "City", value: "city" },
        { text: "State", value: "state" },
        { text: "Phone", value: "phone" },
        { value: "actions" }
      ]
    };
  }
};
</script>
