import { InvoiceItemFragment } from '@client/graphql/types/graphql';
import Table from '@packages/ui/table/table';
import TableHeaderColumn from '@packages/ui/table/table-header-column';
import TableRow from '@packages/ui/table/table-row';
import TableRowColumn from '@packages/ui/table/table-row-cell';
import CurrencyView from 'core/src/utils/currency-view';
import { Link } from 'react-router-dom';

export default function InvoiceTable({
  items,
}: {
  items: InvoiceItemFragment[] | undefined;
}) {
  if (!items) {
    return <div>Empty data</div>;
  }

  return (
    <>
      <Table
        data={items}
        build={(item) => <TableGroupRow key={item.id} item={item} />}
      >
        <TableHeaderColumn>Place</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
      </Table>
    </>
  );
}

function TableGroupRow(props: { item: InvoiceItemFragment }) {
  const { item } = props;

  return (
    <>
      <TableRow key={item.id}>
        <TableRowColumn>
          <Link to={item.id}>
            <p className="font-medium">{item.place}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn>
          <CurrencyView price={item.total}/>
        </TableRowColumn>
      </TableRow>
    </>
  );
}
