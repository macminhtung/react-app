import { useQuery, type QueryClient } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { request } from '@/react-query/request';
import { useProcessUseQueryFuncs } from '@/common/hooks';
import type { TUseQueryOptions } from '@/react-query/types';
import type { GetAuthProfileQueryVariables, GetAuthProfileQuery } from '@/gql/graphql';

const document = gql`
  query GetAuthProfile {
    getAuthProfile {
      id
      email
      firstName
      lastName
      avatar
    }
  }
`;

export const useGetAuthProfileQuery = <
  V extends GetAuthProfileQueryVariables,
  R extends GetAuthProfileQuery,
>(
  variables: V,
  options?: TUseQueryOptions<R>,
  queryClient?: QueryClient
) =>
  useProcessUseQueryFuncs<R>(
    useQuery(
      {
        queryKey: ['useGetAuthProfileQuery', variables],
        queryFn: () => request<R>({ document, variables }),
        ...options,
      },
      queryClient
    ),
    options
  );
