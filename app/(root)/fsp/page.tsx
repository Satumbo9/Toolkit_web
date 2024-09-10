"use client";

import { Price } from "@/components/Shared/DataTable/CellFormat";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  CheckboxForm,
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

const FSP = () => {
  const CriteriaSchema = z.object({
    limitReportsToSpecificDate: z.boolean(),
    dateToUser: z.string(),
    category: z.string(),
    reportName: z.string(),
    useDateRange: z.boolean(),
    description: z.string(),
    beginDate: z.string(),
    endDate: z.string(),
  });

  const form = useForm<z.infer<typeof CriteriaSchema>>({
    resolver: zodResolver(CriteriaSchema),
    defaultValues: {
      limitReportsToSpecificDate: false,
      dateToUser: "",
      category: "",
      reportName: "",
      useDateRange: false,
      description: "",
      beginDate: "",
      endDate: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CriteriaSchema>) => {
    console.log(values);
  };

  const renderForm = [
    {
      id: 1,
      title: "Limit Reports to Specific Date",
      value: "limitReportsToSpecificDate",
    },
    {
      id: 2,
      title: "Date to user",
      value: "dateToUser",
    },
    {
      id: 3,
      title: "Category",
      value: "Show all categories",
      options: [
        {
          id: 1,
          title: "Category 1",
          value: "1",
        },
        {
          id: 2,
          title: "Category 2",
          value: "2",
        },
      ],
    },
    {
      id: 4,
      title: "Report Name",
      value: "reportName",
      options: [
        {
          id: 1,
          title: "Method 1",
          value: "1",
        },
        {
          id: 2,
          title: "Method 2",
          value: "2",
        },
      ],
    },
    {
      id: 5,
      title: "Use Date Range",
      value: "useDateRange",
      type: "date",
    },
    {
      id: 6,
      title: "Description",
      value: "description",
    },
    {
      id: 7,
      title: "beginDate",
      value: "Begin Date",
      type: "date",
    },
    {
      id: 8,
      title: "End Date",
      value: "endDate",
      type: "date",
    },
  ];

  const data = [
    {
      fileName: "report1.csv",
      reportDate: new Date("07-01-2024"),
      sortFor: "Merchant",
      sortCode: "MRC001",
      groupName: "Group A",
      mid: "123456",
      merchantName: "John's Store",
      startDate: new Date("06-01-2024"),
      cardNumber: "************1234",
      authAmount: 100.0,
      transactionDate: new Date("06-15-2024"),
      authCode: "123456",
    },
    {
      fileName: "report2.csv",
      reportDate: new Date("07-02-2024"),
      sortFor: "Merchant",
      sortCode: "MRC002",
      groupName: "Group B",
      mid: "789012",
      merchantName: "Jane's Boutique",
      startDate: new Date("06-02-2024"),
      cardNumber: "************5678",
      authAmount: 200.0,
      transactionDate: new Date("06-16-2024"),
      authCode: "789012",
    },
    {
      fileName: "report3.csv",
      reportDate: new Date("07-03-2024"),
      sortFor: "Merchant",
      sortCode: "MRC003",
      groupName: "Group C",
      mid: "345678",
      merchantName: "Bob's Restaurant",
      startDate: new Date("06-03-2024"),
      cardNumber: "************9012",
      authAmount: 50.0,
      transactionDate: new Date("06-17-2024"),
      authCode: "345678",
    },
    {
      fileName: "report4.csv",
      reportDate: new Date("07-04-2024"),
      sortFor: "Merchant",
      sortCode: "MRC004",
      groupName: "Group D",
      mid: "901234",
      merchantName: "Alice's Cafe",
      startDate: new Date("06-04-2024"),
      cardNumber: "************3456",
      authAmount: 75.0,
      transactionDate: new Date("06-18-2024"),
      authCode: "901234",
    },
    {
      fileName: "report5.csv",
      reportDate: new Date("07-05-2024"),
      sortFor: "Merchant",
      sortCode: "MRC005",
      groupName: "Group E",
      mid: "567890",
      merchantName: "Mike's Gym",
      startDate: new Date("06-05-2024"),
      cardNumber: "************7890",
      authAmount: 25.0,
      transactionDate: new Date("06-19-2024"),
      authCode: "567890",
    },
    {
      fileName: "report6.csv",
      reportDate: new Date("07-06-2024"),
      sortFor: "Merchant",
      sortCode: "MRC006",
      groupName: "Group F",
      mid: "234567",
      merchantName: "Emma's Salon",
      startDate: new Date("06-06-2024"),
      cardNumber: "************1239",
      authAmount: 150.0,
      transactionDate: new Date("06-20-2024"),
      authCode: "234567",
    },
    {
      fileName: "report7.csv",
      reportDate: new Date("07-07-2024"),
      sortFor: "Merchant",
      sortCode: "MRC007",
      groupName: "Group G",
      mid: "890123",
      merchantName: "David's Store",
      startDate: new Date("06-07-2024"),
      cardNumber: "************5673",
      authAmount: 100.0,
      transactionDate: new Date("06-21-2024"),
      authCode: "890123",
    },
    {
      fileName: "report8.csv",
      reportDate: new Date("07-08-2024"),
      sortFor: "Merchant",
      sortCode: "MRC008",
      groupName: "Group H",
      mid: "456789",
      merchantName: "Sophia's Boutique",
      startDate: new Date("06-08-2024"),
      cardNumber: "************9017",
      authAmount: 200.0,
      transactionDate: new Date("06-22-2024"),
      authCode: "456789",
    },
    {
      fileName: "report9.csv",
      reportDate: new Date("07-09-2024"),
      sortFor: "Merchant",
      sortCode: "MRC009",
      groupName: "Group I",
      mid: "678901",
      merchantName: "Olivia's Restaurant",
      startDate: new Date("06-09-2024"),
      cardNumber: "************3451",
      authAmount: 50.0,
      transactionDate: new Date("06-23-2024"),
      authCode: "678901",
    },
    {
      fileName: "report10.csv",
      reportDate: new Date("07-10-2024"),
      sortFor: "Merchant",
      sortCode: "MRC010",
      groupName: "Group J",
      mid: "234567",
      merchantName: "Ava's Store",
      startDate: new Date("06-10-2024"),
      cardNumber: "************7892",
      authAmount: 75.0,
      transactionDate: new Date("06-24-2024"),
      authCode: "234567",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "fileName", header: "File Name" },
    { accessorKey: "reportDate", header: "Report Date" },
    { accessorKey: "sortFor", header: "Sort For" },
    { accessorKey: "sortCode", header: "Sort Code" },
    { accessorKey: "groupName", header: "Group Name" },
    { accessorKey: "mid", header: "MID" },
    { accessorKey: "merchantName", header: "Merchant Name" },
    { accessorKey: "startDate", header: "Start Date" },
    { accessorKey: "cardNumber", header: "Card Number" },
    { accessorKey: "authAmount", header: "Auth Amount", cell: Price },
    { accessorKey: "transactionDate", header: "Transaction Date" },
    { accessorKey: "authCode", header: "Auth Code" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <section className="p-12">
      <div className="rounded-sm border px-4 py-10 shadow-sm">
        <p className="text-3xl text-sky-500">Search Criteria</p>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {renderForm.map((item) =>
                item.options ? (
                  <SelectForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                    content={item.options}
                    valueKey="id"
                    displayKey="title"
                    placeholder={`Select ${item.title}`}
                  />
                ) : item.type ? (
                  <DatePickerForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                    placeholder={`Pick ${item.title}`}
                  />
                ) : item.value === "description" ? (
                  <TextAreaForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : (
                  item.value === "limitereportsToSpecificDate" ||
                  (item.value === "useDateRange" && (
                    <CheckboxForm
                      key={item.id}
                      control={form.control}
                      formName={item.value}
                      label=""
                      placeholder={item.title}
                    />
                  ))
                ),
              )}

              <div className="mt-5 gap-5 space-x-5">
                <Button type="submit">Display</Button>
                <Button onClick={(e: React.MouseEvent) => e.preventDefault()}>
                  Export to Excel
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-5 grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={data}
              enableColumnFilter={true}
              filteredBy="merchantName"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FSP;
