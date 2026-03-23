import React from "react";

// 🔹 Column Type
export interface Column<T> {
  header: React.ReactNode;
  accessor?: keyof T;
  render?: (row: T) => React.ReactNode;
}

// 🔹 Table Props Type
interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  handlePrev:()=>void;
  handleNext:()=>void
}

// 🔹 Reusable Modern Table Component
export function Table<T>({ columns, data,handlePrev,handleNext }: TableProps<T>) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          {/* Header */}
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="py-4 px-4 font-semibold">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="py-4 px-4 text-gray-700">
                      {col.render
                        ? col.render(row)
                        : col.accessor
                        ? (row[col.accessor] as React.ReactNode)
                        : null}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-10 text-gray-400"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer (Optional Placeholder) */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-500">
        <span>Showing {data.length} entries</span>
        <div className="flex gap-2">
          <button
          onClick={() => handlePrev()}
           className="px-3 py-1 border rounded-md hover:bg-gray-100">
            Prev
          </button>
          <button 
          onClick={() => handleNext()}
          className="px-3 py-1 border rounded-md bg-black text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}