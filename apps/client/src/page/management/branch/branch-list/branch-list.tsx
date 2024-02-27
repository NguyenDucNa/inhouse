import { useBranchList } from '@client/page/management/branch/branch-list/logic/use-branch-list.tsx';
import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { BranchItemFragment } from '@client/graphql/types/graphql.ts';
import { getFragmentData } from '@client/graphql/types';
import { BranchFragment } from '@client/graphql/branch-fragment.ts';
import Table from '@packages/ui/table/table.tsx';
import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import TableRow from '@packages/ui/table/table-row.tsx';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';

export default function BranchList() {
  const navigate = useNavigate();
  const { data, error, loading, refetch } = useBranchList();

  return (
    <Card>
      <CardHeader title={'Branch List'}>
        <PrimaryButton
          onClick={() => {
            navigate('create');
          }}
        >
          Create branch
        </PrimaryButton>
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
          data={
            data?.branches
              .map((raw) => getFragmentData(BranchFragment, raw))
              .sort((lhs, rhs) => lhs.name.localeCompare(rhs.name)) ?? []
          }
          build={(branch) => <BranchRow key={branch.id} branch={branch} />}
        >
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn alignment={TableCellAlignment.Right}>
            Address
          </TableHeaderColumn>
        </Table>
      </CardContent>
    </Card>
  );
}

function BranchRow(props: { branch: BranchItemFragment }) {
  const { branch } = props;

  return (
    <>
      <TableRow key={branch.id}>
        <TableRowColumn>
          <Link to={branch.id}>
            <p className="font-medium">{branch.name}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn alignment={TableCellAlignment.Right}>
          <Link to={branch.id}>{branch.address}</Link>
        </TableRowColumn>
      </TableRow>
    </>
  );
}
