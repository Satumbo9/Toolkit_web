"use client";
import React from "react";
import { rejectCollectionsTable1, rejectCollectionsTable2 } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Status } from "@/components/Shared/DataTable/CellFormat";
import CustomButtons from "@/components/Shared/CustomButtons";

const page = () => {
  //  COSTUMIZATION OF THE COLUMN PRICE
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-center font-medium">{formatted}</div>;
  };
  const columnsConfig1: ColumnConfig<DataTypes>[] = [
    { accessorKey: "SuspenseDate", header: "Suspense Date" },
    { accessorKey: "CreateDate", header: "Create Date" },
    { accessorKey: "DebitAmount", header: "Debit Amount", cell: Price },
    { accessorKey: "CreditAmount", header: "Credit Amount", cell: Price },
    { accessorKey: "RejectCode", header: "Reject Code" },
    { accessorKey: "FollowupDate", header: "Followup Date" },
    { accessorKey: "ResponseDescription", header: "Response Description" },
  ];

  const columns1 = createColumns(columnsConfig1);

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "RefDate", header: "Ref Date" },
    { accessorKey: "InitDate", header: "Init Date" },
    { accessorKey: "ToCollect", header: "To Collect" },
    { accessorKey: "Payments", header: "Payments" },
    {
      accessorKey: "Status",
      header: "Status",
      cell: (value) => (
        <Status
          row={value}
          status={{
            Success: ["Paid"],
            Failed: ["Cancelled"],
            Pending: ["Waiting"],
          }}
        />
      ),
    },
    { accessorKey: "NextDate", header: "Next Date" },
    { accessorKey: "NextTaks", header: "Next Task" },
  ];

  const columns2 = createColumns(columnsConfig2);

  return (
    <section className="w-full">
      <h1 className="mb-3 text-2xl text-sky-500">Reject / Collections</h1>

      <div className="mb-5 grid flex-auto grid-cols-1 overflow-auto rounded-md">
        <DataTable
          columns={columns1}
          data={rejectCollectionsTable1}
          enableColumnFilter={true}
          filteredBy="DebitAmount"
        />
      </div>

      <div className="flex gap-4 max-xl:flex-wrap">
        <div className="mb-5 grid flex-auto grid-cols-1 overflow-auto rounded-md">
          <DataTable
            columns={columns2}
            data={rejectCollectionsTable2}
            enableColumnFilter={true}
            filteredBy="Status"
          />
        </div>
        <div className="w-fit">
          <CustomButtons btnType="default" type="button" className="mb-2 w-full px-10">
            Create New Collection
          </CustomButtons>
          <CustomButtons btnType="default" type="button" className="mb-2 w-full">
            Edit Collection
          </CustomButtons>
          <hr className="my-5 border-transparent bg-transparent" />
          <CustomButtons btnType="success" type="button" className="mb-2 w-full">
            Add Payment
          </CustomButtons>
          <CustomButtons btnType="destructive" type="button" className="mb-2 w-full">
            Desactivate Collection
          </CustomButtons>
        </div>
      </div>
    </section>
  );
};

export default page;
