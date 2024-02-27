import { graphql } from '@client/graphql/types';
import { useMutation } from '@apollo/client';

const TABLE_UPDATE_BATCH = graphql(`
  mutation updateTableBatch($data: [BatchUpdateTableEntry!]!) {
    updateTableBatch(data: $data) {
      id
    }
  }
`);

export function useTableUpdateBatch() {
  return useMutation(TABLE_UPDATE_BATCH);
}
