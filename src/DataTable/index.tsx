import React from 'react';
import { useTable, useRowSelect, useSortBy } from 'react-table';
import { CellName } from './CellName';
import { CellStatus } from './CellStatus';
import { CellText } from './CellText';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

export const DataTable = () => {
  function Table({ columns, data }: any) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      selectedFlatRows,
      state: { selectedRowIds },
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: 'selection',
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
      }
    );

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
                    <tr {...headerGroups[1].getHeaderGroupProps()}>
                      {headerGroups[1].headers.map((column) => (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render('Header')}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                              : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y divide-gray-200"
                    {...getTableBodyProps()}
                  >
                    {rows.slice(0, 10).map((row, i) => {
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
                              case 'Age':
                                return (
                                  <CellText
                                    cellProps={cellProps}
                                    text={cell.value}
                                  />
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
        <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedRowIds: selectedRowIds,
                'selectedFlatRows[].original': selectedFlatRows.map(
                  (d) => d.original
                ),
              },
              null,
              2
            )}
          </code>
        </pre>
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
