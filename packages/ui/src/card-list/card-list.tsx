import { ReactNode } from "react";

export function CardList(props: { children?: ReactNode }) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {props.children}
    </ul>
  );
}

export function CardListElement(props: {children?: ReactNode }) {
  return (
    <li className="px-6 py-4">
      {props.children}
    </li>
  );
}
