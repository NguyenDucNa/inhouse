import React from 'react';
import TableRow from '@packages/ui/table/table-row.tsx';

export function TableSection(props: {
  children?: React.ReactNode;
  colSpan?: number;
}) {
  return (
    <TableRow compact={true}>
      <th
        colSpan={props.colSpan}
        scope="colgroup"
        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-normal text-gray-500 sm:pl-6"
      >
        {props.children}
      </th>
    </TableRow>
  );
}
