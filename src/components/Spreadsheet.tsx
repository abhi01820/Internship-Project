import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import StatusChip from "./StatusChip";

// Types

type Employee = {
  id: number;
  name: string;
  department: string;
  role: string;
  status: string;
  joiningDate: string;
  location: string;
  email: string;
};

const defaultData: Employee[] = [
  {
    id: 1,
    name: "Abhij",
    department: "Engineering",
    role: "Frontend Developer",
    status: "In-process",
    joiningDate: "2024-01-15",
    location: "Hyderabad",
    email: "abhij@example.com",
  },
  {
    id: 2,
    name: "Shekhar",
    department: "Product",
    role: "Product Manager",
    status: "Need to start",
    joiningDate: "2023-06-01",
    location: "Bangalore",
    email: "shekhar@example.com",
  },
  {
    id: 3,
    name: "Vinoothna",
    department: "Design",
    role: "UX Designer",
    status: "Complete",
    joiningDate: "2023-09-10",
    location: "Delhi",
    email: "vino@example.com",
  },
];

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("department", {
    header: "Department",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <StatusChip label={info.getValue()} />,
  }),
  columnHelper.accessor("joiningDate", {
    header: "Joining Date",
  }),
  columnHelper.accessor("location", {
    header: "Location",
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => (
      <a
        href={`mailto:${info.getValue()}`}
        className="text-blue-500 underline"
      >
        {info.getValue()}
      </a>
    ),
  }),
];

const Spreadsheet: React.FC = () => {
  const [editingCell, setEditingCell] = React.useState<{
    rowId: string;
    colId: string;
  } | null>(null);

  const [editValue, setEditValue] = React.useState("");

  const handleEdit = (rowId: string, colId: string, value: string) => {
    setEditingCell({ rowId, colId });
    setEditValue(value);
  };

  const handleSave = () => {
    console.log("Edited:", editingCell, "New Value:", editValue);
    setEditingCell(null);
  };

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6">
      <div className="overflow-x-auto border rounded-lg shadow bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-2 whitespace-nowrap text-sm text-gray-800"
                  >
                    {editingCell?.rowId === row.id &&
                    editingCell?.colId === cell.column.id ? (
                      <input
                        className="border p-1 w-full text-sm"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSave();
                        }}
                        autoFocus
                      />
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          handleEdit(
                            row.id,
                            cell.column.id,
                            cell.getValue() as string
                          )
                        }
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spreadsheet;
