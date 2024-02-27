import { useQuery } from '@apollo/client';
import { graphql } from '@client/graphql/types';

const GET_BRANCH_DETAIL_EDIT = graphql(`
  query BranchDetailEdit($id: ID!) {
    branch(id: $id) {
      name
      address
    }
  }
`);

export function useGetBranch(branchId: string) {
  return useQuery(GET_BRANCH_DETAIL_EDIT, {
    variables: { id: branchId },
  });
}
