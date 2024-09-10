"use client";

import React from "react";
import TasksSection from "../Shared/Home/TasksSection";
import { DatePickerWithRange } from "../Shared/Calender/Calender";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DataTable from "../Shared/DataTable/DataTable";
import SideDetails from "../Shared/DataTable/SideDetails";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Status } from "../Shared/DataTable/CellFormat";

const EquipmentHome = () => {
  const data = [
    {
      DBA: "XYZ Corp",
      Date: new Date("08/26/2024"),
      Status: "Shipped",
      Order: "ORD12345",
      Agent: "John Doe",
      TrackingNumber: "TRK987654321",
    },
    {
      DBA: "ABC Industries",
      Date: new Date("08/26/2024"),
      Status: "Processing",
      Order: "ORD12346",
      Agent: "Jane Smith",
      TrackingNumber: "TRK987654322",
    },
    {
      DBA: "MegaTech",
      Date: new Date("08/26/2024"),
      Status: "Delivered",
      Order: "ORD12347",
      Agent: "Alice Johnson",
      TrackingNumber: "TRK987654323",
    },
    {
      DBA: "QuickFix Solutions",
      Date: new Date("08/26/2024"),
      Status: "In Transit",
      Order: "ORD12348",
      Agent: "Bob Brown",
      TrackingNumber: "TRK987654324",
    },
    {
      DBA: "TechWorks",
      Date: new Date("08/26/2024"),
      Status: "Shipped",
      Order: "ORD12349",
      Agent: "Charlie Green",
      TrackingNumber: "TRK987654325",
    },
    {
      DBA: "LogiMart",
      Date: new Date("08/26/2024"),
      Status: "Processing",
      Order: "ORD12350",
      Agent: "Diana Lee",
      TrackingNumber: "TRK987654326",
    },
    {
      DBA: "ProServices",
      Date: new Date("08/26/2024"),
      Status: "Delivered",
      Order: "ORD12351",
      Agent: "Edward White",
      TrackingNumber: "TRK987654327",
    },
    {
      DBA: "InnoVatech",
      Date: new Date("08/26/2024"),
      Status: "In Transit",
      Order: "ORD12352",
      Agent: "Fiona Black",
      TrackingNumber: "TRK987654328",
    },
    {
      DBA: "Skyline Enterprises",
      Date: new Date("08/26/2024"),
      Status: "Shipped",
      Order: "ORD12353",
      Agent: "George Brown",
      TrackingNumber: "TRK987654329",
    },
    {
      DBA: "BlueWave Systems",
      Date: new Date("08/26/2024"),
      Status: "Processing",
      Order: "ORD12354",
      Agent: "Hannah Davis",
      TrackingNumber: "TRK987654330",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Date", header: "Date" },
    {
      accessorKey: "Status",
      header: "Status",
      cell: (row) => (
        <Status
          row={row}
          status={{
            Success: ["Shipped", "Delivered"],
            Pending: ["Processing", "In Transit"],
          }}
        />
      ),
    },
    { accessorKey: "Order", header: "Order" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "TrackingNumber", header: "Tracking Number" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <div className="p-12">
      <TasksSection type="equipment" />

      <div className="my-5 rounded-md border p-5 shadow-md">
        <h1 className="text-2xl text-blue-500">Recent Orders</h1>
        <div className="mt-5 flex items-center justify-between">
          <DatePickerWithRange />

          <div className="flex space-x-5">
            <Input placeholder="Find..." />
            <Button>Search</Button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-5">
          <div className="col-span-3 max-xl:col-span-4">
            <DataTable columns={columns} data={data} />
          </div>
          <div className="col-span-1">
            <SideDetails />
          </div>
        </div>

        <div className="my-5 rounded-md border p-5 shadow-md">
          <h1 className="text-2xl text-blue-500">Equipment Orders</h1>
          <div className="mt-5">
            <Input placeholder="Type to search..." className="w-[280px]" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 max-xl:grid-cols-1">
            <DataTable columns={columns} data={data} />
            <hr className="my-2 hidden max-xl:block" />
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentHome;
