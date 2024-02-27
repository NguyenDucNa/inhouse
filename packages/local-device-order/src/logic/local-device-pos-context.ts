import { createContext, useContext } from 'react';
import { LocalDeviceStateItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { MenuItemFragment } from '@packages/network-graphql/graphql/types/graphql.ts';

export interface LocalDevicePosOrderContextData {
  orderState: LocalDeviceStateItemFragment;
  menu: MenuItemFragment;
}

export const LocalDevicePosOrderContext = createContext<
  LocalDevicePosOrderContextData | undefined
>(undefined);

export function useLocalDevicePosOrderContext() {
  const context = useContext(LocalDevicePosOrderContext);

  if (context === undefined) {
    throw new Error(
      'useOrderRootContext must be used within a OrderRootContextProvider'
    );
  }

  return context;
}
