import { ReactNode } from "react";

function SoftButton(props: { onClick?: () => void; children?: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => { props.onClick && props.onClick(); }}
      className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
    >
      {props.children}
    </button>
  );
}

export default SoftButton;
