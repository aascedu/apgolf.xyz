<template>
  <!-- Desktop Div -->
  <div class="relative hidden md:block">
    <!-- Current Language Button -->
    <button class="flex items-center py-1" @mouseenter="showDropdown = true" @mouseleave="hideDropdown">
      <img :src="currentLanguage.flag" :alt="currentLanguage.name" class="w-6 h-4" />
    </button>

    <!-- Dropdown Menu -->
    <div
      class="absolute text-black"
      v-if="showDropdown"
      @mouseenter="showDropdown = true"
      @mouseleave="hideDropdown"
    >
      <ul>
        <li
          v-for="lang in filteredLanguages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="py-2 cursor-pointer flex items-center"
        >
          <img :src="lang.flag" :alt="lang.name" class="w-6 h-4 mr-2" />
        </li>
      </ul>
    </div>
  </div>

  <!-- Mobile Div -->
  <div class="relative block md:hidden">
    <div class="flex gap-4">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        class="flex items-center cursor-pointer"
      >
        <img :src="lang.flag" :alt="lang.name" class="w-6 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Language options with image files
const languages = [
  {
    code: 'fr',
    name: 'Français',
    flag: '/assets/fr.png',
  },
  {
    code: 'en',
    name: 'English',
    flag: '/assets/uk.png',
  },
];

// Vue I18n instance
const { locale } = useI18n();

// Current language
const currentLanguage = computed(() =>
  languages.find((lang) => lang.code === locale.value)
);

// Filtered languages (exclude the current language from the dropdown)
const filteredLanguages = computed(() =>
  languages.filter((lang) => lang.code !== locale.value)
);

// Dropdown visibility state
const showDropdown = ref(false);

// Show dropdown
const hideDropdown = () => {
  showDropdown.value = false;
};

// Change language
const changeLanguage = (langCode) => {
  locale.value = langCode;
  showDropdown.value = false; // Close dropdown after selection
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>