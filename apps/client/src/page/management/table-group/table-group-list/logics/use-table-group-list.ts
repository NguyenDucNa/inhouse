import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

export const GET_TABLE_GROUPS = graphql(`
  query TableGroupsList($branchID: ID!) {
    tableGroups(branchID: $branchID) {
      ...TableGroupItem
    }
  }
`);

export function useTableGroupList(branchID: string | null | undefined) {
  return useQuery(GET_TABLE_GROUPS, {
    variables: {
      branchID: branchID ?? '',
    },
    skip: !branchID,
  });
}
