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
        <input
          type="checkbox"
          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          ref={resolvedRef}
          {...rest}
        />
      </>
    );
  }
);

export const DataTable = ({ columns, data }) => {
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
        hooks.visibleColumns.push((columns) => {
          return [
            // Let's make a column for selection
            {
              id: 'selection',
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <span>
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                </span>
              ),
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: ({ row }) => (
                <span>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </span>
              ),
            },
            ...columns,
          ];
        });
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
                      {headerGroups[1].headers.map((column) => {
                        console.log('column', column);
                        if (column.id === 'selection') {
                          console.log('SELECTION');
                          return (
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10"
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
                          );
                        }
                        return (
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
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y divide-gray-200"
                    {...getTableBodyProps()}
                  >
                    {rows.slice(0, 10).map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            const cellProps = cell.getCellProps();
                            const cellId = cell.column.id;
                            switch (cellId) {
                              case 'name': {
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
                              case 'status': {
                                return (
                                  <CellStatus
                                    cellProps={cellProps}
                                    status={cell.value}
                                  />
                                );
                              }
                              case 'age':
                                return (
                                  <CellText
                                    cellProps={cellProps}
                                    text={cell.value}
                                  />
                                );
                              case 'networkName': {
                                return (
                                  <CellText
                                    cellProps={cellProps}
                                    text={cell.value}
                                  />
                                );
                              }
                              case 'selection':
                                return (
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                    {...cell.getCellProps()}
                                  >
                                    {cell.render('Cell')}
                                  </td>
                                );
                              default: {
                                return (
                                  <CellText
                                    cellProps={cellProps}
                                    text={cell.value}
                                  />
                                );
                              }
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

  return <Table columns={columns} data={data} />;
};
