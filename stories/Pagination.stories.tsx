import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination } from '../src';

const meta: Meta = {
  title: 'Pagination',
  component: Pagination,
};

export default meta;

const Template: Story = (args) => {
  const { from, to, total, page } = args;
  return <Pagination from={from} to={to} total={total} page={page} />;
};

export const SCMessageText = Template.bind({});
SCMessageText.args = {
  from: 1,
  to: 10,
  total: 100,
  page: 2,
};
