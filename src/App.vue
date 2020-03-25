<template>
  <div class="container">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    appHeader: Header,
    appHome: Home
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
router-view {
  padding: 30px;
}
</style>
