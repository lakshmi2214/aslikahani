import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'; // Import your language files
import frTranslation from './locales/fr.json';

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language if translation key is missing
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
