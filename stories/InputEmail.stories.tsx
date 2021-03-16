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
SCInputEmail.args = { name: 'email', label: 'Your email', defaultValue: 'dave@densen.co.uk', placeholder: 'your email address' };

export const SCInputEmailHint = Template.bind({});
SCInputEmailHint.args = { name: 'email', label: 'Your email', placeholder: 'your email address', hintText: 'We only do SPAMMY stuff' };

export const SCInputEmailError = Template.bind({});
SCInputEmailError.args = { name: 'email', label: 'Your email', defaultValue: 'dave.co.uk', placeholder: 'your email address', error: 'You must provide a valid email' };