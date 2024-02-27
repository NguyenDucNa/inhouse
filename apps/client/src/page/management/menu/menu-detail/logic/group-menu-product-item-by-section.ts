import {
  MenuProductItemFragment,
  MenuSectionItemFragment,
} from '@client/graphql/types/graphql.ts';
import { getFragmentData } from '@client/graphql/types';
import { MenuSectionFragment } from '@packages/network-graphql/common/menu-section-fragment.ts';

export interface ProductMenuBySection {
  section: MenuSectionItemFragment | null | undefined;
  items: MenuProductItemFragment[];
}

export function groupMenuProductItemsBySection(
  items: readonly MenuProductItemFragment[],
  sections: readonly MenuSectionItemFragment[]
): ProductMenuBySection[] {
  const map: Record<string, ProductMenuBySection> = {};

  map[''] = { section: null, items: [] };
  for (const section of sections) {
    map[section.id] = {
      section: section,
      items: [],
    };
  }

  for (const item of items) {
    const section = getFragmentData(MenuSectionFragment, item.section);
    const key = section?.id ?? '';

    map[key].items.push(item);
  }

  if (map[''].items.length === 0) {
    delete map[''];
  }

  return Object.values(map);
}
