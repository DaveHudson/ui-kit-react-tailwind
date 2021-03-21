import React from 'react';
import { useTable } from 'react-table';
import { CellName } from './CellName';
import { CellStatus } from './CellStatus';
import { CellText } from './CellText';

export const DataTable = () => {
  function Table({ columns, data }: any) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    });

    // Render the UI for your table
    return (
      <div className="container">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table
                  className="min-w-full divide-y divide-gray-200"
                  {...getTableProps()}
                >
                  <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            {...column.getHeaderProps()}
                          >
                            {column.render('Header')}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    className="bg-white divide-y divide-gray-200"
                    {...getTableBodyProps()}
                  >
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            const cellType = cell.column.Header;
                            const cellProps = cell.getCellProps();
                            switch (cellType) {
                              case 'Name': {
                                const {
                                  firstName,
                                  lastName,
                                  email,
                                } = cell.value;
                                return (
                                  <CellName
                                    cellProps={cellProps}
                                    firstName={firstName}
                                    lastName={lastName}
                                    email={email}
                                  />
                                );
                              }
                              case 'Status':
                                return (
                                  <CellStatus
                                    cellProps={cellProps}
                                    status={cell.value}
                                  />
                                );
                              default:
                                return (
                                  <CellText
                                    cellProps={cellProps}
                                    text={cell.value}
                                  />
                                );
                            }
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const columns = React.useMemo(
    () => [
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
    []
  );

  const data = [
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
  ];

  return <Table columns={columns} data={data} />;
};
