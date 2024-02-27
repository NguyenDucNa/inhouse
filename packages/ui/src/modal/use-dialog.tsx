import {
  DialogBuilder,
  useModalManagerContext,
} from '@packages/ui/modal/modal-manager-context.ts';
import DestructAlert from '@packages/ui/alert/destruct-alert.tsx';

export interface Dialog {
  showComponent(builder: DialogBuilder): void;

  destructAlert(alert: {
    title: string;
    message: string;
    textButton: string;
    onConfirm: () => Promise<void>;
    onCancel?: () => Promise<void>;
  }): void;
}

export function useDialog(): Dialog {
  const dialogManager = useModalManagerContext();

  return {
    showComponent(builder: DialogBuilder) {
      dialogManager.showDialog(builder);
    },

    destructAlert(alert: {
      title: string;
      message: string;
      textButton: string;
      onConfirm: () => Promise<void>;
      onCancel?: () => void;
    }) {
      dialogManager.showDialog((onClose) => (
        <DestructAlert
          title={alert.title}
          message={alert.message}
          buttonText={alert.textButton}
          onButtonClick={async () => {
            await alert.onConfirm();
            onClose();
          }}
          onCancelClick={() => {
            alert.onCancel?.();
            onClose();
          }}
        />
      ));
    },
  };
}
