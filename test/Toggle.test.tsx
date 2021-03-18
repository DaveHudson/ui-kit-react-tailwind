import * as React from 'react';
import { render } from '@testing-library/react';
import { Toggle } from '../src';

it('Should render the toggle and be clickable between states', () => {
  // mock onChange function
  const onChange = jest.fn();

  const { debug } = render(<Toggle enabled={false} onChange={onChange} />);

  console.log(debug());
});
