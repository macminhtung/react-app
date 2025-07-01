import { useMutation } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import { SignInDto, SignInResponseDto } from '@/gql/graphql';
import type { TUseMutation } from '@/react-query/types';

const document = gql`
  mutation SignIn($payload: SignInDto!) {
    signIn(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;

export const useSignInMutation = (
  options?: TUseMutation['options'],
  queryClient?: TUseMutation['queryClient']
) =>
  useMutation(
    {
      mutationKey: ['useSignInMutation'],
      mutationFn: (variables: { payload: SignInDto }) =>
        request<typeof variables, SignInResponseDto>({
          document,
          variables,
        }),
      ...options,
    },
    queryClient
  );
