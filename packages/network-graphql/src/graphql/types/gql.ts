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
    "\n  fragment BranchItem on Branch {\n    id\n    name\n    address\n  }\n": types.BranchItemFragmentDoc,
    "\n  fragment MenuItem on Menu {\n    id\n    title\n    menuProducts {\n      ...MenuProductItem\n    }\n  }\n": types.MenuItemFragmentDoc,
    "\n  fragment MenuProductConfigurationItem on MenuProductConfiguration {\n    id\n    title\n    type\n    values {\n      ...MenuProductConfigurationValueItem\n    }\n  }\n": types.MenuProductConfigurationItemFragmentDoc,
    "\n  fragment MenuProductConfigurationValueItem on MenuProductConfigurationValue {\n    id\n    name\n    price\n  }\n": types.MenuProductConfigurationValueItemFragmentDoc,
    "\n  fragment MenuProductItem on MenuProduct {\n    id\n    title\n    description\n    images\n    enabled\n    ingredients\n    section {\n      ...MenuSectionItem\n    }\n    configurations {\n      ...MenuProductConfigurationItem\n    }\n\n    menuId\n    sectionId\n  }\n": types.MenuProductItemFragmentDoc,
    "\n  fragment MenuSectionItem on MenuSection {\n    id\n    name\n    description\n  }\n": types.MenuSectionItemFragmentDoc,
    "\n  fragment TableItem on Table {\n    id\n    name\n    seats\n    tableGroupId\n  }\n": types.TableItemFragmentDoc,
    "\n  fragment TableGroupItem on TableGroup {\n    id\n    name\n    arrangementCode\n  }\n": types.TableGroupItemFragmentDoc,
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
export function graphql(source: "\n  fragment BranchItem on Branch {\n    id\n    name\n    address\n  }\n"): (typeof documents)["\n  fragment BranchItem on Branch {\n    id\n    name\n    address\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuItem on Menu {\n    id\n    title\n    menuProducts {\n      ...MenuProductItem\n    }\n  }\n"): (typeof documents)["\n  fragment MenuItem on Menu {\n    id\n    title\n    menuProducts {\n      ...MenuProductItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuProductConfigurationItem on MenuProductConfiguration {\n    id\n    title\n    type\n    values {\n      ...MenuProductConfigurationValueItem\n    }\n  }\n"): (typeof documents)["\n  fragment MenuProductConfigurationItem on MenuProductConfiguration {\n    id\n    title\n    type\n    values {\n      ...MenuProductConfigurationValueItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuProductConfigurationValueItem on MenuProductConfigurationValue {\n    id\n    name\n    price\n  }\n"): (typeof documents)["\n  fragment MenuProductConfigurationValueItem on MenuProductConfigurationValue {\n    id\n    name\n    price\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuProductItem on MenuProduct {\n    id\n    title\n    description\n    images\n    enabled\n    ingredients\n    section {\n      ...MenuSectionItem\n    }\n    configurations {\n      ...MenuProductConfigurationItem\n    }\n\n    menuId\n    sectionId\n  }\n"): (typeof documents)["\n  fragment MenuProductItem on MenuProduct {\n    id\n    title\n    description\n    images\n    enabled\n    ingredients\n    section {\n      ...MenuSectionItem\n    }\n    configurations {\n      ...MenuProductConfigurationItem\n    }\n\n    menuId\n    sectionId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MenuSectionItem on MenuSection {\n    id\n    name\n    description\n  }\n"): (typeof documents)["\n  fragment MenuSectionItem on MenuSection {\n    id\n    name\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TableItem on Table {\n    id\n    name\n    seats\n    tableGroupId\n  }\n"): (typeof documents)["\n  fragment TableItem on Table {\n    id\n    name\n    seats\n    tableGroupId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TableGroupItem on TableGroup {\n    id\n    name\n    arrangementCode\n  }\n"): (typeof documents)["\n  fragment TableGroupItem on TableGroup {\n    id\n    name\n    arrangementCode\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;