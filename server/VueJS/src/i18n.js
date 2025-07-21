import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';
import en from './locales/en.json';

// Define translations for French and English
const messages = {
  en,
  fr,
};

// Load the saved language from localStorage or default to 'fr'
const savedLocale = localStorage.getItem('locale') || 'fr';

// Create the Vue I18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: savedLocale, // Use the saved language
  fallbackLocale: 'en', // Fallback language
  messages,
});

export default i18n;