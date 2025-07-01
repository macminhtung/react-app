import {
  Variables,
  request as originRequest,
  RequestOptions,
  ClientError,
  gql,
} from 'graphql-request';
import { showToastError, manageTokens, EManageTokenType } from '@/common/funcs';
import type { RefreshTokenMutation } from '@/gql/graphql';

const API_URL = `${import.meta.env.VITE_APP_API}/graphql`;

const refreshTokenDocument = gql`
  mutation RefreshToken($payload: RefreshTokenDto!) {
    refreshToken(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;

export const request = <R>(options: RequestOptions<Variables, R>) => {
  const accessToken = manageTokens({ type: EManageTokenType.GET }).accessToken;
  return (
    originRequest({
      ...options,
      url: API_URL,
      requestHeaders: {
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    })
      .then((data) => data)
      // Handle error
      .catch((error: ClientError) => {
        // Identify the error message
        const errorMessage = error.response.errors?.[0]?.message;

        // CASE: JWT Expired ==> Get new refresh token
        if (errorMessage === 'jwt expired') {
          originRequest<RefreshTokenMutation>(API_URL, refreshTokenDocument)
            // CASE: Update new refreshToken & accessToken
            .then(({ refreshToken: newTokens }) => {
              // Set new tokens
              manageTokens({
                type: EManageTokenType.SET,
                refreshToken: newTokens.refreshToken,
                accessToken: newTokens.accessToken,
              });

              // Recall the API with new accessToken
              return (
                originRequest({
                  ...options,
                  url: API_URL,
                  requestHeaders: {
                    authorization: `Bearer ${newTokens.accessToken}`,
                  },
                })
                  // Show toast error
                  .catch((error) => {
                    showToastError(error);
                    throw error;
                  })
              );
            })
            // CASE: Invalid refresh token ==> Show toast error
            .catch((error) => {
              showToastError(error);
              throw error;
            });
        }

        // Show toast error
        showToastError(error);
        throw error;
      })
  );
};
