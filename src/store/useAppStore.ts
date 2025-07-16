import { create } from 'zustand';
import { ELocalStorageKey, ETheme, ELanguage } from '@/common/enums';
import { manageTokens, EManageTokenType } from '@/common/funcs';

type TAuthUser = {
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
};

const initAuthUser: TAuthUser = {
  avatar: '',
  email: '',
  firstName: '',
  lastName: '',
};

type TAppState = {
  isAppLoading: boolean;
  setIsAppLoading: (isLoading: boolean) => void;
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
  language: ELanguage | string;
  setLanguage: (language: ELanguage | string) => void;
  tokens: { accessToken: string; refreshToken: string };
  setTokens: (tokens: { accessToken: string; refreshToken: string }) => void;
  authUser: TAuthUser;
  setAuthUser: (authUser: TAuthUser) => void;
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
  tokens: manageTokens({ type: EManageTokenType.GET }),
  setTokens: (tokens) => set({ tokens }),
  authUser: initAuthUser,
  setAuthUser: (authUser) => set({ authUser }),
}));
