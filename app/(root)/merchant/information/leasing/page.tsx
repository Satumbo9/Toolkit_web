"use client";
import React from "react";
import { leasingTable1, leasingTable2, leasingTable3 } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
const page = () => {
  const columnsConfig1: ColumnConfig<DataTypes>[] = [
    { accessorKey: "LeaseNumber", header: "Lease Number" },
    { accessorKey: "FundedDate", header: "Funded Date" },
    { accessorKey: "Funded$", header: "Funded $" },
    { accessorKey: "TSR", header: "TSR" },
    { accessorKey: "Buyback$", header: "Buyback $" },
    { accessorKey: "Score", header: "Score" },
    { accessorKey: "Grade", header: "Grade" },
    { accessorKey: "TSR$", header: "TSR$" },
    { accessorKey: "Term", header: "Term" },
    { accessorKey: "Factor", header: "Factor" },
  ];
  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Order", header: "Order" },
    { accessorKey: "OrderDate", header: "Order Date" },
    { accessorKey: "Status", header: "Status" },
  ];
  const columnsConfig3: ColumnConfig<DataTypes>[] = [
    { accessorKey: "MakeModel", header: "Make Model" },
    { accessorKey: "Serial", header: "Serial" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns1 = createColumns(columnsConfig1);
  const columns2 = createColumns(columnsConfig2);
  const columns3 = createColumns(columnsConfig3);

  return (
    <>
      <section className="w-full">
        <h1 className="mb-3 text-2xl text-sky-500">Leasing</h1>
        <div className="mb-5 grid grid-cols-1 overflow-auto w-full rounded-md">
          <DataTable
            columns={columns1}
            data={leasingTable1}
            enableColumnFilter={true}
            filteredBy="username"
          />
        </div>
        <div className="flex max-xl:flex-wrap  w-full gap-5">
          <div className="flex-auto grid grid-cols-1 overflow-auto rounded-md">
            <DataTable
              columns={columns2}
              data={leasingTable2}
              enableColumnFilter={true}
              filteredBy="username"
            />
          </div>
          <div className="flex-auto grid grid-cols-1 overflow-auto rounded-md">
            <DataTable
              columns={columns3}
              data={leasingTable3}
              enableColumnFilter={true}
              filteredBy="username"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
