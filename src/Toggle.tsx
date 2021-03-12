import React, { FC } from 'react';

import { Switch } from '@headlessui/react'

import './tailwind.css';

export type ToggleType = {
  enabled: boolean;
  handleChange: () => void;
};

export const Toggle: FC<ToggleType> = ({ enabled, handleChange }) => {
  return (
    <Switch
      data-testid="Toggle"
      checked={enabled}
      onChange={handleChange}
      className={`${
        enabled ? 'bg-red-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500`}
    >
      <span className="sr-only" data-testid="Toggle-label">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  )
}