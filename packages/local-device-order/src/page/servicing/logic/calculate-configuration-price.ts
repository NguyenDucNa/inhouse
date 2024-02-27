import { MenuProductConfigurationValueItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';

export const calculateConfigurationPrice = (
  configValues: MenuProductConfigurationValueItemFragment[],
  quantity: number
) => {
  const configurationPrice = configValues.reduce(
    (prev, curr) => prev + curr.price,
    0
  );
  const total = configurationPrice * quantity;

  return {
    configurationPrice,
    total,
  };
};
