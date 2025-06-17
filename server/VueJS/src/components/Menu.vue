<template>
  <Menubar
    :model="items"
    class="w-full bg-gray-100 text-gray-800 rounded-md shadow-sm flex justify-center"
  />
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const items = reactive([
  { label: 'Home', command: () => router.push('/') },
  { label: 'Stages', command: () => router.push('/stages') },
  { label: 'A propos', command: () => router.push('/propos') },
  { label: 'Contact', command: () => router.push('/contact') },
])
</script>