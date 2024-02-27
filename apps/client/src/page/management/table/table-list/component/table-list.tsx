import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import { TableItemFragment } from '@client/graphql/types/graphql.ts';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { ButtonSize } from '@packages/ui/button/button-size.ts';
import {
  SelectionTableDataSource,
  useSelectionTableDataSource,
} from '@packages/ui/table/selection-table-type.ts';
import SelectionTable from '@packages/ui/table/selection-table.tsx';
import SelectionTableRow from '@packages/ui/table/selection-table-row.tsx';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import TableEditBatch from '@client/page/management/table/table-edit-batch/table-edit-batch.tsx';
import { useDeleteTableBatch } from '@client/page/management/table/table-list/logic/use-delete-table-batch.ts';
import { objectSortByString } from '@client/module/utils/sort.ts';

export default function TableList(props: {
  loading: boolean;
  data: TableItemFragment[];
}) {
  const dialog = useDialog();

  const selectionDataSource = useSelectionTableDataSource<TableItemFragment>(
    props.data
  );

  const { selected, editingMode } = selectionDataSource;
  const batchDelete = useDeleteTableBatch(Array.from(selected));

  if (props.data.length == 0) {
    return <p>No tables. Please create one table.</p>;
  }

  return (
    <SelectionTable
      dataSource={selectionDataSource}
      loading={props.loading}
      data={props.data.sort(objectSortByString((table) => table.name))}
      build={(table) => {
        return (
          <Row key={table.id} table={table} dataSource={selectionDataSource} />
        );
      }}
    >
      <TableHeaderColumn alignment={TableCellAlignment.Left}>
        {editingMode ? (
          <div className="space-x-2">
            <SecondaryButton
              buttonSize={ButtonSize.semiSmall}
              onClick={() => {
                dialog.showComponent((onClose) => (
                  <TableEditBatch
                    tables={Array.from(selected)}
                    onClose={onClose}
                  />
                ));
              }}
            >
              Bulk edit
            </SecondaryButton>
            <SecondaryButton
              buttonSize={ButtonSize.semiSmall}
              onClick={() => {
                batchDelete();
              }}
            >
              Delete
            </SecondaryButton>
          </div>
        ) : (
          'Name'
        )}
      </TableHeaderColumn>
      <TableHeaderColumn alignment={TableCellAlignment.Right}>
        Seats
      </TableHeaderColumn>
    </SelectionTable>
  );
}

function Row(props: {
  table: TableItemFragment;
  dataSource: SelectionTableDataSource<TableItemFragment>;
}) {
  return (
    <SelectionTableRow item={props.table} dataSource={props.dataSource}>
      <TableRowColumn>{props.table.name}</TableRowColumn>
      <TableRowColumn alignment={TableCellAlignment.Right}>
        {props.table.seats}
      </TableRowColumn>
    </SelectionTableRow>
  );
}
