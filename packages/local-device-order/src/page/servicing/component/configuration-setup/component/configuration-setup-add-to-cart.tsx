import { useConfigurationSetupContext } from '@packages/local-device-order/page/servicing/component/configuration-setup/context/configuration-setup-context.ts';
import { useStore } from 'zustand';
import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import { useCompanyCurrency } from '@packages/core/company/company-context.ts';
import { formatCurrency } from '@packages/core/utils/currency-formatter.ts';
import {
  LineProduct,
  LineProductImpl,
} from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { MenuProductConfigurationValueItemFragment } from '@packages/network-graphql/graphql/types/graphql.ts';
import { useCallback } from 'react';

const calculateTotalPrice = (
  menuProduct: MenuProductItemFragment,
  configurations: Map<string, string[]>
) => {
  let totalPrice = 0;
  const configurationValues: MenuProductConfigurationValueItemFragment[] = [];

  const configValues = menuProduct.configurations.map((itemFragment) =>
    getFragmentData(MenuProductConfigurationFragment, itemFragment)
  );
  for (const [configId, configValueIds] of configurations.entries()) {
    const productConfiguration = configValues.find(
      (configValue) => configValue.id === configId
    );

    if (!productConfiguration) {
      continue;
    }

    const productConfigurationValues = getFragmentData(
      MenuProductConfigurationValueFragment,
      productConfiguration.values
    );

    for (const configValueId of configValueIds) {
      const configValue = productConfigurationValues.find(
        (configValue) => configValue.id === configValueId
      );

      if (!configValue) {
        continue;
      }

      configurationValues.push(configValue);
      totalPrice += configValue.price;
    }
  }

  return { totalPrice, configurationValues };
};

const ConfigurationSetupAddToCart = (props: {
  menuProduct: MenuProductItemFragment;
  addProductToCart: (line: LineProduct) => void;
}) => {
  const { menuProduct, addProductToCart } = props;
  const currency = useCompanyCurrency();
  const configurationSetupStore = useConfigurationSetupContext();

  const configurations = useStore(
    configurationSetupStore,
    (state) => state.configurations
  );

  const { totalPrice, configurationValues } = calculateTotalPrice(
    menuProduct,
    configurations
  );

  const onClick = useCallback(() => {
    addProductToCart(
      new LineProductImpl(
        menuProduct.id,
        configurationValues.map((e) => e.id),
        1
      )
    );
  }, [addProductToCart, configurationValues, menuProduct.id]);

  return (
    <PrimaryButton onClick={onClick}>
      Add to cart {formatCurrency(totalPrice, currency)}
    </PrimaryButton>
  );
};

export default ConfigurationSetupAddToCart;
