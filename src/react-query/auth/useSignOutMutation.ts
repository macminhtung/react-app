import { useMutation, QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import type { TUseMutationOptions } from '@/react-query/types';

const document = gql`
  mutation SignOut {
    signOut
  }
`;

export const useSignOutMutation = <V extends undefined, R extends number>(
  options?: TUseMutationOptions<V, R>,
  queryClient?: QueryClient
) =>
  useMutation(
    {
      mutationKey: ['useSignOutMutation'],
      mutationFn: (variables: V) => request<R>({ document, variables }),
      ...options,
    },
    queryClient
  );
