import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const CREATE_MENU_SECTION = graphql(`
  mutation createMenuSection($menuId: ID!, $input: CreateMenuSection!) {
    createMenuSection(menuId: $menuId, input: $input) {
      id
      name
    }
  }
`);

export function useCreateMenuSection() {
  return useMutation(CREATE_MENU_SECTION, {});
}
