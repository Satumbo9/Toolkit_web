"use client";
import React from "react";
import { newOrderInfoSchema } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePickerForm, SelectForm } from "@/components/Shared/InstantForm";
import CustomButtons from "@/components/Shared/CustomButtons";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { agentEmailList, merchantEquipmentOrderTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const Page = () => {
  const form = useForm<z.infer<typeof newOrderInfoSchema>>({
    resolver: zodResolver(newOrderInfoSchema),
    defaultValues: {
      ModelType: "",
      Quantity: 0,
      AgentCompanyName: "",
      Warrantly: false,
      WillPayByACH: false,
      Billing: false,
      ShippingMethod: false,
      UseLegalDbaInfo: false,
      ContactName: "",
      Address: "",
      Address2: "",
      City: "",
      State: "",
      PostalCode: "",
      ContactPhone: "",
      ContactEmail: "",
      UploadAchForm: "",
      UploadProgRequest: z.any(),
    },
  });

  const onSubmit = (value: z.infer<typeof newOrderInfoSchema>) => {
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Serial", header: "Serial" },
    { accessorKey: "Tracking", header: "Tracking" },
    { accessorKey: "Price", header: "Price" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Edit", header: "Edit" },
    { accessorKey: "Delete", header: "Delete" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* RESIDUALS */}
          <h1 className="my-3 text-center text-2xl font-medium text-sky-500">
            Residuals
          </h1>
          <div className="flex items-end justify-between gap-2 max-lg:flex-wrap">
            <div className="flex flex-auto items-end gap-2 max-lg:justify-center">
              <DatePickerForm
                control={form.control}
                formName="ResidualFromDate"
                label="From Date:"
                placeholder="Select a date"
              />
              <SelectForm
                control={form.control}
                formName="AgentCompanyName"
                label="Agent / Company Name:"
                placeholder=""
                content={agentEmailList}
                valueKey={"Email"}
                displayKey={"Name"}
              />
            </div>
            {/* SAVE OTHER DOCUMENTS BUTTON */}
            <div className="flex flex-auto justify-end gap-2 p-0 max-lg:justify-center">
              <CustomButtons className="flex-1 px-10" btnType="default">
                Search
              </CustomButtons>
              <CustomButtons className="flex-1 px-10" btnType="default">
                Download .csv
              </CustomButtons>
            </div>
          </div>

          <div className="my-4 grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={merchantEquipmentOrderTable}
              enableSorting={true}
              enableColumnFilter={false}
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Page;
