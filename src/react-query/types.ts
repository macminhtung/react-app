import type { UseMutationOptions } from '@tanstack/react-query';

export type TUseMutationOptions<R = unknown> = Omit<
  UseMutationOptions<R, unknown, unknown, unknown>,
  'mutationKey' | 'mutationFn'
>;
