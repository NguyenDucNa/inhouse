import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const GET_MENU_DETAIL = graphql(`
  query GetMenuDetail($id: ID!) {
    menu(id: $id) {
      id
      companyId
      title
      sections {
        ...MenuSectionItem
      }
      menuProducts {
        ...MenuProductItem
      }
    }
  }
`);

export function useGetMenu(menuId: string) {
  return useQuery(GET_MENU_DETAIL, {
    variables: {
      id: menuId,
    },
  });
}
