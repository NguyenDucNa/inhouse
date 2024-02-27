import React, { ChangeEvent } from "react";
import classNames from "classnames";

interface InputProps {
  "data-testid"?: string;
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: string | undefined;
  disabled?: boolean;
  autoComplete?: string;
  suffix?: React.ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: InputProps) {
  const {
    autoComplete,
    error,
    type,
    label,
    value,
    name,
    placeholder,
    disabled,
    onChange,
    suffix,
  } = props;

  return (
    <div>
      <div className="relative">
        <input
          id={label}
          data-testid={props["data-testid"]}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          autoComplete={autoComplete}
          className={classNames(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            {
              "ring-red-300 placeholder:text-red-300": error != null,
            }
          )}
        />

        {suffix && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {suffix}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </div>
  );
}
