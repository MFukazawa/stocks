import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.filter("formatFunds", function(number) {
  return new Intl.NumberFormat().format(number);
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
