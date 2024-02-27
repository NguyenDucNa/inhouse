import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

export const DELETE_TABLE_GROUP = graphql(`
  mutation DeleteTableGroup($id: ID!) {
    deleteTableGroup(id: $id) {
      id
      name
      arrangementCode
    }
  }
`);

export function useDeleteTableGroup() {
  return useMutation(DELETE_TABLE_GROUP, {});
}
