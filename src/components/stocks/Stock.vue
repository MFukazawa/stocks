<template>
  <div>
    <div class="card">
      <div class="card-header bg-info text-white">
        {{ stockName }}
        <span>(Price: {{ stockPrice }})</span>
      </div>
      <div class="card-body d-flex justify-content-between">
        <!-- v-model? -->
        <input class="p-2" type="number" min="0" placeholder="Quantity" />
        <button @click="buyStock" class="btn btn-success">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stockName", "stockPrice", "buyStock"]
};
</script>

<style>
</style>