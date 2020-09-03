<template lang="pug">
v-dialog(v-model='open' persistent :max-width="width")
  v-card
    slot
</template>
<script>
export default {
  props: {
    value: Boolean,
    button: String,
    width: {
      type: String,
      default: "600"
    }
  },
  computed: {
    open: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  }
};
</script>
