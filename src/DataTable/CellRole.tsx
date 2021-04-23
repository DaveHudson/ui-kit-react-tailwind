import React from 'react';

export type Props = {
  cellProps: any; // TODO how type this?
  role: string;
  speciality: string;
};

export const CellRole = ({ cellProps, role, speciality }: Props) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap" {...cellProps}>
      <div className="flex items-center">
        <div className="ml-0">
          <div className="text-sm font-medium text-gray-900">{role}</div>
          <div className="text-sm text-gray-500">{speciality}</div>
        </div>
      </div>
    </td>
  );
};
