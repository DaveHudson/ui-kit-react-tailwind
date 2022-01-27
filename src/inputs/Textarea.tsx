import React from 'react';

export type TextareaType = {
  name: string;
  label: string;
  defaultValue: string;
  placeholder?: string;
  hintText?: string;
  error?: string;
};

export const Textarea = React.forwardRef(
  (props, ref: React.Ref<HTMLTextAreaElement>) => {
    const { name, label, defaultValue, placeholder, hintText, error } =
      props as TextareaType;

    const baseStyles = `shadow-sm block w-full sm:text-sm rounded-md p-2`;
    const normalStyles = `${baseStyles} focus:ring-indigo-500 focus:border-indigo-500 border-gray-300`;
    const errorStyles = `${baseStyles} border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500`;

    return (
      <div className="max-w-sm">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name={name}
            id={name}
            ref={ref}
            className={error ? errorStyles : normalStyles}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
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
