import { useMutation, QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import type { TUseMutationOptions } from '@/react-query/types';
import type { UpdateProfileMutationVariables, UpdateProfileMutation } from '@/gql/graphql';

const document = gql`
  mutation UpdateProfile($payload: UpdateProfileDto!) {
    updateProfile(payload: $payload) {
      id
      email
      avatar
      firstName
      lastName
    }
  }
`;

export const useUpdateProfileMutation = <
  V extends UpdateProfileMutationVariables,
  R extends UpdateProfileMutation,
>(
  options?: TUseMutationOptions<V, R>,
  queryClient?: QueryClient
) =>
  useMutation(
    {
      mutationKey: ['useUpdateProfileMutation'],
      mutationFn: (variables: V) => request<R>({ document, variables }),
      ...options,
    },
    queryClient
  );
