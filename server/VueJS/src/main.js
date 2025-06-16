import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Charlotte from './views/Charlotte.vue'
import Home from './views/Home.vue'
import TerreurNocturne from './views/TerreurNocturne.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/charlotte', component: Charlotte },
  { path: '/terreur', component: TerreurNocturne },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')