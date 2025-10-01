import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.js';
import de from './locales/de/translation.js';

// Translation resources
const resources = {
  en: { translation: en },
  de: { translation: de },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'de',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      // normalize browser language codes like 'de-DE' -> 'de'
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true,
    },
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  });

export default i18n;
