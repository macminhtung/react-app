import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation } from './en';
import { vnTranslation } from './vn';

export const resources = {
  en: { translation: enTranslation },
  vn: { translation: vnTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: { escapeValue: false },
});

export default i18n;
