import React from 'react';
import classNames from 'classnames';

export default function Center(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        props.className,
        'flex justify-center items-center'
      )}
    >
      {props.children}
    </div>
  );
}
