<template>
  <!-- Full-width container with shadow and border -->
  <div class="w-full bg-white shadow border-b border-gray-200">
    <!-- Menubar wrapper with max width -->
    <div class="mx-auto w-full max-w-screen-xl px-4">
      <Menubar
        :model="items"
        :pt="menubarPT"
        class="w-full bg-transparent border-none"
      />
    </div>
  </div>
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const items = reactive([
  { label: 'Home', command: () => router.push('/') },
  { label: 'Stages', command: () => router.push('/stages') },
  { label: 'À propos', command: () => router.push('/propos') },
  { label: 'Contact', command: () => router.push('/contact') },
])

const menubarPT = {
  root: 'w-full',
  menu: 'flex flex-wrap justify-start gap-6', // align to the left!
  menuitem: 'transition duration-200',
  action: 'px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-500 hover:text-white rounded-md transition-colors',
}
</script>