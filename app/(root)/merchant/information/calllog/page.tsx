"use client";
import React from "react";
import { callLogsTasks } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const page = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "CreatedDate", header: "CreatedDate" },
    { accessorKey: "Username", header: "Username" },
    { accessorKey: "Category", header: "Category" },
    { accessorKey: "TaskDescription", header: "TaskDescription" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <h1 className="mb-3 text-2xl text-sky-500">Call Log / Tasks</h1>

      <div className="grid grid-cols-1 overflow-auto text-nowrap rounded-md p-2">
        <DataTable
          columns={columns}
          data={callLogsTasks}
          enableColumnFilter={true}
          filteredBy="Username"
        />
      </div>
    </section>
  );
};

export default page;
