import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const DELETE_MENU_PRODUCT_CONFIGURATION_VALUE = graphql(`
  mutation DeleteMenuProductConfigurationValue($id: ID!) {
    deleteMenuProductConfigurationValue(id: $id) {
      id
    }
  }
`);

export function useDeleteMenuProductConfigurationValue() {
  return useMutation(DELETE_MENU_PRODUCT_CONFIGURATION_VALUE);
}
