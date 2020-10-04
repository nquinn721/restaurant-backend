<template lang="pug">
v-app
  v-app-bar(app dark clipped-left)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-toolbar-title Application
    v-spacer
    v-btn(text @click="logout") Log out
  v-navigation-drawer(
    app
    v-model="drawer"
    clipped
    dark
    )
    v-list(nav dense)
      v-list-item(link to="/orders")
        v-list-item-icon
          v-icon(size=14) far fa-shopping-cart
        v-list-item-content
          v-list-item-title Orders
      v-list-item(link to="/categories" v-if="MainStore.user.admin")
        v-list-item-icon
          v-icon(size=14) far fa-clipboard
        v-list-item-content
          v-list-item-title Categories
      v-list-item(link to="/items" v-if="MainStore.user.admin")
        v-list-item-icon
          v-icon(size=14) far fa-list
        v-list-item-content
          v-list-item-title Items
      v-list-item(link to="/sides" v-if="MainStore.user.admin")
        v-list-item-icon
          v-icon(size=14) far fa-pizza
        v-list-item-content
          v-list-item-title Sides
      v-list-item(link to="/mods" v-if="MainStore.user.admin")
        v-list-item-icon
          v-icon(size=14) far fa-paperclip
        v-list-item-content
          v-list-item-title Modifiers
      v-list-item(link to="/locations" v-if="MainStore.user.admin")
        v-list-item-icon
          v-icon(size=14) far fa-building
        v-list-item-content
          v-list-item-title Locations
  v-main
    router-view 
  v-footer(app='')
    span &copy; {{ new Date().getFullYear() }}

 
</template>
<script>
import { MainStore } from "../store/Main.mobx";
export default {
  data() {
    return {
      drawer: true,
      MainStore,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
  methods: {
    logout() {
      MainStore.logout();
      this.$router.push("/");
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
