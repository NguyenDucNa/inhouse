import React from "react";
import classNames from "classnames";

export default function CardContent(props: {
  children?: React.ReactNode;
  ignoreContentSpacing?: boolean;
}) {
  return (
    <div
      className={classNames(
        "px-4 sm:px-6",
        props.ignoreContentSpacing ? "py-0 sm:py-5" : "py-5"
      )}
    >
      {props.children}
    </div>
  );
}
