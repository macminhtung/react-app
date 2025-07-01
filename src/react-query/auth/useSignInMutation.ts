import { useMutation, QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import type { TUseMutationOptions } from '@/react-query/types';
import type { SignInMutationVariables, SignInMutation } from '@/gql/graphql';

const document = gql`
  mutation SignIn($payload: SignInDto!) {
    signIn(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;

export const useSignInMutation = <V extends SignInMutationVariables, R extends SignInMutation>(
  options?: TUseMutationOptions<R>,
  queryClient?: QueryClient
) =>
  useMutation(
    {
      mutationKey: ['useSignInMutation'],
      mutationFn: (variables: V) => request<R>({ document, variables }),
      ...options,
    },
    queryClient
  );
