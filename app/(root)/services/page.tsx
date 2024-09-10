"use client";

import DataTable from "@/components/Shared/DataTable/DataTable";
import React, { useState } from "react";
import { funderList } from "@/constants";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AddFunder from "@/components/services/AddFunder";

const ServiceFunderList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "funderId", header: "ID" },
    { accessorKey: "funderName", header: "Funder Name" },
    { accessorKey: "contactName", header: "Contact Name" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "email", header: "Email" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="px-5 py-10">
        <p className="text-3xl text-sky-500">
          {isOpen ? "Add Funder" : "Funders List"}
        </p>
        <div className={cn(isOpen ? "hidden" : "")+ "grid grid-cols-1 overflow-auto" } >
          <DataTable
            columns={columns}
            data={funderList}
            enableColumnFilter={true}
            filteredBy="funderName"
          />
        </div>

        <Button
          className={cn(isOpen ? "hidden" : "mt-10")}
          onClick={() => setIsOpen(!isOpen)}
        >
          Add New Funder
        </Button>

        {isOpen && <AddFunder isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default ServiceFunderList;
