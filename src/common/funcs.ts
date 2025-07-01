import { createElement } from 'react';
import { toast } from 'sonner';
import { X } from 'lucide-react';
import { ClientError } from 'graphql-request';
import { ELocalStorageKey } from '@/common/enums';

export const showToastError = (error: ClientError) =>
  toast.error(error.response.errors?.[0]?.message, {
    action: {
      label: createElement(X, { className: 'w-5 text-gray-700 dark:text-white' }),
      onClick: () => null,
    },
    actionButtonStyle: { backgroundColor: 'transparent' },
  });

export enum EManageTokenType {
  GET = 'GET',
  SET = 'SET',
}

export const manageTokens = (
  payload:
    | { type: EManageTokenType.GET }
    | { type: EManageTokenType.SET; refreshToken: string; accessToken: string }
) => {
  const { type } = payload;
  // CASE: Get Tokens
  if (type === EManageTokenType.GET)
    return {
      refreshToken: localStorage.getItem(ELocalStorageKey.REFRESH_TOKEN) || '',
      accessToken: localStorage.getItem(ELocalStorageKey.ACCESS_TOKEN) || '',
    };

  // CASE: Set Tokens
  const { refreshToken, accessToken } = payload;
  localStorage.setItem(ELocalStorageKey.REFRESH_TOKEN, refreshToken);
  localStorage.setItem(ELocalStorageKey.ACCESS_TOKEN, accessToken);
  return { refreshToken, accessToken };
};
