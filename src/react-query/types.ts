import type { UseMutationOptions } from '@tanstack/react-query';
import type { ClientError } from 'graphql-request';

export type TUseMutationOptions<R = unknown> = Omit<
  UseMutationOptions<R, ClientError, unknown, unknown>,
  'mutationKey' | 'mutationFn'
>;
