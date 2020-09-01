<template lang="pug">
div
  h1 Orders
  div(v-for="order in MainStore.orders.objects" :key="order.id") 
    div(v-for="item in order.items" :key="item.id") 
      h2 Order - {{item.id}}
      | {{item.item.name}}
      div(v-for="mod in item.mods" :key="mod.id") Mod: {{mod.modification.name}}
      div(v-for="side in item.sides" :key="side.id") Side: {{side.side.name}}

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MainStore } from "../store/Main.mobx";

@Component({
  components: {},
  data() {
    return {
      MainStore,
    };
  },
})
export default class Home extends Vue {}
</script>
