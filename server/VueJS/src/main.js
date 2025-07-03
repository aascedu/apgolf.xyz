import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n'; // Import Vue I18n

import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Stages from './views/Stages.vue';
import Propos from './views/Propos.vue';
import StageHautePerf from './views/stages/StageHautePerf.vue';
import StageDecouverte from './views/stages/StageDecouverte.vue';
import StageIntensif from './views/stages/StageIntensif.vue';
import StageEntreprise from './views/stages/StageEntreprise.vue';
import StageSwingHouse from './views/stages/StageSwingHouse.vue';

import './css/main.css';

const routes = [
  { path: '/', component: Home },
  { path: '/stages', component: Stages },
  { path: '/contact', component: Contact },
  { path: '/propos', component: Propos },
  { path: '/stage-haute-performance', component: StageHautePerf },
  { path: '/stage-decouverte', component: StageDecouverte },
  { path: '/stage-entreprise', component: StageEntreprise },
  { path: '/stage-intensif', component: StageIntensif },
  { path: '/stage-swing-house', component: StageSwingHouse },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(i18n); // Use Vue I18n
app.mount('#app');