import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const CREATE_MENU_PRODUCT = graphql(`
  mutation CreateMenuProduct($menuId: ID!, $input: CreateMenuProduct) {
    createMenuProduct(menuId: $menuId, input: $input) {
      id
    }
  }
`);

export default function useCreateMenuProduct() {
  return useMutation(CREATE_MENU_PRODUCT, {});
}
