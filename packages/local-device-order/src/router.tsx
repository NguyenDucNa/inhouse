import { RouteObject } from 'react-router-dom';
import LocalDevicePosStarting from '@packages/local-device-order/page/starting/local-device-pos-starting.tsx';
import LocalDeviceList from '@packages/local-device-order/continue/local-devive-continue.tsx';
import LocalDeviceOrderCreate from '@packages/local-device-order/create/local-device-order-create.tsx';
import LocalDeviceOrder from '@packages/local-device-order/page/local-device-order.tsx';

export const LocalDeviceRouter: RouteObject[] = [
  {
    index: true,
    element: <LocalDevicePosStarting />,
  },
  {
    path: 'continue',
    element: <LocalDeviceList />,
  },
  {
    path: 'create',
    element: <LocalDeviceOrderCreate />,
  },
  {
    path: 'order/:orderId',
    element: <LocalDeviceOrder />,
  },
];
