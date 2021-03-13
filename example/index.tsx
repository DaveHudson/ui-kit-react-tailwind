import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import { Toggle } from '../src/index';

type Inputs = {
  subscribe: boolean
}

const App = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  console.log(watch("subscribed"));


  const [enabled, setEnabled] = React.useState(true);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Toggle name="subscribed" enabled={enabled} handleChange={() => setEnabled(!enabled)} ref={register}  />
        <input type="submit" value="Do something?" />
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
