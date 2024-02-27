import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const DELETE_MENU_PRODUCT_CONFIGURATION = graphql(`
  mutation DeleteMenuProductConfiguration($id: ID!) {
    deleteMenuProductConfiguration(id: $id)
  }
`);

export default function useDeleteMenuProductConfiguration() {
  return useMutation(DELETE_MENU_PRODUCT_CONFIGURATION);
}
