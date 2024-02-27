import { ReactNode } from 'react';
import classNames from 'classnames';
import Spinner from '@packages/ui/spinner.tsx';
import { SpinnerSize } from '@packages/ui/spinner-size.ts';
import { ButtonSize } from './button-size.ts';

export default function PrimaryButton(props: {
  id?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonSize?: ButtonSize;
  loading?: boolean;
  'data-testid'?: string;
}) {
  const size = props.buttonSize ?? ButtonSize.medium;

  return (
    <button
      id={props.id}
      data-testid={props['data-testid']}
      type="button"
      disabled={props.disabled ?? false}
      onClick={props.onClick}
      className={classNames(
        'rounded-md bg-indigo-600 font-semibold text-white shadow-sm',
        'disabled:bg-indigo-400',
        'hover:bg-indigo-500',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        props.className,
        {
          'px-2 py-1 text-xs': size === ButtonSize.small,
          'px-2 py-1 text-sm': size === ButtonSize.semiSmall,
          'px-2.5 py-1.5 text-sm': size === ButtonSize.medium,
          'px-3 py-2 text-sm': size === ButtonSize.semiLarge,
          'px-3.5 py-2.5 text-sm': size === ButtonSize.large,
        }
      )}
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
