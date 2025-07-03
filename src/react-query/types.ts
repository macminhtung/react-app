import type { UseMutationOptions, UseQueryOptions, QueryKey } from '@tanstack/react-query';
import type { ClientError } from 'graphql-request';

export type TUseMutationOptions<V = unknown, R = unknown> = Omit<
  UseMutationOptions<R, ClientError, V, unknown>,
  'mutationKey' | 'mutationFn'
>;

export type TUseQueryOptions<R = unknown> = Omit<
  UseQueryOptions<R, ClientError, R, QueryKey>,
  'queryKey' | 'queryFn'
> & {
  onLoading?: (isLoading: boolean) => void;
  onSuccess?: (data: R) => Promise<unknown> | unknown;
  onError?: (error: ClientError) => Promise<unknown> | unknown;
};
