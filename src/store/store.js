import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    stockQuantity: "",
    disneyStock: "",
    googleStock: "",
    appleStock: "",
    cocaColaStock: ""
  },
  getters: {
    stockQuantity: state => {
      return state.stockQuantity;
    }
  },
  mutations: {
    updateStockQuantity: (state, payload) => {
      state.stockQuantity = payload;
    }
  },
  actions: {
    updateStockQuantity({ commit }, payload) {
      commit("updateStockQuantity", payload);
    }
  }
});
