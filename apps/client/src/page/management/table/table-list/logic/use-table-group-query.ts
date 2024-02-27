import { graphql } from '@client/graphql/types';
import { useQuery } from '@apollo/client';

export const TABLE_GROUP_QUERY = graphql(`
  query tableGroup($id: ID!) {
    tableGroup(id: $id) {
      id
      name
      arrangementCode
      tables {
        ...TableItem
      }
    }
  }
`);

export function useTableGroupQuery(id: string) {
  return useQuery(TABLE_GROUP_QUERY, { variables: { id } });
}
