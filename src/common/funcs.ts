import { createElement } from 'react';
import { toast, type ExternalToast } from 'sonner';
import { X } from 'lucide-react';
import type { ClientError } from 'graphql-request';
import type { TUseQueryOptions } from '@/react-query/types';
import type { UseQueryResult } from '@tanstack/react-query';
import { ELocalStorageKey } from '@/common/enums';
import { ROUTE_PATH } from '@/common/constants';

export const showToastError = (
  error: ClientError,
  options?: Omit<ExternalToast, 'action' | 'actionButtonStyle'>
) =>
  toast.error(error.response.errors?.[0]?.message, {
    action: {
      label: createElement(X, { className: 'w-5 text-gray-700 dark:text-white' }),
      onClick: () => null,
    },
    actionButtonStyle: { backgroundColor: 'transparent' },
    duration: 2500,
    ...options,
  });

export const clearTokensAndNavigateSignInPage = () => {
  manageTokens({ type: EManageTokenType.SET, refreshToken: '', accessToken: '' });
  window.location.href = ROUTE_PATH.SIGNIN;
};

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

export const processUseQueryFuncs = <R>(
  result: UseQueryResult<NoInfer<R>, ClientError>,
  options?: Pick<TUseQueryOptions<R>, 'onSuccess' | 'onError'>
) => {
  const { onSuccess, onError } = options || {};
  if (onSuccess && result.isSuccess) onSuccess(result.data);
  if (onError && result.isError) onError(result.error);
  return result;
};
