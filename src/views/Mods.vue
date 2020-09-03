<template lang="pug">
v-container
  BaseFormPage(title="Modifiers" :store="MainStore.mods" :headers="headers" form="FormsModForm" searchBy="name" width=1200 delete-prop="name")
    template(v-slot:item.img="{item}"): Img(src="https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-scaled.jpg" width=50 height=35 ) 
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
        { text: "Item", value: "item.name" },
        { text: "Type", value: "type" },
        { text: "Cost", value: "COST" },
        { value: "actions" },
      ],
    };
  },
};
</script>
