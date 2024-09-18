"use client";

import React from "react";
import { agentData } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";

const Page = () => {

  const ColumnConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Agent's Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
  ];

  const columns = createColumns(ColumnConfig);
  return (
    <div>
      <h1 className="mb-3 text-2xl text-sky-500">Agent List</h1>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={agentData}
          enableColumnFilter={true}
          filteredBy="name"
        />
      </div>
    </div>
  );
};

export default Page;
