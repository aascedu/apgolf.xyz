import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Stages from './views/Stages.vue'
import Propos from './views/Propos.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/stages', component: Stages },
  { path: '/contact', component: Contact },
  { path: '/propos', component: Propos },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')