<template lang="pug">
v-dialog(v-model='open' :max-width="width")
  template(v-slot:activator="{ on }" v-if="title" )
    v-btn(color="primary" v-on="on") {{title}}
  v-card
    slot
</template>
<script>
export default {
  props: ["value", "button", "width", "title"],
  computed: {
    open: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
};
</script>
