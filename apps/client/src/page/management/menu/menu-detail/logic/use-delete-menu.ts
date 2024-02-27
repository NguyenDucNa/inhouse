import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const DELETE_MENU = graphql(`
  mutation DeleteMenu($id: ID!) {
    deleteMenu(id: $id) {
      id
    }
  }
`);

export default function useDeleteMenu() {
  return useMutation(DELETE_MENU, {});
}
