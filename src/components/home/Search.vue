<template>
  <article>
    <v-container class="search-section" fluid>
      <v-row
        no-gutters
        align="center"
        style="height: 100%;"
      >
        <v-col>
          <div class="search-section-content">
            <search-title />
            <search-bar />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </article>
</template>

<script setup>
import SearchTitle from './SearchTitle.vue';
import SearchBar from './SearchBar.vue';
</script>

<style scoped>
.search-section {
  height: 80vh;
  /* Add a background image that fills all the available space */
  background: url("@/assets/images/home/dark-souls-002.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.search-section {
  overflow: hidden;
  position: relative;
}

.search-section-content {
  position: relative;
}

.search-background {
   /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (min-width: 1024px) {
  .search-background {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}

@media screen and (min-width: 768px) {
  .search-section {
    height: 75vh;
  }
}
</style>
