<template>
  <div class="container">
    <nav class="mt-4 navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" class="navbar-brand nav-link"
          >Stock Trader</router-link
        >
        <router-link
          to="/portfolio"
          class="nav-link"
          activeClass="active"
          tag="li"
          ><a>
            Portfolio
          </a>
        </router-link>
        <router-link
          to="/stocks"
          class="nav-link"
          activeClass="active"
          tag="li"
        >
          <a>
            Stocks
          </a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <router-link to="" class="nav-link" activeClass="active" tag="li">
          <a>End Day</a>
        </router-link>
        <li class="dropdown">
          <a
            href="#"
            class="dropdown-toggle"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            >Save & Load <span class="caret"></span
          ></a>
          <ul class="dropdown-menu">
            <li><a href="#">Save Data</a></li>
            <li><a href="#">Load Data</a></li>
          </ul>
        </li>
        <router-link to="" class="nav-link" activeClass="active" tag="li">
          <a>Funds: ${{ funds }}</a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.funds;
    }
  }
};
</script>

<style>
</style>