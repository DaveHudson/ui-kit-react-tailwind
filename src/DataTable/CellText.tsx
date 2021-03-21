import React from 'react';

export type Props = {
  cellProps: any;
  text: string;
};

export const CellText = ({ cellProps, text }: Props) => {
  return (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
      {...cellProps}
    >
      {text}
    </td>
  );
};
