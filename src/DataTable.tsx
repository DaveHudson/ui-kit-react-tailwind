import React from 'react';
import { useTable } from 'react-table';

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
                    {rows.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            console.log('cell', cell);
                            const cellType = cell.column.Header;
                            switch (cellType) {
                              case 'Name':
                                return (
                                  <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    {...cell.getCellProps()}
                                  >
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                          className="h-10 w-10 rounded-full"
                                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                          alt=""
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                          {`${cell.value.firstName} ${cell.value.lastName}`}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                          {cell.value.email}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                );
                              case 'Status':
                                return (
                                  <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    {...cell.getCellProps()}
                                  >
                                    {cell.value === 'available' && (
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {cell.value}
                                      </span>
                                    )}
                                    {cell.value === 'unavailable' && (
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                        {cell.value}
                                      </span>
                                    )}
                                  </td>
                                );

                              default:
                                return (
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                    {...cell.getCellProps()}
                                  >
                                    {cell.render('Cell')}
                                  </td>
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
