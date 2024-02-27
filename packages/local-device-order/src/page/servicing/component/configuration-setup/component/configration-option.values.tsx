import { MenuProductConfigurationItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';
import MenuMultipleSelectionInput from '@packages/ui/form/input/menu-multiple-selection-input.tsx';
import { useConfigurationSetupContext } from '@packages/local-device-order/page/servicing/component/configuration-setup/context/configuration-setup-context.ts';
import { useStore } from 'zustand';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';

const ConfigurationOptionsValues = (props: {
  productConfiguration: MenuProductConfigurationItemFragment;
}) => {
  const { productConfiguration } = props;
  const currency = useCompanyCurrency();

  const store = useConfigurationSetupContext();
  const values = useStore(
    store,
    (state) => state.configurations.get(productConfiguration.id) ?? []
  );
  const update = useStore(store, (state) => state.update);

  const configValues = productConfiguration.values.map((itemFragment) =>
    getFragmentData(MenuProductConfigurationValueFragment, itemFragment)
  );
  const selectedConfigValues = values.map((configValueId) =>
    configValues.find((configValue) => configValue.id === configValueId)
  );

  return (
    <>
      <MenuMultipleSelectionInput
        key={productConfiguration.id}
        title={productConfiguration.title}
        data={configValues}
        values={selectedConfigValues}
        onChange={(newValues) => {
          update(
            productConfiguration.id,
            newValues.map((value) => value.id)
          );
        }}
        build={(configValue) => ({
          id: configValue.id,
          name:
            configValue.name +
            ' (' +
            formatCurrency(configValue.price, currency) +
            ')',
        })}
      />
    </>
  );
};

export default ConfigurationOptionsValues;
