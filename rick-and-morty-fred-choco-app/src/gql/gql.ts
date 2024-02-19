/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetCharacters($page: Int!) {\n      characters(page: $page) {\n        info {\n          count\n          pages\n        }\n        results {\n          name\n          image\n        }\n      }\n    }\n    \n    ": types.GetCharactersDocument,
    "\n  fragment CharacterFragment on Character {\n    name\n    image\n  }\n": types.CharacterFragmentFragmentDoc,
    "\n    query GetCharacterDetails($characterName: String!) {\n    characters(filter: { name: $characterName }) {\n      info {\n        count\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        created\n        origin {\n          name\n        }\n        location {\n          name\n        }\n        episode {\n          id\n        }\n      }\n    }\n  }": types.GetCharacterDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCharacters($page: Int!) {\n      characters(page: $page) {\n        info {\n          count\n          pages\n        }\n        results {\n          name\n          image\n        }\n      }\n    }\n    \n    "): (typeof documents)["\n    query GetCharacters($page: Int!) {\n      characters(page: $page) {\n        info {\n          count\n          pages\n        }\n        results {\n          name\n          image\n        }\n      }\n    }\n    \n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterFragment on Character {\n    name\n    image\n  }\n"): (typeof documents)["\n  fragment CharacterFragment on Character {\n    name\n    image\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCharacterDetails($characterName: String!) {\n    characters(filter: { name: $characterName }) {\n      info {\n        count\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        created\n        origin {\n          name\n        }\n        location {\n          name\n        }\n        episode {\n          id\n        }\n      }\n    }\n  }"): (typeof documents)["\n    query GetCharacterDetails($characterName: String!) {\n    characters(filter: { name: $characterName }) {\n      info {\n        count\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        image\n        created\n        origin {\n          name\n        }\n        location {\n          name\n        }\n        episode {\n          id\n        }\n      }\n    }\n  }"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;