import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Orders from "../views/Orders.vue";
import Categories from "../views/Categories.vue";
import Items from "../views/Items.vue";
import Item from "../views/Item.vue";
import Sides from "../views/Sides.vue";
import Mods from "../views/Mods.vue";
import Locations from "../views/Locations.vue";
import Login from "../views/Login.vue";
import MainLayout from "../layout/Main.vue";
import { AuthMiddleware } from "../middleware/auth";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", component: Login },
  {
    path: "/m",
    // name: "Scheduling",
    // beforEnter: guard,
    meta: {
      middleware: AuthMiddleware,
    },
    component: MainLayout,
    children: [
      { path: "/orders", component: Orders },
      { path: "/categories", component: Categories },
      { path: "/items", component: Items },
      { path: "/item/:id", component: Item },
      { path: "/sides", component: Sides },
      { path: "/mods", component: Mods },
      { path: "/locations", component: Locations },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
