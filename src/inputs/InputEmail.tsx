import React from 'react';

export type InputEmailType = {
  name: string;
  label: string;
  defaultValue: string;
  placeholder?: string;
  hintText?: string;
  error?: string;
};

export const InputEmail = React.forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const {
      name,
      label,
      defaultValue,
      placeholder = 'you@example.com',
      hintText,
      error,
    } = props as InputEmailType;

    const baseStyles = `block w-full pr-10 focus:outline-none shadow-sm sm:text-sm rounded-md`;
    const normalStyles = `${baseStyles} border-gray-300 focus:ring-indigo-500 focus:border-indigo-500`;
    const errorStyles = `${baseStyles} border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`;

    return (
      <div className="max-w-sm">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name={name}
            id={name}
            defaultValue={defaultValue}
            ref={ref}
            className={error ? errorStyles : normalStyles}
            placeholder={placeholder}
            aria-invalid={error ? true : false}
            aria-describedby={error ? 'email-error' : 'email'}
          ></input>
          {error && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        {hintText ? (
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            {hintText}
          </p>
        ) : undefined}
        {error ? (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {error}
          </p>
        ) : undefined}
      </div>
    );
  }
);
