import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const UPDATE_COMPANY_SETTINGS_QUERY = graphql(`
  mutation updateCompanySettings($id: ID!, $input: UpdateCompanySettings!) {
    updateCompanySettings(id: $id, input: $input) {
      id
      currency
    }
  }
`);

export function useUpdateCompanySettings() {
  return useMutation(UPDATE_COMPANY_SETTINGS_QUERY, {});
}
