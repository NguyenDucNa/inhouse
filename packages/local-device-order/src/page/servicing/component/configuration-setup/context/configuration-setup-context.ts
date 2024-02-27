import { createContext, useContext } from 'react';
import { ConfigurationSetupStore } from '@packages/local-device-order/page/servicing/component/configuration-setup/store/configuration-setup-store.ts';

export const ConfigurationSetupContext =
  createContext<ConfigurationSetupStore | null>(null);

export const useConfigurationSetupContext = () => {
  const context = useContext(ConfigurationSetupContext);
  if (context === null) {
    throw new Error(
      'useConfigurationSetupContext must be used within ConfigurationSetupContextProvider'
    );
  }

  return context;
};
