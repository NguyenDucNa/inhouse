import TableRow from '@packages/ui/table/table-row.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import CheckBoxInput from '@packages/ui/form/input/check-box-input.tsx';
import { SelectionTableDataSource } from '@packages/ui/table/selection-table-type.ts';
import React from 'react';

export default function SelectionTableRow<T>(props: {
  item: T;
  dataSource: SelectionTableDataSource<T>;
  children?: React.ReactNode;
}) {
  const { selected, setSelected } = props.dataSource;
  const isSelected = selected.has(props.item);

  return (
    <TableRow selected={isSelected} compact={true}>
      <TableRowColumn>
        <CheckBoxInput
          value={isSelected}
          onChange={(_, newValue) => {
            if (newValue) {
              setSelected(new Set([...selected, props.item]));
            } else {
              const newSet = new Set(selected);
              newSet.delete(props.item);
              setSelected(newSet);
            }
          }}
        />
      </TableRowColumn>
      {props.children}
    </TableRow>
  );
}
