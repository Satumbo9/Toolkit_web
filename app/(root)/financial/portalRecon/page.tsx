"use client";

import { DatePickerWithRange }from "@/components/Shared/Calender/Calender";
import { Price } from "@/components/Shared/DataTable/CellFormat";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { entryData } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";

const FinancialPortalRecon = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "P Vendor", header: "Vendor" },
    { accessorKey: "Eff. Date", header: "Eff. Date" },
    { accessorKey: "Added By", header: "Added By" },
    { accessorKey: "Added Date", header: "Added Date" },
    { accessorKey: "Reference", header: "Reference" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Amount", header: "Amount", cell: Price },
    { accessorKey: "Routing#", header: "Routing#" },
    { accessorKey: "Account #", header: "Account #" },
    { accessorKey: "Date Approved", header: "Date Approved" },
    { accessorKey: "Approved by", header: "Approved by" },
    { accessorKey: "Proc. By", header: "Proc. By" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <div className="flex flex-col flex-wrap rounded-r-sm rounded-bl-sm border px-7 py-5 shadow-sm">
      <h1>Search Criteria</h1>
      <div className="flex flex-col">
        <DatePickerWithRange />
      </div>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={entryData}
          enableColumnFilter={true}
          filteredBy="P Vendor"
        />
      </div>
    </div>
  );
};

export default FinancialPortalRecon;
