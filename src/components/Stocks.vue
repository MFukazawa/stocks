<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header bg-info text-white">
            Disney
            <span>(Price: {{ disneyPrice }})</span>
          </div>
          <div class="card-body d-flex justify-content-between">
            <input
              v-model="disneyStock"
              class="p-2"
              type="number"
              min="0"
              placeholder="Quantity"
            />
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header bg-info text-white">
            Google
            <span>(Price: {{ googlePrice }})</span>
          </div>
          <div class="card-body d-flex justify-content-between">
            <input
              v-model="googleStock"
              class="p-2"
              type="number"
              min="0"
              placeholder="Quantity"
            />
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header bg-info text-white">
            Apple
            <span>(Price: {{ applePrice }})</span>
          </div>
          <div class="card-body d-flex justify-content-between">
            <input
              v-model="appleStock"
              class="p-2"
              type="number"
              min="0"
              placeholder="Quantity"
            />
            <button @click="buyApple" class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-header bg-info text-white">
            Coca-Cola
            <span>(Price: {{ cocaColaPrice }})</span>
          </div>
          <div class="card-body d-flex justify-content-between">
            <input
              v-model="cocaColaStock"
              class="p-2"
              type="number"
              min="0"
              placeholder="Quantity"
            />
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
    {{ funds }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      disneyStock: "",
      googleStock: "",
      appleStock: "",
      cocaColaStock: "",
      disneyPrice: 100,
      googlePrice: 100,
      applePrice: 100,
      cocaColaPrice: 100
    };
  },
  methods: {
    buyApple() {
      funds - this.appleStock * this.applePrice;
    }
  },
  props: ["funds"]
};
</script>

<style>
</style>