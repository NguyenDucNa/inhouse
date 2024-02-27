import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

export const GET_MENU_PRODUCT_CONFIGURATION = graphql(`
  query GetMenuProductConfiguration($id: ID!) {
    menuProductConfiguration(id: $id) {
      ...MenuProductConfigurationItem
    }
  }
`);

export function useMenuProductConfiguration(id: string) {
  return useQuery(GET_MENU_PRODUCT_CONFIGURATION, { variables: { id } });
}
