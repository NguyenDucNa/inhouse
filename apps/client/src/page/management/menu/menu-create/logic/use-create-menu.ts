import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

export const CREATE_MENU_MUTATION = graphql(`
  mutation CreateMenu($companyId: ID!, $input: CreateMenu!) {
    createMenu(companyId: $companyId, input: $input) {
      id
      title
    }
  }
`);

export function useCreateMenu() {
  return useMutation(CREATE_MENU_MUTATION);
}
