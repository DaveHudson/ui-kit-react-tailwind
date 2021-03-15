import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useForm, Controller } from "react-hook-form";
import { Toggle, InputEmail } from '../src/index';

type Inputs = {
  subscribe: boolean
}

const App = () => {
  const { register, handleSubmit, watch, errors, control } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  console.log(watch("subscribed"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail name="email" placeholder="your@email.co.uk" defaultValue="dave@hello.com" ref={register} />
        <Controller
          name="subscribed"
          control={control}
          defaultValue={false}
          render={({ onChange, value}) => <Toggle enabled={value} onChange={onChange}  />}
        />        
        <input type="submit" value="Do something?" />
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
