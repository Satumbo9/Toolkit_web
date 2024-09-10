"use client";

import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { accountStatusTable, activityRecordList } from "@/constants";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { newMerchantSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SelectForm } from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";

const AccountStatusPreview = () => {
  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      DBA: "",
      Phone: "",
      Status: "",
      Approval: "",
      Filter: "",
      Processor: "",
      Fitler2: "",
      AgentID: 0,
      SalesRep: "",
      Split: 0,
      SplitName: "",
      SplitID: 0,
      LeadSource: "",
      SplitLead: 0,
      EstAnnual: 0,
      Transactions: 0,
      Filter3: "",
      Banks: "",
      WAVItAccount: 0,
      MCCCode: "",
      Notice: "",
      ChildMID: false,
      WAVitAccount: false,
      WAVitApp: false,
      NewAccountTasks: false,
      BusinessRetail: false,
      BusinessEcommerce: false,
      BusinessRestaurant: false,
      BusinessMoTo: false,
      DeployBy: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "UserID", header: "User ID" },
    { accessorKey: "SQL", header: "SQL" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <>
      <div className="mb-3 mt-0 flex-auto grow rounded-lg border p-4 shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h1 className="text-3xl text-sky-500">Account Status Preview</h1>
            <div className="flex gap-4 max-xl:flex-col">
              <div className="grid grid-cols-1 overflow-auto">
                <DataTable
                  columns={columns}
                  data={accountStatusTable}
                  enableColumnFilter={true}
                  filteredBy="UserID"
                  actionsColumn={false}
                  pagination={false}
                />
              </div>
              <div className="mt-10 flex-auto">
                <SelectForm
                  control={form.control}
                  formName="SalesRep"
                  label="Select an Activity to Record:"
                  content={activityRecordList}
                  placeholder="Select a Status..."
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
                <CustomButtons btnType="default" className="my-3 w-full">
                  SUBMIT
                </CustomButtons>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AccountStatusPreview;
