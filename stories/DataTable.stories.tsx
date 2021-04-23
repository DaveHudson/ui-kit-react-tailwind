import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DataTable } from '../src';
import * as dayjs from 'dayjs';

// Raw Users JSON from API
import users from './api/users.json';
console.log(users);

// Manipulated Users JSON
// ! In reality this should be handled at a higher level
// ! Data is just a string, up to the user to format before it gets here (dayjs good)
function prepareUsersJSON(data) {
  const users = [];
  data.map((user) => {
    const usr = {
      id: user.id,
      name: {
        profilePic:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
      description: {
        speciality: user.speciality,
        role: user.role,
      },
      joinedAt: dayjs(user.joined_at).toString(),
      edit: `/admin/users/${user.id}/edit`,
    };
    users.push(usr);
  });
  return users;
}

const meta: Meta = {
  title: 'DataTable',
  component: DataTable,
};

export default meta;

const Template: Story = (args) => {
  const { columns, data } = args;
  return <DataTable columns={columns} data={data} />;
};

export const UsersDataTable = Template.bind({});
const usersData = prepareUsersJSON(users);
console.log(usersData);

UsersDataTable.args = {
  columns: [
    {
      Header: 'User Info',
      columns: [
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Role',
          accessor: 'description',
        },
        {
          Header: 'Joined',
          accessor: 'joinedAt',
        },
        {
          Header: 'Edit',
          accessor: 'edit',
        },
      ],
    },
  ],
  data: usersData,
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
