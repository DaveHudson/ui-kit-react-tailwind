import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputSearch } from '../src';

const meta: Meta = {
  title: 'InputSearch',
  component: InputSearch,
};

export default meta;

const Template: Story = (args) => <InputSearch {...args} />;

export const Search = Template.bind({});
Search.args = {
  name: 'searchUser',
  defaultValue: '',
};
