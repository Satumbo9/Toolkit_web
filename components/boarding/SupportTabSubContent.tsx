"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { mySolvedTicketsTable, myTicketsTable } from "@/constants";
import { DataTypes } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import NewSupportTicket from "./NewSupportTicket";
import { Description } from "@radix-ui/react-dialog";

const MyTickets = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Subject", header: "Subject" },
    { accessorKey: "UpdatedAt", header: "Updated At" },
    { accessorKey: "Assignee", header: "Assignee" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <div className="mt-10 flex items-center justify-between gap-2">
        <h1 className="text-center text-xl font-medium text-sky-500">
          My Tickets
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="">
              + New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="2xl:[800px] max-lg:max-w-[500px] lg:max-w-[800px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Add New Support Ticket
              </DialogTitle>
              <Description />
              <NewSupportTicket />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={myTicketsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="Assignee"
        />
      </div>
    </section>
  );
};

const Solved = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Subject", header: "Subject" },
    { accessorKey: "UpdatedAt", header: "Updated At" },
    { accessorKey: "Assignee", header: "Assignee" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <div className="mt-10 flex items-center justify-between gap-2">
        <h1 className="text-center text-xl font-medium text-sky-500">
          Solved Tickets
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="">
              + New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="2xl:[800px] max-lg:max-w-[500px] lg:max-w-[800px]">
            <DialogHeader>
              <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                Add New Support Ticket
              </DialogTitle>
              <NewSupportTicket />
              <Description />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={mySolvedTicketsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="Assignee"
        />
      </div>
    </section>
  );
};

export default function RenderSupportTabComponents(value: string) {
  switch (value) {
    case "myTickets":
      return <MyTickets />;
    case "solved":
      return <Solved />;
  }
}
