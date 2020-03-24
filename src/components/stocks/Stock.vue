<template>
  <div class="col-sm-6 col-md-4 my-3">
    <div class="card">
      <div class="card-header bg-info text-white">
        {{ stock.name }}
        <span>(Price: {{ stock.price }})</span>
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
          @click.prevent="buyStock"
          class="btn btn-success"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
        >
          Buy
        </button>
      </div>
    </div>
    {{ quantity }}
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>