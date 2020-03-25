<template>
  <div class="col-sm-6 col-md-4 my-3">
    <div class="card">
      <div class="card-header bg-success text-white">
        {{ stock.name }}
        <span>(Price: {{ stock.price }})</span>
      </div>
      <div class="card-body d-flex justify-content-between">
        <!-- v-model? -->
        <input
          v-model.number="quantity"
          class="p-2 form-control"
          :class="{ danger: insufficientFunds }"
          type="number"
          min="0"
          placeholder="Quantity"
        />
        <button
          @click.prevent="buyStock"
          class="btn btn-success"
          :disabled="
            quantity <= 0 || !Number.isInteger(quantity) || insufficientFunds
          "
        >
          {{ insufficientFunds ? "🚫" : "Buy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>