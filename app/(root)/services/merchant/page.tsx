"use client";

import AddNewMerchant from "@/components/services/AddNewMerchant";
import EditMerchant from "@/components/services/EditMerchant";
import { Status } from "@/components/Shared/DataTable/CellFormat";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DataTypes } from "@/types";
import React, { useState } from "react";

const ServiceMerchant = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const data = [
    {
      merchantId: 1,
      merchantMid: "MID12345",
      merchantName: "Merchant One",
      funderName: "Funder A",
      merchantStatus: "Active",
    },
    {
      merchantId: 2,
      merchantMid: "MID67890",
      merchantName: "Merchant Two",
      funderName: "Funder B",
      merchantStatus: "Inactive",
    },
    {
      merchantId: 3,
      merchantMid: "MID34567",
      merchantName: "Merchant Three",
      funderName: "Funder C",
      merchantStatus: "Active",
    },
    {
      merchantId: 4,
      merchantMid: "MID90123",
      merchantName: "Merchant Four",
      funderName: "Funder D",
      merchantStatus: "Inactive",
    },
    {
      merchantId: 5,
      merchantMid: "MID45678",
      merchantName: "Merchant Five",
      funderName: "Funder E",
      merchantStatus: "Active",
    },
    {
      merchantId: 6,
      merchantMid: "MID23456",
      merchantName: "Merchant Six",
      funderName: "Funder F",
      merchantStatus: "Inactive",
    },
    {
      merchantId: 7,
      merchantMid: "MID78901",
      merchantName: "Merchant Seven",
      funderName: "Funder G",
      merchantStatus: "Active",
    },
    {
      merchantId: 8,
      merchantMid: "MID56789",
      merchantName: "Merchant Eight",
      funderName: "Funder H",
      merchantStatus: "Inactive",
    },
    {
      merchantId: 9,
      merchantMid: "MID89012",
      merchantName: "Merchant Nine",
      funderName: "Funder I",
      merchantStatus: "Active",
    },
    {
      merchantId: 10,
      merchantMid: "MID34567",
      merchantName: "Merchant Ten",
      funderName: "Funder J",
      merchantStatus: "Inactive",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "merchantId", header: "Merchant ID" },
    { accessorKey: "merchantMid", header: "Merchant MID" },
    { accessorKey: "merchantName", header: "Merchant Name" },
    { accessorKey: "funderName", header: "Funder Name" },
    {
      accessorKey: "merchantStatus",
      header: "Merchant Status",
      cell: (info) => (
        <Status
          row={info}
          status={{ Success: ["Active"], Pending: ["Inactive"] }}
        />
      ),
    },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="px-4 py-10">
        <div className="flex flex-col">
          <p className="text-3xl text-sky-500">
            {isOpen
              ? "Add New Merchant"
              : isEdit
                ? "Edit Merchant"
                : "Merchant List"}
          </p>
          <div className={cn(isOpen || isEdit ? "hidden" : "") + "grid grid-cols-1 overflow-auto"}>
            <DataTable
              columns={columns}
              data={data}
              enableColumnFilter={true}
              filteredBy="merchantName"
              editFunction={() => setIsEdit(!isEdit)}
            />
          </div>
        </div>
        <Button
          className={isOpen || isEdit ? "hidden" : "mt-5"}
          onClick={() => setIsOpen(!isOpen)}
        >
          Add New Merchant
        </Button>

        {isOpen && <AddNewMerchant isOpen={isOpen} setIsOpen={setIsOpen} />}
        {isEdit && <EditMerchant isEdit={isEdit} setIsEdit={setIsEdit} />}
      </div>
    </div>
  );
};

export default ServiceMerchant;
