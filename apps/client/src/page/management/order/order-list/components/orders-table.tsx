import Table from '@packages/ui/table/table';
import TableHeaderColumn from '@packages/ui/table/table-header-column';
import TableRow from '@packages/ui/table/table-row';
import TableRowColumn from '@packages/ui/table/table-row-cell';

export interface OrderTableItem {
  id: string;
  state: string;
  place: string;
  guestCount: number;
}

export default function OrderTable({ items }: { items: OrderTableItem[] }) {
  if (items.length === 0) {
    return <div>Empty data</div>;
  }

  return (
    <>
      <Table
        data={items}
        build={(item) => <TableGroupRow key={item.id} item={item} />}
      >
        <TableHeaderColumn>Place</TableHeaderColumn>
        <TableHeaderColumn>Guests count</TableHeaderColumn>
        <TableHeaderColumn>State</TableHeaderColumn>
      </Table>
    </>
  );
}

function TableGroupRow(props: { item: OrderTableItem }) {
  const { item } = props;

  return (
    <>
      <TableRow key={item.id}>
        <TableRowColumn>{item.place}</TableRowColumn>
        <TableRowColumn>{item.guestCount}</TableRowColumn>
        <TableRowColumn>{item.state}</TableRowColumn>
      </TableRow>
    </>
  );
}
