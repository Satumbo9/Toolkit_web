"use client";
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';
import DataTable from '@/components/Shared/DataTable/DataTable';
import { Button } from '@/components/ui/button';
import { usersTable } from '@/constants';
import { DataTypes } from '@/types';
import Link from "next/link";
import React from 'react'

const page = () => {

  const columnsConfig1: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Roles", header: "Roles" },
  ];

  const columns1 = createColumns(columnsConfig1);

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
  ];

  const columns2 = createColumns(columnsConfig2);

  return (
    <>
      <section className="text-start w-full flex gap-2 p-2">

        <div className="flex-auto">

          <Link href={"/admin/adHoc/reports"}>
            <Button className="px-10 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
              <p className="text-pretty">
                Generate Reports with Parameters
              </p>
            </Button>
          </Link>
          <h2 className="font-semibold text-center mt-5">
            PASO FDO Summary Charge-back Income Expense Acquire Charge-back
          </h2>
          <div className="grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns1}
              data={usersTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="brand"
            />
          </div>
        </div>
        <div className="flex-auto">
          <div className="text-end">

            <Link href={""}>
              <Button className="px-10 mt-2 bg-gradient-to-r from-[#79CB6C] to-[#285C20] hover:opacity-90 text-white">
                <p className="text-pretty">
                  Export to Excel
                </p>
              </Button>
            </Link>
          </div>
          <h2 className="font-semibold text-center mt-5">
            PASO FDO Summary Charge-back Income Expense Charge-back
          </h2>
          <div className="grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns2}
              data={usersTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="brand"
            />
          </div>
        </div>

      </section>
    </>
  )
}

export default page