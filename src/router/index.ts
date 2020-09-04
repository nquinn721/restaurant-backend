import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Orders from "../views/Orders.vue";
import Categories from "../views/Categories.vue";
import Items from "../views/Items.vue";
import Item from "../views/Item.vue";
import Sides from "../views/Sides.vue";
import Mods from "../views/Mods.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/orders", component: Orders },
  { path: "/categories", component: Categories },
  { path: "/items", component: Items },
  { path: "/item/:id", component: Item },
  { path: "/sides", component: Sides },
  { path: "/mods", component: Mods },
];

const router = new VueRouter({
  routes,
});

export default router;
