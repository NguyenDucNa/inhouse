import { ReactNode } from "react";

export default function CardSection(props: {
  title: string;
  descriptions: string;
  children?: ReactNode;
}) {
  return (
    <div className="pb-6">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        {props.title}
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        {props.descriptions}
      </p>
      <div className="pt-4">
      {props.children}
      </div>
    </div>
  );
}
