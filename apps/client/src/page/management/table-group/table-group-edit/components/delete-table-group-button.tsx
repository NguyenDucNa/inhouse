import { GeneralDeleteButton } from '@client/page/component/general-delete-button.tsx';
import { useDeleteTableGroup } from '@client/page/management/table-group/table-group-edit/logic/use-delete-table-group';

export default function TableGroupDeleteButton(props: {
  tableGroupId: string;
}) {
  const [deleteTableGroup] = useDeleteTableGroup();

  return (
    <GeneralDeleteButton
      alert={{
        title: 'Delete this table group',
        message: 'Are you sure? This action can not be undone.',
      }}
      card={{
        title: 'Danger Zone',
        descriptions: 'This action will be permanence delete a table group.',
        buttonTitle: 'Delete table group',
      }}
      delete={async () => {
        await deleteTableGroup({ variables: { id: props.tableGroupId } });
      }}
    />
  );
}
