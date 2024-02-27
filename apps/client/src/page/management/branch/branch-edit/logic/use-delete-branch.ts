import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const DELETE_BRANCH_QUERY = graphql(`
  mutation deleteBranch($id: ID!) {
    deleteBranch(id: $id) {
      id
    }
  }
`);

export function useDeleteBranch() {
  return useMutation(DELETE_BRANCH_QUERY);
}
