import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

export const GET_MENU_PRODUCT = graphql(`
  query GetMenuProduct($id: ID!) {
    menuProduct(id: $id) {
      ...MenuProductItem
    }
  }
`);

export function useMenuProduct(id: string) {
  return useQuery(GET_MENU_PRODUCT, { variables: { id } });
}
