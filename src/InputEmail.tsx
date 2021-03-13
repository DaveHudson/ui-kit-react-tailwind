import React from 'react';

export type InputEmailType = {
  name: string;
  defaultValue: string;
}

export const InputEmail = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  const { name, defaultValue } = props as InputEmailType;

  return(
    <div className="bg-red-700">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <div className="mt-1">
        <input type="text" name={name} id={name} defaultValue={defaultValue} ref={ref} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
      </div>
    </div>    
  )
})