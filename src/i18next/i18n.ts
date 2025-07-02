import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation } from './en';
import { vnTranslation } from './vn';
import { ELanguage } from '@/context/useAppContext';

export const I18N_RESOURCES = {
  [ELanguage.EN]: { translation: enTranslation },
  [ELanguage.VN]: { translation: vnTranslation },
};

i18n.use(initReactI18next).init({
  resources: I18N_RESOURCES,
  fallbackLng: ELanguage.EN,
  debug: false,
  interpolation: { escapeValue: false },
});

export default i18n;
