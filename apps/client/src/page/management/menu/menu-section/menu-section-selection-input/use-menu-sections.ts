import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

export const MENU_SECTIONS_QUERY = graphql(`
  query GetMenuSections($menuId: ID!) {
    menuSections(menuId: $menuId) {
      ...MenuSectionItem
    }
  }
`);

export function useMenuSections(menuId: string) {
  return useQuery(MENU_SECTIONS_QUERY, { variables: { menuId } });
}
