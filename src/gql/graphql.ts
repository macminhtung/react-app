/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateProductDto = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export enum EOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type GetPaginatedRecordsDto = {
  createdFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdTo?: InputMaybe<Scalars['DateTime']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<EOrder>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetUsersPaginatedDto = {
  createdFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdTo?: InputMaybe<Scalars['DateTime']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<EOrder>;
  page?: InputMaybe<Scalars['Float']['input']>;
  roleIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  createProduct: ProductEntity;
  deleteProduct: Scalars['String']['output'];
  refreshToken: SignInResponseDto;
  signIn: SignInResponseDto;
  signOut: Scalars['Float']['output'];
  signUp: SignInResponseDto;
  updatePassword: SignInResponseDto;
  updateProduct: ProductEntity;
  updateProfile: UserEntity;
  updateUser: UserEntity;
};


export type MutationCreateProductArgs = {
  payload: CreateProductDto;
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  payload: RefreshTokenDto;
};


export type MutationSignInArgs = {
  payload: SignInDto;
};


export type MutationSignUpArgs = {
  payload: SignUpDto;
};


export type MutationUpdatePasswordArgs = {
  payload: UpdatePasswordDto;
};


export type MutationUpdateProductArgs = {
  id: Scalars['String']['input'];
  payload: CreateProductDto;
};


export type MutationUpdateProfileArgs = {
  payload: UpdateProfileDto;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  payload: UpdateUserDto;
};

export type PaginatedProductsResponseDto = {
  data: Array<ProductEntity>;
};

export type ProductEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  getPaginatedProducts: PaginatedProductsResponseDto;
  getPaginatedUsers: UserEntity;
  getProfile: UserEntity;
  getUser: UserEntity;
};


export type QueryGetPaginatedProductsArgs = {
  queryParams: GetPaginatedRecordsDto;
};


export type QueryGetPaginatedUsersArgs = {
  queryParams: GetUsersPaginatedDto;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};

export type RefreshTokenDto = {
  accessToken: Scalars['String']['input'];
};

export type RoleEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SignInDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInResponseDto = {
  accessToken: Scalars['String']['output'];
};

export type SignUpDto = {
  avatar: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdatePasswordDto = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateProfileDto = {
  avatar: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type UpdateUserDto = {
  avatar: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  roleId: Scalars['Float']['input'];
};

export type UserEntity = {
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  role?: Maybe<RoleEntity>;
  roleId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { getProfile: { id: string, email: string, firstName: string, lastName: string, avatar: string, roleId: number } };

export type SignInMutationVariables = Exact<{
  payload: SignInDto;
}>;


export type SignInMutation = { signIn: { accessToken: string } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { signOut: number };

export type RefreshTokenMutationVariables = Exact<{
  payload: RefreshTokenDto;
}>;


export type RefreshTokenMutation = { refreshToken: { accessToken: string } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetProfileDocument = new TypedDocumentString(`
    query GetProfile {
  getProfile {
    id
    email
    firstName
    lastName
    avatar
    roleId
  }
}
    `) as unknown as TypedDocumentString<GetProfileQuery, GetProfileQueryVariables>;
export const SignInDocument = new TypedDocumentString(`
    mutation SignIn($payload: SignInDto!) {
  signIn(payload: $payload) {
    accessToken
  }
}
    `) as unknown as TypedDocumentString<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = new TypedDocumentString(`
    mutation SignOut {
  signOut
}
    `) as unknown as TypedDocumentString<SignOutMutation, SignOutMutationVariables>;
export const RefreshTokenDocument = new TypedDocumentString(`
    mutation RefreshToken($payload: RefreshTokenDto!) {
  refreshToken(payload: $payload) {
    accessToken
  }
}
    `) as unknown as TypedDocumentString<RefreshTokenMutation, RefreshTokenMutationVariables>;