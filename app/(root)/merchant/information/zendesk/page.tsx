"use client";
import React from "react";
import { zenDeskTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const page = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "createdDate", header: "Created Date" },
    { accessorKey: "from", header: "From" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "subject", header: "Subject" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div>
      <h1 className="mb-3 text-2xl text-sky-500">ZenDesk (1)</h1>
      <div className="grid grid-cols-1 overflow-auto p-2">
        <DataTable
          columns={columns}
          data={zenDeskTable}
          enableColumnFilter={true}
          filteredBy="name"
        />
      </div>
    </div>
  );
};

export default page;
