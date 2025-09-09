<template>
  <div class="relative">
    <!-- Navigation Menu -->
    <!-- Mobile Menu -->
    <nav
      :class="[
        'backdrop-blur bg-white/40 text-black fixed top-0 left-0 w-full py-4 px-6 z-50 md:hidden'
      ]"
      style="
        mask-image: linear-gradient(
          to bottom,
          black 0%,
          black 85%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to bottom,
          black 0%,
          black 85%,
          transparent 100%
        );
        backdrop-filter: blur(8px);
      "
    >
      <div class="flex items-center">
        <!-- Logo Text -->
        <a href="/" class="text-lg font-bold text-black-700">
          AP GOLF
        </a>

        <!-- Hamburger Menu Button -->
        <button
          class="text-black-700 focus:outline-none absolute right-1"
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
        <ul class="flex flex-col gap-4 items-end text-black pb-4">
          <li v-for="item in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="uppercase text-lg relative group"
            >
              {{ $t(item.label) }}
              <span
                class="absolute left-[-5%] bottom-[-4px] w-[110%] h-[3px] bg-green-700 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
      <div
        :class="[
          isMenuOpen ? 'h-10' : 'h-0'
        ]"></div>
    </nav>


    <!-- Desktop Menu -->
    <nav class="bg-transparent text-white absolute top-0 left-0 w-full h-[7rem] z-50 hidden md:block">
      <ul class="flex flex-row justify-center items-start gap-8 mt-4">
        <li v-for="item in menuItems" :key="item.href">
          <a
            :href="item.href"
            class="uppercase text-lg text-bold relative group drop-shadow-custom"
          >
            {{ $t(item.label) }}
            <span
              class="absolute left-[-5%] bottom-[-4px] w-[110%] h-[3px] bg-[#ffc107] transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

// Define the menu items dynamically with translation keys
const menuItems = reactive([
  { label: 'menu.home', href: '/' },
  { label: 'menu.stages', href: '/stages' },
  { label: 'menu.sejours', href: '/sejours' },
  { label: 'menu.competitions', href: '/competitions' },
  { label: 'menu.about', href: '/propos' },
  { label: 'menu.contact', href: '/contact' },
]);

// State to track if the mobile menu is open
const isMenuOpen = ref(false);

// Toggle the mobile menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
.drop-shadow-custom {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>