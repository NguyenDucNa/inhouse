import { ReactNode } from 'react';
import classNames from 'classnames';
import { ButtonSize } from '@packages/ui/button/button-size.ts';

function SecondaryButton(props: {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  buttonSize?: ButtonSize;
  onClick?: () => void;
}) {
  const size = props.buttonSize ?? ButtonSize.medium;

  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames(
        props.className,
        'rounded-md bg-white font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        {
          'px-2 py-1 text-xs': size === ButtonSize.small,
          'px-2 py-1 text-sm': size === ButtonSize.semiSmall,
          'px-2.5 py-1.5 text-sm': size === ButtonSize.medium,
          'px-3 py-2 text-sm': size === ButtonSize.semiLarge,
          'px-3.5 py-2.5 text-sm': size === ButtonSize.large,
        }
      )}
    >
      {props.children}
    </button>
  );
}

export default SecondaryButton;
