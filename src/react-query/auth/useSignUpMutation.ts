import { useMutation, QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import type { TUseMutationOptions } from '@/react-query/types';
import type { SignUpMutationVariables, SignUpMutation } from '@/gql/graphql';

const document = gql`
  mutation SignUp($payload: SignUpDto!) {
    signUp(payload: $payload) {
      id
    }
  }
`;

export const useSignUpMutation = <V extends SignUpMutationVariables, R extends SignUpMutation>(
  options?: TUseMutationOptions<V, R>,
  queryClient?: QueryClient
) =>
  useMutation(
    {
      mutationKey: ['useSignUpMutation'],
      mutationFn: (variables: V) => request<R>({ document, variables }),
      ...options,
    },
    queryClient
  );
