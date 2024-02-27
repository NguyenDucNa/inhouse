import CardSection from '@packages/ui/card/card-section.tsx';
import DestroyButton from '@packages/ui/button/destroy-button.tsx';
import { useCallback } from 'react';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import { useNavigate } from 'react-router-dom';
import useDeleteMenuProductConfiguration from '@client/page/management/menu/menu-product-configuration-edit/logic/use-delete-product-configuration.ts';

export default function MenuProductConfigurationDelete(props: {
  productConfigurationId: string;
}) {
  const navigate = useNavigate();
  const dialog = useDialog();
  const [deleteMenu] = useDeleteMenuProductConfiguration();

  const onDestroy = useCallback(() => {
    dialog.destructAlert({
      title: 'Delete this configuration',
      message: 'Are you sure? This action can not be undone.',
      textButton: 'Delete',
      onConfirm: async () => {
        await deleteMenu({ variables: { id: props.productConfigurationId } });
        navigate('..');
      },
    });
  }, [deleteMenu, dialog, navigate, props.productConfigurationId]);

  return (
    <div className="flex space-x-4">
      <CardSection
        title="Danger Zone"
        descriptions="This action will be permance delete a configuration."
      >
        <DestroyButton data-testid="delete-button" onClick={onDestroy}>
          Destroy menu
        </DestroyButton>
      </CardSection>
    </div>
  );
}
