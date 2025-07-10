/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "query GetAnime($id: Int) {\n  Media(id: $id, type: ANIME) {\n    id\n    title {\n      english\n      native\n      romaji\n    }\n    coverImage {\n      extraLarge\n    }\n    bannerImage\n    description(asHtml: false)\n    type\n    format\n    status\n    episodes\n    duration\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    season\n    seasonYear\n    source\n    genres\n    tags {\n      id\n      name\n      category\n      rank\n      isMediaSpoiler\n    }\n    averageScore\n    popularity\n    favourites\n    studios(isMain: true) {\n      nodes {\n        id\n        name\n      }\n    }\n    externalLinks {\n      id\n      site\n      url\n      type\n      language\n    }\n    trailer {\n      id\n      site\n      thumbnail\n    }\n    relations {\n      edges {\n        relationType\n        node {\n          id\n          type\n          title {\n            romaji\n            english\n          }\n          coverImage {\n            medium\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetAnimeDocument,
    "query GetAnimeList($page: Int, $sort: [MediaSort]) {\n  Page(page: $page, perPage: 20) {\n    pageInfo {\n      hasNextPage\n      currentPage\n      total\n    }\n    media(sort: $sort) {\n      id\n      title {\n        english\n        native\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}": typeof types.GetAnimeListDocument,
};
const documents: Documents = {
    "query GetAnime($id: Int) {\n  Media(id: $id, type: ANIME) {\n    id\n    title {\n      english\n      native\n      romaji\n    }\n    coverImage {\n      extraLarge\n    }\n    bannerImage\n    description(asHtml: false)\n    type\n    format\n    status\n    episodes\n    duration\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    season\n    seasonYear\n    source\n    genres\n    tags {\n      id\n      name\n      category\n      rank\n      isMediaSpoiler\n    }\n    averageScore\n    popularity\n    favourites\n    studios(isMain: true) {\n      nodes {\n        id\n        name\n      }\n    }\n    externalLinks {\n      id\n      site\n      url\n      type\n      language\n    }\n    trailer {\n      id\n      site\n      thumbnail\n    }\n    relations {\n      edges {\n        relationType\n        node {\n          id\n          type\n          title {\n            romaji\n            english\n          }\n          coverImage {\n            medium\n          }\n        }\n      }\n    }\n  }\n}": types.GetAnimeDocument,
    "query GetAnimeList($page: Int, $sort: [MediaSort]) {\n  Page(page: $page, perPage: 20) {\n    pageInfo {\n      hasNextPage\n      currentPage\n      total\n    }\n    media(sort: $sort) {\n      id\n      title {\n        english\n        native\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}": types.GetAnimeListDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAnime($id: Int) {\n  Media(id: $id, type: ANIME) {\n    id\n    title {\n      english\n      native\n      romaji\n    }\n    coverImage {\n      extraLarge\n    }\n    bannerImage\n    description(asHtml: false)\n    type\n    format\n    status\n    episodes\n    duration\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    season\n    seasonYear\n    source\n    genres\n    tags {\n      id\n      name\n      category\n      rank\n      isMediaSpoiler\n    }\n    averageScore\n    popularity\n    favourites\n    studios(isMain: true) {\n      nodes {\n        id\n        name\n      }\n    }\n    externalLinks {\n      id\n      site\n      url\n      type\n      language\n    }\n    trailer {\n      id\n      site\n      thumbnail\n    }\n    relations {\n      edges {\n        relationType\n        node {\n          id\n          type\n          title {\n            romaji\n            english\n          }\n          coverImage {\n            medium\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetAnime($id: Int) {\n  Media(id: $id, type: ANIME) {\n    id\n    title {\n      english\n      native\n      romaji\n    }\n    coverImage {\n      extraLarge\n    }\n    bannerImage\n    description(asHtml: false)\n    type\n    format\n    status\n    episodes\n    duration\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    season\n    seasonYear\n    source\n    genres\n    tags {\n      id\n      name\n      category\n      rank\n      isMediaSpoiler\n    }\n    averageScore\n    popularity\n    favourites\n    studios(isMain: true) {\n      nodes {\n        id\n        name\n      }\n    }\n    externalLinks {\n      id\n      site\n      url\n      type\n      language\n    }\n    trailer {\n      id\n      site\n      thumbnail\n    }\n    relations {\n      edges {\n        relationType\n        node {\n          id\n          type\n          title {\n            romaji\n            english\n          }\n          coverImage {\n            medium\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAnimeList($page: Int, $sort: [MediaSort]) {\n  Page(page: $page, perPage: 20) {\n    pageInfo {\n      hasNextPage\n      currentPage\n      total\n    }\n    media(sort: $sort) {\n      id\n      title {\n        english\n        native\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}"): (typeof documents)["query GetAnimeList($page: Int, $sort: [MediaSort]) {\n  Page(page: $page, perPage: 20) {\n    pageInfo {\n      hasNextPage\n      currentPage\n      total\n    }\n    media(sort: $sort) {\n      id\n      title {\n        english\n        native\n        romaji\n      }\n      coverImage {\n        extraLarge\n      }\n      bannerImage\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;