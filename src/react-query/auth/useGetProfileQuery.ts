import { useQuery, type QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import { useProcessUseQueryFuncs } from '@/common/hooks';
import type { TUseQueryOptions } from '@/react-query/types';
import type { GetProfileQueryVariables, GetProfileQuery } from '@/gql/graphql';

const document = gql`
  query GetProfile {
    getProfile {
      id
      email
      firstName
      lastName
      avatar
      roleId
    }
  }
`;

export const useGetProfileQuery = <V extends GetProfileQueryVariables, R extends GetProfileQuery>(
  variables: V,
  options?: TUseQueryOptions<R>,
  queryClient?: QueryClient
) =>
  useProcessUseQueryFuncs<R>(
    useQuery(
      {
        queryKey: ['useGetProfileQuery', variables],
        queryFn: () => request<R>({ document, variables }),
        ...options,
      },
      queryClient
    ),
    options
  );
