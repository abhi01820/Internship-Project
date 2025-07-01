import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import StatusChip from "./StatusChip";
import AvatarGroup from "./AvatarGroup";

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
  add?: string;
};

const defaultData: Employee[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: i % 5 === 0 ? "Love Maggo" : i % 3 === 0 ? "Manish" : "J Janardhan",
  department: ["Engineering", "Design", "Product", "HR", "Marketing"][i % 5],
  role: ["Frontend Developer", "UX Designer", "Product Manager", "QA Engineer", "Data Analyst"][i % 5],
  status: ["In-process", "Need to start", "Complete", "Blocked"][i % 4],
  joiningDate: `2023-${(i % 12 + 1).toString().padStart(2, "0")}-15`,
  location: ["Hyderabad", "Bangalore", "Mumbai", "Delhi", "Chennai"][i % 5],
  email: `user${i + 1}@example.com`,
  add: "",
}));

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
  columnHelper.accessor("add", {
    header: () => (
      <div className="flex items-center gap-1">
        <span className="text-lg font-bold">+</span>
        <span className="text-sm font-semibold">Add</span>
      </div>
    ),
    cell: () => <span className="text-gray-400 italic">---</span>,
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
    <div className="p-1">
      <div className="overflow-x-auto border rounded-lg shadow bg-white max-h-[70vh] overflow-y-auto">
        <table className="min-w-full table-auto text-sm border-separate border-spacing-0">
          <thead className="bg-gray-100 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-dotted border-r border-gray-200 bg-gray-100"
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
                    className="px-4 py-2 whitespace-nowrap text-sm text-gray-800 border-r border-dotted border-gray-200"
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
      <AvatarGroup />
    </div>
  );
};

export default Spreadsheet;
