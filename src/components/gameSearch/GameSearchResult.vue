<template>
  <article class="result">
    <div class="game-search-result">
      <div class="game-search-result-title-wrapper">
        <GameSearchResultTitle
          :numberOfResults="games.length"
          serchString="Pokémon"
        />
      </div>
      <ul class="result-list">
        <li v-for="fullGame in fullGames" :key="fullGame.id">
          <GameCard :fullGame="fullGame" />
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import searchGames from '@/composables/searchGames';
import getCovers from '@/composables/getCovers';
import getAllPlatforms from '@/composables/getAllPlatforms';
import mergeObjectsById from '@/composables/helpers/mergeObjectsByField';
import addPlatformDetailsToGames from '@/composables/addPlatformDetailsToGames';
import GameCard from './GameCard.vue';
import GameSearchResultTitle from './GameSearchResultTitle.vue';

const games = searchGames({});
const covers = getCovers({});
const platforms = getAllPlatforms({});
// Get covers with bigger resolution
const bigCovers = covers.map((cover) => ({ ...cover, url: cover.url.replace('/t_thumb/', '/t_cover_big/') }));
// Get with all necessary fields filled
const gamesWithCovers = mergeObjectsById(games, bigCovers, 'id', 'game', 'cover');
const fullGames = addPlatformDetailsToGames(gamesWithCovers, platforms);
</script>

<style scoped>
.game-search-result {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 95vw;
  margin: auto;
}

.result-list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
}

.result-list li {
  margin: 0.5rem 0;
  min-width: 100%;
  height: 13rem;
}

.game-search-result-title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto 0.5rem;
  width: 100%;
}

/* SM breakpoint */
@media only screen and (min-width: 600px) {
  .game-search-result {
    width: 80vw;
  }
}

/* MD breakpoint */
@media only screen and (min-width: 960px) {
  .game-search-result {
    width: 85vw;
  }

  .result-list {
    justify-content: space-between;
  }

  .result-list li {
    max-width: 49%;
    min-width: 0;
  }
}

/* LG breakpoint */
@media only screen and (min-width: 1280px) {
  .game-search-result {
    width: 75vw;
  }
}

/* XL breakpoint */
@media only screen and (min-width: 1920px) {
  .game-search-result {
    width: 60vw;
  }
}

/* XXL breakpoint */
@media only screen and (min-width: 2560px) {
  .game-search-result {
    width: 50vw;
  }
}
</style>
