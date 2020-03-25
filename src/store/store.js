import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
});

// export const store = new Vuex.Store({
//   state: {
//     funds: 10000,
//     stockQuantity: "",
//     disneyStock: "",
//     googleStock: "",
//     appleStock: "",
//     cocaColaStock: ""
//   },
//   getters: {
//     stockQuantity: state => {
//       return state.stockQuantity;
//     }
//   },
//   mutations: {
//     updateStockQuantity: (state, payload) => {
//       state.stockQuantity = payload;
//     }
//   },
//   actions: {
//     updateStockQuantity({ commit }, payload) {
//       commit("updateStockQuantity", payload);
//     }
//   }
// });
