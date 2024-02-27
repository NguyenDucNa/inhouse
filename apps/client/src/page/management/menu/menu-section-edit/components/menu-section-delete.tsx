import CardSection from '@packages/ui/card/card-section.tsx';
import DestroyButton from '@packages/ui/button/destroy-button.tsx';
import { useCallback } from 'react';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import { useNavigate } from 'react-router-dom';
import useDeleteMenuSection from '@client/page/management/menu/menu-section-edit/logic/use-delete-menu-section.ts';

export default function MenuSectionDelete(props: { sectionId: string }) {
  const navigate = useNavigate();
  const dialog = useDialog();
  const [deleteMenuSection] = useDeleteMenuSection();

  const onDestroy = useCallback(() => {
    dialog.destructAlert({
      title: 'Delete this menu section',
      message: 'Are you sure? This action can not be undone.',
      textButton: 'Delete',
      onConfirm: async () => {
        await deleteMenuSection({ variables: { id: props.sectionId } });
        navigate('..');
      },
    });
  }, [deleteMenuSection, dialog, navigate, props.sectionId]);

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
