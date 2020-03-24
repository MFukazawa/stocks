import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    disneyStock: "",
    googleStock: "",
    appleStock: "",
    cocaColaStock: "",
    disneyPrice: "100",
    googlePrice: 100,
    applePrice: 100,
    cocaColaPrice: 100
  },
  getters: {
    // calcDisneyBuy: state => {
    //   return state.funds - (disneyStock - disneyPrice);
    // }
    disneyPrice: state => {
      return state.disneyPrice;
    }
  }
});
