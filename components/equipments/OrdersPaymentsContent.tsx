"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { DataTypes } from "@/types";
import React from "react";
import { equipmentData } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EquipmentReportForm from "@/components/equipments/EquipmentReportForm";
import EquipmentOrders from "./EquipmentOrders";
import UnassignedEquipment from "./UnassignedEquipment";
import RecentOrdersSection from "./RecentOrdersSection";

const FillOrders = () => {
  return (
    <section className="text-start">
      <div className="flex gap-4 max-2xl:flex-wrap">
        <div className="flex-1">
          <EquipmentOrders />
        </div>
        <div className="flex-1">
          <UnassignedEquipment />
        </div>
      </div>
    </section>
  );
};

const RecentOrders = () => {
  return (
    <section className="gap-2 text-start">
      <RecentOrdersSection />
    </section>
  );
};

const Reports = () => {
  const data = [
    {
      id: 1,
      title: "Date, Type",
      value: "DateType",
    },
    {
      id: 2,
      title: "Date, Type, Agent",
      value: "DateTypeAgent",
    },
    {
      id: 3,
      title: "Date",
      value: "Date",
    },
    {
      id: 4,
      title: "Agent",
      value: "SumAgent",
    },
    {
      id: 5,
      title: "Status",
      value: "Status",
    },
    {
      id: 6,
      title: "Process",
      value: "Process",
    },
    {
      id: 7,
      title: "Sales",
      value: "SalesReport",
    },
  ];

  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return <div className="text-right font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "model", header: "Model" },
    { accessorKey: "purchaseDate", header: "Purchase" },
    { accessorKey: "warrantyExpiration", header: "Warranty Expiration" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
    { accessorKey: "assignedTo", header: "Assigned" },
    { accessorKey: "price", header: "Price", cell: Price },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="text-start">
      <div className="mt-5 grid grid-cols-2 overflow-auto max-2xl:grid-cols-1">
        <Tabs defaultValue="DateType" className="size-full">
          <TabsList>
            {data.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.id}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((tab) => (
            <TabsContent value={tab.value} key={tab.id}>
              <EquipmentReportForm type={tab.value} />
            </TabsContent>
          ))}
        </Tabs>
        <DataTable
          columns={columns}
          data={equipmentData}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="brand"
        />
      </div>
    </section>
  );
};

export default function RenderOrdersPaymentsComponents(value: string) {
  switch (value) {
    case "fillOrders":
      return <FillOrders />;
    case "recentOrders":
      return <RecentOrders />;
    case "reports":
      return <Reports />;
  }
}
