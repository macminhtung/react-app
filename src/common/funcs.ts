import { createElement } from 'react';
import { toast, type ExternalToast } from 'sonner';
import { X, CircleCheck, CircleX } from 'lucide-react';
import { ClientError, gql } from 'graphql-request';
import { ELocalStorageKey } from '@/common/enums';
import { ROUTE_PATH } from '@/common/constants';
import { request } from '@/react-query/request';
import type {
  GeneratePreSignedUrlMutationVariables,
  GeneratePreSignedUrlMutation,
} from '@/gql/graphql';

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
    icon: createElement(CircleX, { className: 'w-5 text-red-500' }),
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

const generatePreSignedUrlDocument = gql`
  mutation GeneratePreSignedUrl($payload: GeneratePreSignedUrlDto!) {
    generatePreSignedUrl(payload: $payload)
  }
`;

export const uploadImageToS3 = async (file: File): Promise<string> => {
  // Call API to generate the preSignedUrl
  const resData = await request<
    GeneratePreSignedUrlMutation,
    GeneratePreSignedUrlMutationVariables
  >({
    document: generatePreSignedUrlDocument,
    variables: { payload: { contentType: file.type, filename: file.name } },
  });

  // Upload the image based on preSignedUrl
  const uploadRes = await fetch(resData.generatePreSignedUrl, { method: 'PUT', body: file });

  // CASE: Upload fail
  if (!uploadRes.ok) {
    toast.error('Upload image failed', {
      action: {
        label: createElement(X, { className: 'w-5 text-gray-700 dark:text-white' }),
        onClick: () => null,
      },
      actionButtonStyle: { backgroundColor: 'transparent' },
      icon: createElement(CircleX, { className: 'w-5 text-red-500' }),
    });
    return '';
  }

  // CASE: Upload success
  return resData.generatePreSignedUrl.split('?')?.[0];
};
