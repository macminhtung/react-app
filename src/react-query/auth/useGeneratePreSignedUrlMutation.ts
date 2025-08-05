import { useMutation, QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import type { TUseMutationOptions } from '@/react-query/types';
import type {
  GeneratePreSignedUrlMutationVariables,
  GeneratePreSignedUrlMutation,
} from '@/gql/graphql';

const document = gql`
  mutation GeneratePreSignedUrl($payload: GeneratePreSignedUrlDto!) {
    generatePreSignedUrl(payload: $payload)
  }
`;

export const useGeneratePreSignedUrlMutation = <
  V extends GeneratePreSignedUrlMutationVariables,
  R extends GeneratePreSignedUrlMutation,
>(
  options?: TUseMutationOptions<V, R>,
  queryClient?: QueryClient
) =>
  useMutation(
    {
      mutationKey: ['useGeneratePreSignedUrlMutation'],
      mutationFn: async (variables: V) => await request<R>({ document, variables }),
      ...options,
    },
    queryClient
  );
