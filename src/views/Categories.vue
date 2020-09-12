<template lang="pug">
v-container
  BaseFormPage(title="Categories" :store="MainStore.categories" :headers="headers" form="FormsCategoryForm" searchBy="name" width=1200 delete-prop="name")
    template(v-slot:item.img="{item}"): v-img(:src="item.IMAGE" width=50 height=35) 
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
        { text: "Image", value: "img" },
        { text: "Name", value: "name" },
        { value: "actions" },
      ],
    };
  },
};
</script>
