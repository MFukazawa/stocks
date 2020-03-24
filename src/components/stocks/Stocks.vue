<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
    Funds: {{ funds }} <br />
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Disney", price: 100 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 300 },
        { id: 4, name: "Netflix", price: 400 }
      ]
    };
  },
  components: {
    appStock: Stock
  },
  computed: {
    ...mapState(["funds"])
  }
};
</script>

<style>
</style>