import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DataTable } from '../src';

const meta: Meta = {
  title: 'DataTable',
  component: DataTable,
};

export default meta;

const Template: Story = (args) => {
  const { columns, data } = args;
  return <DataTable columns={columns} data={data} />;
};

export const SCDataTable = Template.bind({});
SCDataTable.args = {
  columns: [
    {
      Header: 'Personal Info',
      columns: [
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
      ],
    },
  ],
  data: [
    {
      name: {
        profilePic: '',
        firstName: 'Dave',
        lastName: 'Hudson',
        email: 'dave@name.co.uk',
      },
      age: 23,
      status: 'available',
    },
    {
      name: {
        profilePic: '',
        firstName: 'Scarlett',
        lastName: 'Hudson',
        email: 'scarlett@name.co.uk',
      },
      age: 10,
      status: 'unavailable',
    },
  ],
};

export const NetworksTable = Template.bind({});
NetworksTable.args = {
  columns: [
    {
      Header: 'Networks',
      columns: [
        {
          Header: 'Network Name',
          accessor: 'networkName',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
      ],
    },
  ],
  data: [
    {
      networkName: 'NHS',
      status: 'ACTIVATED',
    },
    {
      networkName: 'MoD',
      status: 'ACTIVATED',
    },
    {
      networkName: 'Pando',
      status: 'ACTIVATED',
    },
    {
      networkName: 'BUPA',
      status: 'PENDING',
    },
  ],
};
