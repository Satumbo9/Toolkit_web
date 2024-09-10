/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Form } from "@/components/ui/form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  InputForm,
  SelectForm,
  TextAreaForm,
} from "@/components/Shared/InstantForm";
import { Button } from "../ui/button";
import { FilePlus, PenBox, Trash2 } from "lucide-react";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { documentsTable } from "@/constants";
import { cn } from "@/lib/utils";

const AddFunder = ({ isOpen, setIsOpen }: any) => {
  const funderSchema = z.object({
    funderName: z.string(),
    referralAgent: z.string(),
    contactName: z.string(),
    contactPhone: z.string(),
    contactEmail: z.string(),
    address: z.string(),
    bankName: z.string(),
    routingNumber: z.string(),
    accountName: z.string(),
    fundingFreq: z.string(),
    currentStatus: z.string(),
    sendDailyEmails: z.string(),
    notes: z.string(),
  });

  const form = useForm<z.infer<typeof funderSchema>>({
    resolver: zodResolver(funderSchema),
    defaultValues: {
      funderName: "",
      referralAgent: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      address: "",
      bankName: "",
      routingNumber: "",
      accountName: "",
      fundingFreq: "",
      currentStatus: "",
      sendDailyEmails: "",
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof funderSchema>) => {
    console.log(values);
  };

  const formMap = [
    { id: 1, title: "Funder Name", value: "funderName" },
    { id: 2, title: "Referral Agent", value: "referralAgent" },
    { id: 3, title: "Contact Name", value: "contactName" },
    { id: 4, title: "Contact Phone", value: "contactPhone" },
    { id: 5, title: "Address", value: "address" },
    { id: 6, title: "Bank Name", value: "bankName" },
    { id: 7, title: "Routing Number", value: "routingNumber" },
    { id: 8, title: "Account Name", value: "accountName" },
    {
      id: 9,
      title: "Funding Frequency",
      value: "fundingFreq",
      data: [
        {
          id: 1,
          title: "Daily",
          value: "while",
        },
        {
          id: 2,
          title: "Once in a while",
          value: "daily",
        },
        {
          id: 3,
          title: "Once a year",
          value: "year",
        },
      ],
    },
    {
      id: 10,
      title: "Current Status",
      value: "currentStatus",
      data: [
        {
          id: 1,
          title: "Closed",
          value: "closed",
        },
        {
          id: 2,
          title: "Open",
          value: "closed",
        },
      ],
    },
    {
      id: 11,
      title: "Send Daily Emails",
      value: "sendDailyEmails",
      data: [
        {
          id: 1,
          title: "No",
          value: "no",
        },
        {
          id: 2,
          title: "Yes",
          value: "yes",
        },
      ],
    },
    { id: 12, title: "Notes", value: "notes" },
  ];

  const tableData = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
    },
    {
      name: "Alice Brown",
      email: "alice.brown@example.com",
    },
    {
      name: "Mike Davis",
      email: "mike.davis@example.com",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
  ];

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DocType", header: "Doc Type" },
    { accessorKey: "Historic", header: "Hist" },
    { accessorKey: "DocName", header: "Doc Name" },
    { accessorKey: "FileSize", header: "File Size" },
    { accessorKey: "UploadDateTime", header: "Upload Date" },
  ];

  const columns = createColumns(columnsConfig);
  const columns2 = createColumns(columnsConfig2);
  return (
    <div className={cn(isOpen ? "" : "hidden")}>
      <div className="grid grid-cols-2 gap-2 max-lg:grid-cols-1">
        <div className="flex flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {formMap.length > 0 &&
                formMap.map((item) =>
                  item.data ? (
                    <SelectForm
                      key={item.id}
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                      content={item.data}
                      valueKey="id"
                      displayKey="title"
                    />
                  ) : item.value === "address" || item.value === "notes" ? (
                    <TextAreaForm
                      key={item.id}
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                    />
                  ) : (
                    <InputForm
                      key={item.id}
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                    />
                  ),
                )}
              <Button
                type="submit"
                variant="default"
                className="mt-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                <PenBox className="mr-2" />
                Save
              </Button>
            </form>
          </Form>
        </div>
        {/* Todo: data tables */}
        <div className="grid grid-cols-[70%_30%] gap-3">
          {[1, 2, 3].map((item) => (
            <React.Fragment key={item}>
              <DataTable columns={columns} data={tableData} />
              <span>
                <h1 className="text-2xl">Distribution List To...</h1>
                <Button variant={"ghost"}>
                  <FilePlus />
                  Add Item
                </Button>
                <Button variant={"ghost"}>
                  <Trash2 />
                  Delete Item
                </Button>
              </span>
            </React.Fragment>
          ))}

          <div>
            <DataTable columns={columns2} data={documentsTable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunder;
