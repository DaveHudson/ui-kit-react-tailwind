import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle } from '../src';

const meta: Meta = {
  title: 'Toggle',
  component: Toggle,
};

export default meta;

const Template: Story = (args) => <Toggle {...args} />;

export const SCToggle = Template.bind({});

SCToggle.args = { text: 'Button' };