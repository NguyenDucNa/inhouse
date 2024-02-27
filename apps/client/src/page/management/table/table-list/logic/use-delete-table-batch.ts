import { TableItemFragment } from '@client/graphql/types/graphql.ts';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { graphql } from '@client/graphql/types';
import { TABLE_GROUP_QUERY } from '@client/page/management/table/table-list/logic/use-table-group-query.ts';

export const DELETE_TABLE_BATCH = graphql(`
  mutation deleteTableBatch($ids: [ID!]!) {
    deleteTableBatch(ids: $ids) {
      count
    }
  }
`);

export function useDeleteTableBatch(tables: TableItemFragment[]) {
  const dialog = useDialog();
  const [deleteMutation] = useMutation(DELETE_TABLE_BATCH, {
    refetchQueries: [TABLE_GROUP_QUERY],
  });

  return useCallback(() => {
    dialog.destructAlert({
      title: `Delete tables (${tables.length} items)`,
      message: 'Are you sure? This action can not be undone.',
      textButton: 'Delete',
      onConfirm: async () => {
        await deleteMutation({
          variables: { ids: tables.map((table) => table.id) },
        });
      },
    });
  }, [deleteMutation, dialog, tables]);
}
