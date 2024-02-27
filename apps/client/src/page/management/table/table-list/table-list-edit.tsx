import CardHeader from '@packages/ui/card/card-header.tsx';
import Card from '@packages/ui/card/card.tsx';
import { useParams } from 'react-router-dom';
import { useTableGroupQuery } from '@client/page/management/table/table-list/logic/use-table-group-query.ts';
import Center from '@packages/ui/center.tsx';
import Spinner from '@packages/ui/spinner.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import CardContent from '@packages/ui/card/card-content.tsx';
import TableList from '@client/page/management/table/table-list/component/table-list.tsx';
import { getFragmentData } from '@client/graphql/types';
import { TableFragment } from '@client/graphql/table-fragment.ts';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import TableCreateBatch from '@client/page/management/table/table-create-batch/table-create-batch.tsx';
import PrimaryButton from '@packages/ui/button/primary-button.tsx';

export function TableListEdit() {
  const dialog = useDialog();
  const tableGroupId = useParams().tableGroupId;
  if (!tableGroupId) {
    throw new Error('Table group id is required');
  }

  const { data, loading, error } = useTableGroupQuery(tableGroupId);

  if (loading) {
    return (
      <Center className="p-8">
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return <AlertError title={error.name} message={error.message} />;
  }

  const tableGroup = data?.tableGroup;
  if (!tableGroup) {
    return (
      <AlertError title="Table group not found" message="Try again later" />
    );
  }

  return (
    <div className="flex-col space-y-4">
      <Card>
        <CardHeader title={tableGroup.name} withBackButton={true}>
          <PrimaryButton
            onClick={() => {
              dialog.showComponent((onClose) => (
                <TableCreateBatch
                  tableGroupId={tableGroupId}
                  onClose={onClose}
                />
              ));
            }}
          >
            Create batch
          </PrimaryButton>
          <SecondaryButton>Create</SecondaryButton>
        </CardHeader>

        <CardContent ignoreContentSpacing={true}>
          <TableList
            data={tableGroup.tables.map((data) =>
              getFragmentData(TableFragment, data)
            )}
            loading={loading}
          />
        </CardContent>
      </Card>

      {/*<Card>*/}
      {/*  <CardHeader title="Extra actions" />*/}
      {/*  <CardContent>*/}
      {/*    <SecondaryButton>Print</SecondaryButton>*/}
      {/*  </CardContent>*/}
      {/*</Card>*/}
    </div>
  );
}
