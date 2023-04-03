<template>
  <article>
    <v-container class="search-section" fluid>
      <v-row align="center" style="height: 100%;">
        <v-col>
          <search-background class="search-background" />
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
import SearchBackground from './SearchBackground.vue';
</script>

<style scoped>
.search-section {
  height: 75vh;
}

.search-section {
  overflow: hidden;
  position: relative;
}

.search-section-content {
  position: relative;
}

.search-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  opacity: 0.6;
}
</style>
