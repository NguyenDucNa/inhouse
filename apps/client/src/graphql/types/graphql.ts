/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Date: { input: any; output: any; }
};

export type AggregatedInvoiceReport = {
  __typename?: 'AggregatedInvoiceReport';
  totalAmount: Scalars['Int']['output'];
  totalInvoices: Scalars['Int']['output'];
};

export type Allergy = {
  __typename?: 'Allergy';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AlwaysTimeRule = {
  __typename?: 'AlwaysTimeRule';
  type?: Maybe<TimeRuleType>;
};

export type Banner = {
  __typename?: 'Banner';
  bannerId: Scalars['String']['output'];
  clickCount: Scalars['Int']['output'];
  content: ContentUnion;
  enabled: Scalars['Boolean']['output'];
  timeRule: TimeRuleUnion;
  title: Scalars['String']['output'];
  viewCount: Scalars['Int']['output'];
};

export type BannerStatusFilter = {
  enabled: Scalars['Boolean']['input'];
};

export type BatchUpdateTableEntry = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  seats: Scalars['Int']['input'];
  tableGroupId: Scalars['ID']['input'];
};

export type Branch = {
  __typename?: 'Branch';
  address: Scalars['String']['output'];
  companyId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  settings: CompanySettings;
};

export type CompanySettings = {
  __typename?: 'CompanySettings';
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export enum ContentType {
  Overlay = 'OVERLAY',
  Top = 'TOP'
}

export type ContentUnion = OverlayContent | TopContent;

export type CreateAllergy = {
  name: Scalars['String']['input'];
};

export type CreateBannerContent = {
  image?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  type: ContentType;
};

export type CreateBannerData = {
  enabled: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateBannerTimeRule = {
  end?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  type: TimeRuleType;
};

export type CreateBatchResult = {
  __typename?: 'CreateBatchResult';
  count: Scalars['Int']['output'];
};

export type CreateBranch = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  name: Scalars['ID']['input'];
};

export type CreateMenu = {
  title: Scalars['String']['input'];
};

export type CreateMenuProduct = {
  basePrice: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  images: Array<Scalars['String']['input']>;
  ingredients: Array<Scalars['String']['input']>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateMenuProductConfigurationValue = {
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type CreateMenuSection = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateOrderData = {
  branchID: Scalars['String']['input'];
  customTableName?: InputMaybe<Scalars['String']['input']>;
  guestCount: Scalars['Int']['input'];
  menuId: Scalars['String']['input'];
  tableID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderProduct = {
  configurationValuesIds: Array<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type CreateOrderTask = {
  guestID: Scalars['ID']['input'];
  products: Array<CreateOrderProduct>;
};

export type CreateProductConfiguration = {
  title: Scalars['String']['input'];
  type: CreateProductConfigurationType;
};

export enum CreateProductConfigurationType {
  Option = 'OPTION',
  Selection = 'SELECTION'
}

export type CreateTable = {
  name: Scalars['String']['input'];
  seats: Scalars['Int']['input'];
};

export type CreateTableGroup = {
  arrangementCode?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateUserData = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  role: Array<UserRole>;
  username: Scalars['String']['input'];
};

export type CreateUserResult = {
  __typename?: 'CreateUserResult';
  password: Scalars['String']['output'];
  user: User;
};

export type DailyInvoiceReport = {
  __typename?: 'DailyInvoiceReport';
  count: Scalars['Int']['output'];
  date: Scalars['String']['output'];
  total: Scalars['Float']['output'];
};

export type DeleteBatchResult = {
  __typename?: 'DeleteBatchResult';
  count: Scalars['Int']['output'];
};

export type GridLayout = {
  __typename?: 'GridLayout';
  mesh?: Maybe<TableGridLayout>;
};

export type GridLayoutInput = {
  mesh?: InputMaybe<TableGridLayoutInput>;
};

export type Guest = {
  __typename?: 'Guest';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Invoice = {
  __typename?: 'Invoice';
  branchId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoiceLines: Array<InvoiceLine>;
  orderId?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type InvoiceFilter = {
  branchId?: InputMaybe<Scalars['String']['input']>;
};

export type InvoiceLine = {
  __typename?: 'InvoiceLine';
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type InvoiceReport = {
  __typename?: 'InvoiceReport';
  daily: Array<DailyInvoiceReport>;
};

export type LocalDeviceOrder = Order & {
  __typename?: 'LocalDeviceOrder';
  createdAt: Scalars['Date']['output'];
  data: LocalDeviceOrderData;
  id: Scalars['String']['output'];
  menu: Menu;
  orderTasks: Array<LocalDeviceOrderTask>;
  state: Scalars['String']['output'];
  tableOrder?: Maybe<TableOrder>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type LocalDeviceOrderCreateInvoice = {
  invoices: Array<LocalDeviceOrderInvoiceRecord>;
};

export type LocalDeviceOrderData = {
  __typename?: 'LocalDeviceOrderData';
  guestCount: Scalars['Int']['output'];
  guests: Array<Guest>;
};

export type LocalDeviceOrderInvoiceLineData = {
  configurationValueIds: Array<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type LocalDeviceOrderInvoiceRecord = {
  data: Array<LocalDeviceOrderInvoiceLineData>;
  guestID: Scalars['String']['input'];
};

export type LocalDeviceOrderTask = OrderTask & {
  __typename?: 'LocalDeviceOrderTask';
  createdAt: Scalars['Date']['output'];
  data: LocalDeviceOrderTaskData;
  id: Scalars['String']['output'];
  products: Array<OrderProduct>;
  state: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type LocalDeviceOrderTaskData = {
  __typename?: 'LocalDeviceOrderTaskData';
  guestID: Scalars['ID']['output'];
};

export type Menu = {
  __typename?: 'Menu';
  companyId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  menuProducts: Array<MenuProduct>;
  sections: Array<MenuSection>;
  title: Scalars['String']['output'];
};

export type MenuProduct = {
  __typename?: 'MenuProduct';
  companyId: Scalars['String']['output'];
  configurations: Array<MenuProductConfiguration>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  ingredients: Array<Scalars['String']['output']>;
  menuId: Scalars['String']['output'];
  section?: Maybe<MenuSection>;
  sectionId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type MenuProductConfiguration = {
  __typename?: 'MenuProductConfiguration';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  type: ProductConfigurationType;
  values: Array<MenuProductConfigurationValue>;
};

export type MenuProductConfigurationValue = {
  __typename?: 'MenuProductConfigurationValue';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type MenuSection = {
  __typename?: 'MenuSection';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  menuId: Scalars['String']['output'];
  menuProducts?: Maybe<Array<MenuProduct>>;
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  analytic__scanInvoices: StatusResult;
  createAllergy: Allergy;
  createBanner: Banner;
  createBranch: Branch;
  createCompany: Company;
  createMenu: Menu;
  createMenuProduct: MenuProduct;
  createMenuProductConfiguration: MenuProductConfiguration;
  createMenuProductConfigurationValue: MenuProductConfigurationValue;
  createMenuSection: MenuSection;
  createTable: Table;
  createTableBatch: CreateBatchResult;
  createTableGroup: TableGroup;
  createUser: CreateUserResult;
  deleteAllergy?: Maybe<Allergy>;
  deleteBranch?: Maybe<Branch>;
  deleteMenu?: Maybe<Menu>;
  deleteMenuProduct?: Maybe<MenuProduct>;
  deleteMenuProductConfiguration: Scalars['Boolean']['output'];
  deleteMenuProductConfigurationValue?: Maybe<MenuProductConfigurationValue>;
  deleteMenuSection: Scalars['Boolean']['output'];
  deleteTable: Table;
  deleteTableBatch: DeleteBatchResult;
  deleteTableGroup: TableGroup;
  deleteUser: User;
  invoiceDelete: Invoice;
  localDeviceOrderBackState: LocalDeviceOrder;
  localDeviceOrderCancel: LocalDeviceOrder;
  localDeviceOrderCreateInvoice: Scalars['Boolean']['output'];
  localDeviceOrderCreateOrderTask: LocalDeviceOrderTask;
  localDeviceOrderNextState: LocalDeviceOrder;
  localDeviceOrderStart: LocalDeviceOrder;
  payOrderUsingCash: Order;
  ping: Scalars['Boolean']['output'];
  updateAllergy: Allergy;
  updateBanner: Banner;
  updateBranch: Branch;
  updateCompanySettings: CompanySettings;
  updateMenu: Menu;
  updateMenuProduct: MenuProduct;
  updateMenuProductConfiguration: MenuProductConfiguration;
  updateMenuProductConfigurationValue: MenuProductConfigurationValue;
  updateMenuSection: MenuSection;
  updateTable: Table;
  updateTableBatch: Array<Table>;
  updateTableGroup: TableGroup;
  updateUser: User;
};


export type MutationAnalytic__ScanInvoicesArgs = {
  companyID: Scalars['ID']['input'];
};


export type MutationCreateAllergyArgs = {
  input: CreateAllergy;
};


export type MutationCreateBannerArgs = {
  contentInput: CreateBannerContent;
  input: CreateBannerData;
  timeRuleInput: CreateBannerTimeRule;
};


export type MutationCreateBranchArgs = {
  companyId: Scalars['ID']['input'];
  input: CreateBranch;
};


export type MutationCreateCompanyArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateMenuArgs = {
  companyId: Scalars['ID']['input'];
  input: CreateMenu;
};


export type MutationCreateMenuProductArgs = {
  input?: InputMaybe<CreateMenuProduct>;
  menuId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateMenuProductConfigurationArgs = {
  input: CreateProductConfiguration;
  productId: Scalars['String']['input'];
};


export type MutationCreateMenuProductConfigurationValueArgs = {
  input: CreateMenuProductConfigurationValue;
  menuProductConfigurationId: Scalars['ID']['input'];
};


export type MutationCreateMenuSectionArgs = {
  input: CreateMenuSection;
  menuId: Scalars['ID']['input'];
};


export type MutationCreateTableArgs = {
  data?: InputMaybe<CreateTable>;
  tableGroup: Scalars['ID']['input'];
};


export type MutationCreateTableBatchArgs = {
  data: Array<CreateTable>;
  tableGroup: Scalars['ID']['input'];
};


export type MutationCreateTableGroupArgs = {
  branchID: Scalars['ID']['input'];
  input: CreateTableGroup;
};


export type MutationCreateUserArgs = {
  companyID: Scalars['ID']['input'];
  data?: InputMaybe<CreateUserData>;
};


export type MutationDeleteAllergyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBranchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuProductConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuProductConfigurationValueArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTableArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTableBatchArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteTableGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInvoiceDeleteArgs = {
  invoiceID: Scalars['ID']['input'];
};


export type MutationLocalDeviceOrderBackStateArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationLocalDeviceOrderCancelArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationLocalDeviceOrderCreateInvoiceArgs = {
  input?: InputMaybe<LocalDeviceOrderCreateInvoice>;
  orderId: Scalars['ID']['input'];
};


export type MutationLocalDeviceOrderCreateOrderTaskArgs = {
  data?: InputMaybe<CreateOrderTask>;
  orderId: Scalars['String']['input'];
};


export type MutationLocalDeviceOrderNextStateArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationLocalDeviceOrderStartArgs = {
  companyId: Scalars['String']['input'];
  data?: InputMaybe<CreateOrderData>;
};


export type MutationPayOrderUsingCashArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationUpdateAllergyArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateAllergy>;
};


export type MutationUpdateBannerArgs = {
  bannerId: Scalars['String']['input'];
  contentInput: UpdateBannerContent;
  input: UpdateBannerData;
  timeRuleInput: UpdateBannerTimeRule;
};


export type MutationUpdateBranchArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateBranch>;
};


export type MutationUpdateCompanySettingsArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCompanySettings;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMenu;
};


export type MutationUpdateMenuProductArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateMenuProduct>;
};


export type MutationUpdateMenuProductConfigurationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateProductConfiguration;
};


export type MutationUpdateMenuProductConfigurationValueArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMenuProductConfigurationValue;
};


export type MutationUpdateMenuSectionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMenuSection;
};


export type MutationUpdateTableArgs = {
  data?: InputMaybe<UpdateTable>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTableBatchArgs = {
  data: Array<BatchUpdateTableEntry>;
};


export type MutationUpdateTableGroupArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTableGroup;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UpdateUserData>;
  id: Scalars['String']['input'];
};

export type Order = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  menu: Menu;
  orderTasks: Array<OrderTask>;
  state: Scalars['String']['output'];
  tableOrder?: Maybe<TableOrder>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type OrderFilter = {
  state?: InputMaybe<Scalars['String']['input']>;
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  configurations: Array<OrderProductConfiguration>;
  id: Scalars['String']['output'];
  menuProductId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type OrderProductConfiguration = {
  __typename?: 'OrderProductConfiguration';
  id: Scalars['String']['output'];
  menuProductConfigurationValueId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OrderTask = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['String']['output'];
  products: Array<OrderProduct>;
  state: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type OverlayContent = {
  __typename?: 'OverlayContent';
  image?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ContentType>;
};

export type PreSignUpload = {
  __typename?: 'PreSignUpload';
  origin: Scalars['String']['output'];
  originPath: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
  thumbnailPath: Scalars['String']['output'];
};

export enum ProductConfigurationType {
  Base = 'BASE',
  Option = 'OPTION',
  Selection = 'SELECTION'
}

export type Query = {
  __typename?: 'Query';
  analytic__invoice_aggregated_report_by_date: AggregatedInvoiceReport;
  analytic__invoice_report: InvoiceReport;
  banner: Banner;
  banners: Array<Banner>;
  branch: Branch;
  branches: Array<Branch>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  companySettings?: Maybe<CompanySettings>;
  currentUser?: Maybe<User>;
  invoice: Invoice;
  invoiceCount: Scalars['Int']['output'];
  invoicesByBranch: Array<Invoice>;
  invoicesByOrder: Array<Maybe<Invoice>>;
  localDeviceIncompletedOrders: Array<LocalDeviceOrder>;
  localDeviceOrder: LocalDeviceOrder;
  localDeviceOrders: Array<LocalDeviceOrder>;
  menu: Menu;
  menuProduct: MenuProduct;
  menuProductConfiguration?: Maybe<MenuProductConfiguration>;
  menuProductConfigurationValue?: Maybe<MenuProductConfigurationValue>;
  menuProductConfigurations: Array<MenuProductConfiguration>;
  menuSection?: Maybe<MenuSection>;
  menuSections: Array<MenuSection>;
  menus: Array<Menu>;
  order: Order;
  orders: Array<Order>;
  ordersCount: Scalars['Int']['output'];
  preSignUpload: PreSignUpload;
  searchCompanies: Array<Company>;
  table?: Maybe<Table>;
  tableGroup?: Maybe<TableGroup>;
  tableGroups: Array<TableGroup>;
  tables: Array<Table>;
  user?: Maybe<User>;
  users: Array<User>;
  usersCount: Scalars['Int']['output'];
  version?: Maybe<Scalars['String']['output']>;
};


export type QueryAnalytic__Invoice_Aggregated_Report_By_DateArgs = {
  companyID: Scalars['ID']['input'];
  endDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};


export type QueryAnalytic__Invoice_ReportArgs = {
  companyID: Scalars['ID']['input'];
};


export type QueryBannerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBannersArgs = {
  filter?: InputMaybe<BannerStatusFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryBranchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBranchesArgs = {
  companyId: Scalars['ID']['input'];
};


export type QueryCompaniesArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanySettingsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInvoiceArgs = {
  invoiceID: Scalars['ID']['input'];
};


export type QueryInvoiceCountArgs = {
  filter: InvoiceFilter;
};


export type QueryInvoicesByBranchArgs = {
  branchId?: InputMaybe<Scalars['String']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryInvoicesByOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryLocalDeviceOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuProductConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuProductConfigurationValueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuProductConfigurationsArgs = {
  productId: Scalars['ID']['input'];
};


export type QueryMenuSectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuSectionsArgs = {
  menuId: Scalars['ID']['input'];
};


export type QueryMenusArgs = {
  companyId: Scalars['ID']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryOrdersCountArgs = {
  filter?: InputMaybe<OrderFilter>;
};


export type QueryPreSignUploadArgs = {
  filename: Scalars['String']['input'];
};


export type QuerySearchCompaniesArgs = {
  query: Scalars['String']['input'];
};


export type QueryTableArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableGroupsArgs = {
  branchID: Scalars['ID']['input'];
};


export type QueryTablesArgs = {
  tableGroup: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryUsersCountArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type RangeTimeRule = {
  __typename?: 'RangeTimeRule';
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  type?: Maybe<TimeRuleType>;
};

export type StatusResult = {
  __typename?: 'StatusResult';
  status: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  localDeviceOrderUpdateSubscribe?: Maybe<LocalDeviceOrder>;
  supported: Scalars['Boolean']['output'];
};


export type SubscriptionLocalDeviceOrderUpdateSubscribeArgs = {
  id: Scalars['ID']['input'];
};

export type Table = {
  __typename?: 'Table';
  createdAt: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seats: Scalars['Int']['output'];
  tableGroup: TableGroup;
  tableGroupId: Scalars['ID']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TableGridEntry = {
  __typename?: 'TableGridEntry';
  column: Scalars['Int']['output'];
  row: Scalars['Int']['output'];
  tableId: Scalars['ID']['output'];
};

export type TableGridEntryInput = {
  column: Scalars['Int']['input'];
  row: Scalars['Int']['input'];
  tableId: Scalars['ID']['input'];
};

export type TableGridLayout = {
  __typename?: 'TableGridLayout';
  columns: Scalars['Int']['output'];
  entries: Array<TableGridEntry>;
  rows: Scalars['Int']['output'];
};

export type TableGridLayoutInput = {
  columns: Scalars['Int']['input'];
  entries: Array<TableGridEntryInput>;
  rows: Scalars['Int']['input'];
};

export type TableGroup = {
  __typename?: 'TableGroup';
  arrangementCode?: Maybe<Scalars['String']['output']>;
  gridLayout: GridLayout;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables: Array<Table>;
};

export type TableOrder = {
  __typename?: 'TableOrder';
  customTableName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  table?: Maybe<Table>;
  tableId?: Maybe<Scalars['ID']['output']>;
};

export enum TimeRuleType {
  Always = 'ALWAYS',
  RangeTime = 'RANGE_TIME'
}

export type TimeRuleUnion = AlwaysTimeRule | RangeTimeRule;

export type TopContent = {
  __typename?: 'TopContent';
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ContentType>;
};

export type UpdateAllergy = {
  name: Scalars['String']['input'];
};

export type UpdateBannerContent = {
  image?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  type: ContentType;
};

export type UpdateBannerData = {
  enabled: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type UpdateBannerTimeRule = {
  end?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['String']['input']>;
  type: TimeRuleType;
};

export type UpdateBranch = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateCompanySettings = {
  currency: Scalars['String']['input'];
};

export type UpdateMenu = {
  title: Scalars['String']['input'];
};

export type UpdateMenuProduct = {
  description: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  images: Array<Scalars['String']['input']>;
  ingredients: Array<Scalars['String']['input']>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateMenuProductConfigurationValue = {
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type UpdateMenuSection = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateProductConfiguration = {
  title: Scalars['String']['input'];
  type: ProductConfigurationType;
};

export type UpdateTable = {
  name: Scalars['String']['input'];
  seats: Scalars['Int']['input'];
  tableGroupId: Scalars['ID']['input'];
};

export type UpdateTableGroup = {
  arrangementCode?: InputMaybe<Scalars['String']['input']>;
  gridLayout: GridLayoutInput;
  name: Scalars['String']['input'];
};

export type UpdateUserData = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  role: Array<UserRole>;
  status: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type UserFilter = {
  status: Scalars['Boolean']['input'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Waiter = 'WAITER'
}

export type BranchItemFragment = { __typename?: 'Branch', id: string, name: string, address: string } & { ' $fragmentName'?: 'BranchItemFragment' };

export type InvoiceItemFragment = { __typename?: 'Invoice', id: string, total: number, place?: string | null } & { ' $fragmentName'?: 'InvoiceItemFragment' };

export type TableItemFragment = { __typename?: 'Table', id: string, name: string, seats: number, tableGroupId: string } & { ' $fragmentName'?: 'TableItemFragment' };

export type TableGroupItemFragment = { __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null } & { ' $fragmentName'?: 'TableGroupItemFragment' };

export type GetPreSignUploadQueryVariables = Exact<{
  filename: Scalars['String']['input'];
}>;


export type GetPreSignUploadQuery = { __typename?: 'Query', preSignUpload: { __typename?: 'PreSignUpload', origin: string, originPath: string, thumbnail: string, thumbnailPath: string } };

export type CreateBannerMutationVariables = Exact<{
  input: CreateBannerData;
  timeRuleInput: CreateBannerTimeRule;
  contentInput: CreateBannerContent;
}>;


export type CreateBannerMutation = { __typename?: 'Mutation', createBanner: { __typename?: 'Banner', title: string, viewCount: number, clickCount: number, enabled: boolean, content: { __typename: 'OverlayContent', type?: ContentType | null, image?: string | null } | { __typename: 'TopContent', type?: ContentType | null, text?: string | null }, timeRule: { __typename: 'AlwaysTimeRule', type?: TimeRuleType | null } | { __typename: 'RangeTimeRule', type?: TimeRuleType | null, start?: string | null, end?: string | null } } };

export type BannersQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<BannerStatusFilter>;
}>;


export type BannersQuery = { __typename?: 'Query', banners: Array<{ __typename?: 'Banner', bannerId: string, title: string, viewCount: number, clickCount: number, enabled: boolean, content: { __typename: 'OverlayContent', type?: ContentType | null, image?: string | null } | { __typename: 'TopContent', type?: ContentType | null, text?: string | null }, timeRule: { __typename: 'AlwaysTimeRule', type?: TimeRuleType | null } | { __typename: 'RangeTimeRule', type?: TimeRuleType | null, start?: string | null, end?: string | null } }> };

export type UpdateBannerMutationVariables = Exact<{
  bannerId: Scalars['String']['input'];
  input: UpdateBannerData;
  timeRuleInput: UpdateBannerTimeRule;
  contentInput: UpdateBannerContent;
}>;


export type UpdateBannerMutation = { __typename?: 'Mutation', updateBanner: { __typename?: 'Banner', title: string, viewCount: number, clickCount: number, enabled: boolean, content: { __typename: 'OverlayContent', image?: string | null } | { __typename: 'TopContent', text?: string | null }, timeRule: { __typename: 'AlwaysTimeRule', type?: TimeRuleType | null } | { __typename: 'RangeTimeRule', start?: string | null, end?: string | null } } };

export type BannerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BannerQuery = { __typename?: 'Query', banner: { __typename?: 'Banner', bannerId: string, title: string, viewCount: number, clickCount: number, enabled: boolean, content: { __typename: 'OverlayContent', type?: ContentType | null, image?: string | null } | { __typename: 'TopContent', type?: ContentType | null, text?: string | null }, timeRule: { __typename: 'AlwaysTimeRule', type?: TimeRuleType | null } | { __typename: 'RangeTimeRule', type?: TimeRuleType | null, start?: string | null, end?: string | null } } };

export type CreateBranchMutationVariables = Exact<{
  companyId: Scalars['ID']['input'];
  input: CreateBranch;
}>;


export type CreateBranchMutation = { __typename?: 'Mutation', createBranch: { __typename?: 'Branch', id: string } };

export type DeleteBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteBranchMutation = { __typename?: 'Mutation', deleteBranch?: { __typename?: 'Branch', id: string } | null };

export type BranchDetailEditQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BranchDetailEditQuery = { __typename?: 'Query', branch: { __typename?: 'Branch', name: string, address: string } };

export type UpdateBranchMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateBranch;
}>;


export type UpdateBranchMutation = { __typename?: 'Mutation', updateBranch: { __typename?: 'Branch', name: string, address: string } };

export type CompanyBranchesQueryVariables = Exact<{
  companyId: Scalars['ID']['input'];
}>;


export type CompanyBranchesQuery = { __typename?: 'Query', branches: Array<(
    { __typename?: 'Branch' }
    & { ' $fragmentRefs'?: { 'BranchItemFragment': BranchItemFragment } }
  )> };

export type UpdateCompanySettingsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateCompanySettings;
}>;


export type UpdateCompanySettingsMutation = { __typename?: 'Mutation', updateCompanySettings: { __typename?: 'CompanySettings', id: string, currency: string } };

export type InvoiceQueryVariables = Exact<{
  invoiceID: Scalars['ID']['input'];
}>;


export type InvoiceQuery = { __typename?: 'Query', invoice: { __typename?: 'Invoice', id: string, total: number, orderId?: string | null, place?: string | null, invoiceLines: Array<{ __typename?: 'InvoiceLine', id: string, title?: string | null, subtitle?: string | null, quantity?: number | null, price?: number | null, total?: number | null }> } };

export type InvoicesByBranchQueryVariables = Exact<{
  branchId?: InputMaybe<Scalars['String']['input']>;
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type InvoicesByBranchQuery = { __typename?: 'Query', invoicesByBranch: Array<(
    { __typename?: 'Invoice' }
    & { ' $fragmentRefs'?: { 'InvoiceItemFragment': InvoiceItemFragment } }
  )> };

export type InvoiceCountQueryVariables = Exact<{
  branchId: Scalars['String']['input'];
}>;


export type InvoiceCountQuery = { __typename?: 'Query', invoiceCount: number };

export type CreateMenuMutationVariables = Exact<{
  companyId: Scalars['ID']['input'];
  input: CreateMenu;
}>;


export type CreateMenuMutation = { __typename?: 'Mutation', createMenu: { __typename?: 'Menu', id: string, title: string } };

export type DeleteMenuMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMenuMutation = { __typename?: 'Mutation', deleteMenu?: { __typename?: 'Menu', id: string } | null };

export type GetMenuProductDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMenuProductDetailQuery = { __typename?: 'Query', menuProduct: { __typename?: 'MenuProduct', id: string, section?: { __typename?: 'MenuSection', id: string, name: string, description: string } | null, configurations: Array<{ __typename?: 'MenuProductConfiguration', id: string, type: ProductConfigurationType, title: string, values: Array<{ __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number }> }> } };

export type GetMenuDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMenuDetailQuery = { __typename?: 'Query', menu: { __typename?: 'Menu', id: string, companyId: string, title: string, sections: Array<(
      { __typename?: 'MenuSection' }
      & { ' $fragmentRefs'?: { 'MenuSectionItemFragment': MenuSectionItemFragment } }
    )>, menuProducts: Array<(
      { __typename?: 'MenuProduct' }
      & { ' $fragmentRefs'?: { 'MenuProductItemFragment': MenuProductItemFragment } }
    )> } };

export type GetSectionsQueryVariables = Exact<{
  menuId: Scalars['ID']['input'];
}>;


export type GetSectionsQuery = { __typename?: 'Query', menuSections: Array<{ __typename?: 'MenuSection', id: string, name: string }> };

export type UpdateMenuProductEditMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateMenuProduct;
}>;


export type UpdateMenuProductEditMutation = { __typename?: 'Mutation', updateMenuProduct: { __typename?: 'MenuProduct', id: string, section?: { __typename?: 'MenuSection', name: string } | null } };

export type UpdateMenuEditMutationVariables = Exact<{
  menuId: Scalars['ID']['input'];
  input: UpdateMenu;
}>;


export type UpdateMenuEditMutation = { __typename?: 'Mutation', updateMenu: { __typename?: 'Menu', id: string, title: string } };

export type MenuListQueryVariables = Exact<{
  companyId: Scalars['ID']['input'];
}>;


export type MenuListQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'Menu', id: string, title: string }> };

export type CreateMenuProductConfigurationMutationVariables = Exact<{
  productId: Scalars['String']['input'];
  input: CreateProductConfiguration;
}>;


export type CreateMenuProductConfigurationMutation = { __typename?: 'Mutation', createMenuProductConfiguration: { __typename?: 'MenuProductConfiguration', id: string } };

export type DeleteMenuProductConfigurationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMenuProductConfigurationMutation = { __typename?: 'Mutation', deleteMenuProductConfiguration: boolean };

export type GetMenuProductConfigurationQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMenuProductConfigurationQuery = { __typename?: 'Query', menuProductConfiguration?: (
    { __typename?: 'MenuProductConfiguration' }
    & { ' $fragmentRefs'?: { 'MenuProductConfigurationItemFragment': MenuProductConfigurationItemFragment } }
  ) | null };

export type UpdateMenuProductConfigurationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateProductConfiguration;
}>;


export type UpdateMenuProductConfigurationMutation = { __typename?: 'Mutation', updateMenuProductConfiguration: { __typename?: 'MenuProductConfiguration', id: string, title: string, type: ProductConfigurationType } };

export type GetProductConfigurationQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type GetProductConfigurationQuery = { __typename?: 'Query', menuProductConfigurations: Array<{ __typename?: 'MenuProductConfiguration', id: string, type: ProductConfigurationType, title: string, values: Array<{ __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number }> }> };

export type CreateMenuProductConfigurationValueMutationVariables = Exact<{
  menuProductConfigurationId: Scalars['ID']['input'];
  input: CreateMenuProductConfigurationValue;
}>;


export type CreateMenuProductConfigurationValueMutation = { __typename?: 'Mutation', createMenuProductConfigurationValue: { __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number } };

export type DeleteMenuProductConfigurationValueMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMenuProductConfigurationValueMutation = { __typename?: 'Mutation', deleteMenuProductConfigurationValue?: { __typename?: 'MenuProductConfigurationValue', id: string } | null };

export type MenuProductConfigurationValueQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MenuProductConfigurationValueQuery = { __typename?: 'Query', menuProductConfigurationValue?: { __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number } | null };

export type UpdateMenuProductConfigurationValueMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateMenuProductConfigurationValue;
}>;


export type UpdateMenuProductConfigurationValueMutation = { __typename?: 'Mutation', updateMenuProductConfigurationValue: { __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number } };

export type CreateMenuProductMutationVariables = Exact<{
  menuId: Scalars['ID']['input'];
  input?: InputMaybe<CreateMenuProduct>;
}>;


export type CreateMenuProductMutation = { __typename?: 'Mutation', createMenuProduct: { __typename?: 'MenuProduct', id: string } };

export type DeleteMenuProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMenuProductMutation = { __typename?: 'Mutation', deleteMenuProduct?: { __typename?: 'MenuProduct', id: string } | null };

export type GetMenuProductQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMenuProductQuery = { __typename?: 'Query', menuProduct: (
    { __typename?: 'MenuProduct' }
    & { ' $fragmentRefs'?: { 'MenuProductItemFragment': MenuProductItemFragment } }
  ) };

export type UpdateMenuProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateMenuProduct;
}>;


export type UpdateMenuProductMutation = { __typename?: 'Mutation', updateMenuProduct: { __typename?: 'MenuProduct', id: string } };

export type CreateMenuSectionMutationVariables = Exact<{
  menuId: Scalars['ID']['input'];
  input: CreateMenuSection;
}>;


export type CreateMenuSectionMutation = { __typename?: 'Mutation', createMenuSection: { __typename?: 'MenuSection', id: string, name: string } };

export type DeleteMenuSectionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMenuSectionMutation = { __typename?: 'Mutation', deleteMenuSection: boolean };

export type GetMenuSectionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMenuSectionQuery = { __typename?: 'Query', menuSection?: { __typename?: 'MenuSection', id: string, name: string, description: string } | null };

export type UpdateMenuSectionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateMenuSection;
}>;


export type UpdateMenuSectionMutation = { __typename?: 'Mutation', updateMenuSection: { __typename?: 'MenuSection', name: string, description: string } };

export type GetMenuSectionsQueryVariables = Exact<{
  menuId: Scalars['ID']['input'];
}>;


export type GetMenuSectionsQuery = { __typename?: 'Query', menuSections: Array<(
    { __typename?: 'MenuSection' }
    & { ' $fragmentRefs'?: { 'MenuSectionItemFragment': MenuSectionItemFragment } }
  )> };

export type OrdersCountQueryVariables = Exact<{
  filter?: InputMaybe<OrderFilter>;
}>;


export type OrdersCountQuery = { __typename?: 'Query', ordersCount: number };

export type OrdersQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<OrderFilter>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'LocalDeviceOrder', id: string, state: string, data: { __typename?: 'LocalDeviceOrderData', guests: Array<{ __typename?: 'Guest', id: string, name: string }> }, tableOrder?: { __typename?: 'TableOrder', id: string, customTableName?: string | null, table?: { __typename?: 'Table', id: string, name: string, tableGroup: { __typename?: 'TableGroup', id: string, name: string } } | null } | null }> };

export type CreateTableGroupMutationVariables = Exact<{
  branchID: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  arrangementCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTableGroupMutation = { __typename?: 'Mutation', createTableGroup: { __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null } };

export type DeleteTableGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteTableGroupMutation = { __typename?: 'Mutation', deleteTableGroup: { __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null } };

export type UpdateTableGroupMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  arrangementCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateTableGroupMutation = { __typename?: 'Mutation', updateTableGroup: { __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null } };

export type TableGroupsListQueryVariables = Exact<{
  branchID: Scalars['ID']['input'];
}>;


export type TableGroupsListQuery = { __typename?: 'Query', tableGroups: Array<(
    { __typename?: 'TableGroup' }
    & { ' $fragmentRefs'?: { 'TableGroupItemFragment': TableGroupItemFragment } }
  )> };

export type CreateTableBatchMutationVariables = Exact<{
  tableGroup: Scalars['ID']['input'];
  data: Array<CreateTable> | CreateTable;
}>;


export type CreateTableBatchMutation = { __typename?: 'Mutation', createTableBatch: { __typename?: 'CreateBatchResult', count: number } };

export type UpdateTableBatchMutationVariables = Exact<{
  data: Array<BatchUpdateTableEntry> | BatchUpdateTableEntry;
}>;


export type UpdateTableBatchMutation = { __typename?: 'Mutation', updateTableBatch: Array<{ __typename?: 'Table', id: string }> };

export type DeleteTableBatchMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type DeleteTableBatchMutation = { __typename?: 'Mutation', deleteTableBatch: { __typename?: 'DeleteBatchResult', count: number } };

export type TableGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TableGroupQuery = { __typename?: 'Query', tableGroup?: { __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null, tables: Array<(
      { __typename?: 'Table' }
      & { ' $fragmentRefs'?: { 'TableItemFragment': TableItemFragment } }
    )> } | null };

export type CreateUserMutationVariables = Exact<{
  companyID: Scalars['ID']['input'];
  data: CreateUserData;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserResult', password: string, user: { __typename?: 'User', username: string, email: string, role: Array<UserRole> } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string, username: string } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: UpdateUserData;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, firstName: string, lastName: string, username: string, email: string, status: boolean } };

export type UserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName: string, lastName: string, username: string, email: string, status: boolean } | null };

export type UsersCountQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
}>;


export type UsersCountQuery = { __typename?: 'Query', usersCount: number };

export type UsersQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, username: string, email: string, status: boolean }> };

export type DailyInvoiceReportQueryVariables = Exact<{
  companyID: Scalars['ID']['input'];
}>;


export type DailyInvoiceReportQuery = { __typename?: 'Query', analytic__invoice_report: { __typename?: 'InvoiceReport', daily: Array<{ __typename?: 'DailyInvoiceReport', date: string, total: number, count: number }> } };

export type Analytic__Invoice_Aggregated_Report_By_DateQueryVariables = Exact<{
  companyID: Scalars['ID']['input'];
  startDate: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
}>;


export type Analytic__Invoice_Aggregated_Report_By_DateQuery = { __typename?: 'Query', analytic__invoice_aggregated_report_by_date: { __typename?: 'AggregatedInvoiceReport', totalInvoices: number, totalAmount: number } };

export type MenuItemFragment = { __typename?: 'Menu', id: string, title: string, menuProducts: Array<(
    { __typename?: 'MenuProduct' }
    & { ' $fragmentRefs'?: { 'MenuProductItemFragment': MenuProductItemFragment } }
  )> } & { ' $fragmentName'?: 'MenuItemFragment' };

export type MenuProductConfigurationItemFragment = { __typename?: 'MenuProductConfiguration', id: string, title: string, type: ProductConfigurationType, values: Array<(
    { __typename?: 'MenuProductConfigurationValue' }
    & { ' $fragmentRefs'?: { 'MenuProductConfigurationValueItemFragment': MenuProductConfigurationValueItemFragment } }
  )> } & { ' $fragmentName'?: 'MenuProductConfigurationItemFragment' };

export type MenuProductConfigurationValueItemFragment = { __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number } & { ' $fragmentName'?: 'MenuProductConfigurationValueItemFragment' };

export type MenuProductItemFragment = { __typename?: 'MenuProduct', id: string, title: string, description: string, images: Array<string>, enabled: boolean, ingredients: Array<string>, menuId: string, sectionId?: string | null, section?: (
    { __typename?: 'MenuSection' }
    & { ' $fragmentRefs'?: { 'MenuSectionItemFragment': MenuSectionItemFragment } }
  ) | null, configurations: Array<(
    { __typename?: 'MenuProductConfiguration' }
    & { ' $fragmentRefs'?: { 'MenuProductConfigurationItemFragment': MenuProductConfigurationItemFragment } }
  )> } & { ' $fragmentName'?: 'MenuProductItemFragment' };

export type MenuSectionItemFragment = { __typename?: 'MenuSection', id: string, name: string, description: string } & { ' $fragmentName'?: 'MenuSectionItemFragment' };

export const BranchItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BranchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Branch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<BranchItemFragment, unknown>;
export const InvoiceItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvoiceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Invoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"place"}}]}}]} as unknown as DocumentNode<InvoiceItemFragment, unknown>;
export const TableItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Table"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroupId"}}]}}]} as unknown as DocumentNode<TableItemFragment, unknown>;
export const TableGroupItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableGroupItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}}]}}]} as unknown as DocumentNode<TableGroupItemFragment, unknown>;
export const MenuSectionItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<MenuSectionItemFragment, unknown>;
export const MenuProductConfigurationValueItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<MenuProductConfigurationValueItemFragment, unknown>;
export const MenuProductConfigurationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<MenuProductConfigurationItemFragment, unknown>;
export const MenuProductItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}}]} as unknown as DocumentNode<MenuProductItemFragment, unknown>;
export const MenuItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}}]} as unknown as DocumentNode<MenuItemFragment, unknown>;
export const GetPreSignUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPreSignUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preSignUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"originPath"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailPath"}}]}}]}}]} as unknown as DocumentNode<GetPreSignUploadQuery, GetPreSignUploadQueryVariables>;
export const CreateBannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBannerData"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeRuleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBannerTimeRule"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBannerContent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeRuleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeRuleInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"clickCount"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverlayContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeRule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RangeTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AlwaysTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateBannerMutation, CreateBannerMutationVariables>;
export const BannersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Banners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BannerStatusFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banners"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bannerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"clickCount"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverlayContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeRule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RangeTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AlwaysTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BannersQuery, BannersQueryVariables>;
export const UpdateBannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bannerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBannerData"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeRuleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBannerTimeRule"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBannerContent"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bannerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bannerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"timeRuleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeRuleInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"clickCount"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverlayContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeRule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RangeTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AlwaysTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateBannerMutation, UpdateBannerMutationVariables>;
export const BannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Banner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bannerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"clickCount"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TopContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverlayContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeRule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RangeTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AlwaysTimeRule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BannerQuery, BannerQueryVariables>;
export const CreateBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBranch"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateBranchMutation, CreateBranchMutationVariables>;
export const DeleteBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteBranchMutation, DeleteBranchMutationVariables>;
export const BranchDetailEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BranchDetailEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<BranchDetailEditQuery, BranchDetailEditQueryVariables>;
export const UpdateBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBranch"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<UpdateBranchMutation, UpdateBranchMutationVariables>;
export const CompanyBranchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CompanyBranches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BranchItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BranchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Branch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<CompanyBranchesQuery, CompanyBranchesQueryVariables>;
export const UpdateCompanySettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCompanySettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCompanySettings"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompanySettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]} as unknown as DocumentNode<UpdateCompanySettingsMutation, UpdateCompanySettingsMutationVariables>;
export const InvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Invoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"invoiceID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"invoiceID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"invoiceID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<InvoiceQuery, InvoiceQueryVariables>;
export const InvoicesByBranchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvoicesByBranch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoicesByBranch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvoiceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvoiceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Invoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"place"}}]}}]} as unknown as DocumentNode<InvoicesByBranchQuery, InvoicesByBranchQueryVariables>;
export const InvoiceCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvoiceCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoiceCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"branchId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}}}]}}]}]}}]} as unknown as DocumentNode<InvoiceCountQuery, InvoiceCountQueryVariables>;
export const CreateMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMenu"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateMenuMutation, CreateMenuMutationVariables>;
export const DeleteMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMenuMutation, DeleteMenuMutationVariables>;
export const GetMenuProductDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuProductDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMenuProductDetailQuery, GetMenuProductDetailQueryVariables>;
export const GetMenuDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}}]} as unknown as DocumentNode<GetMenuDetailQuery, GetMenuDetailQueryVariables>;
export const GetSectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuSections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"menuId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSectionsQuery, GetSectionsQueryVariables>;
export const UpdateMenuProductEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMenuProductEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMenuProduct"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenuProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMenuProductEditMutation, UpdateMenuProductEditMutationVariables>;
export const UpdateMenuEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMenuEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMenu"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<UpdateMenuEditMutation, UpdateMenuEditMutationVariables>;
export const MenuListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MenuList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<MenuListQuery, MenuListQueryVariables>;
export const CreateMenuProductConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMenuProductConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductConfiguration"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMenuProductConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateMenuProductConfigurationMutation, CreateMenuProductConfigurationMutationVariables>;
export const DeleteMenuProductConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMenuProductConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMenuProductConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteMenuProductConfigurationMutation, DeleteMenuProductConfigurationMutationVariables>;
export const GetMenuProductConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuProductConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuProductConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}}]} as unknown as DocumentNode<GetMenuProductConfigurationQuery, GetMenuProductConfigurationQueryVariables>;
export const UpdateMenuProductConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMenuProductConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductConfiguration"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenuProductConfiguration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateMenuProductConfigurationMutation, UpdateMenuProductConfigurationMutationVariables>;
export const GetProductConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductConfiguration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuProductConfigurations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductConfigurationQuery, GetProductConfigurationQueryVariables>;
export const CreateMenuProductConfigurationValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMenuProductConfigurationValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"menuProductConfigurationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMenuProductConfigurationValue"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMenuProductConfigurationValue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"menuProductConfigurationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"menuProductConfigurationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<CreateMenuProductConfigurationValueMutation, CreateMenuProductConfigurationValueMutationVariables>;
export const DeleteMenuProductConfigurationValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMenuProductConfigurationValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMenuProductConfigurationValue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMenuProductConfigurationValueMutation, DeleteMenuProductConfigurationValueMutationVariables>;
export const MenuProductConfigurationValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MenuProductConfigurationValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuProductConfigurationValue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<MenuProductConfigurationValueQuery, MenuProductConfigurationValueQueryVariables>;
export const UpdateMenuProductConfigurationValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMenuProductConfigurationValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMenuProductConfigurationValue"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenuProductConfigurationValue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<UpdateMenuProductConfigurationValueMutation, UpdateMenuProductConfigurationValueMutationVariables>;
export const CreateMenuProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMenuProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMenuProduct"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMenuProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"menuId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateMenuProductMutation, CreateMenuProductMutationVariables>;
export const DeleteMenuProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMenuProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMenuProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteMenuProductMutation, DeleteMenuProductMutationVariables>;
export const GetMenuProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}}]} as unknown as DocumentNode<GetMenuProductQuery, GetMenuProductQueryVariables>;
export const UpdateMenuProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMenuProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMenuProduct"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenuProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateMenuProductMutation, UpdateMenuProductMutationVariables>;
export const CreateMenuSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMenuSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateMenuSection"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMenuSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"menuId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateMenuSectionMutation, CreateMenuSectionMutationVariables>;
export const DeleteMenuSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMenuSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMenuSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteMenuSectionMutation, DeleteMenuSectionMutationVariables>;
export const GetMenuSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMenuSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetMenuSectionQuery, GetMenuSectionQueryVariables>;
export const UpdateMenuSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMenuSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateMenuSection"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMenuSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<UpdateMenuSectionMutation, UpdateMenuSectionMutationVariables>;
export const GetMenuSectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenuSections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuSections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"menuId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"menuId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<GetMenuSectionsQuery, GetMenuSectionsQueryVariables>;
export const OrdersCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrdersCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ordersCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}]}]}}]} as unknown as DocumentNode<OrdersCountQuery, OrdersCountQueryVariables>;
export const OrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Orders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"tableOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customTableName"}},{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDeviceOrder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;
export const CreateTableGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTableGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"arrangementCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTableGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchID"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"arrangementCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"arrangementCode"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}}]}}]}}]} as unknown as DocumentNode<CreateTableGroupMutation, CreateTableGroupMutationVariables>;
export const DeleteTableGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTableGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTableGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}}]}}]}}]} as unknown as DocumentNode<DeleteTableGroupMutation, DeleteTableGroupMutationVariables>;
export const UpdateTableGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTableGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"arrangementCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTableGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"arrangementCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"arrangementCode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gridLayout"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mesh"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rows"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"columns"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"entries"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"row"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"column"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"tableId"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}}]}}]}}]} as unknown as DocumentNode<UpdateTableGroupMutation, UpdateTableGroupMutationVariables>;
export const TableGroupsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TableGroupsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableGroupItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableGroupItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}}]}}]} as unknown as DocumentNode<TableGroupsListQuery, TableGroupsListQueryVariables>;
export const CreateTableBatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTableBatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tableGroup"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTable"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTableBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tableGroup"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tableGroup"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<CreateTableBatchMutation, CreateTableBatchMutationVariables>;
export const UpdateTableBatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTableBatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BatchUpdateTableEntry"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTableBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateTableBatchMutation, UpdateTableBatchMutationVariables>;
export const DeleteTableBatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTableBatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTableBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<DeleteTableBatchMutation, DeleteTableBatchMutationVariables>;
export const TableGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tableGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}},{"kind":"Field","name":{"kind":"Name","value":"tables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TableItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Table"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroupId"}}]}}]} as unknown as DocumentNode<TableGroupQuery, TableGroupQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"password"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UsersCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}]}]}}]} as unknown as DocumentNode<UsersCountQuery, UsersCountQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const DailyInvoiceReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DailyInvoiceReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"analytic__invoice_report"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daily"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<DailyInvoiceReportQuery, DailyInvoiceReportQueryVariables>;
export const Analytic__Invoice_Aggregated_Report_By_DateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Analytic__invoice_aggregated_report_by_date"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"analytic__invoice_aggregated_report_by_date"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyID"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalInvoices"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}}]}}]}}]} as unknown as DocumentNode<Analytic__Invoice_Aggregated_Report_By_DateQuery, Analytic__Invoice_Aggregated_Report_By_DateQueryVariables>;