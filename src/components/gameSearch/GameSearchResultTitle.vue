<template>
  <div class="game-search-result-title">
    <h1>{{ numberOfResults }} results for {{ serchString }}</h1>
  </div>
</template>

<script setup>
defineProps({
  numberOfResults: {
    type: Number,
    required: true,
  },
  serchString: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.game-search-result-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 100%;
  background: #7960E6;
  border-radius: 5px;
  margin: 1rem 1rem;
  padding: 1.3rem 0;
}

/* SM breakpoint */
@media only screen and (min-width: 960px) {
  .game-search-result-title {
    width: 75%;
  }
}

/* XL breakpoint */
@media only screen and (min-width: 1920px) {
  .game-search-result-title {
    width: 50%;
  }
}
</style>
