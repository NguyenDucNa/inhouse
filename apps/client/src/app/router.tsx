import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoutes from '@client/app/protected-routes.tsx';
import Reports from '@client/page/reports/reports.tsx';
import Dashboard from '@client/page/dashboard/dashboard.tsx';
import BranchList from '@client/page/management/branch/branch-list/branch-list.tsx';
import BranchEdit from '@client/page/management/branch/branch-edit/branch-edit.tsx';
import MenuList from '@client/page/management/menu/menu-list/menu-list.tsx';
import MenuDetail from '@client/page/management/menu/menu-detail/menu-detail.tsx';
import MenuEdit from '@client/page/management/menu/menu-edit/menu-edit.tsx';
import SignIn from '@client/page/auth/signin.tsx';
import { ErrorBoundary } from '@client/app/component/global-error-boundary.tsx';
import App from '@client/app/app.tsx';
import MenuCreate from '@client/page/management/menu/menu-create/menu-create.tsx';
import Root from '@client/app/root.tsx';
import MenuSectionCreate from '@client/page/management/menu/menu-section-create/menu-section-create.tsx';
import MenuProductCreate from '@client/page/management/menu/menu-product-create/menu-product-create.tsx';
import MenuSectionEdit from '@client/page/management/menu/menu-section-edit/menu-section-edit';
import MenuProductConfigurationList from '@client/page/management/menu/menu-product-configuration-list/menu-product-configuration-list.tsx';
import MenuProductConfigurationValueEdit from '@client/page/management/menu/menu-product-configuration-value-edit/menu-product-configuration-value-edit.tsx';
import MenuProductConfigurationValueCreate from '@client/page/management/menu/menu-product-configuration-value-create/menu-product-configuration-value-create.tsx';
import MenuProductConfigurationEdit from '@client/page/management/menu/menu-product-configuration-edit/menu-product-configuration-edit.tsx';
import MenuProductConfigurationAdd from '@client/page/management/menu/menu-product-configuration-add/menu-product-configuration-add.tsx';
import MenuProductEdit from '@client/page/management/menu/menu-product-edit/menu-product-edit';
import BranchCreate from '@client/page/management/branch/branch-create/branch-create.tsx';
import CompanySettings from '@client/page/management/compnay-settings/company-settings.tsx';
import TableGroupList from '@client/page/management/table-group/table-group-list/table-group-list';
import TableGroupEdit from '@client/page/management/table-group/table-group-edit/table-group-edit';
import { TableListEdit } from '@client/page/management/table/table-list/table-list-edit.tsx';
import OrderTab from '@client/page/management/order/order-list/order-tab.tsx';
import { LocalDeviceRouter } from '@packages/local-device-order/router.tsx';
import UserNav from '@client/page/management/user/user-list/user-nav';
import UserDetail from '@client/page/management/user/user-detail/user-detail';
import UserCreate from '@client/page/management/user/user-create/user-create';
import InvoiceManagementList from '@client/page/management/invoice/invoice-list/invoice-management-list';
import InvoiceDetail from '@client/page/management/invoice/invoice-detail/invoice-detail';
import BannerList from '@client/page/management/banner/banner-list/banner-list';
import OverlayBannerCreate from '@client/page/management/banner/banner-create/overlay-banner-create';
import TopBannerCreate from '@client/page/management/banner/banner-create/top-banner-create';
import OverlayBannerUpdate from '@client/page/management/banner/banner-update/overlay-banner-update';
import TopBannerUpdate from '@client/page/management/banner/banner-update/top-banner-update';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <SignIn />,
      },

      {
        element: <ProtectedRoutes />,
        children: [
          {
            element: <App />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                path: 'reports',
                element: <Reports />,
              },
              {
                path: 'branches',
                children: [
                  {
                    path: '',
                    element: <BranchList />,
                  },
                  {
                    path: 'create',
                    element: <BranchCreate />,
                  },
                  {
                    path: ':branchId',
                    element: <BranchEdit />,
                  },
                ],
              },
              {
                path: 'orders',
                children: [
                  {
                    path: '',
                    element: <OrderTab itemsPerPage={5} buttonCount={4} />,
                  },
                ],
              },
              {
                path: 'invoices',
                children: [
                  {
                    path: '',
                    element: <InvoiceManagementList itemsPerPage={5} buttonCount={4} />,
                  },
                  {
                    path: ':invoiceId',
                    element: <InvoiceDetail />,
                  },
                ],
              },
              {
                path: 'banners',
                children: [
                  {
                    path: '',
                    element: <BannerList />,
                  },
                  {
                    path: 'create',
                    children:[
                      {
                        path:'overlay',
                        element: <OverlayBannerCreate />,
                      },
                      {
                        path:'top',
                        element: <TopBannerCreate />,
                      }
                    ]
                    
                  },
                  {
                    path: ':bannerId',
                    children:[
                      {
                        path:'overlay',
                        element: <OverlayBannerUpdate />,
                      },
                      {
                        path:'top',
                        element: <TopBannerUpdate />,
                      }
                    ]
                    
                  }
                ],
              },
              {
                path: 'users',
                children: [
                  {
                    path: '',
                    element: <UserNav itemsPerPage={5} buttonCount={4} />,
                  },
                  {
                    path: ':userId',
                    element: <UserDetail />,
                  },
                  {
                    path: 'create',
                    element: <UserCreate />,
                  },
                ],
              },
              {
                path: 'settings',
                element: <CompanySettings />,
              },
              {
                path: 'menu',
                children: [
                  {
                    index: true,
                    element: <MenuList />,
                  },
                  {
                    path: ':menuId',
                    children: [
                      {
                        index: true,
                        element: <MenuDetail />,
                      },
                      {
                        path: 'edit',
                        element: <MenuEdit />,
                      },
                      {
                        path: 'products',
                        children: [
                          {
                            index: true,
                            element: <Navigate replace to=".." />,
                          },
                          {
                            path: 'create',
                            element: <MenuProductCreate />,
                          },
                          {
                            path: ':productId',
                            children: [
                              {
                                index: true,
                                element: <Navigate replace to=".." />,
                              },
                              {
                                path: 'edit',
                                element: <MenuProductEdit />,
                              },
                              {
                                path: 'configurations',
                                children: [
                                  {
                                    index: true,
                                    element: <MenuProductConfigurationList />,
                                  },
                                  {
                                    path: 'create',
                                    element: <MenuProductConfigurationAdd />,
                                  },
                                  {
                                    path: ':configurationId',
                                    children: [
                                      {
                                        index: true,
                                        element: <Navigate replace to=".." />,
                                      },
                                      {
                                        path: 'edit',
                                        element: (
                                          <MenuProductConfigurationEdit />
                                        ),
                                      },
                                      {
                                        path: 'value/create',
                                        element: (
                                          <MenuProductConfigurationValueCreate />
                                        ),
                                      },
                                      {
                                        path: 'value/:valueId',
                                        element: (
                                          <MenuProductConfigurationValueEdit />
                                        ),
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        path: 'sections',
                        children: [
                          {
                            index: true,
                            element: <Navigate replace to=".." />,
                          },
                          {
                            path: 'create',
                            element: <MenuSectionCreate />,
                          },
                          {
                            path: ':menuSectionId/edit',
                            element: <MenuSectionEdit />,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    path: 'create',
                    element: <MenuCreate />,
                  },
                ],
              },
              {
                path: 'table-groups',
                children: [
                  {
                    index: true,
                    element: <TableGroupList />,
                  },
                  {
                    path: ':tableGroupId',
                    element: <TableGroupEdit />,
                  },
                  {
                    path: ':tableGroupId/tables',
                    element: <TableListEdit />,
                  },
                ],
              },
            ],
          },

          {
            path: 'pos',
            children: [
              {
                path: 'local-device',
                children: LocalDeviceRouter,
              },
            ],
          },
        ],
      },
    ],
  },
]);
