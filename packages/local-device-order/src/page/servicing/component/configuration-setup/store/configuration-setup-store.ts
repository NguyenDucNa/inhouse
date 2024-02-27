import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';
import { ProductConfigurationType } from '@packages/network-graphql/graphql/types/graphql.ts';

export interface ConfigurationSetupState {
  /** Mapping config id with configuration */
  configurations: Map<string, string[]>;

  /** Mapping config id with configuration type */
  configurationTypes: Map<string, ProductConfigurationType>;

  update: (configurationId: string, valueIds: string[]) => void;
}

export interface ConfigurationSetupProps {
  menuProduct: MenuProductItemFragment;
}

const initConfigurations = (menuProduct: MenuProductItemFragment) => {
  const configurations = new Map<string, string[]>();

  for (const configurationFragment of menuProduct.configurations) {
    const configuration = getFragmentData(
      MenuProductConfigurationFragment,
      configurationFragment
    );

    const configurationValues = configuration.values.map((option) =>
      getFragmentData(MenuProductConfigurationValueFragment, option)
    );

    // set default value for base configuration
    switch (configuration.type) {
      case ProductConfigurationType.Base: {
        // only set one
        configurations.set(
          configuration.id,
          configurationValues.map((option) => option.id).slice(0, 1)
        );
        break;
      }

      case ProductConfigurationType.Option: {
        configurations.set(configuration.id, []);
        break;
      }

      case ProductConfigurationType.Selection:
        configurations.set(
          configuration.id,
          configurationValues.map((option) => option.id).slice(0, 1)
        );
        break;
    }
  }

  return configurations;
};

const initConfigurationTypes = (menuProduct: MenuProductItemFragment) => {
  const configurationTypes = new Map<string, ProductConfigurationType>();

  for (const configurationFragment of menuProduct.configurations) {
    const configuration = getFragmentData(
      MenuProductConfigurationFragment,
      configurationFragment
    );

    configurationTypes.set(configuration.id, configuration.type);
  }

  return configurationTypes;
};

export const createConfigurationSetupStore = (props: ConfigurationSetupProps) =>
  createStore<ConfigurationSetupState>()(
    immer((set) => ({
      configurations: initConfigurations(props.menuProduct),
      configurationTypes: initConfigurationTypes(props.menuProduct),
      update: (configurationId: string, valueIds: string[]) => {
        set((state) => {
          switch (state.configurationTypes.get(configurationId)) {
            case ProductConfigurationType.Base: {
              state.configurations.set(configurationId, valueIds.slice(0, 1));
              break;
            }

            case ProductConfigurationType.Option: {
              state.configurations.set(configurationId, valueIds);
              break;
            }

            case ProductConfigurationType.Selection: {
              state.configurations.set(configurationId, valueIds.slice(0, 1));
              break;
            }
          }
        });
      },
    }))
  );

export type ConfigurationSetupStore = ReturnType<
  typeof createConfigurationSetupStore
>;
