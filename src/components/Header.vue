<template>
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
      <router-link to="/stocks" class="nav-link" activeClass="active" tag="li">
        <a>
          Stocks
        </a>
      </router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li to="" class="nav-link" activeClass="active">
        <a href="#" @click="endDay">End Day</a>
      </li>
      <li class="dropdown nav-link">
        <a
          class="dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Save & Load <span class="caret"></span
        ></a>
        <ul
          class="dropdown-menu"
          :class="{ show: isDropdownOpen }"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <li class="dropdown-item">
            <a href="#" @click="saveData">Save Data</a>
          </li>
          <li class="dropdown-item">
            <a href="#" @click="loadData">Load Data</a>
          </li>
        </ul>
      </li>
      <li class="nav-link text-success" :class="{ 'text-danger': lowMoney }">
        <a>Funds: ${{ funds | formatFunds }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    lowMoney() {
      return this.$store.getters.funds <= 100;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>