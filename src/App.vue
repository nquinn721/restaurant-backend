<template lang="pug">
v-app
  v-navigation-drawer(
    v-model="drawer"
    app
    floating 
    fixed
    persistent 
    dark
    )
    v-list(dense='')
      v-list-item(link to="orders")
        v-list-item-action
          v-icon(size=14) far fa-shopping-cart
        v-list-item-content
          v-list-item-title Orders
      v-list-item(link to="categories")
        v-list-item-action
          v-icon(size=14) far fa-clipboard
        v-list-item-content
          v-list-item-title Categories
      v-list-item(link to="items")
        v-list-item-action
          v-icon(size=14) far fa-list
        v-list-item-content
          v-list-item-title Items
      v-list-item(link to="sides")
        v-list-item-action
          v-icon(size=14) far fa-pizza
        v-list-item-content
          v-list-item-title Sides
  v-app-bar(app clipped-left dark)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-toolbar-title Application
  v-main
    router-view 
  v-footer(app='')
    span &copy; {{ new Date().getFullYear() }}

 
</template>
<script>
import { MainStore } from "./store/Main.mobx";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-navigation-drawer {
  padding: 30px;

  color: white;
}
</style>
