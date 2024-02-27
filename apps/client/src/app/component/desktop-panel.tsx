import { ReactNode } from "react";

function DesktopPanel(props: { children?: ReactNode }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <p className="ml-2 text-lg font-semibold leading-6 text-gray-900">
            InHouse
          </p>
        </div>
        <nav className="flex flex-1 flex-col">{props.children}</nav>
      </div>
    </div>
  );
}

export default DesktopPanel;
