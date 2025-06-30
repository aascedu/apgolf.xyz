import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Stages from './views/Stages.vue'
import Propos from './views/Propos.vue'
import Stage1 from './views/Stage1.vue'

import './css/main.css'

const routes = [
  { path: '/', component: Home },
  { path: '/stages', component: Stages },
  { path: '/contact', component: Contact },
  { path: '/propos', component: Propos },
  { path: '/stage1', component: Stage1 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')