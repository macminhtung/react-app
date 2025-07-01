import type { UseMutationOptions, QueryClient } from '@tanstack/react-query';

export type TUseMutation = {
  options?: Omit<
    UseMutationOptions<unknown, unknown, unknown, unknown>,
    'mutationKey' | 'mutationFn'
  >;
  queryClient?: QueryClient;
};
