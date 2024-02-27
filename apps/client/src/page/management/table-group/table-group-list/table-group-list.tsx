import Card from '@packages/ui/card/card.tsx';
import CardHeader from '@packages/ui/card/card-header.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { TableGroupItemFragment } from '@client/graphql/types/graphql.ts';
import { getFragmentData } from '@client/graphql/types';
import Table from '@packages/ui/table/table.tsx';
import TableHeaderColumn from '@packages/ui/table/table-header-column.tsx';
import TableRowColumn from '@packages/ui/table/table-row-cell.tsx';
import { useTableGroupList } from '@client/page/management/table-group/table-group-list/logics/use-table-group-list';
import { TableGroupFragment } from '@client/graphql/table-group-fragment.ts';
import BranchSelectionProvider from '@client/page/management/table-group/table-group-list/component/branch-selection/branch-selection-provider.tsx';
import BranchSelection from '@client/page/management/table-group/table-group-list/component/branch-selection/branch-selection.tsx';
import { useBranchSelectionContext } from '@client/page/management/table-group/table-group-list/component/branch-selection/branch-selection-context.ts';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import TableGroupCreate from '@client/page/management/table-group/table-group-create/table-group-create.tsx';
import TableRow from '@packages/ui/table/table-row.tsx';
import { TableCellAlignment } from '@packages/ui/table/table-type.ts';

export default function TableGroupList() {
  return (
    <BranchSelectionProvider>
      <div className="flex flex-col space-y-6">
        <BranchSelection />
        <Content />
      </div>
    </BranchSelectionProvider>
  );
}

function Content() {
  const dialog = useDialog();

  const { branch } = useBranchSelectionContext();
  const result = useTableGroupList(branch?.id);
  const { data, loading, error, refetch } = result;

  if (!branch || !data?.tableGroups) {
    return <div />;
  }

  return (
    <div className="flex-col space-y-4">
      <Card>
        <CardHeader title={'Group Table List'}>
          <PrimaryButton
            onClick={() => {
              dialog.showComponent((onClose) => (
                <TableGroupCreate branchId={branch.id} onClose={onClose} />
              ));
            }}
          >
            Create table group
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
            data={data.tableGroups.map((raw) => {
              return getFragmentData(TableGroupFragment, raw);
            })}
            build={(tableGroup) => (
              <TableGroupRow key={tableGroup.id} tableGroup={tableGroup} />
            )}
          >
            <TableHeaderColumn className="w-8">Code</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn alignment={TableCellAlignment.Right}>
              Action
            </TableHeaderColumn>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function TableGroupRow(props: { tableGroup: TableGroupItemFragment }) {
  const navigate = useNavigate();
  const { tableGroup } = props;

  return (
    <>
      <TableRow key={tableGroup.id}>
        <TableRowColumn alignment={TableCellAlignment.Center}>
          {tableGroup.arrangementCode ?? ''}
        </TableRowColumn>
        <TableRowColumn>
          <Link to={`${tableGroup.id}/tables`}>
            <p className="font-medium">{tableGroup.name}</p>
          </Link>
        </TableRowColumn>
        <TableRowColumn alignment={TableCellAlignment.Right}>
          <div className="space-x-2">
            <PrimaryButton
              onClick={() => {
                navigate(`${tableGroup.id}/tables`);
              }}
            >
              Tables
            </PrimaryButton>
            <SecondaryButton
              onClick={() => {
                navigate(tableGroup.id);
              }}
            >
              Edit
            </SecondaryButton>
          </div>
        </TableRowColumn>
      </TableRow>
    </>
  );
}
