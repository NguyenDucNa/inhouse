import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

const CREATE_MENU_PRODUCT_CONFIGURATION = graphql(`
  mutation CreateMenuProductConfiguration(
    $productId: String!
    $input: CreateProductConfiguration!
  ) {
    createMenuProductConfiguration(productId: $productId, input: $input) {
      id
    }
  }
`);

export function useCreateMenuProductConfiguration() {
  return useMutation(CREATE_MENU_PRODUCT_CONFIGURATION);
}
