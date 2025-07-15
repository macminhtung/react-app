import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation } from './en';
import { vnTranslation } from './vn';
import { ELocalStorageKey } from '@/common/enums';
import { ELanguage } from '@/stores';

export const I18N_RESOURCES = {
  [ELanguage.EN]: { translation: enTranslation },
  [ELanguage.VN]: { translation: vnTranslation },
};

i18n.use(initReactI18next).init({
  resources: I18N_RESOURCES,
  fallbackLng:
    localStorage.getItem(ELocalStorageKey.LANGUAGE) === ELanguage.VN ? ELanguage.VN : ELanguage.EN,
  debug: false,
  interpolation: { escapeValue: false },
});

export default i18n;
