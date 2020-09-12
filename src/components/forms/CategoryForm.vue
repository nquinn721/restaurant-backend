<template lang="pug">
v-form(ref="form" v-model="valid")
  AlertsSaveFailed(:store="store" message="Failed to save")
  v-card-title
    span.headline {{title}}
  v-card-text
    v-container
      v-row
        v-col.pr-10(cols=6)
          v-text-field( label='Name' required v-model="store.current.name" outlined dense)
        v-col.pr-10(cols=6)
          v-file-input(v-if="createFile" v-model="file" accept="image/*" label="Image" outlined dense @change="v => file = v")
          .ml-9.justify-space-between.align-center(v-if="!createFile" style="color: #777") 
            | Current image: {{store.current.image}}
            v-btn.ml-5(color="primary" @click="createFile = true") Upload
          
     
  v-card-actions
    v-spacer
    v-btn(color='blue darken-1' text='' @click='close()') Cancel
    v-btn(color='blue darken-1' text='' @click='save()' :disabled="!valid") Save

</template>
<script>
import { log } from "util";
import { Service } from "mobx-store-model/lib";
export default {
  props: ["title", "store"],
  data() {
    return {
      valid: true,
      colorMenu: false,
      file: false,
      createFile: false,
    };
  },
  methods: {
    close() {
      this.store.resetCurrent();
      this.$emit("close");
    },
    async save(data) {
      if (this.file) {
        const reader = new FileReader();

        const fd = new FormData();
        fd.append("image", this.file);
        console.log("uploading image", fd);
        const d = await Service.post("/category/img", fd);
        reader.readAsDataURL(this.file);
        // reader.onload = async (img) =>
        //   (this.store.current.image = img.target.result);
        this.store.current.image = d;
        this.file = null;
      }

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
