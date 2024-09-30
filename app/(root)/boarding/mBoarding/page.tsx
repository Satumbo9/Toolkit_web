"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { merchantBoardingListTable } from "@/constants";
import { DataTypes } from "@/types";
import StartApplication from "@/components/boarding/StartApplication";
import { NextStep, Status } from "@/components/Shared/DataTable/CellFormat";
import { getUser } from "@/constants/actions/user.action";

const Page = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "BusinessName", header: "Client's business name" },
    { accessorKey: "LastUpdate", header: "Last Update" },
    {
      accessorKey: "Status",
      header: "Status",
      cell: (row) => (
        <Status row={row} status={{ Success: [row.getValue()] }} />
      ),
    },
    {
      accessorKey: "NextStep",
      header: "Next Step",
      cell: (row) => NextStep(row.getValue()),
    },
  ];

  const columns = createColumns(columnsConfig);

  const [data, setData] = useState<string | null>();
  let result;
  useEffect(() => {
    async function fetchData() {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        result = await getUser();
        setData(result?.email);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="w-full max-2xl:flex-wrap">
      <div className="flex-auto">
        <StartApplication />
      </div>
      {/* TABLE DIV */}
      <div className="mt-10 flex-auto">
        <h2 className="mt-10 flex justify-center gap-2 text-2xl">
          Merchant Boarding List for
          {!result && <p className="text-sky-500"> {data}</p>}
        </h2>
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable
            columns={columns}
            data={merchantBoardingListTable}
            enableSorting={true}
            enableColumnFilter={true}
            filteredBy="BusinessName"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
