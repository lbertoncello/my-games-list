<template>
  <div class="game-search-result-title">
    <h1>{{ numberOfResults }} results for “{{ serchString }}”</h1>
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
  padding: 1.3rem 0;
}
</style>
