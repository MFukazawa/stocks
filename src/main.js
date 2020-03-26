import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-8dfca.firebaseio.com/";

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
