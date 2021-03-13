import React, { FC } from 'react';
import { Switch } from '@headlessui/react'
import './tailwind.css';

export type ToggleType = {
  name: string;
  enabled: boolean;
  handleChange: () => void;
};


// export const Toggle: FC<ToggleType> = (props) => {
//   const { name, enabled, handleChange, ...rest } = props;
//   return (
//     <Switch
//       name={name}
//       data-testid="Toggle"
//       checked={enabled}
//       onChange={handleChange}
//       className={`${
//         enabled ? 'bg-red-600' : 'bg-gray-200'
//       } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500`}
//       {...rest}
//     >
//       <span className="sr-only" data-testid="Toggle-label">Enable notifications</span>
//       <span
//         className={`${
//           enabled ? 'translate-x-6' : 'translate-x-1'
//         } inline-block w-4 h-4 transform bg-white rounded-full`}
//       />
//     </Switch>
//   )
// }

export const Toggle = React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
  const { name, enabled, handleChange, ...attributes } = props as ToggleType;

  // return(
  //   <div>
  //     <input ref={ref} id={name} name={name} {...attributes} />
  //   </div>
  // )

  // const divRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //     if (divRef.current) {
  //         console.log(`forwardRefRef div width: ${divRef.current.clientWidth}`);
  //     }
  // });    

  return(
      <Switch
        ref={ref}
        name={name}
        data-testid="Toggle"
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? 'bg-red-600' : 'bg-gray-200'
        } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500`}
        {...attributes}
      >
        <span className="sr-only" data-testid="Toggle-label">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>    
  )
})

// export const Toggle = React.forwardRef((props, ref) => {
//   const { name, enabled, handleChange } = props as ToggleType;

//   const inputRef = React.useRef('subscribed').current;

//   React.useEffect(() => {
//     const checkRef = () => {
//       if(!ref) return;
  
//       typeof ref === 'function' ? ref(inputRef) : (ref.current = inputRef);
//       return () => typeof ref === 'function' ? ref(null) : (ref.current = null);
//     }
//     checkRef();
//  },[ref, inputRef])

//   console.log('inputRef', inputRef);
  
//   return (
//     <Switch
//       ref={inputRef}
//       name={name}
//       data-testid="Toggle"
//       checked={enabled}
//       onChange={handleChange}
//       className={`${
//         enabled ? 'bg-red-600' : 'bg-gray-200'
//       } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500`}
//     >
//       <span className="sr-only" data-testid="Toggle-label">Enable notifications</span>
//       <span
//         className={`${
//           enabled ? 'translate-x-6' : 'translate-x-1'
//         } inline-block w-4 h-4 transform bg-white rounded-full`}
//       />
//     </Switch>
//   )
// })