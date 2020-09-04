<template lang="pug">
v-container
  h1 Orders
  v-card.pa-5.ma-5.justify-space-between.d-flex(v-for="order in MainStore.orders.objects" :key="order.id") 
    .order(v-for="item in order.items" :key="item.id") 
    
      div.mr-10
        h4 Item
        div {{item.item.name}}
      div.mr-10
        h4 Modifications
        div(v-for="mod in item.mods" :key="mod.id") {{mod.modification.name}}
      div
        h4 Sides
        div(v-for="side in item.sides" :key="side.id") {{side.side.name}}
    div
      div.mb-5(style="color: #999;text-align:right") # {{order.id}}
      v-btn(color="warning" v-if="order.isRecieved" @click="startOrder(order)") Start Order
      v-btn(color="primary" v-else @click="completeOrder(order)") Complete Order

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
  methods: {
    startOrder(order) {
      order.status = "started";
      order.save();
    },
    completeOrder(order) {
      order.status = "complete";
      order.save();
      MainStore.orders.remove(order);
    },
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.order {
  display: flex;
  justify-content: space-between;
}
</style>
