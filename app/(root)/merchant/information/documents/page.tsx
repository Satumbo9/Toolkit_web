/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { documentsTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const page = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DocType", header: "Doc Type" },
    { accessorKey: "Historic", header: "Historic" },
    { accessorKey: "DocName", header: "Doc Name" },
    { accessorKey: "FileSize", header: "File Size" },
    { accessorKey: "UploadDateTime", header: "Upload Date/Time" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>
        <h1 className="mb-3 text-2xl text-sky-500">Documents</h1>

        <div className="mb-5 mt-3 grid flex-auto grid-cols-1 overflow-auto rounded-md">
          <DataTable
            columns={columns}
            data={documentsTable}
            enableColumnFilter={true}
            filteredBy="DocName"
          />
        </div>
        <div className="flex justify-between gap-8 max-xl:flex-wrap">
          <div className="flex gap-2">
            <Button className="rounded-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
              +
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
              -
            </Button>
            <div className="flex items-center gap-2">
              <Checkbox />
              <span className="text-nowrap">Show Deleted Documents</span>
            </div>
          </div>
          <div>
            <Button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
              Generate Upload Link
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
