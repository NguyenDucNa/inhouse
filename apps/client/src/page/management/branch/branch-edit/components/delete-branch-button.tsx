import { GeneralDeleteButton } from '@client/page/component/general-delete-button.tsx';
import { useDeleteBranch } from '@client/page/management/branch/branch-edit/logic/use-delete-branch.ts';

export default function BranchDeleteButton(props: { menuId: string }) {
  const [deleteBranch] = useDeleteBranch();

  return (
    <GeneralDeleteButton
      alert={{
        title: 'Delete this branch',
        message: 'Are you sure? This action can not be undone.',
      }}
      card={{
        title: 'Danger Zone',
        descriptions: 'This action will be permanence delete a branch.',
        buttonTitle: 'Delete branch',
      }}
      delete={async () => {
        await deleteBranch({ variables: { id: props.menuId } });
      }}
    />
  );
}
