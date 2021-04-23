import React from 'react';

type Props = {
  from: number;
  to: number;
  total: number;
  page: number;
};

export const Pagination = (args: Props) => {
  const { from, to, total, page } = args;
  const fromDisabled = false;
  const toDisabled = true;
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{from}</span> to{' '}
          <span className="font-medium">{to}</span> of{' '}
          <span className="font-medium">{total}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        {/* ! Need proper logic to check if first page */}
        <a
          href={`?page=${page === 0 ? 0 : page - 1}`}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
            fromDisabled ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Previous
        </a>
        {/* ! Need proper logic to check if last page */}
        <a
          href={`?page=${page + 1}`}
          className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
            toDisabled ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next
        </a>
      </div>
    </nav>
  );
};
