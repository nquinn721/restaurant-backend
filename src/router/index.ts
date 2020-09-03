import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Orders from "../views/Orders.vue";
import Categories from "../views/Categories.vue";
import Items from "../views/Items.vue";
import Sides from "../views/Sides.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/items",
    name: "Items",
    component: Items,
  },
  {
    path: "/sides",
    name: "Sides",
    component: Sides,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
