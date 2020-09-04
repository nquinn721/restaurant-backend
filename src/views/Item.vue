<template lang="pug">
BaseSingleFormPage(title="Item" :store="MainStore.items" :modals="['modType']" form="FormsItemForm")
</template>
<script>
import BaseSingleFormPage from "./templates/BaseSingleFormPage";
import { MainStore } from "@/store/Main.mobx";
export default {
  components: {
    BaseSingleFormPage,
  },
  data() {
    return {
      MainStore,
    };
  },
};
</script>
