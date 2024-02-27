import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const UPDATE_MENU_SECTION = graphql(`
  mutation updateMenuSection($id: ID!, $input: UpdateMenuSection!) {
    updateMenuSection(id: $id, input: $input) {
      name
      description
    }
  }
`);

export function useUpdateMenuSection() {
  return useMutation(UPDATE_MENU_SECTION, {});
}
