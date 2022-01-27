// ? Would prefer to use https://tailwindui.com/components/application-ui/forms/select-menus#component-c549ac2695455cb78d529c3a00293fe0
// However @headlessui is missing some features, https://github.com/react-hook-form/react-hook-form/issues/5080

import React, { forwardRef } from 'react';

export type SelectProps = {
  id: string;
  label: string;
  defaultValue: string | undefined;
  options: string[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { id, label, defaultValue, options } = props;

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <select
          {...props}
          data-testid={`select_${id}`}
          name={id}
          title={id}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
          defaultValue={defaultValue}
          ref={ref}
        >
          {options.map((option) => {
            return <option key={option}>{option}</option>;
          })}
        </select>
      </div>
    );
  }
);
