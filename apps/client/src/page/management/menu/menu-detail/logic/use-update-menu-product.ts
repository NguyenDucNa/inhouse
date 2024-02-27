import { gql, useMutation } from '@apollo/client';
import { MutationUpdateMenuProductArgs } from '@client/graphql/types/graphql.ts';

const UPDATE_MENU_PRODUCT = gql`
  mutation updateMenuProductEdit($id: ID!, $input: UpdateMenuProduct!) {
    updateMenuProduct(id: $id, input: $input) {
      id
      section {
        name
      }
    }
  }
`;

export function useUpdateMenuProduct() {
  return useMutation<MutationUpdateMenuProductArgs>(UPDATE_MENU_PRODUCT);
}
