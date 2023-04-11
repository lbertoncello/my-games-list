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
            <SearchTitle />
            <SearchBar />
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
  position: relative;
}

.search-section:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.65;
  /* Add a background image that fills all the available space */
  background: url("@/assets/images/home/dark-souls-002.jpg") no-repeat center center fixed;
  background-size: cover;
}

.search-section-content {
  position: relative;
}

@media screen and (min-width: 768px) {
  .search-section {
    height: 75vh;
  }
}

</style>
