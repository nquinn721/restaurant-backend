import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Orders from "../views/Orders.vue";
import Categories from "../views/Categories.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
