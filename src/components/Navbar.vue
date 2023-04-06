<template>
  <nav class="navbar">
    <v-navigation-drawer
      v-model="sidebar"
      disable-resize-watcher
    >
    <v-list>
        <v-list :items="navbarItems"></v-list>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <span class="d-sm-none">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn
          flat
          v-for="item in navbarItems"
          :key="item.title"
          :to="item.value">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const sidebar = ref(false);

const navbarItems = [
  { title: 'Search', value: '/search' },
  { title: 'Platforms', value: '/search' },
  { title: 'Popular', value: '/popular' },
  { title: 'Sign Up', value: '/signup' },
  { title: 'Sign In', value: '/signin' },
];
const appTitle = 'MY GAMES LIST';
</script>

<style scoped>
.navbar > * {
  background-color: #090021;
}
</style>
