import { LineProduct } from '@packages/local-device-order/page/servicing/model/line-product.ts';
import { MenuItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { calculateConfigurationPrice } from '@packages/local-device-order/page/servicing/logic/calculate-configuration-price.ts';
import { extractConfigurationValues } from '@packages/local-device-order/page/servicing/logic/extract-configuration-values.ts';
import { extractProductMenu } from '@packages/local-device-order/page/servicing/logic/extract-product-menu.ts';

export const calculateTotalPrice = (
  lineProduct: LineProduct[],
  menu: MenuItemFragment
) => {
  return (
    lineProduct
      // Extract menu product for line product
      .map((lineProduct) => ({
        lineProduct: lineProduct,
        productMenu: extractProductMenu(menu, lineProduct.productID),
      }))

      // Extracts flatted configuration values for each line product
      .map((e) => ({
        configValues: extractConfigurationValues(e.lineProduct, e.productMenu),
        quantity: e.lineProduct.quantity,
      }))

      // Calculate price for each configuration values
      .map((e) => calculateConfigurationPrice(e.configValues, e.quantity))

      // Sum all price
      .reduce((prev, curr) => prev + curr.total, 0)
  );
};
