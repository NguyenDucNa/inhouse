import {
  MenuItemFragment,
  MenuProductItemFragment,
} from '@packages/local-device-order/graphql/types/graphql.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductFragment } from '@packages/network-graphql/common/menu-product-fragment.ts';

export const extractProductMenu = (
  menu: MenuItemFragment,
  productId: string
): MenuProductItemFragment | null => {
  const productFragment = menu.menuProducts
    .map((productFragment) =>
      getFragmentData(MenuProductFragment, productFragment)
    )
    .find((p) => p.id === productId);

  if (!productFragment) {
    return null;
  }

  return productFragment;
};
