import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function CardHeader(props: {
  withBackButton?: boolean;
  children?: ReactNode;
  title: string;
}) {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto flex items-center">
          {props.withBackButton && (
            <button data-testid="back-button" onClick={() => { navigate(".."); }}>
              <ChevronLeftIcon className="w-6 mr-2" />
            </button>
          )}
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            {props.title}
          </h1>
        </div>
        <div className="flex mt-4 sm:ml-16 sm:mt-0 sm:flex-none space-x-4 ">
          {props.children}
        </div>
      </div>
    </div>
  );
}
