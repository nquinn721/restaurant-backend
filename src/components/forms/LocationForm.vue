<template lang="pug">
v-form(ref="form" v-model="valid")
  AlertsSaveFailed(:store="store" message="Failed to save")
  v-card-title
    span.headline {{title}}
  v-card-text
    v-container
      v-row
        v-col(cols=4)
          v-text-field(label='Name' required v-model="store.current.name" outlined dense)
        v-col(cols=4)
          v-text-field(label='Address' required v-model="store.current.address1" outlined dense)
        v-col(cols=4)
          v-text-field(label='City' required v-model="store.current.city" outlined dense)
      v-row
        v-col(cols=4)
          v-text-field(label='State' required v-model="store.current.state" outlined dense)
        v-col(cols=4)
          v-text-field(label='Zip' required v-model="store.current.zip" outlined dense)
        v-col(cols=4)
          v-text-field(label='Phone' required v-model="store.current.phone" outlined dense)
      v-row
        v-col
          DayHours(:item="store.current")
            
          
     
  v-card-actions
    v-spacer
    v-btn(color='blue darken-1' text='' @click='close()') Cancel
    v-btn(color='blue darken-1' text='' @click='save()' :disabled="!valid") Save

</template>
<script>
import { log } from "util";
export default {
  props: ["title", "store"],
  data() {
    return {
      valid: true,
      colorMenu: false
    };
  },
  methods: {
    close() {
      this.store.resetCurrent();
      this.$emit("close");
    },
    async save(data) {
      const result = await this.store.saveCurrent();
      console.log(this.store.objects.length);
      if (!result.error) {
        this.$refs.form.resetValidation();
        this.$emit("close");
        this.$emit("save");
      }
    }
  }
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
