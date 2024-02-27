import { ReactNode } from "react";

export default function FormItem(props: {
  title: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={props.className}>
      <label
        htmlFor="username"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.title}
      </label>
      <div className="mt-2">{props.children}</div>
    </div>
  );
}
