import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const UPDATE_MENU = graphql(`
  mutation updateMenuEdit($menuId: ID!, $input: UpdateMenu!) {
    updateMenu(id: $menuId, input: $input) {
      id
      title
    }
  }
`);

export default function useUpdateMenu() {
  return useMutation(UPDATE_MENU);
}
