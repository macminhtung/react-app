import { useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ELocalStorageKey } from '@/common/enums';

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum ELanguage {
  EN = 'en',
  VN = 'vn',
}

interface IAppContext {
  theme: ETheme;
  setTheme: Dispatch<SetStateAction<ETheme>>;
  language: ELanguage | string;
  setLanguage: Dispatch<SetStateAction<ELanguage | string>>;
}

const initValues: IAppContext = {
  theme:
    localStorage.getItem(ELocalStorageKey.UI_THEME) === ETheme.LIGHT ? ETheme.LIGHT : ETheme.DARK,
  setTheme: () => null,
  language:
    localStorage.getItem(ELocalStorageKey.LANGUAGE) === ELanguage.EN ? ELanguage.EN : ELanguage.VN,
  setLanguage: () => null,
};

export const AppContext = createContext<IAppContext>(initValues);

export const useAppContextValue = (): IAppContext => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<IAppContext['theme']>(initValues.theme);
  const [language, setLanguage] = useState<IAppContext['language']>(initValues.language);

  useEffect(() => {
    // Remove prev theme
    const root = window.document.documentElement;
    root.classList.remove(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);

    // Add new theme
    root.classList.add(theme);

    // Update theme to localStorage
    localStorage.setItem(ELocalStorageKey.UI_THEME, theme);
  }, [theme]);

  useEffect(() => {
    // Update language to localStorage
    localStorage.setItem(ELocalStorageKey.LANGUAGE, language);
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return { theme, setTheme, language, setLanguage };
};

export const useAppContext = () => useContext(AppContext);
