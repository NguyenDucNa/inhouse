import CardSection from '@packages/ui/card/card-section.tsx';
import DestroyButton from '@packages/ui/button/destroy-button.tsx';
import { useCallback } from 'react';
import { useDeleteMenuProductConfigurationValue } from '@client/page/management/menu/menu-product-configuration-value-edit/logic/use-delete-menu-product-configuration-value.ts';
import { useNavigate } from 'react-router-dom';
import AlertError from '@packages/ui/alert/alert-error.tsx';

export default function DeleteProductConfigurationValueMenu(props: {
  valueId: string;
}) {
  const navigate = useNavigate();
  const [update, { loading, error }] = useDeleteMenuProductConfigurationValue();

  const submit = useCallback(() => {
    update({ variables: { id: props.valueId } })
      .then(() => {
        navigate('..');
      })
      .catch((e) => void e);
  }, [navigate, props.valueId, update]);

  return (
    <CardSection
      title="Danger Zone"
      descriptions="This action will be permance delete a price configuration."
    >
      {error && (
        <AlertError
          className="mb-4"
          title={error.name}
          message={error.message}
        />
      )}
      <DestroyButton
        data-testid="delete-button"
        onClick={submit}
        loading={loading}
      >
        Delete
      </DestroyButton>
    </CardSection>
  );
}
