<template lang="pug">
v-dialog(v-model='open' persistent :max-width="500")
  v-card
    v-card-title.headline.grey.lighten-2(primary-title='')
      | Delete
    v-card-text
      | Are you sure you want to delete "
      strong {{item}}
      |"?
    v-divider
    v-card-actions
      v-spacer
      v-btn(color='primary' text='' @click='open = false')
        | Cancel
      v-btn(color='error' @click='deleteItem')
        | DELETE

  
</template>
<script>
export default {
  props: ["value", "item"],
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
  methods: {
    deleteItem() {
      this.open = false;
      this.$emit("confirm");
    },
  },
};
</script>
