import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

export type InputSearchType = {
  name: string;
  defaultValue: string;
  onChange: (e: string) => void;
};

// Search probably not part of a form, so may need an onChange, see when get it into the app
// ! test in example app folder
export const InputSearch = (props: InputSearchType) => {
  const {
    name = 'search',
    defaultValue = '',
    onChange,
  } = props as InputSearchType;

  return (
    <div>
      <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
        <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                id={name}
                name={name}
                className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Search"
                type="search"
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
