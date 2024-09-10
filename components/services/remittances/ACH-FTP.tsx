"use client";

import { Price } from "@/components/Shared/DataTable/CellFormat";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  DatePickerForm,
  SelectForm,
  TextAreaForm,
} from "@/components/Shared/InstantForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ACHFTP = ({ type }: { type: string }) => {
  const AllSchema = z.object({
    // For ACH entries
    merchant: z.string(),
    amount: z.string(),
    pullDate: z.string(),
    entriesDepositDate: z.string(),
    entriesNotes: z.string(),
    entrySource: z.string(),

    // For ACH Files
    filesDepositeDate: z.string(),
    filesToDate: z.string(),
    filesNotes: z.string(),
    merchantToInclude: z.string(),

    // For FTP files
    buildDate: z.string(),
  });

  let defaultValues;

  switch (type) {
    case "ACHEntries":
      defaultValues = {
        merchant: "",
        amount: "",
        pullDate: "",
        entriesDepositDate: "",
        entriesNotes: "",
        entrySource: "",
      };
      break;
    case "ACHFiles":
      defaultValues = {
        filesDepositeDate: "",
        filesToDate: "",
        filesNotes: "",
        merchantToInclude: "",
      };
      break;
    case "FTPFiles":
      defaultValues = {
        buildDate: "",
      };
      break;
    default:
      defaultValues = {};
      break;
  }

  const form = useForm<z.infer<typeof AllSchema>>({
    resolver: zodResolver(AllSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof AllSchema>) => {
    console.log(values);
  };

  const renderForm = [
    {
      type: "ACHEntries",
      id: 1,
      title: "Merchant",
      value: "merchant",
      merchants: [
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
    {
      type: "ACHEntries",
      id: 2,
      title: "Amount",
      value: "amount",
    },
    {
      type: "ACHEntries",
      id: 3,
      title: "Pull Date",
      value: "pullDate",
      field: "date",
    },
    {
      type: "ACHEntries",
      id: 4,
      title: "Deposite Date",
      value: "entriesDepositDate",
      field: "date",
    },
    {
      type: "ACHEntries",
      id: 5,
      title: "Notes",
      value: "entriesNotes",
    },
    {
      type: "ACHEntries",
      id: 6,
      title: "Entry Source",
      value: "entrySource",
      sourceSelect: [
        { id: 1, title: "ModPay", value: "modPay" },
        { id: 2, title: "PowerPay", value: "powerPay" },
      ],
    },
    {
      type: "ACHFiles",
      id: 7,
      title: "Deposite Date",
      value: "filesDepositeDate",
      field: "date",
    },
    {
      type: "ACHFiles",
      id: 8,
      title: "To Date",
      value: "filesToDate",
      field: "date",
    },
    {
      type: "ACHFiles",
      id: 9,
      title: "Notes",
      value: "filesNotes",
    },
    {
      type: "ACHFiles",
      id: 10,
      title: "Merchants To Include",
      value: "merchantToInclude",
      options: [
        {
          id: 1,
          title: "Daily",
          value: "daily",
        },
        {
          id: 2,
          title: "Weekly",
          value: "weekly",
        },
      ],
    },
    {
      type: "FTPFiles",
      id: 11,
      title: "Build Date",
      value: "merchantToInclude",
    },
  ];

  const filteredRenderForm = renderForm.filter((item) => item.type === type);

  const data = [
    {
      type: type[0],
      id: 1,
      pullDate: new Date("07/15/2023"),
      depositeDate: new Date("03/11/2024"),
      amount: 999,
      notes: "Notes",
    },
    {
      type: type[0],
      id: 2,
      pullDate: new Date("07/15/2023"),
      depositeDate: new Date("03/11/2024"),
      amount: 253,
      notes: "Notes",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "pullDate", header: "Pull Date" },
    { accessorKey: "depositeDate", header: "Deposite Date" },
    { accessorKey: "amount", header: "Amount", cell: Price },
    { accessorKey: "notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {filteredRenderForm.map((item) => {
            return (
              <div key={item.id} className="grid grid-cols-[20%_80%] max-xl:grid-cols-[50%_50%]">
                {item.type === "ACHEntries" &&
                  (item.merchants ? (
                    <SelectForm
                      control={form.control}
                      content={item.merchants}
                      formName={item.value}
                      label={item.title}
                      valueKey="id"
                      displayKey="title"
                      placeholder={`Select ${item.title}`}
                    />
                  ) : item.field ? (
                    <DatePickerForm
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                      placeholder={`Pick ${item.title}`}
                    />
                  ) : item.value === "entriesNotes" ? (
                    <TextAreaForm
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                    />
                  ) : (
                    item.sourceSelect && (
                      <SelectForm
                        control={form.control}
                        content={item.sourceSelect}
                        formName={item.value}
                        valueKey="id"
                        displayKey="title"
                        label={item.title}
                        placeholder={`Select ${item.title}`}
                      />
                    )
                  ))}

                {item.type === "ACHFiles" && item.field ? (
                  <DatePickerForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : item.value === "filesNotes" ? (
                  <TextAreaForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : (
                  item.options && (
                    <SelectForm
                      key={item.id}
                      control={form.control}
                      formName={item.value}
                      content={item.options}
                      valueKey="id"
                      displayKey="title"
                      label={item.title}
                      placeholder={`Select ${item.title}`}
                    />
                  )
                )}

                {item.type === "FTPFiles" && (
                  <DatePickerForm
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                    placeholder={`Select ${item.title}`}
                  />
                )}
              </div>
            );
          })}

          {type === "ACHEntries" ? (
            <div className="mt-5 flex items-center space-x-5">
              <Button>Post</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          ) : (
            <div className="mt-5 flex items-center space-x-5">
              <Button>Search</Button>
            </div>
          )}
        </form>
      </Form>

      <div className="mt-5 grid grid-cols-1 overflow-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ACHFTP;
