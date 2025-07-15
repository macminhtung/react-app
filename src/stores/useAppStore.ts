import { create } from 'zustand';
import { ELocalStorageKey } from '@/common/enums';

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum ELanguage {
  EN = 'en',
  VN = 'vn',
}

type TAppState = {
  isAppLoading: boolean;
  setIsAppLoading: (isLoading: boolean) => void;
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
  language: ELanguage | string;
  setLanguage: (language: ELanguage | string) => void;
};

export const useAppStore = create<TAppState>((set) => ({
  isAppLoading: false,
  setIsAppLoading: (isAppLoading) => set({ isAppLoading }),
  theme:
    localStorage.getItem(ELocalStorageKey.UI_THEME) === ETheme.LIGHT ? ETheme.LIGHT : ETheme.DARK,
  setTheme: (theme) => set({ theme }),
  language:
    localStorage.getItem(ELocalStorageKey.LANGUAGE) === ELanguage.EN ? ELanguage.EN : ELanguage.VN,
  setLanguage: (language) => set({ language }),
}));
