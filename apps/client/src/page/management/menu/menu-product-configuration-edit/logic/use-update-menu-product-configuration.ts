import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

const UPDATE_MENU_PRODUCT_CONFIGURATION = graphql(`
  mutation UpdateMenuProductConfiguration(
    $id: ID!
    $input: UpdateProductConfiguration!
  ) {
    updateMenuProductConfiguration(id: $id, input: $input) {
      id
      title
      type
    }
  }
`);

export function useUpdateMenuProductConfiguration() {
  return useMutation(UPDATE_MENU_PRODUCT_CONFIGURATION);
}
