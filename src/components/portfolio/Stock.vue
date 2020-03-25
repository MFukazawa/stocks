<template>
  <div class="col-sm-6 col-md-4 my-3">
    <div class="card">
      <div class="card-header bg-info text-white">
        {{ stock.name }}
        <span
          >(Price: {{ stock.price }}) || Quantity: {{ stock.quantity }}</span
        >
      </div>
      <div class="card-body d-flex justify-content-between">
        <!-- v-model? -->
        <input
          v-model.number="quantity"
          class="p-2 form-control"
          type="number"
          placeholder="Quantity"
        />
        <button
          @click.prevent="sellStock"
          class="btn btn-success"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
        >
          Sell
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>