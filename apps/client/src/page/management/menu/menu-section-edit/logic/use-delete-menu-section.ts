import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const DELETE_MENU_SECTION = graphql(`
  mutation DeleteMenuSection($id: ID!) {
    deleteMenuSection(id: $id)
  }
`);

export default function useDeleteMenuSection() {
  return useMutation(DELETE_MENU_SECTION, {});
}
