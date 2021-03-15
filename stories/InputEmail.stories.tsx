import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputEmail } from '../src';

const meta: Meta = {
  title: 'InputEmail',
  component: InputEmail,
};

export default meta;

const Template: Story = (args) => <InputEmail {...args} />;

export const SCInputEmail = Template.bind({});

SCInputEmail.args = { name: 'email', defaultValue: 'dave@densen.co.uk', placeholder: 'your email address' };