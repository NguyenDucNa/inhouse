import { useDialog } from '@packages/ui/modal/use-dialog';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import CardSection from '@packages/ui/card/card-section';
import DestroyButton from '@packages/ui/button/destroy-button';
import useDeleteUser from '../logic/use-delete-user';

export default function UserDelete(props: { userId: string }) {
  const navigate = useNavigate();
  const dialog = useDialog();
  const [deleteUser] = useDeleteUser();

  const onDestroy = useCallback(() => {
    dialog.destructAlert({
      title: "Delete this user",
      message: 'Are you sure? This action can not be undone.',
      textButton: 'Delete',
      onConfirm: async () => {
        await deleteUser({ variables: { id: props.userId } });
        navigate('..');
      },
    });
  }, [deleteUser, dialog, navigate, props.userId]);

  return (
    <div className="flex space-x-4">
      <CardSection
        title="Danger Zone"
        descriptions="This action will be permance delete an user."
      >
        <DestroyButton data-testid="delete-button" onClick={onDestroy}>
          Destroy user
        </DestroyButton>
      </CardSection>
    </div>
  );
}
