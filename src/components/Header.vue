<template>
  <div class="container">
    <nav class="mt-4 navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="navbar-brand nav-link"
            >Stock Trader</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link">Stocks</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="" class="nav-link">End Day</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">Save & Load</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">Funds: ${{ funds }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["funds"]
};
</script>

<style>
</style>