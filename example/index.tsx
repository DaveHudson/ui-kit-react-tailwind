import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Toggle } from '../src/index';

const App = () => {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <div>
      <Toggle enabled={enabled} handleChange={() => setEnabled(!enabled)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
