<template lang="pug">
div
  h1 Orders
  div(v-for="item in MainStore.orders.objects" :key="item.id") {{item.name}}

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
