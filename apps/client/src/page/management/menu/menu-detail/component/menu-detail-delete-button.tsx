import useDeleteMenu from '@client/page/management/menu/menu-detail/logic/use-delete-menu.ts';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import { useNavigate } from 'react-router-dom';
import DestroyButton from '@packages/ui/button/destroy-button';
import CardSection from '@packages/ui/card/card-section';
import { useCallback } from 'react';

export default function MenuDetailDeleteButton(props: { menuId: string }) {
  const navigate = useNavigate();
  const dialog = useDialog();
  const [deleteMenu] = useDeleteMenu();

  const onDestroy = useCallback(() => {
    dialog.destructAlert({
      title: 'Delete this menu section',
      message: 'Are you sure? This action can not be undone.',
      textButton: 'Delete',
      onConfirm: async () => {
        await deleteMenu({ variables: { id: props.menuId } });
        navigate('..');
      },
    });
  }, [deleteMenu, dialog, navigate, props.menuId]);

  return (
    <div className="flex space-x-4">
      <CardSection
        title="Danger Zone"
        descriptions="This action will be permance delete a menu."
      >
        <DestroyButton data-testid="delete-button" onClick={onDestroy}>
          Destroy menu`&apos;s section
        </DestroyButton>
      </CardSection>
    </div>
  );
}
