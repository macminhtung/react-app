import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';
import { ELocalStorageKey } from '@/common/enums';

interface IAuthUser {
  email: string;
  firstName: string;
  lastName: string;
}

const initAuthUser: IAuthUser = {
  email: '',
  firstName: '',
  lastName: '',
};

interface IAuthContext {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  refreshToken: string | null;
  setRefreshToken: Dispatch<SetStateAction<string | null>>;
  authUser: IAuthUser;
  setAuthUser: Dispatch<SetStateAction<IAuthUser>>;
}

const initValues: IAuthContext = {
  accessToken: localStorage.getItem(ELocalStorageKey.ACCESS_TOKEN),
  setAccessToken: () => null,
  refreshToken: localStorage.getItem(ELocalStorageKey.REFRESH_TOKEN),
  setRefreshToken: () => null,
  authUser: initAuthUser,
  setAuthUser: () => initAuthUser,
};

export const AuthContext = createContext<IAuthContext>(initValues);

export const useAuthContextValue = (): IAuthContext => {
  const [accessToken, setAccessToken] = useState<IAuthContext['accessToken']>(
    initValues.accessToken
  );
  const [refreshToken, setRefreshToken] = useState<IAuthContext['refreshToken']>(
    initValues.refreshToken
  );
  const [authUser, setAuthUser] = useState<IAuthContext['authUser']>(initValues.authUser);

  return {
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
    authUser,
    setAuthUser,
  };
};

export const useAuthContext = () => useContext(AuthContext);
