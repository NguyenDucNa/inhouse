import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import DestroyButton from '@packages/ui/button/destroy-button.tsx';
import SecondaryButton from '@packages/ui/button/secondary-button.tsx';
import AlertError from '@packages/ui/alert/alert-error.tsx';

export default function DestructAlert(props: {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => Promise<void>;
  onCancelClick: () => void;
}) {
  const { title, message, buttonText, onButtonClick, onCancelClick } = props;

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setLoading(true);
    onButtonClick()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof Error) {
          setError(error.message);
        }
      });
  }, [onButtonClick, setError]);

  return (
    <div className="pt-5 px-8 pb-4 sm:my-2 sm:p-6">
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {title}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      {error && (
        <div className="mt-4">
          <AlertError title="Error" message={error} />
        </div>
      )}
      <div className="mt-5 sm:mt-4 flex flex-row-reverse">
        <DestroyButton
          data-testid="delete-confirm"
          onClick={onClick}
          loading={loading}
        >
          {buttonText}
        </DestroyButton>
        <div className="mr-4">
          <SecondaryButton
            disabled={loading}
            onClick={() => {
              onCancelClick();
            }}
          >
            Cancel
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
