//@ts-nocheck
import React from 'react';
import { useTable, useRowSelect, useSortBy } from 'react-table';
import { CellName } from './CellName';
import { CellStatus } from './CellStatus';
import { CellText } from './CellText';
import { CellRole } from './CellRole';
import { Pagination } from '../Pagination';

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

type Props = {
  columns: [];
  data: [];
  meta: {
    page: number;
    pageSize: number;
    totalResults: number;
  };
  onChange: (rows: any) => void;
};

export const DataTable = ({ columns, data, meta, onChange }: Props) => {
  // ! API is all wrong
  const { page, pageSize, totalResults } = meta;

  // Calculate from number
  let from: number;
  if (page === 0) {
    from = 1;
  } else {
    from = page * pageSize;
  }

  // Calcuate to number
  let to: number;
  if (page === 0) {
    to = 1 * pageSize;
  } else {
    to = (page + 1) * pageSize;
  }

  // additional check to not go beyond total number of results
  if (to > totalResults) {
    to = totalResults;
  }

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
            Cell: ({ row }) => {
              return (
                <span>
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                </span>
              );
            },
          },
          ...columns,
        ];
      });
    }
  );

  React.useEffect(() => {
    onChange(selectedRowIds);
  }, [selectedRowIds]);

  // Need to fix the data too
  // https://react-table.tanstack.com/docs/faq#how-can-i-use-the-table-state-to-fetch-new-data

  React.useEffect(() => {
    console.log('data change from parent');
  }, [data]);

  const NoResults = () => {
    return (
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          No records
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            The query returned no results. Trying changing your search term(s)
          </p>
        </div>
      </div>
    );
  };

  // Render the UI for your table
  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          {data.length === 0 && <NoResults />}
          {data.length > 0 && (
            <>
              <table
                className="min-w-full divide-y divide-gray-200"
                {...getTableProps()}
              >
                <thead className="bg-gray-50">
                  <tr {...headerGroups[1].getHeaderGroupProps()}>
                    {headerGroups[1].headers.map((column) => {
                      if (column.id === 'selection') {
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
                      if (column.id === 'edit') {
                        return (
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
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
                  {rows.slice(0, 50).map((row) => {
                    // TODO: slice should be based on page size
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          const cellProps = cell.getCellProps();
                          const cellId = cell.column.id;
                          switch (cellId) {
                            case 'name': {
                              const { firstName, lastName, email } = cell.value;
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
                            case 'description': {
                              const { role, speciality } = cell.value;
                              return (
                                <CellRole
                                  cellProps={cellProps}
                                  role={role}
                                  speciality={speciality}
                                />
                              );
                            }
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
                            case 'edit': {
                              // TODO: When in CRA this needs to be a <Link /> component
                              return (
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    href={cell.value}
                                    className="text-green-600 hover:text-green-900"
                                  >
                                    Edit
                                  </a>
                                </td>
                              );
                            }
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
              <Pagination
                from={from}
                to={to}
                total={totalResults}
                page={page}
              />
            </>
          )}
        </div>
        <p className="pt-2">
          Selected Rows: {Object.keys(selectedRowIds).length}
        </p>
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
    </div>
  );
};
