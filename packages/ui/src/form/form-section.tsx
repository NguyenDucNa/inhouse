import { ReactNode } from "react";

export default function FormSection(props: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        {props.title}
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        {props.description}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">{props.children}</div>
    </div>
  );
}
