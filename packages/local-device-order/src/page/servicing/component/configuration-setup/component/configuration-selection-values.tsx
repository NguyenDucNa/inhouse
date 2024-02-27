import { MenuProductConfigurationItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';
import MenuSelectionInput from '@packages/ui/form/input/menu-selection-input.tsx';
import { useConfigurationSetupContext } from '@packages/local-device-order/page/servicing/component/configuration-setup/context/configuration-setup-context.ts';
import { useStore } from 'zustand';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';

const ConfigurationSelectionValues = (props: {
  productConfiguration: MenuProductConfigurationItemFragment;
}) => {
  const { productConfiguration } = props;
  const currency = useCompanyCurrency();

  const store = useConfigurationSetupContext();
  const value = useStore(
    store,
    (state) => state.configurations.get(productConfiguration.id) ?? []
  );
  const update = useStore(store, (state) => state.update);

  const configValues = productConfiguration.values.map((itemFragment) =>
    getFragmentData(MenuProductConfigurationValueFragment, itemFragment)
  );
  const selectedConfigValue = configValues.find(
    (configValue) => configValue.id === value[0]
  );

  return (
    <>
      <MenuSelectionInput
        key={productConfiguration.id}
        title={productConfiguration.title}
        data={configValues}
        value={selectedConfigValue}
        onChange={(newValue) => {
          if (newValue) {
            update(productConfiguration.id, [newValue.id]);
          }
        }}
        build={(configValue) => {
          if (!configValue) {
            return {
              id: '',
              name: 'Unselected',
            };
          }

          return {
            id: configValue.id,
            name:
              configValue.name +
              ' (' +
              formatCurrency(configValue.price, currency) +
              ')',
          };
        }}
      />
    </>
  );
};

export default ConfigurationSelectionValues;
