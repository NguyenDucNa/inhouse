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
    "\n  query localDeviceIncompletedOrders {\n    localDeviceIncompletedOrders {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      data {\n        guests {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.LocalDeviceIncompletedOrdersDocument,
    "\n  query localDeviceOrders {\n    localDeviceOrders {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      data {\n        guestCount\n      }\n    }\n  }\n": types.LocalDeviceOrdersDocument,
    "\n  mutation localDeviceOrderStart($companyId: String!, $data: CreateOrderData!) {\n    localDeviceOrderStart(companyId: $companyId, data: $data) {\n      id\n      state\n    }\n  }\n": types.LocalDeviceOrderStartDocument,
    "\n  query localDeviceCreate($companyId: ID!, $branchId: ID!) {\n    menus(companyId: $companyId) {\n      id\n      title\n    }\n\n    tableGroups(branchID: $branchId) {\n      id\n      name\n      arrangementCode\n      tables {\n        id\n        name\n        seats\n        tableGroupId\n      }\n    }\n  }\n": types.LocalDeviceCreateDocument,
    "\n  fragment LocalDeviceStateItem on LocalDeviceOrder {\n    id\n    state\n    menu {\n      ...MenuItem\n    }\n    data {\n      guests {\n        id\n        name\n      }\n    }\n    createdAt\n    updatedAt\n    orderTasks {\n      id\n      state\n      createdAt\n      updatedAt\n      data {\n        guestID\n      }\n      products {\n        id\n        title\n        quantity\n        menuProductId\n        configurations {\n          id\n          title\n          type\n          value\n          price\n          menuProductConfigurationValueId\n        }\n      }\n    }\n  }\n": types.LocalDeviceStateItemFragmentDoc,
    "\n  mutation localDeviceOrderCreateOrderTask(\n    $orderId: String!\n    $data: CreateOrderTask!\n  ) {\n    localDeviceOrderCreateOrderTask(orderId: $orderId, data: $data) {\n      id\n      state\n    }\n  }\n": types.LocalDeviceOrderCreateOrderTaskDocument,
    "\n  mutation localDeviceOrderBackState($orderId: String!) {\n    localDeviceOrderBackState(orderId: $orderId) {\n      id\n      state\n    }\n  }\n": types.LocalDeviceOrderBackStateDocument,
    "\n  mutation localDeviceOrderNextState($orderId: String!) {\n    localDeviceOrderNextState(orderId: $orderId) {\n      id\n      state\n    }\n  }\n": types.LocalDeviceOrderNextStateDocument,
    "\n  query LocalDeviceState($orderId: ID!) {\n    localDeviceOrder(id: $orderId) {\n      ...LocalDeviceStateItem\n    }\n  }\n": types.LocalDeviceStateDocument,
    "\n  subscription LocalDeviceStateSubscribe($orderId: ID!) {\n    localDeviceOrderUpdateSubscribe(id: $orderId) {\n      ...LocalDeviceStateItem\n    }\n  }\n": types.LocalDeviceStateSubscribeDocument,
    "\n  query menu($id: ID!) {\n    menu(id: $id) {\n      id\n      title\n      menuProducts {\n        id\n        title\n        configurations {\n          id\n          title\n          type\n          values {\n            id\n            name\n            price\n          }\n        }\n      }\n    }\n  }\n": types.MenuDocument,
    "\n  query InvoicesByOrder($orderId : String!){\n    invoicesByOrder(orderId: $orderId){\n      id\n      total\n      orderId\n      place\n      invoiceLines{\n        id\n        title\n        quantity\n        price\n      }\n    }\n  }\n": types.InvoicesByOrderDocument,
    "\n    mutation LocalDeviceOrderCreateInvoice($orderId: ID!, $input: LocalDeviceOrderCreateInvoice!){\n        localDeviceOrderCreateInvoice(orderId: $orderId, input: $input)\n    }\n": types.LocalDeviceOrderCreateInvoiceDocument,
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
export function graphql(source: "\n  query localDeviceIncompletedOrders {\n    localDeviceIncompletedOrders {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      data {\n        guests {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query localDeviceIncompletedOrders {\n    localDeviceIncompletedOrders {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      data {\n        guests {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query localDeviceOrders {\n    localDeviceOrders {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      data {\n        guestCount\n      }\n    }\n  }\n"): (typeof documents)["\n  query localDeviceOrders {\n    localDeviceOrders {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      data {\n        guestCount\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation localDeviceOrderStart($companyId: String!, $data: CreateOrderData!) {\n    localDeviceOrderStart(companyId: $companyId, data: $data) {\n      id\n      state\n    }\n  }\n"): (typeof documents)["\n  mutation localDeviceOrderStart($companyId: String!, $data: CreateOrderData!) {\n    localDeviceOrderStart(companyId: $companyId, data: $data) {\n      id\n      state\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query localDeviceCreate($companyId: ID!, $branchId: ID!) {\n    menus(companyId: $companyId) {\n      id\n      title\n    }\n\n    tableGroups(branchID: $branchId) {\n      id\n      name\n      arrangementCode\n      tables {\n        id\n        name\n        seats\n        tableGroupId\n      }\n    }\n  }\n"): (typeof documents)["\n  query localDeviceCreate($companyId: ID!, $branchId: ID!) {\n    menus(companyId: $companyId) {\n      id\n      title\n    }\n\n    tableGroups(branchID: $branchId) {\n      id\n      name\n      arrangementCode\n      tables {\n        id\n        name\n        seats\n        tableGroupId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LocalDeviceStateItem on LocalDeviceOrder {\n    id\n    state\n    menu {\n      ...MenuItem\n    }\n    data {\n      guests {\n        id\n        name\n      }\n    }\n    createdAt\n    updatedAt\n    orderTasks {\n      id\n      state\n      createdAt\n      updatedAt\n      data {\n        guestID\n      }\n      products {\n        id\n        title\n        quantity\n        menuProductId\n        configurations {\n          id\n          title\n          type\n          value\n          price\n          menuProductConfigurationValueId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment LocalDeviceStateItem on LocalDeviceOrder {\n    id\n    state\n    menu {\n      ...MenuItem\n    }\n    data {\n      guests {\n        id\n        name\n      }\n    }\n    createdAt\n    updatedAt\n    orderTasks {\n      id\n      state\n      createdAt\n      updatedAt\n      data {\n        guestID\n      }\n      products {\n        id\n        title\n        quantity\n        menuProductId\n        configurations {\n          id\n          title\n          type\n          value\n          price\n          menuProductConfigurationValueId\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation localDeviceOrderCreateOrderTask(\n    $orderId: String!\n    $data: CreateOrderTask!\n  ) {\n    localDeviceOrderCreateOrderTask(orderId: $orderId, data: $data) {\n      id\n      state\n    }\n  }\n"): (typeof documents)["\n  mutation localDeviceOrderCreateOrderTask(\n    $orderId: String!\n    $data: CreateOrderTask!\n  ) {\n    localDeviceOrderCreateOrderTask(orderId: $orderId, data: $data) {\n      id\n      state\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation localDeviceOrderBackState($orderId: String!) {\n    localDeviceOrderBackState(orderId: $orderId) {\n      id\n      state\n    }\n  }\n"): (typeof documents)["\n  mutation localDeviceOrderBackState($orderId: String!) {\n    localDeviceOrderBackState(orderId: $orderId) {\n      id\n      state\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation localDeviceOrderNextState($orderId: String!) {\n    localDeviceOrderNextState(orderId: $orderId) {\n      id\n      state\n    }\n  }\n"): (typeof documents)["\n  mutation localDeviceOrderNextState($orderId: String!) {\n    localDeviceOrderNextState(orderId: $orderId) {\n      id\n      state\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LocalDeviceState($orderId: ID!) {\n    localDeviceOrder(id: $orderId) {\n      ...LocalDeviceStateItem\n    }\n  }\n"): (typeof documents)["\n  query LocalDeviceState($orderId: ID!) {\n    localDeviceOrder(id: $orderId) {\n      ...LocalDeviceStateItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription LocalDeviceStateSubscribe($orderId: ID!) {\n    localDeviceOrderUpdateSubscribe(id: $orderId) {\n      ...LocalDeviceStateItem\n    }\n  }\n"): (typeof documents)["\n  subscription LocalDeviceStateSubscribe($orderId: ID!) {\n    localDeviceOrderUpdateSubscribe(id: $orderId) {\n      ...LocalDeviceStateItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query menu($id: ID!) {\n    menu(id: $id) {\n      id\n      title\n      menuProducts {\n        id\n        title\n        configurations {\n          id\n          title\n          type\n          values {\n            id\n            name\n            price\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query menu($id: ID!) {\n    menu(id: $id) {\n      id\n      title\n      menuProducts {\n        id\n        title\n        configurations {\n          id\n          title\n          type\n          values {\n            id\n            name\n            price\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InvoicesByOrder($orderId : String!){\n    invoicesByOrder(orderId: $orderId){\n      id\n      total\n      orderId\n      place\n      invoiceLines{\n        id\n        title\n        quantity\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  query InvoicesByOrder($orderId : String!){\n    invoicesByOrder(orderId: $orderId){\n      id\n      total\n      orderId\n      place\n      invoiceLines{\n        id\n        title\n        quantity\n        price\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LocalDeviceOrderCreateInvoice($orderId: ID!, $input: LocalDeviceOrderCreateInvoice!){\n        localDeviceOrderCreateInvoice(orderId: $orderId, input: $input)\n    }\n"): (typeof documents)["\n    mutation LocalDeviceOrderCreateInvoice($orderId: ID!, $input: LocalDeviceOrderCreateInvoice!){\n        localDeviceOrderCreateInvoice(orderId: $orderId, input: $input)\n    }\n"];
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