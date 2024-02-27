import { Link, useNavigate } from 'react-router-dom';
import CardHeader from '@packages/ui/card/card-header.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import Card from '@packages/ui/card/card.tsx';
import { useMenuList } from '@client/page/management/menu/menu-list/logic/use-menu-list.ts';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Table from '@packages/ui/table/table.tsx';
import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import Loading from '@packages/ui/loading.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import TableRow from '@packages/ui/table/table-row.tsx';

export default function MenuList() {
  const navigate = useNavigate();

  const { loading, error, data, refetch } = useMenuList();

  if (loading) {
    return <Loading />;
  }

  return (
    <Card>
      <CardHeader title="Menu list">
        {/* Create button */}
        <PrimaryButton
          onClick={() => {
            navigate('create');
          }}
          data-testid="list-create-button"
        >
          Create menu
        </PrimaryButton>

        {/* Refresh button */}
        <SecondaryButton
          onClick={() => {
            refetch().catch((e) => void e);
          }}
        >
          <ArrowPathIcon className="w-4" />
        </SecondaryButton>
      </CardHeader>

      <CardContent ignoreContentSpacing={true}>
        <Table
          loading={loading}
          error={error?.message}
          data={data?.menus ?? []}
          build={(menu) => {
            return (
              <TableRow key={menu.id}>
                <TableRowColumn>
                  <Link to={menu.id}>{menu.title}</Link>
                </TableRowColumn>
              </TableRow>
            );
          }}
        >
          <TableHeaderColumn>Name</TableHeaderColumn>
        </Table>
      </CardContent>
    </Card>
  );
}
