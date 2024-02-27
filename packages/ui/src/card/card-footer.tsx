import React from 'react';

export default function CardFooter(props: { children?: React.ReactNode }) {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:px-6 flex justify-center rounded-b-lg ">
      <div className="flex sm:mt-0 sm:flex-none space-x-4 ">
        {props.children}
      </div>
    </div>
  );
}
