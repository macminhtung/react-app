import { create } from 'zustand';
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

type TAuthState = {
  tokens: { accessToken: string; refreshToken: string };
  setTokens: (tokens: { accessToken: string; refreshToken: string }) => void;
  authUser: TAuthUser;
  setAuthUser: (authUser: TAuthUser) => void;
};

export const useAuthStore = create<TAuthState>((set) => ({
  tokens: manageTokens({ type: EManageTokenType.GET }),
  setTokens: (tokens) => set({ tokens }),
  authUser: initAuthUser,
  setAuthUser: (authUser) => set({ authUser }),
}));
