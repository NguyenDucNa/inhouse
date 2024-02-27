import React from 'react';
import classNames from 'classnames';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';

export default function TableHeaderColumn(props: {
  className?: string;
  children?: React.ReactNode;
  alignment?: TableCellAlignment;
}) {
  return (
    <th
      scope="col"
      className={classNames(
        props.className,
        'pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6',
        {
          'text-left': props.alignment === TableCellAlignment.Left,
          'text-right': props.alignment === TableCellAlignment.Right,
          'text-center': props.alignment === TableCellAlignment.Center,
        }
      )}
    >
      {props.children}
    </th>
  );
}
