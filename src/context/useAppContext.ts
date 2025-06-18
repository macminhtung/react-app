import { useEffect, type Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';
import { ELocalStorageKey } from '@/common/enums';

export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

interface IAppContext {
  theme: ETheme;
  setTheme: Dispatch<SetStateAction<ETheme>>;
}

const initValues: IAppContext = {
  theme:
    localStorage.getItem(ELocalStorageKey.UI_THEME) === ETheme.LIGHT ? ETheme.LIGHT : ETheme.DARK,
  setTheme: () => null,
};

export const AppContext = createContext<IAppContext>(initValues);

export const useAppContextValue = (): IAppContext => {
  const [theme, setTheme] = useState<IAppContext['theme']>(initValues.theme);

  useEffect(() => {
    // Remove prev theme
    const root = window.document.documentElement;
    root.classList.remove(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);

    // Add new theme
    root.classList.add(theme);

    // Update theme to localStorage
    localStorage.setItem(ELocalStorageKey.UI_THEME, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export const useAppContext = () => useContext(AppContext);
