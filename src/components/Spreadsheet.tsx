import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
    status: "Active",
    joiningDate: "2024-01-15",
    location: "Hyderabad",
    email: "abhij@example.com",
  },
  {
    id: 2,
    name: "Shekhar",
    department: "Product",
    role: "Product Manager",
    status: "Inactive",
    joiningDate: "2023-06-01",
    location: "Bangalore",
    email: "shekhar@example.com",
  },
  {
    id: 3,
    name: "Vinoothna",
    department: "Design",
    role: "UX Designer",
    status: "Active",
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
  }),
  columnHelper.accessor("joiningDate", {
    header: "Joining Date",
  }),
  columnHelper.accessor("location", {
    header: "Location",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
];


const Spreadsheet: React.FC = () => {
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
                  : flexRender(header.column.columnDef.header, header.getContext())}
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
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
