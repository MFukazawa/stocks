<template>
  <div class="container">
    <app-header :funds="funds" />
    <div class="container m-4">
      <router-view :funds="funds"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      funds: 10000
    };
  },
  components: {
    appHeader: Header,
    appHome: Home
  }
};
</script>

<style>
</style>
