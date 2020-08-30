<template lang="pug">
v-app
  v-main
    v-navigation-drawer(
      v-model='drawer' 
      color='primary'  
      absolute
      persistent
      floating 
      )
      v-list
        v-list-item
          v-list-item-icon
            v-icon(color="white") fas fa-user
          v-list-item-content
            v-list-item-title Orders

    router-view
</template>
<script>
import { MainStore } from "./store/Main.mobx";
export default {
  data() {
    return {
      MainStore,
      drawer: true,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-navigation-drawer {
  padding: 30px;

  color: white;
}
</style>
