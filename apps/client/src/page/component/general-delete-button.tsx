import { useNavigate } from 'react-router-dom';
import { useDialog } from '@packages/ui/modal/use-dialog.tsx';
import { useCallback } from 'react';
import CardSection from '@packages/ui/card/card-section.tsx';
import DestroyButton from '@packages/ui/button/destroy-button.tsx';

interface Props {
  alert: {
    title: string;
    message: string;
  };
  card: {
    title: string;
    descriptions: string;
    buttonTitle: string;
  };
  delete: () => Promise<void>;
}

export function GeneralDeleteButton(props: Props) {
  const navigate = useNavigate();
  const dialog = useDialog();

  const onDestroy = useCallback(() => {
    dialog.destructAlert({
      title: props.alert.title,
      message: props.alert.message,
      textButton: 'Delete',
      onConfirm: async () => {
        await props.delete();
        navigate('..');
      },
    });
  }, [dialog, navigate, props]);

  return (
    <div className="">
      <CardSection
        title={props.card.title}
        descriptions={props.card.descriptions}
      >
        <DestroyButton onClick={onDestroy}>
          {props.card.buttonTitle}
        </DestroyButton>
      </CardSection>
    </div>
  );
}
