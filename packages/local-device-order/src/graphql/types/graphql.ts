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

export type LocalDeviceIncompletedOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalDeviceIncompletedOrdersQuery = { __typename?: 'Query', localDeviceIncompletedOrders: Array<{ __typename?: 'LocalDeviceOrder', id: string, state: string, tableOrder?: { __typename?: 'TableOrder', id: string, customTableName?: string | null, table?: { __typename?: 'Table', id: string, name: string, tableGroup: { __typename?: 'TableGroup', id: string, name: string } } | null } | null, data: { __typename?: 'LocalDeviceOrderData', guests: Array<{ __typename?: 'Guest', id: string, name: string }> } }> };

export type LocalDeviceOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalDeviceOrdersQuery = { __typename?: 'Query', localDeviceOrders: Array<{ __typename?: 'LocalDeviceOrder', id: string, state: string, tableOrder?: { __typename?: 'TableOrder', id: string, customTableName?: string | null, table?: { __typename?: 'Table', id: string, name: string, tableGroup: { __typename?: 'TableGroup', id: string, name: string } } | null } | null, data: { __typename?: 'LocalDeviceOrderData', guestCount: number } }> };

export type LocalDeviceOrderStartMutationVariables = Exact<{
  companyId: Scalars['String']['input'];
  data: CreateOrderData;
}>;


export type LocalDeviceOrderStartMutation = { __typename?: 'Mutation', localDeviceOrderStart: { __typename?: 'LocalDeviceOrder', id: string, state: string } };

export type LocalDeviceCreateQueryVariables = Exact<{
  companyId: Scalars['ID']['input'];
  branchId: Scalars['ID']['input'];
}>;


export type LocalDeviceCreateQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'Menu', id: string, title: string }>, tableGroups: Array<{ __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null, tables: Array<{ __typename?: 'Table', id: string, name: string, seats: number, tableGroupId: string }> }> };

export type LocalDeviceStateItemFragment = { __typename?: 'LocalDeviceOrder', id: string, state: string, createdAt: any, updatedAt: any, menu: (
    { __typename?: 'Menu' }
    & { ' $fragmentRefs'?: { 'MenuItemFragment': MenuItemFragment } }
  ), data: { __typename?: 'LocalDeviceOrderData', guests: Array<{ __typename?: 'Guest', id: string, name: string }> }, orderTasks: Array<{ __typename?: 'LocalDeviceOrderTask', id: string, state: string, createdAt: any, updatedAt: any, data: { __typename?: 'LocalDeviceOrderTaskData', guestID: string }, products: Array<{ __typename?: 'OrderProduct', id: string, title: string, quantity: number, menuProductId: string, configurations: Array<{ __typename?: 'OrderProductConfiguration', id: string, title: string, type: string, value: string, price: number, menuProductConfigurationValueId: string }> }> }> } & { ' $fragmentName'?: 'LocalDeviceStateItemFragment' };

export type LocalDeviceOrderCreateOrderTaskMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
  data: CreateOrderTask;
}>;


export type LocalDeviceOrderCreateOrderTaskMutation = { __typename?: 'Mutation', localDeviceOrderCreateOrderTask: { __typename?: 'LocalDeviceOrderTask', id: string, state: string } };

export type LocalDeviceOrderBackStateMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;


export type LocalDeviceOrderBackStateMutation = { __typename?: 'Mutation', localDeviceOrderBackState: { __typename?: 'LocalDeviceOrder', id: string, state: string } };

export type LocalDeviceOrderNextStateMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;


export type LocalDeviceOrderNextStateMutation = { __typename?: 'Mutation', localDeviceOrderNextState: { __typename?: 'LocalDeviceOrder', id: string, state: string } };

export type LocalDeviceStateQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type LocalDeviceStateQuery = { __typename?: 'Query', localDeviceOrder: (
    { __typename?: 'LocalDeviceOrder' }
    & { ' $fragmentRefs'?: { 'LocalDeviceStateItemFragment': LocalDeviceStateItemFragment } }
  ) };

export type LocalDeviceStateSubscribeSubscriptionVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type LocalDeviceStateSubscribeSubscription = { __typename?: 'Subscription', localDeviceOrderUpdateSubscribe?: (
    { __typename?: 'LocalDeviceOrder' }
    & { ' $fragmentRefs'?: { 'LocalDeviceStateItemFragment': LocalDeviceStateItemFragment } }
  ) | null };

export type MenuQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MenuQuery = { __typename?: 'Query', menu: { __typename?: 'Menu', id: string, title: string, menuProducts: Array<{ __typename?: 'MenuProduct', id: string, title: string, configurations: Array<{ __typename?: 'MenuProductConfiguration', id: string, title: string, type: ProductConfigurationType, values: Array<{ __typename?: 'MenuProductConfigurationValue', id: string, name: string, price: number }> }> }> } };

export type InvoicesByOrderQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;


export type InvoicesByOrderQuery = { __typename?: 'Query', invoicesByOrder: Array<{ __typename?: 'Invoice', id: string, total: number, orderId?: string | null, place?: string | null, invoiceLines: Array<{ __typename?: 'InvoiceLine', id: string, title?: string | null, quantity?: number | null, price?: number | null }> } | null> };

export type LocalDeviceOrderCreateInvoiceMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  input: LocalDeviceOrderCreateInvoice;
}>;


export type LocalDeviceOrderCreateInvoiceMutation = { __typename?: 'Mutation', localDeviceOrderCreateInvoice: boolean };

export type BranchItemFragment = { __typename?: 'Branch', id: string, name: string, address: string } & { ' $fragmentName'?: 'BranchItemFragment' };

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

export type TableItemFragment = { __typename?: 'Table', id: string, name: string, seats: number, tableGroupId: string } & { ' $fragmentName'?: 'TableItemFragment' };

export type TableGroupItemFragment = { __typename?: 'TableGroup', id: string, name: string, arrangementCode?: string | null } & { ' $fragmentName'?: 'TableGroupItemFragment' };

export const MenuSectionItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<MenuSectionItemFragment, unknown>;
export const MenuProductConfigurationValueItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<MenuProductConfigurationValueItemFragment, unknown>;
export const MenuProductConfigurationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<MenuProductConfigurationItemFragment, unknown>;
export const MenuProductItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}}]} as unknown as DocumentNode<MenuProductItemFragment, unknown>;
export const MenuItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}}]} as unknown as DocumentNode<MenuItemFragment, unknown>;
export const LocalDeviceStateItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocalDeviceStateItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDeviceOrder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"orderTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guestID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"menuProductId"}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"menuProductConfigurationValueId"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}}]} as unknown as DocumentNode<LocalDeviceStateItemFragment, unknown>;
export const BranchItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BranchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Branch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<BranchItemFragment, unknown>;
export const TableItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Table"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroupId"}}]}}]} as unknown as DocumentNode<TableItemFragment, unknown>;
export const TableGroupItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TableGroupItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TableGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}}]}}]} as unknown as DocumentNode<TableGroupItemFragment, unknown>;
export const LocalDeviceIncompletedOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"localDeviceIncompletedOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceIncompletedOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"tableOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customTableName"}},{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LocalDeviceIncompletedOrdersQuery, LocalDeviceIncompletedOrdersQueryVariables>;
export const LocalDeviceOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"localDeviceOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"tableOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customTableName"}},{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guestCount"}}]}}]}}]}}]} as unknown as DocumentNode<LocalDeviceOrdersQuery, LocalDeviceOrdersQueryVariables>;
export const LocalDeviceOrderStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"localDeviceOrderStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderData"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrderStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<LocalDeviceOrderStartMutation, LocalDeviceOrderStartMutationVariables>;
export const LocalDeviceCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"localDeviceCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tableGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branchID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branchId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arrangementCode"}},{"kind":"Field","name":{"kind":"Name","value":"tables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"seats"}},{"kind":"Field","name":{"kind":"Name","value":"tableGroupId"}}]}}]}}]}}]} as unknown as DocumentNode<LocalDeviceCreateQuery, LocalDeviceCreateQueryVariables>;
export const LocalDeviceOrderCreateOrderTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"localDeviceOrderCreateOrderTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderTask"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrderCreateOrderTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<LocalDeviceOrderCreateOrderTaskMutation, LocalDeviceOrderCreateOrderTaskMutationVariables>;
export const LocalDeviceOrderBackStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"localDeviceOrderBackState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrderBackState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<LocalDeviceOrderBackStateMutation, LocalDeviceOrderBackStateMutationVariables>;
export const LocalDeviceOrderNextStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"localDeviceOrderNextState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrderNextState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<LocalDeviceOrderNextStateMutation, LocalDeviceOrderNextStateMutationVariables>;
export const LocalDeviceStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LocalDeviceState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocalDeviceStateItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocalDeviceStateItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDeviceOrder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"orderTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guestID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"menuProductId"}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"menuProductConfigurationValueId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LocalDeviceStateQuery, LocalDeviceStateQueryVariables>;
export const LocalDeviceStateSubscribeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"LocalDeviceStateSubscribe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrderUpdateSubscribe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocalDeviceStateItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuSectionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfigurationValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductConfigurationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProductConfiguration"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationValueItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuProductItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuSectionItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductConfigurationItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuId"}},{"kind":"Field","name":{"kind":"Name","value":"sectionId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Menu"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuProductItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocalDeviceStateItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDeviceOrder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"orderTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guestID"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"menuProductId"}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"menuProductConfigurationValueId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LocalDeviceStateSubscribeSubscription, LocalDeviceStateSubscribeSubscriptionVariables>;
export const MenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"menu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MenuQuery, MenuQueryVariables>;
export const InvoicesByOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvoicesByOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoicesByOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceLines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<InvoicesByOrderQuery, InvoicesByOrderQueryVariables>;
export const LocalDeviceOrderCreateInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LocalDeviceOrderCreateInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocalDeviceOrderCreateInvoice"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"localDeviceOrderCreateInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<LocalDeviceOrderCreateInvoiceMutation, LocalDeviceOrderCreateInvoiceMutationVariables>;