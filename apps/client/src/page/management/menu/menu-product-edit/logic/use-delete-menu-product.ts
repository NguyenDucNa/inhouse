import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const DELETE_MENU_PRODUCT = graphql(`
  mutation DeleteMenuProduct($id: ID!) {
    deleteMenuProduct(id: $id) {
      id
    }
  }
`);

export function useDeleteMenuProduct() {
  return useMutation(DELETE_MENU_PRODUCT);
}
