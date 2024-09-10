/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { z } from "zod";
import { AccountStatusSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DataTypes } from "@/types";
import { Form } from "@/components/ui/form";
import {
  DatePickerForm,
  SelectForm,
  CheckboxForm,
} from "@/components/Shared/InstantForm";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { accountStatusTable, activityRecordList } from "@/constants";
import CustomButtons from "@/components/Shared/CustomButtons";

const page = () => {
  const form = useForm<z.infer<typeof AccountStatusSchema>>({
    resolver: zodResolver(AccountStatusSchema),
    defaultValues: {
      Activity: "",
      EmvStatus: "",
      Method: "",
      ComplianceDate: new Date(),
      ClickVerified: new Date(),
      ChildMid: false,
      ComplianceSolidDate: new Date(),
      OverallStatus: "",
      ReceivedDate: new Date(),
      WithdrawnDate: new Date(),
      SubmittedDate: new Date(),
      ClosedDate: new Date(),
      ApprovalDate: new Date(),
      ReopenDate: new Date(),
      DeclineDate: new Date(),
      Item1: "",
      Item2: "",
      Item3: "",
    },
  });

  const onSubmit = (value: z.infer<typeof AccountStatusSchema>) => {
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
      <section>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h1 className="mb-3 text-2xl text-sky-500">Account Status</h1>

            <div className="flex gap-3 max-xl:flex-wrap">
              <div className="grid flex-auto grid-cols-1 overflow-auto rounded-md">
                <DataTable
                  columns={columns}
                  data={accountStatusTable}
                  enableColumnFilter={true}
                  filteredBy="UserID"
                  actionsColumn={false}
                />
              </div>
              <div className="flex-auto p-2">
                <div className="w-full">
                  <SelectForm
                    control={form.control}
                    formName="Activity"
                    label="Select an Activity to Record"
                    content={activityRecordList}
                    placeholder="Select an Activity..."
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className="mb-2"
                  />

                  <CustomButtons btnType="default" className="my-2 w-full">
                    SUBMIT
                  </CustomButtons>
                  <CustomButtons btnType="success" className="mb-2 w-full">
                    MERCHANT APPROVED
                  </CustomButtons>
                </div>
              </div>
            </div>
            {/* BOTTOM ROW */}
            <div className="flex flex-wrap gap-4">
              {/* CARD Overall EMV Compliance */}
              <div className="flex-auto rounded-md border p-4 shadow-md">
                <h2>Overall EMV Compliance</h2>
                <SelectForm
                  control={form.control}
                  formName="EmvStatus"
                  label="EMV Status"
                  content={activityRecordList}
                  placeholder="Select an EMV Status..."
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
                <SelectForm
                  control={form.control}
                  formName="Method"
                  label="Method"
                  content={activityRecordList}
                  placeholder="Select a Method..."
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
                <DatePickerForm
                  control={form.control}
                  formName="ComplianceDate"
                  label="Compliance Date"
                  placeholder="mm/dd/2024"
                />
                <DatePickerForm
                  control={form.control}
                  formName="ClickVerified"
                  label="1-Click Verified"
                  placeholder="mm/dd/2024"
                />
              </div>
              {/* Card Solid Portfolio Info */}
              <div className="flex-auto rounded-md border p-4 shadow-md">
                <h2>Solid Portfolio Info</h2>
                <CheckboxForm
                  control={form.control}
                  formName="ChildMid"
                  label=""
                  placeholder="Child MID"
                  className="mt-3 content-center items-center align-middle"
                />
                <DatePickerForm
                  control={form.control}
                  formName="ComplianceSolidDate"
                  label="Compliance Date"
                  placeholder="mm/dd/2024"
                />
                <CustomButtons btnType="default" className="my-2 w-full">
                  Go To Sale Detail
                </CustomButtons>
              </div>

              {/* Card Overall Status */}
              <div className="flex-auto rounded-md border p-4 shadow-md">
                <SelectForm
                  control={form.control}
                  formName="OverallStatus"
                  label="Select an Overall Status"
                  content={activityRecordList}
                  placeholder="Select an Overall Status..."
                  valueKey="id"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
                {/* GRID Status Dates */}
                <div className="grid grid-flow-col grid-rows-4 gap-2">
                  <DatePickerForm
                    control={form.control}
                    formName="ReceivedDate"
                    label="Received Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="SubmittedDate"
                    label="Submitted Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="ApprovalDate"
                    label="Approval Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="DeclineDate"
                    label="Decline Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="WithdrawnDate"
                    label="Withdrawn Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="ClosedDate"
                    label="Closed Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="ReopenDate"
                    label="Reopen Date"
                    placeholder="mm/dd/yyyy"
                  />
                </div>

                <div className="mt-4 flex justify-between gap-2">
                  <SelectForm
                    control={form.control}
                    formName="Item1"
                    label=""
                    content={activityRecordList}
                    placeholder="Select an Item..."
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className="flex-1"
                  />
                  <SelectForm
                    control={form.control}
                    formName="Item2"
                    label=""
                    content={activityRecordList}
                    placeholder="Select an Item..."
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className="flex-1"
                  />
                  <SelectForm
                    control={form.control}
                    formName="Item3"
                    label=""
                    content={activityRecordList}
                    placeholder="Select an Item..."
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default page;
