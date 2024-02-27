import { ReactNode } from "react";

/**
 * Card component that contains different UI elements
 */
export default function Card(props: { children?: ReactNode }) {
  return (
    <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
      {props.children}
    </div>
  );
}
