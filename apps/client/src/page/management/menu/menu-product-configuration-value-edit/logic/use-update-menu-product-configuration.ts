import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const UPDATE_MENU_PRODUCT_CONFIGURATION_VALUE = graphql(`
  mutation UpdateMenuProductConfigurationValue(
    $id: ID!
    $input: UpdateMenuProductConfigurationValue!
  ) {
    updateMenuProductConfigurationValue(id: $id, input: $input) {
      id
      name
      price
    }
  }
`);

export function useUpdateMenuProductConfigurationValue() {
  return useMutation(UPDATE_MENU_PRODUCT_CONFIGURATION_VALUE);
}
