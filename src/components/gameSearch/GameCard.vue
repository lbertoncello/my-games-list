<template>
  <section class="game-card">
    <figure class="game-cover-wrapper">
      <!-- TODO improve conditional rendering -->
      <img
        v-if="fullGame.cover.url"
        :src="fullGame.cover.url"
        class="game-cover"
      />
      <!-- TODO improve responsiveness with larger images -->
      <img
        v-else
        src="@/assets/images/image-fallback.jpg"
        class="game-cover"
      />
    </figure>
    <div class="game-cover-content">
      <div class="game-card-header">
        <div class="game-card-header-info">
          <h5 class="text-h5">{{ fullGame.name }}</h5>
          <div class="game-card-platforms">
            <p>Platforms</p>
            <p class="text-truncate">{{ normalizedPlatforms }}</p>
          </div>
        </div>
        <div class="game-card-rating">
          <GameRating :rating="fullGame.rating" />
        </div>
      </div>
      <div class="game-card-text">{{ fullGame.summary }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GameRating from './GameRating.vue';

const props = defineProps({
  fullGame: {
    type: Object,
    required: true,
  },
});

// Limit the number platforms shown to 3
const normalizePlatforms = (platforms) => {
  const chosenPlatforms = platforms.slice(0, 3);
  let normalizedPlatformsArray = chosenPlatforms.map((platform) => platform.abbreviation).join(', ');

  // Add a '+' if there are more than 3 platforms
  if (platforms.length > 3) {
    normalizedPlatformsArray += ' +';
  }

  return normalizedPlatformsArray;
};

const normalizedPlatforms = ref('');

onMounted(() => {
  normalizedPlatforms.value = normalizePlatforms(props.fullGame.platforms);
});
</script>

<style scoped>
.game-card {
  width: 100%;
  height: 100%;
  background-color: #635985;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #181818;
  border: 1px solid #18122B;
  overflow: hidden;
  display: flex;
}

.game-cover-wrapper {
  margin: 0.4rem;
  max-width: 30%;
}

.game-cover {
  max-height: 80%;
  border-radius: 5px;
}

.game-cover-content {
  width: 70%;
  margin: 0.5rem
}

.game-card-platforms {
  display: flex;
}

.game-card-platforms > :first-child {
  margin-right: 0.3rem;
}

.game-card-platforms > * {
  font-size: 0.8rem;
  font-weight: lighter;
}

.game-card-header {
  display: flex;
  justify-content: space-between;
}

.game-card-header > :nth-child(2){
  align-self: center;
}

.game-card-text {
  margin: 0.7rem auto 0.5rem;
  max-height: 6rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* SM breakpoint */
@media only screen and (min-width: 600px) {
  .game-card-platforms > :first-child {
    margin-right: 0.5rem;
  }

  .game-card-platforms > * {
    font-size: 0.9rem;
  }

  .game-cover {
    max-height: 90%;
    border-radius: 5px;
  }
}

/* XL breakpoint */
@media only screen and (min-width: 1920px) {
  .game-card-platforms > :first-child {
    margin-right: 1rem;
  }
}
</style>
