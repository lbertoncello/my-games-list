<template>
  <section class="game-rating">
    <div v-if="rating >= 80" class="game-rating-circle game-rating-green">
      <div>{{ Math.round(rating) }}</div>
    </div>
    <div v-else-if="rating >= 60" class="game-rating-circle game-rating-yellow">
      <div>{{ Math.round(rating) }}</div>
    </div>
    <div v-else class="game-rating-circle game-rating-red">
      <div>{{ Math.round(rating) }}</div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.game-rating-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  box-shadow: 1px 1px 1px #383838;
}

.game-rating-green {
  background: #4bb543;
  border: 1px solid #30752b;
}

.game-rating-yellow {
  background: #8b8000;
  border: 1px solid #6b6520;
}

.game-rating-red {
  background: #8b0000;
  border: 1px solid #6b2020;
}
</style>
