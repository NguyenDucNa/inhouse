import { MenuItemFragment } from '@packages/local-device-order/graphql/types/graphql.ts';
import { getFragmentData } from '@packages/local-device-order/graphql/types';
import { MenuProductFragment } from '@packages/network-graphql/common/menu-product-fragment.ts';
import { MenuSectionFragment } from '@packages/network-graphql/common/menu-section-fragment.ts';
import { MenuSection } from '@packages/local-device-order/page/servicing/model/menu-section.ts';

export default function FromMenuItemFragmentToSections(
  menu: MenuItemFragment
): MenuSection[] {
  return [
    ...new Map(
      menu.menuProducts.map((productFragment) => {
        const product = getFragmentData(MenuProductFragment, productFragment);
        const section = getFragmentData(MenuSectionFragment, product.section);

        return [
          section?.id ?? '',
          { id: section?.id ?? '', name: section?.name ?? '' },
        ];
      })
    ).values(),
  ];
}
