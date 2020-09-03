<template lang="pug">
v-container
  BaseFormPage(title="Items" :store="MainStore.items" :headers="headers" form="FormsItemForm" searchBy="name" width=1200)
</template>
<script>
import { MainStore } from "@/store/Main.mobx";
import BaseFormPage from "./templates/BaseFormPage";
export default {
  components: {
    BaseFormPage,
  },
  data() {
    return {
      MainStore,
      headers: [
        { text: "Name", value: "name" },
        { text: "Cost", value: "COST" },
        { text: "Category", value: "category.name" },
        { value: "actions" },
      ],
    };
  },
};
</script>
