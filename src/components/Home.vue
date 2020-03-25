<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <p>You may save or load your data</p>
    <p>Click on "End Day" to begin a new day</p>
    <hr />
    <h3>Your Funds: $ {{ funds }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style scoped>
</style>