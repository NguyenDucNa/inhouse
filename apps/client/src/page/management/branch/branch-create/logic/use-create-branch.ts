import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

const CREATE_BRANCH_QUERY = graphql(`
  mutation CreateBranch($companyId: ID!, $input: CreateBranch!) {
    createBranch(companyId: $companyId, input: $input) {
      id
    }
  }
`);

export function useCreateBranch() {
  return useMutation(CREATE_BRANCH_QUERY);
}
