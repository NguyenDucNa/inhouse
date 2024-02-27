import { ReactNode, useRef } from 'react';
import {
  ConfigurationSetupStore,
  ConfigurationSetupProps,
  createConfigurationSetupStore,
} from '@packages/local-device-order/page/servicing/component/configuration-setup/store/configuration-setup-store.ts';
import { ConfigurationSetupContext } from '@packages/local-device-order/page/servicing/component/configuration-setup/context/configuration-setup-context.ts';

export function ConfigurationSetupProvider(
  props: ConfigurationSetupProps & { children: ReactNode }
) {
  const storeRef = useRef<ConfigurationSetupStore>();
  if (!storeRef.current) {
    storeRef.current = createConfigurationSetupStore(props);
  }
  return (
    <ConfigurationSetupContext.Provider value={storeRef.current}>
      {props.children}
    </ConfigurationSetupContext.Provider>
  );
}
