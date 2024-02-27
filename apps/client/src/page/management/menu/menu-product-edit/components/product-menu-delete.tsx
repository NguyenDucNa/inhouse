import { useDialog } from '@packages/ui/modal/use-dialog';
import { useNavigate } from 'react-router-dom';
import { useDeleteMenuProduct } from '@client/page/management/menu/menu-product-edit/logic/use-delete-menu-product';
import { useCallback } from 'react';
import CardSection from '@packages/ui/card/card-section';
import DestroyButton from '@packages/ui/button/destroy-button';

export default function ProductMenuDelete(props: { productId: string }) {
  const navigate = useNavigate();
  const dialog = useDialog();
  const [deleteMenuProduct] = useDeleteMenuProduct();

  const onDestroy = useCallback(() => {
    dialog.destructAlert({
      title: "Delete this menu's product",
      message: 'Are you sure? This action can not be undone.',
      textButton: 'Delete',
      onConfirm: async () => {
        await deleteMenuProduct({ variables: { id: props.productId } });
        navigate('..');
      },
    });
  }, [deleteMenuProduct, dialog, navigate, props.productId]);

  return (
    <div className="flex space-x-4">
      <CardSection
        title="Danger Zone"
        descriptions="This action will be permance delete a menu's product."
      >
        <DestroyButton data-testid="delete-button" onClick={onDestroy}>
          Destroy menu&apos;s product
        </DestroyButton>
      </CardSection>
    </div>
  );
}
