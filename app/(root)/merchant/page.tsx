"use client";

import React from "react";
import { employees } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
import MerchantDetails from "@/components/merchants/MerchantDetails";

const columnsConfig: ColumnConfig<DataTypes>[] = [
  { accessorKey: "EmployeeID", header: "ID" },
  { accessorKey: "FullName", header: "Name" },
  { accessorKey: "Address", header: "Address" },
  { accessorKey: "City", header: "City" },
  { accessorKey: "Region", header: "Region" },
  { accessorKey: "PostalCode", header: "Postal Code" },
  { accessorKey: "Country", header: "Country" },
  { accessorKey: "HomePhone", header: "Phone" },
  { accessorKey: "Position", header: "Position" },
  { accessorKey: "BirthDate", header: "Birth Date" },
];

const columns = createColumns(columnsConfig);

const Page = () => {
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold text-sky-500">
        Merchant List
      </h1>
      <div className="flex gap-4 2xl:flex-row">
        <div className="grid flex-auto grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={employees}
            enableColumnFilter={true}
            filteredBy="EmployeeID"
          />
        </div>
        <div className="flex-auto justify-center 2xl:w-2/5">
          <MerchantDetails />
        </div>
      </div>
    </section>
  );
};

export default Page;
