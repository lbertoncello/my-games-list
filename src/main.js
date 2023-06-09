/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from 'vue';

// Plugins
import registerPlugins from '@/plugins';
import App from './App.vue';

// Styles
import '@/assets/styles/global.css';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
