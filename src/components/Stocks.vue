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
            <input class="p-2" type="number" />
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
            <input class="p-2" type="number" />
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
            <input class="p-2" type="number" />
            <button class="btn btn-success">Buy</button>
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
            <input class="p-2" type="number" />
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disneyPrice: 100,
      googlePrice: 100,
      applePrice: 100,
      cocaColaPrice: 100
    };
  }
};
</script>

<style>
</style>