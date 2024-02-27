import React from 'react';
import Center from '@packages/ui/center.tsx';
import Spinner from '@packages/ui/spinner.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';

/**
 * Table component
 *
 * @example
 *  <Table
 *     data={data?.menuProductConfigurations ?? []}
 *     build={(item) => {
 *       return <TableSection colSpan={4}/>
 *
 *       return <TableRow key={value.id}>
 *          <TableRowColumn/>
 *       </TableRow>
 *    }}
 *     loading={loading}
 *     error={error?.message}
 *    >
 *    <TableHeaderColumn>Name</TableHeaderColumn>
 *    <TableHeaderColumn alignment={TableCellAlignment.center}>Actions</TableHeaderColumn>
 *  </Table>
 */
export default function Table<T>(props: {
  children: React.ReactNode;
  data: T[];
  build: (data: T, index: number) => React.ReactNode;
  loading?: boolean;
  error?: string | undefined;
}) {
  return (
    <div className="-mx-4 ring-1 ring-gray-200 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr className="h-12">{props.children}</tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {!props.loading && !props.error && props.data.map(props.build)}
        </tbody>
      </table>
      {props.error && <AlertError title={'Error'} message={props.error} />}

      {props.loading && (
        <Center>
          <Spinner />
        </Center>
      )}
    </div>
  );
}
