<template>
  <div class="relative">
    <!-- Navigation Menu -->
    <!-- Mobile Menu -->
    <nav
      :class="[
        'bg-white text-black fixed top-0 left-0 w-full py-4 px-6 z-50 md:hidden',
        isMenuOpen ? 'border-b-4 border-green-700' : ''
      ]"
    >
      <div class="flex items-center">
        <!-- Logo Text -->
        <span class="text-lg font-bold font-matangi text-green-700">AP GOLF</span>

        <!-- Hamburger Menu Button -->
        <button
          class="text-green-700 focus:outline-none absolute right-5"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Items Wrapper -->
      <div
        :class="[
          'overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-screen opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
        ]"
      >
        <ul class="flex flex-col gap-4 items-end text-black">
          <li v-for="item in menuItems" :key="item.label">
            <a
              :href="item.href"
              class="uppercase text-lg font-matangi relative group"
            >
              {{ item.label }}
              <span
                class="absolute left-[-5%] bottom-[-4px] w-[110%] h-[3px] bg-green-500 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Desktop Menu -->
    <nav class="bg-transparent text-white absolute top-0 left-0 w-full py-4 px-6 z-50 hidden md:block">
      <ul class="flex flex-row justify-center gap-8">
        <li v-for="item in menuItems" :key="item.label">
          <a
            :href="item.href"
            class="uppercase text-lg font-matangi relative group drop-shadow-custom"
          >
            {{ item.label }}
            <span
              class="absolute left-[-5%] bottom-[-4px] w-[110%] h-[3px] bg-green-500 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Banner Section -->
    <div class="mt-[64px] md:mt-0">
      <img
        src="/src/assets/home_banner.jpeg"
        alt="Banner"
        class="w-full block brightness-90"
      />
      <!-- Large Bold Text -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="font-matangi uppercase text-white text-2xl md:text-6xl font-bold drop-shadow-custom">
          Une experience inoubliable
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Define the menu items dynamically
const menuItems = reactive([
  { label: 'Home', href: '/' },
  { label: 'Stages', href: '/stages' },
  { label: 'A propos', href: '/propos' },
  { label: 'Contact', href: '/contact' },
])

// State to track if the mobile menu is open
const isMenuOpen = ref(false)

// Toggle the mobile menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
/* Import Matangi font */
@import url('https://fonts.googleapis.com/css2?family=Matangi:wght@500;700&display=swap');

/* Add a custom TailwindCSS class for the Matangi font */
.font-matangi {
  font-family: 'Matangi', sans-serif;
  font-weight: 500;
}

/* Add a custom text shadow */
.drop-shadow-custom {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>