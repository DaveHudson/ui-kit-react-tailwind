import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loading } from '../src/Loading';

const meta: Meta = {
  title: 'utils/Loading',
  component: Loading,
  argTypes: {
    children: {
      control: {
        title: 'text',
        subTitle: 'text',
      },
    },
  },
};

export default meta;

const Template: Story = (args) => <Loading {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {};
