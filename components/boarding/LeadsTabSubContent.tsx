"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { fspLeadsTable, northLeadsTable } from "@/constants";
import { DataTypes } from "@/types";
import { Form } from "../ui/form";
import { newFspLeadSchema, newNorthBlindLeadSchema } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm } from "../Shared/InstantForm";

const MiCampLeads = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newNorthBlindLeadSchema>>({
    resolver: zodResolver(newNorthBlindLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newNorthBlindLeadSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              MiCamp Merchant Processing Application
            </h1>
            <span>You can send up to 15 Leads per day. (You have 15 more)</span>

            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="Email"
                label="Email"
                placeholder="Insert a valid Email"
              />
              <InputForm
                control={form.control}
                formName="Name"
                label="Name:"
                placeholder="Insert a name"
              />
            </div>
            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="hidden grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={northLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="Name"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const NorthLeads = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newNorthBlindLeadSchema>>({
    resolver: zodResolver(newNorthBlindLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newNorthBlindLeadSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              North Blind Leads for Merchant
            </h1>
            <span>You can send up to 15 Leads per day. (You have 15 more)</span>

            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="Email"
                label="Email"
                placeholder="Insert a valid Email"
              />
              <InputForm
                control={form.control}
                formName="Name"
                label="Name:"
                placeholder="Insert a name"
              />
            </div>
            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={northLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="Name"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const FspLeads = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newFspLeadSchema>>({
    resolver: zodResolver(newFspLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newFspLeadSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <h1 className="mt-10 text-xl font-medium text-sky-500">
              FSP Blind Leads for Merchant
            </h1>
            <span>You can send up to 20 Leads per day. (You have 20 more)</span>

            <div className="my-5 grid grid-cols-2 gap-2">
              <InputForm
                control={form.control}
                formName="Email"
                label="Email"
                placeholder="Insert a valid Email"
              />
              <InputForm
                control={form.control}
                formName="Name"
                label="Name:"
                placeholder="Insert a name"
              />
            </div>
            <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
              <Button className="px-10" variant={"submit"}>
                Send
              </Button>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={fspLeadsTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="Name"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default function RenderLeadsTabComponents(value: any) {
  console.log(value);
  switch (value) {
    case "miCampLeads":
      return <MiCampLeads />;
    case "northLeads":
      return <NorthLeads />;
    case "fspLeads":
      return <FspLeads />;
  }
}
