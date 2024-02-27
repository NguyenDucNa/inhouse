import { ForwardedRef, forwardRef } from 'react';

function CheckBox(
  props: {
    value: boolean;
    name?: string;
    onChange: (target: string, value: boolean) => void;
  },
  ref?: ForwardedRef<HTMLInputElement>
) {
  return (
    <div>
      <input
        type="checkbox"
        ref={ref}
        name={props.name}
        className="left-4 top-1/2 -mt-0 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        checked={props.value}
        onChange={(event) => {
          props.onChange(props.name ?? '', event.target.checked);
        }} 
      />
      {" " + props.name}
    </div>
  );
}

const CheckBoxInput = forwardRef(CheckBox);

export default CheckBoxInput;
