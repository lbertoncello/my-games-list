<template>
  <article class="result">
    <v-container
      fluid
    >
      <v-row
        no-gutters
        align="center"
        style="height: 100%;"
      >
        <v-col class="d-flex justify-center">
          <GameSearchResultTitle
            :numberOfResults="23"
            serchString="Pokémon"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="d-flex justify-center">
          <GameCard />
        </v-col>
      </v-row>
    </v-container>
  </article>
</template>

<script setup>
import GameCard from './GameCard.vue';
import GameSearchResultTitle from './GameSearchResultTitle.vue';
</script>
