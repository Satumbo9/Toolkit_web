import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "../Shared/DataTable/DataTable";

const LastCallLogsPreview = () => {
  const callLogs = [
    {
      id: 1,
      date: "07/23/2024",
      username: "Tony Stark",
      notes: "This table was created.",
    },
    {
      id: 2,
      date: "07/23/2024",
      username: "HC",
      notes: "This table was edited.",
    },
    {
      id: 3,
      date: "07/24/2024",
      username: "Jimmy Page",
      notes: "This table will be changed by me.",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "date", header: "Date" },
    { accessorKey: "username", header: "User Name" },
    { accessorKey: "notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <div className="mb-3 mt-0 flex-auto rounded-lg border p-4 shadow-md">
      <h1 className="text-3xl text-sky-500">Last Call Logs Preview</h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={callLogs}
          enableColumnFilter={true}
          filteredBy="username"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default LastCallLogsPreview;
