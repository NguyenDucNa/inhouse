import React, { useLayoutEffect } from 'react';
import Table from '@packages/ui/table/table.tsx';
import { SelectionTableDataSource } from '@packages/ui/table/selection-table-type.ts';
import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import CheckBoxInput from '@packages/ui/form/input/check-box-input.tsx';

export default function SelectionTable<T>(props: {
  children: React.ReactNode;
  data: T[];
  build: (data: T, index: number) => React.ReactNode;
  loading?: boolean;
  error?: string | undefined;
  dataSource: SelectionTableDataSource<T>;
}) {
  const {
    checked,
    toggleAll,
    setChecked,
    setIndeterminate,
    selected,
    checkboxRef,
  } = props.dataSource;

  useLayoutEffect(() => {
    const isIndeterminate =
      selected.size > 0 && selected.size < props.data.length;
    setChecked(selected.size === props.data.length);
    setIndeterminate(isIndeterminate);

    if (checkboxRef?.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [checkboxRef, props.data.length, selected, setChecked, setIndeterminate]);

  return (
    <Table
      data={props.data}
      build={props.build}
      error={props.error}
      loading={props.loading}
    >
      <TableHeaderColumn className="w-8">
        <CheckBoxInput
          ref={checkboxRef}
          value={checked}
          onChange={() => {
            toggleAll();
          }}
        />
      </TableHeaderColumn>
      {props.children}
    </Table>
  );
}
