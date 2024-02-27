import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { MenuProductItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductConfigurationFragment } from '@packages/network-graphql/common/menu-product-configuration-fragment.ts';
import { MenuProductConfigurationValueFragment } from '@packages/network-graphql/common/menu-product-configuration-value-fragment.ts';

export const extractConfigurationValues = (
  lineProduct: LineProduct,
  productMenu: MenuProductItemFragment | null
) => {
  const configurations =
    productMenu?.configurations.map((e) =>
      getFragmentData(MenuProductConfigurationFragment, e)
    ) ?? [];

  const configurationValues = configurations
    .flatMap((e) => e.values)
    .map((e) => getFragmentData(MenuProductConfigurationValueFragment, e));

  return lineProduct.configurationIDs
    .map((configValueId) =>
      configurationValues.find((e) => e.id === configValueId)
    )
    .flatMap((f) => (f ? [f] : []));
};
