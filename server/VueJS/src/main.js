import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Stages from './views/Stages.vue'
import Propos from './views/Propos.vue'

import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'   // PrimeVue theme
import 'primevue/resources/primevue.min.css'             // PrimeVue core css
import 'primeicons/primeicons.css'                        // PrimeIcons
import 'primeflex/primeflex.css'                          // PrimeFlex utilities (optional)

import './css/main.css'

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

const app = createApp(App)

app.use(router)
// app.use(PrimeVue, {
//     theme: 'none'
// })
app.mount('#app')