import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DataTable } from '../src';

const meta: Meta = {
  title: 'DataTable',
  component: DataTable,
};

export default meta;

const Template: Story = (args) => {
  return <DataTable />;
};

export const SCDataTable = Template.bind({});
SCDataTable.args = {};
