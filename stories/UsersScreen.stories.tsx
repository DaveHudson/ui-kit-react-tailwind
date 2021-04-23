import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DataTable, InputSearch, InputSearchType, ButtonGroup } from '../src';
import * as dayjs from 'dayjs';

// Raw Users JSON from API
import users from './api/users.json';

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
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
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
  title: 'UsersScreen',
  component: DataTable,
};

export default meta;

const Template: Story = (args) => {
  // This is like the screen mount zone
  const { columns, data, meta } = args.table;
  const { name, defaultValue } = args.search as InputSearchType;
  // 1. Make fetch with a blank search for users data
  // 2. If search changes, re-fetch
  // 3. If page changes, re-fetch

  const [search = defaultValue, setSearch] = React.useState(
    args.search.defaultValue
  );
  const [selectedRows, setSelectedRows] = React.useState({});

  let usersData;
  if (search !== '') {
    usersData = data.filter((user) =>
      user.name.firstName.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    usersData = data;
  }

  const items = [
    { name: 'Transfer', icon: 'ArrowCircleRightIcon', href: '#' },
    { name: 'Delete', icon: 'TrashIcon', href: '#' },
  ];

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="flex-1 mr-5">
            <InputSearch
              name={name}
              defaultValue={search}
              onChange={(e) => setSearch(e)}
            />
          </div>
          <div className="flex-0">
            <ButtonGroup items={items} selectedRowIds={selectedRows} />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={usersData}
          meta={meta}
          onChange={(selectedRowIds) => setSelectedRows(selectedRowIds)}
        />
      </div>
    </div>
  );
};

export const UsersDataTable = Template.bind({});
const usersData = prepareUsersJSON(users);

UsersDataTable.args = {
  search: {
    name: 'inputSearch',
    defaultValue: '',
  },
  table: {
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
    meta: {
      page: 11,
      pageSize: 10,
      totalResults: usersData.length,
    },
  },
};
