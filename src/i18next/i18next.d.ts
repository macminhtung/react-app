import { I18N_RESOURCES } from '@/i18next/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof I18N_RESOURCES)['en'];
  }
}
