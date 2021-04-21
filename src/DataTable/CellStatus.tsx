import React from 'react';

export type Props = {
  cellProps: any;
  status: string;
};

function capitaliseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const CellStatus = ({ cellProps, status }: Props) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap" {...cellProps}>
      {status === 'available' && (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {capitaliseFirstLetter(status)}
        </span>
      )}
      {status === 'unavailable' && (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          {capitaliseFirstLetter(status)}
        </span>
      )}
      {status === 'ACTIVATED' && (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {capitaliseFirstLetter(status)}
        </span>
      )}
      {status === 'PENDING' && (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          {capitaliseFirstLetter(status)}
        </span>
      )}
    </td>
  );
};
