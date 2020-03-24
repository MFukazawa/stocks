<template>
  <div>
    <div class="row mt-3 mb-3">
      <div class="col-sm-6">
        <app-stock stockName="Disney" stockPrice=""></app-stock>
      </div>
      <div class="col-sm-6">
        <app-stock stockName="Apple" stockPrice=""></app-stock>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <app-stock stockName="Google" stockPrice=""></app-stock>
      </div>
      <div class="col-sm-6">
        <app-stock stockName="Coca-Cola" stockPrice=""></app-stock>
      </div>
    </div>
    Funds: {{ funds }} <br />
    Disney Stock: {{ disneyStock }} <br />
    Disney Price:
    {{ disneyPrice }}
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock
  }
  // methods: {
  //   buyGoogle() {
  //     this.store.$state.funds -
  //       this.store.$state.googleStock * this.store.$state.googlePrice;
  //   },
  //   buyApple() {},
  //   buyDisney() {},
  //   buyCocaCola() {}
  // },
  // computed: {
  //   disneyPrice() {
  //     this.store.$state.disneyPrice;
  //   }
  // }
};
</script>

<style>
</style>