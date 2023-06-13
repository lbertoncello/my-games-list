<template>
  <nav class="navbar">
    <v-navigation-drawer v-model="sidebar" disable-resize-watcher>
      <v-list :items="navbarItems"></v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <span class="d-md-none">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>

      <v-spacer />

      <div class="navbar-title">
        <v-toolbar-title>
          <router-link to="/" style="cursor: pointer">
            <figure>
              <v-img src="@/assets/images/mal.png" cover />
            </figure>
          </router-link>
        </v-toolbar-title>
      </div>

      <v-spacer />

      <v-toolbar-items class="d-none d-md-flex">
        <v-btn flat v-for="item in navbarFirstItems" :key="item.title" :to="item.value">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer />
      <v-spacer />
      <v-spacer />

      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn flat v-for="item in navbarLastItems" :key="item.title" :to="item.value">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer />
    </v-toolbar>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const sidebar = ref(false);

const navbarFirstItems = ref([
  { title: 'Statistics', value: '/statistics' },
  { title: 'Platforms', value: '/platforms' },
  { title: 'Popular', value: '/popular' },
]);

const navbarLastItems = ref([
  { title: 'Sign Up', value: '/signup' },
  { title: 'Sign In', value: '/signin' },
]);

const navbarItems = ref([...navbarFirstItems.value, ...navbarLastItems.value]);
</script>

<style scoped>
.navbar > * {
  background-color: #18122b;
}

.navbar-title > * {
  width: 10rem;
}
</style>
