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
    "\n  fragment InvoiceItem on Invoice {\n    id\n    total\n    place\n  }\n": types.InvoiceItemFragmentDoc,
    "\n  fragment TableItem on Table {\n    id\n    name\n    seats\n    tableGroupId\n  }\n": types.TableItemFragmentDoc,
    "\n  fragment TableGroupItem on TableGroup {\n    id\n    name\n    arrangementCode\n  }\n": types.TableGroupItemFragmentDoc,
    "\n  query GetPreSignUpload($filename: String!) {\n    preSignUpload(filename: $filename) {\n      origin\n      originPath\n      thumbnail\n      thumbnailPath\n    }\n  }\n": types.GetPreSignUploadDocument,
    "\n  mutation CreateBanner(\n    $input: CreateBannerData!\n    $timeRuleInput: CreateBannerTimeRule!\n    $contentInput: CreateBannerContent!\n  ) {\n    createBanner(\n      input: $input\n      timeRuleInput: $timeRuleInput\n      contentInput: $contentInput\n    ) {\n      title\n      viewCount\n      clickCount\n      enabled\n      content {\n        __typename\n        ... on TopContent {\n          type\n          text\n        }\n        ... on OverlayContent {\n          type\n          image\n        }\n      }\n      timeRule {\n        __typename\n        ... on RangeTimeRule {\n          type\n          start\n          end\n        }\n        ... on AlwaysTimeRule {\n          type\n        }\n      }\n    }\n  }\n": types.CreateBannerDocument,
    "\n    query Banners($offset: Int!, $limit: Int!, $filter: BannerStatusFilter){\n        banners(offset: $offset, limit: $limit, filter: $filter){\n          bannerId\n          title\n          viewCount\n          clickCount\n          enabled\n          content{\n            __typename\n            ...on TopContent{\n              type\n              text\n            }\n            ...on OverlayContent{\n              type\n              image\n            }\n          }\n          timeRule{\n           __typename\n            ...on RangeTimeRule{\n              type\n              start\n              end\n            }\n            ...on AlwaysTimeRule{\n              type\n            }\n          }\n        }\n    }\n": types.BannersDocument,
    "\n  mutation UpdateBanner(\n    $bannerId: String!\n    $input: UpdateBannerData!\n    $timeRuleInput: UpdateBannerTimeRule!\n    $contentInput: UpdateBannerContent!\n  ) {\n    updateBanner(\n      bannerId: $bannerId\n      input: $input\n      timeRuleInput: $timeRuleInput\n      contentInput: $contentInput\n    ) {\n      title\n      viewCount\n      clickCount\n      enabled\n      content {\n        __typename\n        ... on TopContent {\n          text\n        }\n        ... on OverlayContent {\n          image\n        }\n      }\n      timeRule {\n        __typename\n        ... on RangeTimeRule {\n          start\n          end\n        }\n        ... on AlwaysTimeRule {\n          type\n        }\n      }\n    }\n  }\n": types.UpdateBannerDocument,
    "\n    query Banner($id: ID!){\n        banner(id: $id){\n          bannerId\n          title\n          viewCount\n          clickCount\n          enabled\n          content{\n            __typename\n            ...on TopContent{\n              type\n              text\n            }\n            ...on OverlayContent{\n              type\n              image\n            }\n          }\n          timeRule{\n           __typename\n            ...on RangeTimeRule{\n              type\n              start\n              end\n            }\n            ...on AlwaysTimeRule{\n              type\n            }\n          }\n        }\n    }\n": types.BannerDocument,
    "\n  mutation CreateBranch($companyId: ID!, $input: CreateBranch!) {\n    createBranch(companyId: $companyId, input: $input) {\n      id\n    }\n  }\n": types.CreateBranchDocument,
    "\n  mutation deleteBranch($id: ID!) {\n    deleteBranch(id: $id) {\n      id\n    }\n  }\n": types.DeleteBranchDocument,
    "\n  query BranchDetailEdit($id: ID!) {\n    branch(id: $id) {\n      name\n      address\n    }\n  }\n": types.BranchDetailEditDocument,
    "\n  mutation updateBranch($id: ID!, $input: UpdateBranch!) {\n    updateBranch(id: $id, input: $input) {\n      name\n      address\n    }\n  }\n": types.UpdateBranchDocument,
    "\n  query CompanyBranches($companyId: ID!) {\n    branches(companyId: $companyId) {\n      ...BranchItem\n    }\n  }\n": types.CompanyBranchesDocument,
    "\n  mutation updateCompanySettings($id: ID!, $input: UpdateCompanySettings!) {\n    updateCompanySettings(id: $id, input: $input) {\n      id\n      currency\n    }\n  }\n": types.UpdateCompanySettingsDocument,
    "\n  query Invoice($invoiceID: ID!) {\n    invoice(invoiceID: $invoiceID) {\n      id\n      total\n      orderId\n      place\n      invoiceLines {\n        id\n        title\n        subtitle\n        quantity\n        price\n        total\n      }\n    }\n  }\n": types.InvoiceDocument,
    "\n  query InvoicesByBranch($branchId: String, $offset: Int!, $limit: Int!) {\n    invoicesByBranch(branchId: $branchId, offset: $offset, limit: $limit) {\n      ...InvoiceItem\n    }\n  }\n": types.InvoicesByBranchDocument,
    "\n  query InvoiceCount($branchId: String!) {\n    invoiceCount(filter: { branchId: $branchId })\n  }\n": types.InvoiceCountDocument,
    "\n  mutation CreateMenu($companyId: ID!, $input: CreateMenu!) {\n    createMenu(companyId: $companyId, input: $input) {\n      id\n      title\n    }\n  }\n": types.CreateMenuDocument,
    "\n  mutation DeleteMenu($id: ID!) {\n    deleteMenu(id: $id) {\n      id\n    }\n  }\n": types.DeleteMenuDocument,
    "\n  query GetMenuProductDetail($id: ID!) {\n    menuProduct(id: $id) {\n      id\n      section {\n        id\n        name\n        description\n      }\n      configurations {\n        id\n        type\n        title\n        values {\n          id\n          name\n          price\n        }\n      }\n    }\n  }\n": types.GetMenuProductDetailDocument,
    "\n  query GetMenuDetail($id: ID!) {\n    menu(id: $id) {\n      id\n      companyId\n      title\n      sections {\n        ...MenuSectionItem\n      }\n      menuProducts {\n        ...MenuProductItem\n      }\n    }\n  }\n": types.GetMenuDetailDocument,
    "\n  query GetSections($menuId: ID!) {\n    menuSections(menuId: $menuId) {\n      id\n      name\n    }\n  }\n": types.GetSectionsDocument,
    "\n  mutation updateMenuProductEdit($id: ID!, $input: UpdateMenuProduct!) {\n    updateMenuProduct(id: $id, input: $input) {\n      id\n      section {\n        name\n      }\n    }\n  }\n": types.UpdateMenuProductEditDocument,
    "\n  mutation updateMenuEdit($menuId: ID!, $input: UpdateMenu!) {\n    updateMenu(id: $menuId, input: $input) {\n      id\n      title\n    }\n  }\n": types.UpdateMenuEditDocument,
    "\n  query MenuList($companyId: ID!) {\n    menus(companyId: $companyId) {\n      id\n      title\n    }\n  }\n": types.MenuListDocument,
    "\n  mutation CreateMenuProductConfiguration(\n    $productId: String!\n    $input: CreateProductConfiguration!\n  ) {\n    createMenuProductConfiguration(productId: $productId, input: $input) {\n      id\n    }\n  }\n": types.CreateMenuProductConfigurationDocument,
    "\n  mutation DeleteMenuProductConfiguration($id: ID!) {\n    deleteMenuProductConfiguration(id: $id)\n  }\n": types.DeleteMenuProductConfigurationDocument,
    "\n  query GetMenuProductConfiguration($id: ID!) {\n    menuProductConfiguration(id: $id) {\n      ...MenuProductConfigurationItem\n    }\n  }\n": types.GetMenuProductConfigurationDocument,
    "\n  mutation UpdateMenuProductConfiguration(\n    $id: ID!\n    $input: UpdateProductConfiguration!\n  ) {\n    updateMenuProductConfiguration(id: $id, input: $input) {\n      id\n      title\n      type\n    }\n  }\n": types.UpdateMenuProductConfigurationDocument,
    "\n  query GetProductConfiguration($productId: ID!) {\n    menuProductConfigurations(productId: $productId) {\n      id\n      type\n      title\n      values {\n        id\n        name\n        price\n      }\n    }\n  }\n": types.GetProductConfigurationDocument,
    "\n  mutation CreateMenuProductConfigurationValue(\n    $menuProductConfigurationId: ID!\n    $input: CreateMenuProductConfigurationValue!\n  ) {\n    createMenuProductConfigurationValue(\n      menuProductConfigurationId: $menuProductConfigurationId\n      input: $input\n    ) {\n      id\n      name\n      price\n    }\n  }\n": types.CreateMenuProductConfigurationValueDocument,
    "\n  mutation DeleteMenuProductConfigurationValue($id: ID!) {\n    deleteMenuProductConfigurationValue(id: $id) {\n      id\n    }\n  }\n": types.DeleteMenuProductConfigurationValueDocument,
    "\n  query MenuProductConfigurationValue($id: ID!) {\n    menuProductConfigurationValue(id: $id) {\n      id\n      name\n      price\n    }\n  }\n": types.MenuProductConfigurationValueDocument,
    "\n  mutation UpdateMenuProductConfigurationValue(\n    $id: ID!\n    $input: UpdateMenuProductConfigurationValue!\n  ) {\n    updateMenuProductConfigurationValue(id: $id, input: $input) {\n      id\n      name\n      price\n    }\n  }\n": types.UpdateMenuProductConfigurationValueDocument,
    "\n  mutation CreateMenuProduct($menuId: ID!, $input: CreateMenuProduct) {\n    createMenuProduct(menuId: $menuId, input: $input) {\n      id\n    }\n  }\n": types.CreateMenuProductDocument,
    "\n  mutation DeleteMenuProduct($id: ID!) {\n    deleteMenuProduct(id: $id) {\n      id\n    }\n  }\n": types.DeleteMenuProductDocument,
    "\n  query GetMenuProduct($id: ID!) {\n    menuProduct(id: $id) {\n      ...MenuProductItem\n    }\n  }\n": types.GetMenuProductDocument,
    "\n  mutation UpdateMenuProduct($id: ID!, $input: UpdateMenuProduct!) {\n    updateMenuProduct(id: $id, input: $input) {\n      id\n    }\n  }\n": types.UpdateMenuProductDocument,
    "\n  mutation createMenuSection($menuId: ID!, $input: CreateMenuSection!) {\n    createMenuSection(menuId: $menuId, input: $input) {\n      id\n      name\n    }\n  }\n": types.CreateMenuSectionDocument,
    "\n  mutation DeleteMenuSection($id: ID!) {\n    deleteMenuSection(id: $id)\n  }\n": types.DeleteMenuSectionDocument,
    "\n  query getMenuSection($id: ID!) {\n    menuSection(id: $id) {\n      id\n      name\n      description\n    }\n  }\n": types.GetMenuSectionDocument,
    "\n  mutation updateMenuSection($id: ID!, $input: UpdateMenuSection!) {\n    updateMenuSection(id: $id, input: $input) {\n      name\n      description\n    }\n  }\n": types.UpdateMenuSectionDocument,
    "\n  query GetMenuSections($menuId: ID!) {\n    menuSections(menuId: $menuId) {\n      ...MenuSectionItem\n    }\n  }\n": types.GetMenuSectionsDocument,
    "\n  query OrdersCount($filter: OrderFilter) {\n    ordersCount(filter: $filter)\n  }\n": types.OrdersCountDocument,
    "\n  query Orders($offset: Int!, $limit: Int!, $filter: OrderFilter) {\n    orders(offset: $offset, limit: $limit, filter: $filter) {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      ... on LocalDeviceOrder {\n        data {\n          guests {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n": types.OrdersDocument,
    "\n  mutation CreateTableGroup(\n    $branchID: ID!\n    $name: String!\n    $arrangementCode: String\n  ) {\n    createTableGroup(\n      branchID: $branchID\n      input: { name: $name, arrangementCode: $arrangementCode }\n    ) {\n      id\n      name\n      arrangementCode\n    }\n  }\n": types.CreateTableGroupDocument,
    "\n  mutation DeleteTableGroup($id: ID!) {\n    deleteTableGroup(id: $id) {\n      id\n      name\n      arrangementCode\n    }\n  }\n": types.DeleteTableGroupDocument,
    "\n  mutation UpdateTableGroup(\n    $id: ID!\n    $name: String!\n    $arrangementCode: String\n  ) {\n    updateTableGroup(\n      id: $id\n      input: {\n        name: $name\n        arrangementCode: $arrangementCode\n        gridLayout: {\n          mesh: {\n            rows: 0\n            columns: 0\n            entries: { row: 0, column: 0, tableId: \"\" }\n          }\n        }\n      }\n    ) {\n      id\n      name\n      arrangementCode\n    }\n  }\n": types.UpdateTableGroupDocument,
    "\n  query TableGroupsList($branchID: ID!) {\n    tableGroups(branchID: $branchID) {\n      ...TableGroupItem\n    }\n  }\n": types.TableGroupsListDocument,
    "\n  mutation createTableBatch($tableGroup: ID!, $data: [CreateTable!]!) {\n    createTableBatch(tableGroup: $tableGroup, data: $data) {\n      count\n    }\n  }\n": types.CreateTableBatchDocument,
    "\n  mutation updateTableBatch($data: [BatchUpdateTableEntry!]!) {\n    updateTableBatch(data: $data) {\n      id\n    }\n  }\n": types.UpdateTableBatchDocument,
    "\n  mutation deleteTableBatch($ids: [ID!]!) {\n    deleteTableBatch(ids: $ids) {\n      count\n    }\n  }\n": types.DeleteTableBatchDocument,
    "\n  query tableGroup($id: ID!) {\n    tableGroup(id: $id) {\n      id\n      name\n      arrangementCode\n      tables {\n        ...TableItem\n      }\n    }\n  }\n": types.TableGroupDocument,
    "\n  mutation CreateUser($companyID: ID!, $data: CreateUserData!) {\n    createUser(companyID: $companyID, data: $data) {\n      user {\n        username\n        email\n        role\n      }\n      password\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id) {\n      id\n      username\n    }\n  }\n": types.DeleteUserDocument,
    "\n  mutation UpdateUser($id: String!, $data: UpdateUserData!) {\n    updateUser(id: $id, data: $data) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query User($id: String!) {\n    user(id: $id) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n": types.UserDocument,
    "\n  query UsersCount($filter: UserFilter) {\n    usersCount(filter: $filter)\n  }\n": types.UsersCountDocument,
    "\n  query Users($offset: Int!, $limit: Int!, $filter: UserFilter) {\n    users(offset: $offset, limit: $limit, filter: $filter) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n": types.UsersDocument,
    "\n  query DailyInvoiceReport($companyID: ID!) {\n    analytic__invoice_report(companyID: $companyID) {\n      daily {\n        date\n        total\n        count\n      }\n    }\n  }\n": types.DailyInvoiceReportDocument,
    "\n  query Analytic__invoice_aggregated_report_by_date(\n    $companyID: ID!\n    $startDate: String!\n    $endDate: String!\n  ) {\n    analytic__invoice_aggregated_report_by_date(\n      companyID: $companyID\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      totalInvoices\n      totalAmount\n    }\n  }\n": types.Analytic__Invoice_Aggregated_Report_By_DateDocument,
    "\n  fragment MenuItem on Menu {\n    id\n    title\n    menuProducts {\n      ...MenuProductItem\n    }\n  }\n": types.MenuItemFragmentDoc,
    "\n  fragment MenuProductConfigurationItem on MenuProductConfiguration {\n    id\n    title\n    type\n    values {\n      ...MenuProductConfigurationValueItem\n    }\n  }\n": types.MenuProductConfigurationItemFragmentDoc,
    "\n  fragment MenuProductConfigurationValueItem on MenuProductConfigurationValue {\n    id\n    name\n    price\n  }\n": types.MenuProductConfigurationValueItemFragmentDoc,
    "\n  fragment MenuProductItem on MenuProduct {\n    id\n    title\n    description\n    images\n    enabled\n    ingredients\n    section {\n      ...MenuSectionItem\n    }\n    configurations {\n      ...MenuProductConfigurationItem\n    }\n\n    menuId\n    sectionId\n  }\n": types.MenuProductItemFragmentDoc,
    "\n  fragment MenuSectionItem on MenuSection {\n    id\n    name\n    description\n  }\n": types.MenuSectionItemFragmentDoc,
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
export function graphql(source: "\n  fragment InvoiceItem on Invoice {\n    id\n    total\n    place\n  }\n"): (typeof documents)["\n  fragment InvoiceItem on Invoice {\n    id\n    total\n    place\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TableItem on Table {\n    id\n    name\n    seats\n    tableGroupId\n  }\n"): (typeof documents)["\n  fragment TableItem on Table {\n    id\n    name\n    seats\n    tableGroupId\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TableGroupItem on TableGroup {\n    id\n    name\n    arrangementCode\n  }\n"): (typeof documents)["\n  fragment TableGroupItem on TableGroup {\n    id\n    name\n    arrangementCode\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPreSignUpload($filename: String!) {\n    preSignUpload(filename: $filename) {\n      origin\n      originPath\n      thumbnail\n      thumbnailPath\n    }\n  }\n"): (typeof documents)["\n  query GetPreSignUpload($filename: String!) {\n    preSignUpload(filename: $filename) {\n      origin\n      originPath\n      thumbnail\n      thumbnailPath\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBanner(\n    $input: CreateBannerData!\n    $timeRuleInput: CreateBannerTimeRule!\n    $contentInput: CreateBannerContent!\n  ) {\n    createBanner(\n      input: $input\n      timeRuleInput: $timeRuleInput\n      contentInput: $contentInput\n    ) {\n      title\n      viewCount\n      clickCount\n      enabled\n      content {\n        __typename\n        ... on TopContent {\n          type\n          text\n        }\n        ... on OverlayContent {\n          type\n          image\n        }\n      }\n      timeRule {\n        __typename\n        ... on RangeTimeRule {\n          type\n          start\n          end\n        }\n        ... on AlwaysTimeRule {\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBanner(\n    $input: CreateBannerData!\n    $timeRuleInput: CreateBannerTimeRule!\n    $contentInput: CreateBannerContent!\n  ) {\n    createBanner(\n      input: $input\n      timeRuleInput: $timeRuleInput\n      contentInput: $contentInput\n    ) {\n      title\n      viewCount\n      clickCount\n      enabled\n      content {\n        __typename\n        ... on TopContent {\n          type\n          text\n        }\n        ... on OverlayContent {\n          type\n          image\n        }\n      }\n      timeRule {\n        __typename\n        ... on RangeTimeRule {\n          type\n          start\n          end\n        }\n        ... on AlwaysTimeRule {\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Banners($offset: Int!, $limit: Int!, $filter: BannerStatusFilter){\n        banners(offset: $offset, limit: $limit, filter: $filter){\n          bannerId\n          title\n          viewCount\n          clickCount\n          enabled\n          content{\n            __typename\n            ...on TopContent{\n              type\n              text\n            }\n            ...on OverlayContent{\n              type\n              image\n            }\n          }\n          timeRule{\n           __typename\n            ...on RangeTimeRule{\n              type\n              start\n              end\n            }\n            ...on AlwaysTimeRule{\n              type\n            }\n          }\n        }\n    }\n"): (typeof documents)["\n    query Banners($offset: Int!, $limit: Int!, $filter: BannerStatusFilter){\n        banners(offset: $offset, limit: $limit, filter: $filter){\n          bannerId\n          title\n          viewCount\n          clickCount\n          enabled\n          content{\n            __typename\n            ...on TopContent{\n              type\n              text\n            }\n            ...on OverlayContent{\n              type\n              image\n            }\n          }\n          timeRule{\n           __typename\n            ...on RangeTimeRule{\n              type\n              start\n              end\n            }\n            ...on AlwaysTimeRule{\n              type\n            }\n          }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBanner(\n    $bannerId: String!\n    $input: UpdateBannerData!\n    $timeRuleInput: UpdateBannerTimeRule!\n    $contentInput: UpdateBannerContent!\n  ) {\n    updateBanner(\n      bannerId: $bannerId\n      input: $input\n      timeRuleInput: $timeRuleInput\n      contentInput: $contentInput\n    ) {\n      title\n      viewCount\n      clickCount\n      enabled\n      content {\n        __typename\n        ... on TopContent {\n          text\n        }\n        ... on OverlayContent {\n          image\n        }\n      }\n      timeRule {\n        __typename\n        ... on RangeTimeRule {\n          start\n          end\n        }\n        ... on AlwaysTimeRule {\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBanner(\n    $bannerId: String!\n    $input: UpdateBannerData!\n    $timeRuleInput: UpdateBannerTimeRule!\n    $contentInput: UpdateBannerContent!\n  ) {\n    updateBanner(\n      bannerId: $bannerId\n      input: $input\n      timeRuleInput: $timeRuleInput\n      contentInput: $contentInput\n    ) {\n      title\n      viewCount\n      clickCount\n      enabled\n      content {\n        __typename\n        ... on TopContent {\n          text\n        }\n        ... on OverlayContent {\n          image\n        }\n      }\n      timeRule {\n        __typename\n        ... on RangeTimeRule {\n          start\n          end\n        }\n        ... on AlwaysTimeRule {\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Banner($id: ID!){\n        banner(id: $id){\n          bannerId\n          title\n          viewCount\n          clickCount\n          enabled\n          content{\n            __typename\n            ...on TopContent{\n              type\n              text\n            }\n            ...on OverlayContent{\n              type\n              image\n            }\n          }\n          timeRule{\n           __typename\n            ...on RangeTimeRule{\n              type\n              start\n              end\n            }\n            ...on AlwaysTimeRule{\n              type\n            }\n          }\n        }\n    }\n"): (typeof documents)["\n    query Banner($id: ID!){\n        banner(id: $id){\n          bannerId\n          title\n          viewCount\n          clickCount\n          enabled\n          content{\n            __typename\n            ...on TopContent{\n              type\n              text\n            }\n            ...on OverlayContent{\n              type\n              image\n            }\n          }\n          timeRule{\n           __typename\n            ...on RangeTimeRule{\n              type\n              start\n              end\n            }\n            ...on AlwaysTimeRule{\n              type\n            }\n          }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBranch($companyId: ID!, $input: CreateBranch!) {\n    createBranch(companyId: $companyId, input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBranch($companyId: ID!, $input: CreateBranch!) {\n    createBranch(companyId: $companyId, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBranch($id: ID!) {\n    deleteBranch(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBranch($id: ID!) {\n    deleteBranch(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BranchDetailEdit($id: ID!) {\n    branch(id: $id) {\n      name\n      address\n    }\n  }\n"): (typeof documents)["\n  query BranchDetailEdit($id: ID!) {\n    branch(id: $id) {\n      name\n      address\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBranch($id: ID!, $input: UpdateBranch!) {\n    updateBranch(id: $id, input: $input) {\n      name\n      address\n    }\n  }\n"): (typeof documents)["\n  mutation updateBranch($id: ID!, $input: UpdateBranch!) {\n    updateBranch(id: $id, input: $input) {\n      name\n      address\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CompanyBranches($companyId: ID!) {\n    branches(companyId: $companyId) {\n      ...BranchItem\n    }\n  }\n"): (typeof documents)["\n  query CompanyBranches($companyId: ID!) {\n    branches(companyId: $companyId) {\n      ...BranchItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCompanySettings($id: ID!, $input: UpdateCompanySettings!) {\n    updateCompanySettings(id: $id, input: $input) {\n      id\n      currency\n    }\n  }\n"): (typeof documents)["\n  mutation updateCompanySettings($id: ID!, $input: UpdateCompanySettings!) {\n    updateCompanySettings(id: $id, input: $input) {\n      id\n      currency\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Invoice($invoiceID: ID!) {\n    invoice(invoiceID: $invoiceID) {\n      id\n      total\n      orderId\n      place\n      invoiceLines {\n        id\n        title\n        subtitle\n        quantity\n        price\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query Invoice($invoiceID: ID!) {\n    invoice(invoiceID: $invoiceID) {\n      id\n      total\n      orderId\n      place\n      invoiceLines {\n        id\n        title\n        subtitle\n        quantity\n        price\n        total\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InvoicesByBranch($branchId: String, $offset: Int!, $limit: Int!) {\n    invoicesByBranch(branchId: $branchId, offset: $offset, limit: $limit) {\n      ...InvoiceItem\n    }\n  }\n"): (typeof documents)["\n  query InvoicesByBranch($branchId: String, $offset: Int!, $limit: Int!) {\n    invoicesByBranch(branchId: $branchId, offset: $offset, limit: $limit) {\n      ...InvoiceItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query InvoiceCount($branchId: String!) {\n    invoiceCount(filter: { branchId: $branchId })\n  }\n"): (typeof documents)["\n  query InvoiceCount($branchId: String!) {\n    invoiceCount(filter: { branchId: $branchId })\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMenu($companyId: ID!, $input: CreateMenu!) {\n    createMenu(companyId: $companyId, input: $input) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMenu($companyId: ID!, $input: CreateMenu!) {\n    createMenu(companyId: $companyId, input: $input) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMenu($id: ID!) {\n    deleteMenu(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMenu($id: ID!) {\n    deleteMenu(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMenuProductDetail($id: ID!) {\n    menuProduct(id: $id) {\n      id\n      section {\n        id\n        name\n        description\n      }\n      configurations {\n        id\n        type\n        title\n        values {\n          id\n          name\n          price\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMenuProductDetail($id: ID!) {\n    menuProduct(id: $id) {\n      id\n      section {\n        id\n        name\n        description\n      }\n      configurations {\n        id\n        type\n        title\n        values {\n          id\n          name\n          price\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMenuDetail($id: ID!) {\n    menu(id: $id) {\n      id\n      companyId\n      title\n      sections {\n        ...MenuSectionItem\n      }\n      menuProducts {\n        ...MenuProductItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMenuDetail($id: ID!) {\n    menu(id: $id) {\n      id\n      companyId\n      title\n      sections {\n        ...MenuSectionItem\n      }\n      menuProducts {\n        ...MenuProductItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSections($menuId: ID!) {\n    menuSections(menuId: $menuId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetSections($menuId: ID!) {\n    menuSections(menuId: $menuId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateMenuProductEdit($id: ID!, $input: UpdateMenuProduct!) {\n    updateMenuProduct(id: $id, input: $input) {\n      id\n      section {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateMenuProductEdit($id: ID!, $input: UpdateMenuProduct!) {\n    updateMenuProduct(id: $id, input: $input) {\n      id\n      section {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateMenuEdit($menuId: ID!, $input: UpdateMenu!) {\n    updateMenu(id: $menuId, input: $input) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation updateMenuEdit($menuId: ID!, $input: UpdateMenu!) {\n    updateMenu(id: $menuId, input: $input) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MenuList($companyId: ID!) {\n    menus(companyId: $companyId) {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query MenuList($companyId: ID!) {\n    menus(companyId: $companyId) {\n      id\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMenuProductConfiguration(\n    $productId: String!\n    $input: CreateProductConfiguration!\n  ) {\n    createMenuProductConfiguration(productId: $productId, input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMenuProductConfiguration(\n    $productId: String!\n    $input: CreateProductConfiguration!\n  ) {\n    createMenuProductConfiguration(productId: $productId, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMenuProductConfiguration($id: ID!) {\n    deleteMenuProductConfiguration(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteMenuProductConfiguration($id: ID!) {\n    deleteMenuProductConfiguration(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMenuProductConfiguration($id: ID!) {\n    menuProductConfiguration(id: $id) {\n      ...MenuProductConfigurationItem\n    }\n  }\n"): (typeof documents)["\n  query GetMenuProductConfiguration($id: ID!) {\n    menuProductConfiguration(id: $id) {\n      ...MenuProductConfigurationItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateMenuProductConfiguration(\n    $id: ID!\n    $input: UpdateProductConfiguration!\n  ) {\n    updateMenuProductConfiguration(id: $id, input: $input) {\n      id\n      title\n      type\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMenuProductConfiguration(\n    $id: ID!\n    $input: UpdateProductConfiguration!\n  ) {\n    updateMenuProductConfiguration(id: $id, input: $input) {\n      id\n      title\n      type\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductConfiguration($productId: ID!) {\n    menuProductConfigurations(productId: $productId) {\n      id\n      type\n      title\n      values {\n        id\n        name\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductConfiguration($productId: ID!) {\n    menuProductConfigurations(productId: $productId) {\n      id\n      type\n      title\n      values {\n        id\n        name\n        price\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMenuProductConfigurationValue(\n    $menuProductConfigurationId: ID!\n    $input: CreateMenuProductConfigurationValue!\n  ) {\n    createMenuProductConfigurationValue(\n      menuProductConfigurationId: $menuProductConfigurationId\n      input: $input\n    ) {\n      id\n      name\n      price\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMenuProductConfigurationValue(\n    $menuProductConfigurationId: ID!\n    $input: CreateMenuProductConfigurationValue!\n  ) {\n    createMenuProductConfigurationValue(\n      menuProductConfigurationId: $menuProductConfigurationId\n      input: $input\n    ) {\n      id\n      name\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMenuProductConfigurationValue($id: ID!) {\n    deleteMenuProductConfigurationValue(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMenuProductConfigurationValue($id: ID!) {\n    deleteMenuProductConfigurationValue(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MenuProductConfigurationValue($id: ID!) {\n    menuProductConfigurationValue(id: $id) {\n      id\n      name\n      price\n    }\n  }\n"): (typeof documents)["\n  query MenuProductConfigurationValue($id: ID!) {\n    menuProductConfigurationValue(id: $id) {\n      id\n      name\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateMenuProductConfigurationValue(\n    $id: ID!\n    $input: UpdateMenuProductConfigurationValue!\n  ) {\n    updateMenuProductConfigurationValue(id: $id, input: $input) {\n      id\n      name\n      price\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMenuProductConfigurationValue(\n    $id: ID!\n    $input: UpdateMenuProductConfigurationValue!\n  ) {\n    updateMenuProductConfigurationValue(id: $id, input: $input) {\n      id\n      name\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMenuProduct($menuId: ID!, $input: CreateMenuProduct) {\n    createMenuProduct(menuId: $menuId, input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMenuProduct($menuId: ID!, $input: CreateMenuProduct) {\n    createMenuProduct(menuId: $menuId, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMenuProduct($id: ID!) {\n    deleteMenuProduct(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMenuProduct($id: ID!) {\n    deleteMenuProduct(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMenuProduct($id: ID!) {\n    menuProduct(id: $id) {\n      ...MenuProductItem\n    }\n  }\n"): (typeof documents)["\n  query GetMenuProduct($id: ID!) {\n    menuProduct(id: $id) {\n      ...MenuProductItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateMenuProduct($id: ID!, $input: UpdateMenuProduct!) {\n    updateMenuProduct(id: $id, input: $input) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMenuProduct($id: ID!, $input: UpdateMenuProduct!) {\n    updateMenuProduct(id: $id, input: $input) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createMenuSection($menuId: ID!, $input: CreateMenuSection!) {\n    createMenuSection(menuId: $menuId, input: $input) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createMenuSection($menuId: ID!, $input: CreateMenuSection!) {\n    createMenuSection(menuId: $menuId, input: $input) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMenuSection($id: ID!) {\n    deleteMenuSection(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteMenuSection($id: ID!) {\n    deleteMenuSection(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMenuSection($id: ID!) {\n    menuSection(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  query getMenuSection($id: ID!) {\n    menuSection(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateMenuSection($id: ID!, $input: UpdateMenuSection!) {\n    updateMenuSection(id: $id, input: $input) {\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation updateMenuSection($id: ID!, $input: UpdateMenuSection!) {\n    updateMenuSection(id: $id, input: $input) {\n      name\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMenuSections($menuId: ID!) {\n    menuSections(menuId: $menuId) {\n      ...MenuSectionItem\n    }\n  }\n"): (typeof documents)["\n  query GetMenuSections($menuId: ID!) {\n    menuSections(menuId: $menuId) {\n      ...MenuSectionItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query OrdersCount($filter: OrderFilter) {\n    ordersCount(filter: $filter)\n  }\n"): (typeof documents)["\n  query OrdersCount($filter: OrderFilter) {\n    ordersCount(filter: $filter)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Orders($offset: Int!, $limit: Int!, $filter: OrderFilter) {\n    orders(offset: $offset, limit: $limit, filter: $filter) {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      ... on LocalDeviceOrder {\n        data {\n          guests {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Orders($offset: Int!, $limit: Int!, $filter: OrderFilter) {\n    orders(offset: $offset, limit: $limit, filter: $filter) {\n      id\n      state\n      tableOrder {\n        id\n        customTableName\n        table {\n          id\n          name\n          tableGroup {\n            id\n            name\n          }\n        }\n      }\n      ... on LocalDeviceOrder {\n        data {\n          guests {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTableGroup(\n    $branchID: ID!\n    $name: String!\n    $arrangementCode: String\n  ) {\n    createTableGroup(\n      branchID: $branchID\n      input: { name: $name, arrangementCode: $arrangementCode }\n    ) {\n      id\n      name\n      arrangementCode\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTableGroup(\n    $branchID: ID!\n    $name: String!\n    $arrangementCode: String\n  ) {\n    createTableGroup(\n      branchID: $branchID\n      input: { name: $name, arrangementCode: $arrangementCode }\n    ) {\n      id\n      name\n      arrangementCode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTableGroup($id: ID!) {\n    deleteTableGroup(id: $id) {\n      id\n      name\n      arrangementCode\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTableGroup($id: ID!) {\n    deleteTableGroup(id: $id) {\n      id\n      name\n      arrangementCode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTableGroup(\n    $id: ID!\n    $name: String!\n    $arrangementCode: String\n  ) {\n    updateTableGroup(\n      id: $id\n      input: {\n        name: $name\n        arrangementCode: $arrangementCode\n        gridLayout: {\n          mesh: {\n            rows: 0\n            columns: 0\n            entries: { row: 0, column: 0, tableId: \"\" }\n          }\n        }\n      }\n    ) {\n      id\n      name\n      arrangementCode\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTableGroup(\n    $id: ID!\n    $name: String!\n    $arrangementCode: String\n  ) {\n    updateTableGroup(\n      id: $id\n      input: {\n        name: $name\n        arrangementCode: $arrangementCode\n        gridLayout: {\n          mesh: {\n            rows: 0\n            columns: 0\n            entries: { row: 0, column: 0, tableId: \"\" }\n          }\n        }\n      }\n    ) {\n      id\n      name\n      arrangementCode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TableGroupsList($branchID: ID!) {\n    tableGroups(branchID: $branchID) {\n      ...TableGroupItem\n    }\n  }\n"): (typeof documents)["\n  query TableGroupsList($branchID: ID!) {\n    tableGroups(branchID: $branchID) {\n      ...TableGroupItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createTableBatch($tableGroup: ID!, $data: [CreateTable!]!) {\n    createTableBatch(tableGroup: $tableGroup, data: $data) {\n      count\n    }\n  }\n"): (typeof documents)["\n  mutation createTableBatch($tableGroup: ID!, $data: [CreateTable!]!) {\n    createTableBatch(tableGroup: $tableGroup, data: $data) {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateTableBatch($data: [BatchUpdateTableEntry!]!) {\n    updateTableBatch(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateTableBatch($data: [BatchUpdateTableEntry!]!) {\n    updateTableBatch(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteTableBatch($ids: [ID!]!) {\n    deleteTableBatch(ids: $ids) {\n      count\n    }\n  }\n"): (typeof documents)["\n  mutation deleteTableBatch($ids: [ID!]!) {\n    deleteTableBatch(ids: $ids) {\n      count\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query tableGroup($id: ID!) {\n    tableGroup(id: $id) {\n      id\n      name\n      arrangementCode\n      tables {\n        ...TableItem\n      }\n    }\n  }\n"): (typeof documents)["\n  query tableGroup($id: ID!) {\n    tableGroup(id: $id) {\n      id\n      name\n      arrangementCode\n      tables {\n        ...TableItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($companyID: ID!, $data: CreateUserData!) {\n    createUser(companyID: $companyID, data: $data) {\n      user {\n        username\n        email\n        role\n      }\n      password\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($companyID: ID!, $data: CreateUserData!) {\n    createUser(companyID: $companyID, data: $data) {\n      user {\n        username\n        email\n        role\n      }\n      password\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($id: String!) {\n    deleteUser(id: $id) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($id: String!, $data: UpdateUserData!) {\n    updateUser(id: $id, data: $data) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($id: String!, $data: UpdateUserData!) {\n    updateUser(id: $id, data: $data) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User($id: String!) {\n    user(id: $id) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n"): (typeof documents)["\n  query User($id: String!) {\n    user(id: $id) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UsersCount($filter: UserFilter) {\n    usersCount(filter: $filter)\n  }\n"): (typeof documents)["\n  query UsersCount($filter: UserFilter) {\n    usersCount(filter: $filter)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Users($offset: Int!, $limit: Int!, $filter: UserFilter) {\n    users(offset: $offset, limit: $limit, filter: $filter) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n"): (typeof documents)["\n  query Users($offset: Int!, $limit: Int!, $filter: UserFilter) {\n    users(offset: $offset, limit: $limit, filter: $filter) {\n      id\n      firstName\n      lastName\n      username\n      email\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DailyInvoiceReport($companyID: ID!) {\n    analytic__invoice_report(companyID: $companyID) {\n      daily {\n        date\n        total\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyInvoiceReport($companyID: ID!) {\n    analytic__invoice_report(companyID: $companyID) {\n      daily {\n        date\n        total\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Analytic__invoice_aggregated_report_by_date(\n    $companyID: ID!\n    $startDate: String!\n    $endDate: String!\n  ) {\n    analytic__invoice_aggregated_report_by_date(\n      companyID: $companyID\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      totalInvoices\n      totalAmount\n    }\n  }\n"): (typeof documents)["\n  query Analytic__invoice_aggregated_report_by_date(\n    $companyID: ID!\n    $startDate: String!\n    $endDate: String!\n  ) {\n    analytic__invoice_aggregated_report_by_date(\n      companyID: $companyID\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      totalInvoices\n      totalAmount\n    }\n  }\n"];
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

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;