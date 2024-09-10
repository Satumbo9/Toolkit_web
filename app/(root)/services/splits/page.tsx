"use client";

import AddEditSplit from "@/components/services/splitsPage/Add&EditSplit";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { DatePickerForm, SelectForm } from "@/components/Shared/InstantForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ServicesSplits = () => {
  const [isNewOrEdit, setIsNewOrEdit] = useState<boolean>(false);

  const splitFundingSchema = z.object({
    funder: z.string(),
    currentStatus: z.string(),
    mid: z.string(),
    merchant: z.string(),
    batchDatefrom: z.string(),
    batchDateTo: z.string(),
    splitDepositDateFrom: z.string(),
    splitDepositDateTo: z.string(),
  });

  const form = useForm<z.infer<typeof splitFundingSchema>>({
    resolver: zodResolver(splitFundingSchema),
    defaultValues: {
      funder: "",
      currentStatus: "",
      mid: "",
      merchant: "",
      batchDatefrom: "",
      batchDateTo: "",
      splitDepositDateFrom: "",
      splitDepositDateTo: "",
    },
  });

  const onSubmit = (values: z.infer<typeof splitFundingSchema>) => {
    console.log(values);
  };

  const renderData = [
    {
      id: 1,
      title: "Funder",
      value: "funder",
      options: [
        {
          id: 1,
          title: "Funder 1",
          value: "funder1",
        },
        {
          id: 2,
          title: "Funder 2",
          value: "funder2",
        },
        {
          id: 3,
          title: "Funder 3",
          value: "funder3",
        },
      ],
    },
    {
      id: 2,
      title: "Current Status",
      value: "currentStatus",
      options: [
        {
          id: 1,
          title: "Active",
          value: "active",
        },
        {
          id: 2,
          title: "Inactive",
          value: "inactive",
        },
      ],
    },
    {
      id: 3,
      title: "MID",
      value: "mid",
      options: [
        {
          id: 1,
          title: "MID 1",
          value: "mid1",
        },
        {
          id: 2,
          title: "MID 2",
          value: "mid2",
        },
      ],
    },
    {
      id: 4,
      title: "Merchant",
      value: "merchant",
      options: [
        {
          id: 1,
          title: "Merchant 1",
          value: "merchant1",
        },
        {
          id: 2,
          title: "Merchant 2",
          value: "merchant2",
        },
      ],
    },
  ];

  const renderDateForm = [
    {
      id: 5,
      title: "Batch Date From",
      value: "batchDatefrom",
    },
    {
      id: 6,
      title: "Batch Date To",
      value: "batchDateTo",
    },
    {
      id: 7,
      title: "Split From",
      value: "splitDepositDateFrom",
    },
    {
      id: 8,
      title: "Split To",
      value: "splitDepositDateTo",
    },
  ];

  const data = [
    {
      id: 1,
      merchantId: "MID12345",
      DBA: "ABC Store",
      batch: "B1001",
      split: 0.5,
      "A/C": "1234567890",
      batchDate: new Date("07-15-2024"),
      fundDate: new Date("07-18-2024"),
      Adj: -10.5,
      notes: "Late fee adjustment",
    },
    {
      id: 2,
      merchantId: "MID67890",
      DBA: "XYZ Cafe",
      batch: "B1002",
      split: 0.75,
      "A/C": "9876543210",
      batchDate: new Date("07-20-2024"),
      fundDate: new Date("07-22-2024"),
      Adj: 5.25,
      notes: "Early payment discount",
    },
    {
      id: 3,
      merchantId: "MID34567",
      DBA: "123 Market",
      batch: "B1003",
      split: 0.25,
      "A/C": "555121212",
      batchDate: new Date("07-25-2024"),
      fundDate: new Date("07-28-2024"),
      Adj: 0.0,
      notes: "No adjustments",
    },
    {
      id: 4,
      merchantId: "MID90123",
      DBA: "Quick Bites",
      batch: "B1004",
      split: 0.8,
      "A/C": "111987654",
      batchDate: new Date("07-05-2024"),
      fundDate: new Date("07-08-2024"),
      Adj: -20.0,
      notes: "Refund for returned item",
    },
    {
      id: 5,
      merchantId: "MID45678",
      DBA: "Fashion Boutique",
      batch: "B1005",
      split: 0.6,
      "A/C": "7776543210",
      batchDate: new Date("06-30-2024"),
      fundDate: new Date("07-02-2024"),
      Adj: 15.75,
      notes: "Bonus added",
    },
    {
      id: 6,
      merchantId: "MID23456",
      DBA: "Tech Haven",
      batch: "B1006",
      split: 0.3,
      "A/C": "222333444",
      batchDate: new Date("06-25-2024"),
      fundDate: new Date("06-28-2024"),
      Adj: -8.95,
      notes: "Chargeback",
    },
    {
      id: 7,
      merchantId: "MID78901",
      DBA: "Coffee Corner",
      batch: "B1007",
      split: 0.55,
      "A/C": "666777888",
      batchDate: new Date("06-20-2024"),
      fundDate: new Date("06-22-2024"),
      Adj: 0.0,
      notes: "No adjustments",
    },
    {
      id: 8,
      merchantId: "MID56789",
      DBA: "Sports Central",
      batch: "B1008",
      split: 0.9,
      "A/C": "999000111",
      batchDate: new Date("06-15-2024"),
      fundDate: new Date("06-18-2024"),
      Adj: 35.0,
      notes: "Promotion incentive",
    },
    {
      id: 9,
      merchantId: "MID89012",
      DBA: "Green Grocer",
      batch: "B1009",
      split: 0.4,
      "A/C": "333444555",
      batchDate: new Date("06-10-2024"),
      fundDate: new Date("06-12-2024"),
      Adj: -5.5,
      notes: "Fee reversal",
    },
    {
      id: 10,
      merchantId: "MID34567",
      DBA: "Art Gallery",
      batch: "B1010",
      split: 0.35,
      "A/C": "444555666",
      batchDate: new Date("06-05-2024"),
      fundDate: new Date("06-08-2024"),
      Adj: 0.0,
      notes: "No adjustments",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "merchantId", header: "Merchant ID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "batch", header: "Batch" },
    { accessorKey: "A/C", header: "A/C" },
    { accessorKey: "batchDate", header: "Batch Date" },
    { accessorKey: "fundDate", header: "Fund Date" },
    { accessorKey: "Adj", header: "Adj" },
    { accessorKey: "notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const renderButton = [
    {
      id: 1,
      title: "Clipboard",
      value: "clipboard",
    },
    {
      id: 2,
      title: "Notepad",
      value: "notepad",
    },
    {
      id: 3,
      title: "Result Total",
      value: "resultTotal",
    },
    {
      id: 4,
      title: "Batch Total",
      value: "batchTotal",
    },
    {
      id: 5,
      title: "Split Total",
      value: "splitTotal",
    },
    {
      id: 6,
      title: "Add New",
      value: "addNew",
    },
    {
      id: 7,
      title: "Edit",
      value: "edit",
    },
  ];

  return (
    <div className="rounded-bl-sm rounded-tr-sm border shadow-sm">
      <div className="px-4 py-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn(isNewOrEdit ? "hidden" : "grid grid-cols-2 gap-5")}
          >
            <div>
              {renderData.map((data) =>
                data.options ? (
                  <SelectForm
                    key={data.id}
                    control={form.control}
                    formName={data.value}
                    content={data.options}
                    valueKey="id"
                    displayKey="title"
                    label={data.title}
                    placeholder={`Select ${data.title}`}
                  />
                ) : (
                  ""
                ),
              )}
            </div>

            <div className="grid grid-cols-2 gap-5">
              {renderDateForm.map((date) => (
                <DatePickerForm
                  key={date.id}
                  control={form.control}
                  formName={date.value}
                  label={date.title}
                  placeholder={`Select Date`}
                />
              ))}
            </div>
          </form>
        </Form>

        <div className={cn(isNewOrEdit ? "hidden" : "mt-5")}>
          <div className="grid grid-cols-1 overflow-auto">
            <DataTable columns={columns} data={data} />
          </div>
          <div className="flex justify-between">
            <div className="mt-5 space-x-5">
              {renderButton.length > 0 &&
                renderButton.map((btn, index) =>
                  index > 4 ? "" : <Button key={index}>{btn.title}</Button>,
                )}
            </div>

            <div className="mt-5 space-x-5">
              {renderButton.length > 0 &&
                renderButton.map((btn, index) =>
                  index > 4 ? (
                    <Button
                      key={index}
                      onClick={
                        btn.value === "addNew" || btn.value === "edit"
                          ? () => setIsNewOrEdit(!isNewOrEdit)
                          : () => {}
                      }
                    >
                      {btn.title}
                    </Button>
                  ) : (
                    ""
                  ),
                )}
            </div>
          </div>
        </div>

        {isNewOrEdit && (
          <AddEditSplit
            isNewOrEdit={isNewOrEdit}
            setIsNewOrEdit={setIsNewOrEdit}
          />
        )}
      </div>
    </div>
  );
};

export default ServicesSplits;
