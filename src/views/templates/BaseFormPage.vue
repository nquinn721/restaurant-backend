<template lang="pug">
.grid
  ModalsAddEditModal(v-model="dialog" :width="width || '1000'")
    component(:is="form" :title="formTitle" @close="dialog=false" :store="store")
  ModalsDeleteConfirm(v-if="itemToDelete" v-model="deleteDialog" :item="itemToDelete[deleteProp || headers[0].value]" @confirm="deleteItem()")
  v-card.overflow-hidden
    v-app-bar(color='primary' dark )
      v-toolbar-title {{mainTitle}}
      v-spacer
      AlertsFetchDataFailed(:store="store" message="Failed to load data")
      AlertsDeleteFailed(:store="store")
      AlertsDeleteSuccess(:store="store")
      AlertsSaveSuccess.pt-5(:store="store" message="Saved successfully!")
      v-spacer
      v-btn.px-0(text @click="reset" small): v-icon(size=20) fas fa-plus
      v-btn.px-0(text @click="store.refreshData()" small): v-icon(size=20) fas fa-redo
    v-sheet.pa-4

      v-text-field(
        v-model="search"
        outlined
        dense
        append-icon="far fa-search"
        :label='searchTitle'
        single-line
        hide-details)
      v-data-table(
        :headers="headers"
        :items="objects || store.objects"
        :items-per-page="10"
        :search="search"
        )
        template(v-slot:item.color="{ item }"): slot(name="item.color" :item="item")
        template(v-slot:item.img="{ item }"): slot(name="item.img" :item="item")
        template(v-slot:item.days="{ item }"): slot(name="item.days" :item="item")
        template(v-slot:item.inactive="{ item }"): slot(name="item.inactive" :item="item")
        template(v-slot:item.provider="{ item }") {{item}}
        template(v-slot:item.actions="{ item }")
          v-icon.mr-4(size="16" @click="edit(item)") far fa-pencil
          v-icon(size="16" @click="showDeleteConfirm(item)") far fa-trash-alt


      

</template>
<script>
import pluralize from "pluralize";
export default {
  props: [
    "title",
    "store",
    "headers",
    "form",
    "width",
    "item.color",
    "searchBy",
    "page",
    "objects",
    "deleteProp",
  ],
  data() {
    return {
      dialog: false,
      mainTitle: pluralize(this.title),
      formTitle: "",
      searchTitle: `Search ${this.title.toLowerCase()}`,
      itemToDelete: null,
      deleteDialog: false,
      search: "",
    };
  },
  watch: {
    async search(v) {
      if (v) {
        const data = await this.store.search({
          [this.searchBy || this.headers[0].value]: v,
        });
        if (!data.error) {
          this.store.objects = this.store.objects.concat(data);
        }
      }
    },
  },
  methods: {
    reset() {
      if (!this.page) {
        this.formTitle = "Add " + pluralize.singular(this.title);
        this.store.resetCurrent();
        this.dialog = true;
      } else {
        this.$router.push(`/${this.page}/0`);
      }
    },
    edit(item) {
      console.log(item);
      this.store.setCurrent(item);
      this.formTitle = "Edit " + pluralize.singular(this.title);

      if (!this.page) this.dialog = true;
      else this.$router.push(`/${this.page}/${item.id}`);
    },
    showDeleteConfirm(item) {
      this.itemToDelete = item;
      this.deleteDialog = true;
    },
    deleteItem() {
      this.store.current = this.itemToDelete;
      this.store.deleteCurrent();
    },
  },
};
</script>
