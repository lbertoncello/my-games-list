<template>
  <section class="game-rating">
    <div class="game-rating-circle">
      <!-- TODO change collor to yellow if rating < 70 and red if rating < 50 -->
      <div class="game-rating-rate">{{ Math.round(rating) }}</div>
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
  background: #4BB543;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  box-shadow: 1px 1px 1px #383838;
  border: 1px solid #30752B;
}
</style>
