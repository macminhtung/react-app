import { useEffect } from 'react';
import type { TUseQueryOptions } from '@/react-query/types';
import type { UseQueryResult } from '@tanstack/react-query';
import type { ClientError } from 'graphql-request';

export const useProcessUseQueryFuncs = <R>(
  result: UseQueryResult<NoInfer<R>, ClientError>,
  options?: Pick<TUseQueryOptions<R>, 'enabled' | 'onLoading' | 'onSuccess' | 'onError'>
) => {
  const { onSuccess, onError, onLoading, enabled } = options || {};

  useEffect(() => {
    if (enabled) {
      if (onLoading) onLoading(result.isLoading);
      if (onSuccess && result.isSuccess) onSuccess(result.data);
      if (onError && result.isError) onError(result.error);
    }
  }, [enabled, onError, onLoading, onSuccess, result]);

  return result;
};
