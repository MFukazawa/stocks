<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
    <!-- Funds: {{ funds }} <br /> -->
  </div>
</template>

<script>
import Stock from "./Stock.vue";
// import { mapState } from "vuex";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
</style>