import React from 'react';

export type Props = {
  cellProps: any;
  status: string;
};

export const CellStatus = ({ cellProps, status }: Props) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap" {...cellProps}>
      {status === 'available' && (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {status}
        </span>
      )}
      {status === 'unavailable' && (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          {status}
        </span>
      )}
    </td>
  );
};
