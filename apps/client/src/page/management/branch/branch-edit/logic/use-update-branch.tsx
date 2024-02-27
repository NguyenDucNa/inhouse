import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const UPDATE_BRANCH = graphql(`
  mutation updateBranch($id: ID!, $input: UpdateBranch!) {
    updateBranch(id: $id, input: $input) {
      name
      address
    }
  }
`);

export function useUpdateBranch() {
  return useMutation(UPDATE_BRANCH, {});
}
