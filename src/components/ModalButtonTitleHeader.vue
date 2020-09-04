<template lang="pug">
.d-flex.justify-space-between.pa-10
  h2 {{title}}
  .d-flex
    .mr-5( v-for="modal in modals" :key="modal")
      ModalsAddEditModal(v-model="dialogs[modal]" :width="dialogs[modal + 'Width'] || 1000" :title="`Add ${modal}`")
        component(:is="`Forms${modal.substr(0,1).toUpperCase() + modal.substr(1)}Form`" :title="`Add ${modal}`" @close="close(title)")

</template>
<script>
import { MainStore } from "@/store/Main.mobx";
export default {
  props: ["title", "modals"],
  data() {
    return {
      dialogs: {
        item: false,
        mod: false,
        modType: false,
      },
      modStore: MainStore.mods,
      modTypeStore: MainStore.modTypes,
    };
  },
  methods: {
    close(store) {
      console.log(store);
      this[store + "Store"].resetCurrent();
      this[store + "Dialog"] = false;
    },
  },
};
</script>
