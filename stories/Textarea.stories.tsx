import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Textarea } from '../src';

const meta: Meta = {
  title: 'Textarea',
  component: Textarea,
};

export default meta;

const Template: Story = (args) => <Textarea {...args} />;

export const EmptyTextarea = Template.bind({});
EmptyTextarea.args = {
  name: 'description',
  label: 'Enter your description',
  defaultValue: '',
  placeholder: 'Enter your description',
};
