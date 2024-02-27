import React from 'react';
import classNames from 'classnames';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';

export default function TableRowColumn(props: {
  className?: string;
  children?: React.ReactNode;
  alignment?: TableCellAlignment;
}) {
  return (
    <td
      className={classNames(
        props.className,
        'text-gray-900 pl-4 pr-3 text-sm sm:pl-6',
        {
          'text-left': props.alignment === TableCellAlignment.Left,
          'text-right': props.alignment === TableCellAlignment.Right,
          'text-center': props.alignment === TableCellAlignment.Center,
        }
      )}
    >
      {props.children}
    </td>
  );
}
