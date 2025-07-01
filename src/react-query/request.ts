import { Variables, request as originRequest, RequestOptions } from 'graphql-request';

export const request = <V extends Variables, R>(options: RequestOptions<V, R>) => {
  return originRequest({ ...options, url: `${import.meta.env.VITE_APP_API}/graphql` });
};
