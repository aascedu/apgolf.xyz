<template>
  <nav class="bg-transparent text-black">
    <ul class="flex justify-center gap-8 py-4">
      <li v-for="item in menuItems" :key="item.label">
        <a
          :href="item.href"
          class="uppercase font-bold text-lg font-matangi relative group"
        >
          {{ item.label }}
          <span
            class="absolute left-[-5%] bottom-[-4px] w-[110%] h-[3px] bg-green-700 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'

// Define the menu items dynamically
const menuItems = reactive([
  { label: 'Home', href: '/' },
  { label: 'Stages', href: '/stages' },
  { label: 'A propos', href: '/propos' },
  { label: 'Contact', href: '/contact' },
])
</script>

<style scoped>
/* Import Matangi font */
@import url('https://fonts.googleapis.com/css2?family=Matangi:wght@500;700&display=swap');

/* Add a custom TailwindCSS class for the Matangi font */
.font-matangi {
  font-family: 'Matangi', sans-serif;
  font-weight: 500;
}
</style>