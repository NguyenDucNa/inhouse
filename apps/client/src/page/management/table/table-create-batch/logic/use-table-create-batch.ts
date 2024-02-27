import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';
import { TABLE_GROUP_QUERY } from '@client/page/management/table/table-list/logic/use-table-group-query.ts';

const CREATE_TABLE_BATCH_MUTATION = graphql(`
  mutation createTableBatch($tableGroup: ID!, $data: [CreateTable!]!) {
    createTableBatch(tableGroup: $tableGroup, data: $data) {
      count
    }
  }
`);

export function useTableCreateBatch() {
  return useMutation(CREATE_TABLE_BATCH_MUTATION, {
    refetchQueries: [TABLE_GROUP_QUERY],
  });
}
