<template lang="pug">
.grid
  ModalButtonTitleHeader(:title="title" :modals="modals")
  component(:is="form")

</template>
<script>
import { log } from "util";
export default {
  props: ["store", "form", "title", "modals"],
  data() {
    return {
      timer: false,
    };
  },
  mounted() {
    this.store.resetCurrent();
    if (this.$route.params.id !== "0") {
      if (this.store.ready) this.update();
      else this.timer = setInterval(this.update.bind(this), 400);
    } else this.store.resetCurrent();
  },
  methods: {
    update() {
      if (!this.store.ready) return;
      console.log("update", this.$route.params.id);
      clearInterval(this.timer);
      this.store.setCurrent(this.$route.params.id);
    },
  },
};
</script>
