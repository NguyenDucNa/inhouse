import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const CREATE_MENU_PRODUCT_CONFIGURATION_VALUE = graphql(`
  mutation CreateMenuProductConfigurationValue(
    $menuProductConfigurationId: ID!
    $input: CreateMenuProductConfigurationValue!
  ) {
    createMenuProductConfigurationValue(
      menuProductConfigurationId: $menuProductConfigurationId
      input: $input
    ) {
      id
      name
      price
    }
  }
`);

export function useCreateMenuProductConfigurationValue() {
  return useMutation(CREATE_MENU_PRODUCT_CONFIGURATION_VALUE, {});
}
