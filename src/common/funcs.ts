import { createElement } from 'react';
import { toast, type ExternalToast } from 'sonner';
import { X, CircleCheck } from 'lucide-react';
import { ClientError } from 'graphql-request';
import { ELocalStorageKey } from '@/common/enums';
import { ROUTE_PATH } from '@/common/constants';

export const showToastSuccess = (
  message: string,
  options?: Omit<ExternalToast, 'action' | 'actionButtonStyle'>
) => {
  toast.success(message, {
    action: {
      label: createElement(X, { className: 'w-5 text-gray-700 dark:text-white' }),
      onClick: () => null,
    },
    actionButtonStyle: { backgroundColor: 'transparent' },
    icon: createElement(CircleCheck, { className: 'w-5 text-green-500' }),
    ...options,
  });
};

export const showToastError = (
  error: ClientError,
  options?: Omit<ExternalToast, 'action' | 'actionButtonStyle'>
) =>
  toast.error(error.response?.errors?.[0]?.message || error?.message, {
    action: {
      label: createElement(X, { className: 'w-5 text-gray-700 dark:text-white' }),
      onClick: () => null,
    },
    actionButtonStyle: { backgroundColor: 'transparent' },
    duration: 2500,
    ...options,
  });

export const clearTokensAndNavigateSignInPage = () => {
  manageAccessToken({ type: EManageTokenType.SET, accessToken: '' });
  window.location.href = ROUTE_PATH.SIGNIN;
};

export enum EManageTokenType {
  GET = 'GET',
  SET = 'SET',
}

export const manageAccessToken = (
  payload: { type: EManageTokenType.GET } | { type: EManageTokenType.SET; accessToken: string }
) => {
  const { type } = payload;

  // CASE: Get Tokens
  if (type === EManageTokenType.GET)
    return localStorage.getItem(ELocalStorageKey.ACCESS_TOKEN) || '';

  // CASE: Set Tokens
  const { accessToken } = payload;
  localStorage.setItem(ELocalStorageKey.ACCESS_TOKEN, accessToken);
  return accessToken;
};

export const uploadImageToS3 = async (signedUrl: string, file: File): Promise<string> => {
  const response = await fetch(signedUrl, { method: 'PUT', body: file });

  // CASE: Upload failed
  if (!response.ok) {
    toast.error('Upload image failed', {
      action: {
        label: createElement(X, { className: 'w-5 text-gray-700 dark:text-white' }),
        onClick: () => null,
      },
      actionButtonStyle: { backgroundColor: 'transparent' },
    });
    return '';
  }

  return signedUrl.split('?')?.[0];
};
