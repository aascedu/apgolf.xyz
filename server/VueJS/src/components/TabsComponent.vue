<template>
  <v-card color="basil">
    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab
        v-for="item in items"
        :key="item.name"
        :value="item.path"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const items = [
  { name: 'Home', path: '/' },
  { name: 'Stages', path: '/stages' },
  { name: 'A Propos', path: '/propos' },
  { name: 'Contact', path: '/contact' },
]

const tab = ref(route.path)

watch(tab, (newTab) => {
  if (newTab !== route.path) {
    router.push(newTab)
  }
})

watch(route, (newRoute) => {
  if (newRoute.path !== tab.value) {
    tab.value = newRoute.path
  }
})
</script>

<style>
/* Helper classes */
.bg-basil {
  background-color: #FFFBE6 !important;
}
.text-basil {
  color: #356859 !important;
}
</style>