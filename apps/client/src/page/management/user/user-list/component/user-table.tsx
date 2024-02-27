import Table from '@packages/ui/table/table';
import TableHeaderColumn from '@packages/ui/table/table-header-column';
import TableRow from '@packages/ui/table/table-row';
import TableRowColumn from '@packages/ui/table/table-row-cell';
import { User } from '@client/graphql/types/graphql';
import { Link } from 'react-router-dom';

export default function UserTable({
  items,
}: {
  items: User[] | undefined;
}) {
  if (!items) {
    return <div>Empty data</div>;
  }
  return (
    <>
      <Table
        data={items}
        build={(item) => <TableGroupRow key={item.id} user={item} />}
      >
        
        <TableHeaderColumn>UserName</TableHeaderColumn>
        <TableHeaderColumn>FullName</TableHeaderColumn>
        <TableHeaderColumn>Email</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </Table>
    </>
  );
}

function TableGroupRow(props: { user: User }) {
  const { user } = props;

  return (
    <>
      <TableRow key={user.id} className='hover:bg-gray-100'>
        <TableRowColumn>
          <Link to={user.id}>
            <p className='w-full'>{user.username}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={user.id}>
            <p className='w-full'>{user.firstName + " " + user.lastName}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={user.id}>
            <p className='w-full'>{user.email}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn>
          <Link to={user.id}>
            <p className='w-full'>{user.status ? "Active" : "Non active"}</p>
          </Link>
        </TableRowColumn>
      </TableRow>
    </>
  );
}
