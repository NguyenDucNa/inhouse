import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

export const CREATE_TABLE_GROUP = graphql(`
  mutation CreateTableGroup(
    $branchID: ID!
    $name: String!
    $arrangementCode: String
  ) {
    createTableGroup(
      branchID: $branchID
      input: { name: $name, arrangementCode: $arrangementCode }
    ) {
      id
      name
      arrangementCode
    }
  }
`);

export function useCreateTableGroup() {
  return useMutation(CREATE_TABLE_GROUP, { refetchQueries: ['TableGroups'] });
}
