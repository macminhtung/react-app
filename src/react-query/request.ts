import {
  Variables,
  request as originRequest,
  RequestOptions,
  ClientError,
  gql,
} from 'graphql-request';
import {
  showToastError,
  manageTokens,
  EManageTokenType,
  clearTokensAndNavigateSignInPage,
} from '@/common/funcs';
import type { RefreshTokenMutationVariables, RefreshTokenMutation } from '@/gql/graphql';

const API_URL = `${import.meta.env.VITE_APP_API}/graphql`;
const JWT_ERRORS = {
  EXPIRED: 'jwt expired',
  INVALID_TOKEN: 'invalid token',
  INVALID_SIGNATURE: 'invalid signature',
  UNEXPECTED_TOKEN: 'Unexpected token',
};

const isJwtInvalid = (errorMessage: string) =>
  [JWT_ERRORS.INVALID_TOKEN, JWT_ERRORS.INVALID_SIGNATURE].includes(errorMessage) ||
  errorMessage.includes(JWT_ERRORS.UNEXPECTED_TOKEN);

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
      requestHeaders: { authorization: accessToken ? `Bearer ${accessToken}` : '' },
    })
      // Handle error
      .catch((error: ClientError) => {
        // Identify the error message
        const errorMessage = error.response.errors?.[0]?.message || '';

        // CASE: JWT Expired ==> Refresh accessToken ==> Recall API
        if (errorMessage === JWT_ERRORS.EXPIRED) {
          const refreshToken = manageTokens({ type: EManageTokenType.GET }).refreshToken;
          return (
            originRequest<RefreshTokenMutation, RefreshTokenMutationVariables>({
              url: API_URL,
              document: refreshTokenDocument,
              variables: { payload: { refreshToken } },
            })
              // CASE: Update new refreshToken & accessToken
              .then(({ refreshToken: newTokens }) => {
                // Set new tokens
                manageTokens({ type: EManageTokenType.SET, ...newTokens });

                // Recall the API with new accessToken
                return (
                  originRequest({
                    ...options,
                    url: API_URL,
                    requestHeaders: { authorization: `Bearer ${newTokens.accessToken}` },
                  })
                    // CASE: Invalid refresh token ==> Show toast error
                    .catch((reError) => {
                      // Identify the re-error message
                      const reErrorMessage = reError.response.errors?.[0]?.message || '';

                      // CASE: JWT invalid
                      if (isJwtInvalid(reErrorMessage))
                        throw showToastError(error, {
                          duration: 1500,
                          onAutoClose: () => clearTokensAndNavigateSignInPage(),
                        });

                      // Show toast error
                      showToastError(reError);
                      throw null;
                    })
                );
              })
          );
        }

        // CASE: JWT invalid
        else if (isJwtInvalid(errorMessage))
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
