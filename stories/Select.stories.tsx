import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select as SCSelect } from '../src/inputs/Select';
import type { SelectProps } from '../src/inputs/Select';

enum NetworkStatus {
  pending = 'PENDING',
  activated = 'ACTIVATED',
}

const meta: Meta = {
  title: 'Components/Select',
  component: SCSelect,
};

export default meta;

const Template: Story = (args) => <SCSelect {...(args as SelectProps)} />;

export const Select = Template.bind({});
Select.args = {
  register: () => {},
  id: 'name',
  options: [NetworkStatus.pending, NetworkStatus.activated],
};

export const Selected = Template.bind({});
Selected.args = {
  register: () => {},
  id: 'name',
  options: [NetworkStatus.pending, NetworkStatus.activated],
  defaultValue: NetworkStatus.activated,
};
