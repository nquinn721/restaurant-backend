<template lang="pug">
v-form(ref="form" v-model="valid")
  AlertsSaveFailed(:store="store" message="Failed to save")
  v-card-title
    span.headline {{title}}
  v-card-text
    v-container
      v-row
        v-col.pr-10(cols=12 sm=6)
          v-text-field(label='Name' v-model="store.current.name" outlined dense)
        v-col.pr-10(cols=12 sm=6)
          v-text-field(label='Type' v-model="store.current.type" outlined dense)
      v-row
        v-col.pr-10(cols=12 sm=6)
          v-text-field(label='Cost' v-model="store.current.cost" outlined dense)
        v-col.pr-10(cols=12 sm=6)
          v-select(label='Item' v-model="store.current.item" :items="MainStore.items.objects" outlined dense item-text="name" item-value="id")
          
     
  v-card-actions
    v-spacer
    v-btn(color='blue darken-1' text='' @click='close()') Cancel
    v-btn(color='blue darken-1' text='' @click='save()' :disabled="!valid") Save

</template>
<script>
import { MainStore } from "@/store/Main.mobx";
export default {
  props: ["title", "store"],
  data() {
    return {
      valid: true,
      colorMenu: false,
      MainStore,
    };
  },
  methods: {
    close() {
      this.store.resetCurrent();
      this.$emit("close");
    },
    async save(data) {
      const result = await this.store.saveCurrent();
      if (!result.error) {
        this.$refs.form.resetValidation();
        this.$emit("close");
        this.$emit("save");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.color {
  height: 20px;
  width: 100%;
  border-radius: 100px;
  box-shadow: 0 0 4px 0px #636363;
}
.v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active {
  background: white;
}
</style>
