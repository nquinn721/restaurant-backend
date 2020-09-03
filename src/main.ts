import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/components";

Vue.config.productionTip = false;
import vuetify from "./plugins/vuetify";
import "./assets/base.scss";
import "./store/Socket.mobx";

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
