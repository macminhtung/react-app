/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetAuthProfile {\n    getAuthProfile {\n      id\n      email\n      firstName\n      lastName\n      avatar\n    }\n  }\n": typeof types.GetAuthProfileDocument,
    "\n  mutation SignIn($payload: SignInDto!) {\n    signIn(payload: $payload) {\n      accessToken\n      refreshToken\n    }\n  }\n": typeof types.SignInDocument,
    "\n  mutation RefreshToken($payload: RefreshTokenDto!) {\n    refreshToken(payload: $payload) {\n      accessToken\n      refreshToken\n    }\n  }\n": typeof types.RefreshTokenDocument,
};
const documents: Documents = {
    "\n  query GetAuthProfile {\n    getAuthProfile {\n      id\n      email\n      firstName\n      lastName\n      avatar\n    }\n  }\n": types.GetAuthProfileDocument,
    "\n  mutation SignIn($payload: SignInDto!) {\n    signIn(payload: $payload) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.SignInDocument,
    "\n  mutation RefreshToken($payload: RefreshTokenDto!) {\n    refreshToken(payload: $payload) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.RefreshTokenDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAuthProfile {\n    getAuthProfile {\n      id\n      email\n      firstName\n      lastName\n      avatar\n    }\n  }\n"): typeof import('./graphql').GetAuthProfileDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($payload: SignInDto!) {\n    signIn(payload: $payload) {\n      accessToken\n      refreshToken\n    }\n  }\n"): typeof import('./graphql').SignInDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RefreshToken($payload: RefreshTokenDto!) {\n    refreshToken(payload: $payload) {\n      accessToken\n      refreshToken\n    }\n  }\n"): typeof import('./graphql').RefreshTokenDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
