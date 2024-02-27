import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

export const UPDATE_MENU_PRODUCT = graphql(`
  mutation UpdateMenuProduct($id: ID!, $input: UpdateMenuProduct!) {
    updateMenuProduct(id: $id, input: $input) {
      id
    }
  }
`);

export function useUpdateMenuProduct() {
  return useMutation(UPDATE_MENU_PRODUCT);
}
