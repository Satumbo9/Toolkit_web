"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../Shared/InstantForm";
import { Input } from "../ui/input";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Checkbox } from "../ui/checkbox";
import TasksSection from "../Shared/Home/TasksSection";

const SupportHome = () => {
  const merchantSearch = z.object({
    mid: z.string(),
    agent: z.string(),
  });

  type merchantValues = z.infer<typeof merchantSearch>;

  const form = useForm<merchantValues>({
    resolver: zodResolver(merchantSearch),
    defaultValues: {
      mid: "",
      agent: "",
    },
  });

  const onSubmit = (values: merchantValues) => {
    console.log(values);
  };

  const renderBasicInfo = [
    {
      id: "1",
      title: "MID",
    },
    {
      id: "2",
      title: "Legal Name",
    },
    {
      id: "3",
      title: "DBA",
    },
    {
      id: "4",
      title: "Phone Number",
    },
    {
      id: "5",
      title: "Contact Name",
    },
    {
      id: "6",
      title: "Email",
    },
    {
      id: "7",
      title: "Address",
    },
    {
      id: "8",
      title: "City",
    },
    {
      id: "9",
      title: "State",
    },
    {
      id: "10",
      title: "Zip",
    },
  ];

  const documentsList = [
    {
      id: "1",
      docName: "Project Plan",
      fileSize: "2.3 MB",
      uploadDateTime: new Date("08/26/2024 10:15 AM"),
    },
    {
      id: "2",
      docName: "Budget Report",
      fileSize: "1.8 MB",
      uploadDateTime: new Date("08/26/2024 11:20 AM"),
    },
    {
      id: "3",
      docName: "Client Proposal",
      fileSize: "3.1 MB",
      uploadDateTime: new Date("08/26/2024 01:45 PM"),
    },
    {
      id: "4",
      docName: "Market Analysis",
      fileSize: "4.2 MB",
      uploadDateTime: new Date("08/26/2024 02:30 PM"),
    },
    {
      id: "5",
      docName: "Technical Specification",
      fileSize: "5.7 MB",
      uploadDateTime: new Date("08/26/2024 03:10 PM"),
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "docName", header: "Doc Name" },
    { accessorKey: "fileSize", header: "File Size" },
    { accessorKey: "uploadDateTime", header: "Upload Date/Time" },
  ];

  const column = createColumns(columnsConfig);
  return (
    <div className="px-12">
      <TasksSection type="support" />

      <div className="my-5 rounded-md border p-5 shadow-md">
        <h1 className="text-2xl text-blue-500">Quick Merchant Access</h1>
        <p className="text-muted-foreground">
          Use the MID or the Agent to search the Merchant for a quick access
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-3 space-x-5"
          >
            <InputForm
              control={form.control}
              formName="mid"
              label=""
              placeholder="Agent"
            />
            <InputForm
              control={form.control}
              formName="agent"
              label=""
              placeholder="MID"
            />
            <div className="flex items-center justify-center">
              <Button className="w-4/5">Search</Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="my-5 grid grid-cols-4 gap-5 rounded-md border p-5">
        <div className="col-span-1">
          <h1 className="text-2xl text-blue-500">Merchant Basic Information</h1>
          {renderBasicInfo.map((item) => {
            return (
              <div key={item.id} className="flex flex-col space-y-5">
                <div>
                  <p>{item.title}</p>
                  <Input />
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-span-3 space-y-5">
          <h1 className="text-2xl text-blue-500">Documents List</h1>
          <DataTable columns={column} data={documentsList} />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Button className="rounded-full">
                <Plus />
              </Button>
              <Button className="rounded-full">
                <Minus />
              </Button>

              <span className="flex items-center space-x-2">
                <Checkbox />
                <p>Show Deleted Documents</p>
              </span>
            </div>

            <Button>Generate Upload Link</Button>
          </div>
        </div>
      </div>

      <div className="my-5 rounded-md border p-5 shadow-md">
        <p className="mb-5 text-2xl text-blue-500">Call Logs</p>
        <DataTable columns={column} data={documentsList} />

        <div className="mt-5 flex items-center justify-end">
          <Button>Go to All Merchant Information</Button>
        </div>
      </div>
    </div>
  );
};

export default SupportHome;
