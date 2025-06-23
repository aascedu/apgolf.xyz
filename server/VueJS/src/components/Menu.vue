<template>
  <Menubar
    :model="items"
    class="w-full bg-green-100 text-green-900 rounded-md shadow-md border border-green-300"
    :pt="{
      root: 'flex flex-col md:flex-row items-center md:justify-center p-4 gap-4 bg-green-100',
      menu: 'flex flex-row justify-between w-full', /* Distribute items evenly */
      menuitem: 'flex-1 text-center uppercase font-custom font-extrabold modern-hover', /* Stretch items */
    }"
  />
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const items = reactive([
  { label: 'Home', to: '/', command: () => router.push('/') },
  { label: 'Stages', to: '/stages', command: () => router.push('/stages') },
  { label: 'A propos', to: '/propos', command: () => router.push('/propos') },
  { label: 'Contact', to: '/contact', command: () => router.push('/contact') },
])
</script>

<style scoped>
/* Import Matangi font with ExtraBold weight */
@import url('https://fonts.googleapis.com/css2?family=Matangi:wght@800&display=swap');

/* Minimalist golf theme styles */
.bg-green-100 {
  background-color: #e6f4ea; /* Light green */
}

.text-green-900 {
  color: #1b5e20; /* Dark green */
}

.border-green-300 {
  border-color: #81c784; /* Medium green */
}

.rounded-md {
  border-radius: 0.375rem; /* Rounded corners */
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Font and text transformation */
.font-custom {
  font-family: 'Matangi', sans-serif; /* Use Matangi font */
}

.font-extrabold {
  font-weight: 800; /* ExtraBold weight */
}

.uppercase {
  text-transform: uppercase; /* Capitalize menu items */
}

/* Modern hover effect */
::v-deep(.modern-hover) {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, color 0.3s ease; /* Removed background-color transition */
}

::v-deep(.modern-hover:hover) {
  color: #004d40; /* Darker green text on hover */
  transform: scale(1.05); /* Slight scaling effect */
}

::v-deep(.modern-hover span) {
  position: relative;
  display: inline-block; /* Ensure underline is only under the text */
}

::v-deep(.modern-hover span::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #004d40; /* Dark green underline */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

::v-deep(.modern-hover:hover span::after) {
  transform: scaleX(1); /* Animate underline on hover */
}
</style>