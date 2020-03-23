<template>
  <div class="container">
    <app-header />
    <div class="container m-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    appHeader: Header,
    appHome: Home
  }
};
</script>

<style>
</style>
