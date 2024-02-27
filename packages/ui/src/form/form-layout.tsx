import {ReactNode} from "react";

export default function FormLayout(props: { children?: ReactNode }) {
  return (
    <form>
      <div className="space-y-6">{props.children}</div>
    </form>
  );
}
