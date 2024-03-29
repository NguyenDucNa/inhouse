import { ReactNode } from "react";

export default function FormActions(props: { children?: ReactNode }) {
  return (
    <div className="mt-6 flex items-center justify-end gap-x-6">
      {props.children}
    </div>
  );
}
