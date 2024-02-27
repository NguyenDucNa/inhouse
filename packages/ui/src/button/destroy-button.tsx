import { ReactNode } from 'react';
import Spinner from '@packages/ui/spinner.tsx';
import { SpinnerSize } from '@packages/ui/spinner-size.ts';

export default function DestroyButton(props: {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  'data-testid'?: string;
}) {
  return (
    <button
      id={props.id}
      data-testid={props['data-testid']}
      type="button"
      onClick={props.onClick}
      disabled={props.loading ?? props.disabled}
      className="rounded-md bg-red-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
    >
      <div className="flex justify-center">
        {props.loading && (
          <div className="w-4 h-4 mr-2">
            <Spinner size={SpinnerSize.Small} />
          </div>
        )}
        {props.children}
      </div>
    </button>
  );
}
