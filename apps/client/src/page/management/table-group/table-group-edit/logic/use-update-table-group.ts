import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

export const UPDATE_TABLE_GROUP = graphql(`
  mutation UpdateTableGroup(
    $id: ID!
    $name: String!
    $arrangementCode: String
  ) {
    updateTableGroup(
      id: $id
      input: {
        name: $name
        arrangementCode: $arrangementCode
        gridLayout: {
          mesh: {
            rows: 0
            columns: 0
            entries: { row: 0, column: 0, tableId: "" }
          }
        }
      }
    ) {
      id
      name
      arrangementCode
    }
  }
`);

export function useUpdateTableGroup() {
  return useMutation(UPDATE_TABLE_GROUP, {});
}
