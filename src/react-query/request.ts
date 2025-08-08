import { Variables, RequestOptions, ClientError, gql, GraphQLClient } from 'graphql-request';
import {
  showToastError,
  manageAccessToken,
  EManageTokenType,
  clearTokensAndNavigateSignInPage,
} from '@/common/funcs';
import type { RefreshTokenMutation, RefreshTokenMutationVariables } from '@/gql/graphql';

const JWT_ERRORS = {
  EXPIRED: 'jwt expired',
  TOKEN_INVALID: 'Token invalid',
};

const refreshTokenDocument = gql`
  mutation RefreshToken($payload: RefreshTokenDto!) {
    refreshToken(payload: $payload) {
      accessToken
    }
  }
`;

const client = new GraphQLClient(`${import.meta.env.VITE_APP_API}/graphql`, {
  credentials: 'include',
  mode: 'cors',
});

export const request = <R, V extends Variables = Variables>(options: RequestOptions<V, R>) => {
  const accessToken = manageAccessToken({ type: EManageTokenType.GET });
  return (
    client
      .request({
        ...options,
        requestHeaders: { authorization: accessToken ? `Bearer ${accessToken}` : '' },
      })
      // Handle error
      .catch((error: ClientError) => {
        // Identify the error message
        const errorMessage = error.response.errors?.[0]?.message || '';

        // CASE: JWT Expired ==> Refresh accessToken ==> Recall API
        if (errorMessage === JWT_ERRORS.EXPIRED) {
          return (
            client
              .request<RefreshTokenMutation, RefreshTokenMutationVariables>({
                document: refreshTokenDocument,
                variables: { payload: { accessToken } },
              })
              // CASE: Update new accessToken & accessToken
              .then(({ refreshToken: { accessToken: newAccessToken } }) => {
                // Set new tokens
                manageAccessToken({ type: EManageTokenType.SET, accessToken: newAccessToken });

                // Recall the API with new accessToken
                return (
                  client
                    .request({
                      ...options,
                      requestHeaders: { authorization: `Bearer ${newAccessToken}` },
                    })
                    // CASE: Invalid refresh token ==> Show toast error
                    .catch((reCallError) => {
                      // Identify the re-error message
                      const reErrorMessage = reCallError.response.errors?.[0]?.message || '';

                      // CASE: JWT invalid
                      if (reErrorMessage.includes(JWT_ERRORS.TOKEN_INVALID))
                        throw showToastError(error, {
                          duration: 1500,
                          onAutoClose: () => clearTokensAndNavigateSignInPage(),
                        });

                      // Show toast error
                      showToastError(reCallError);
                      throw null;
                    })
                );
              })

              // CASE: Refresh token error
              .catch((refreshError) => {
                showToastError(refreshError, {
                  duration: 1500,
                  onAutoClose: () => clearTokensAndNavigateSignInPage(),
                });
                throw null;
              })
          );
        }

        // CASE: JWT invalid
        else if (errorMessage.includes(JWT_ERRORS.TOKEN_INVALID))
          throw showToastError(error, {
            duration: 1500,
            onAutoClose: () => clearTokensAndNavigateSignInPage(),
          });

        // Show toast error
        showToastError(error);
        throw null;
      })
  );
};
