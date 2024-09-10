"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { wavitSettingsTable, wavitTransactionsTable } from "@/constants";
import { DataTypes } from "@/types";
import { Form } from "../ui/form";
import { CheckboxForm, DatePickerForm } from "../Shared/InstantForm";
import { wavitTransactionsSchema } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomButtons from "../Shared/CustomButtons";

const Transactions = () => {
  const form = useForm<z.infer<typeof wavitTransactionsSchema>>({
    resolver: zodResolver(wavitTransactionsSchema),
    defaultValues: {
      FromDate: new Date(),
      ToDate: new Date(),
      LookForTrouble: false,
      LookDebitBusiness: false,
      SaveToC: false,
    },
  });

  const onSubmit = (value: z.infer<typeof wavitTransactionsSchema>) => {
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DateTime", header: "ID" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Invoice", header: "Invoice" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "WAVit", header: "WAVit" },
    { accessorKey: "Total", header: "Total" },
    { accessorKey: "CC", header: "CC" },
    { accessorKey: "Last4", header: "Last 4" },
    { accessorKey: "NameOnCard", header: "Name on Card" },
    { accessorKey: "AuthCode", header: "Auth Code" },
    { accessorKey: "Tax", header: "Tax" },
    { accessorKey: "Tax2", header: "Tax" },
    { accessorKey: "Porcentage", header: "%" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="mt-4 gap-0 text-start">
              <div className="grid grid-cols-4 items-end gap-2 max-2xl:grid-cols-2 max-lg:grid-cols-1">
                <DatePickerForm
                  control={form.control}
                  formName="FromDate"
                  label="From Date"
                  placeholder="mm/dd/2024"
                />
                <DatePickerForm
                  control={form.control}
                  formName="ToDate"
                  label="To Date"
                  placeholder="mm/dd/2024"
                />
                <CheckboxForm
                  control={form.control}
                  formName="LookForTrouble"
                  label=""
                  placeholder="Look for Trouble"
                />
                <CheckboxForm
                  control={form.control}
                  formName="LookDebitBusiness"
                  label=""
                  placeholder="Look for Debit Business (slow)"
                  className="mb-2"
                />
                <CustomButtons btnType="default" className="my-2 w-full flex-1">
                  Update
                </CustomButtons>
                <CustomButtons btnType="primary" className="my-2 w-full flex-1">
                  Export Table
                </CustomButtons>
                <CheckboxForm
                  control={form.control}
                  formName="SaveToC"
                  label=""
                  placeholder="Save to c:\mcs_toolkit"
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={wavitTransactionsTable}
          enableColumnFilter={true}
          filteredBy="Type"
        />
      </div>
    </section>
  );
};

const Settings = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Value", header: "Value" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div className="my-5 grid w-1/2 grid-cols-1 overflow-auto max-xl:w-auto">
        <DataTable
          columns={columns}
          data={wavitSettingsTable}
          enableColumnFilter={false}
          actionsColumn={false}
          pagination={false}
        />
      </div>
    </section>
  );
};

export default function RenderWavitInfoTabComponents(value: string) {
  switch (value) {
    case "transactions":
      return <Transactions />;
    case "settings":
      return <Settings />;
  }
}
