import { createI18n } from 'vue-i18n';

// Define translations for French and English
const messages = {
  en: {
    menu: {
      home: 'Home',
      stages: 'Stages',
      about: 'About Us',
      contact: 'Contact',
    },
  },
  fr: {
    menu: {
      home: 'Accueil',
      stages: 'Stages',
      about: 'À propos',
      contact: 'Contact',
    },
  },
};

// Create the Vue I18n instance
const i18n = createI18n({
  locale: 'fr', // Default language
  fallbackLocale: 'en', // Fallback language
  messages,
});

export default i18n;