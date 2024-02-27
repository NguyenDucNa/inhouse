import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const GET_MENU_PRODUCT_CONFIGURATION_VALUE = graphql(`
  query MenuProductConfigurationValue($id: ID!) {
    menuProductConfigurationValue(id: $id) {
      id
      name
      price
    }
  }
`);

export function useMenuProductConfigurationValue(id: string) {
  return useQuery(GET_MENU_PRODUCT_CONFIGURATION_VALUE, { variables: { id } });
}
