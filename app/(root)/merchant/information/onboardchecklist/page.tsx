"use client";

import React from "react";
// import { z } from "zod";
// import { newMerchantSchema} from "@/lib/utils";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { DataTypes } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { onboardCheckListTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";

const page = () => {
  // const form = useForm<z.infer<typeof newMerchantSchema>>({
  //   resolver: zodResolver(newMerchantSchema),
  //   defaultValues: {
  //     MID: "",
  //     LegalName: "",
  //     DBA: "",
  //     Phone: "",
  //     Status: "",
  //     Approval: "",
  //     Filter: "",
  //     Processor: "",
  //     Fitler2: "",
  //     AgentID: 0,
  //     SalesRep: "",
  //     Split: 0,
  //     SplitName: "",
  //     SplitID: 0,
  //     LeadSource: "",
  //     SplitLead: 0,
  //     EstAnnual: 0,
  //     Transactions: 0,
  //     Filter3: "",
  //     Banks: "",
  //     WAVItAccount: 0,
  //     MCCCode: "",
  //     Notice: "",
  //     ChildMID: false,
  //     WAVitAccount: false,
  //     WAVitApp: false,
  //     NewAccountTasks: false,
  //     BusinessRetail: false,
  //     BusinessEcommerce: false,
  //     BusinessRestaurant: false,
  //     BusinessMoTo: false,
  //     DeployBy: "",
  //   },
  // });

  // const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
  //   console.log(value);
  // };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "ID", header: "ID" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "ID2", header: "ID2" },
    { accessorKey: "Documents", header: "Documents" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <section>
        <h1 className="mb-3 text-2xl text-sky-500">Onboard Check List</h1>

        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Checkbox />
            <span className="text-nowrap">Retail</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <span className="text-nowrap">e-Commerce</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <span className="text-nowrap">Restaurant</span>
          </div>
        </div>
        <div className="mb-5 mt-3 grid flex-auto grid-cols-1 overflow-auto rounded-md">
          <DataTable
            columns={columns}
            data={onboardCheckListTable}
            enableColumnFilter={true}
            filteredBy="Documents"
          />
        </div>
      </section>
    </>
  );
};

export default page;
