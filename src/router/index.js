// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import(/* webpackChunkName: "statistics" */ '@/views/Statistics.vue'),
      },
      {
        path: 'platforms',
        name: 'Platforms',
        component: () => import(/* webpackChunkName: "platforms" */ '@/views/Platforms.vue'),
      },
      {
        path: 'popular',
        name: 'Popular',
        component: () => import(/* webpackChunkName: "popular" */ '@/views/Popular.vue'),
      },
      {
        path: 'signin',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "signin" */ '@/views/SignIn.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "signup" */ '@/views/SignUp.vue'),
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "signup" */ '@/views/GameSearch.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
