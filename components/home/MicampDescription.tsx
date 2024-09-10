"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { CalendarRange, FileText, Info } from "lucide-react";

const MicampDescription = () => {
  const data = [
    {
      id: "1",
      description: "Marketing PR Document",
      link: "https://example.com/1",
    },
    {
      id: "2",
      description: "Sales Strategy Overview",
      link: "https://example.com/2",
    },
    {
      id: "3",
      description: "Product Launch Plan",
      link: "https://example.com/3",
    },
    {
      id: "4",
      description: "Annual Financial Report",
      link: "https://example.com/4",
    },
    {
      id: "5",
      description: "Employee Handbook",
      link: "https://example.com/5",
    },
    {
      id: "6",
      description: "Customer Feedback Analysis",
      link: "https://example.com/6",
    },
    {
      id: "7",
      description: "Market Research Report",
      link: "https://example.com/7",
    },
    {
      id: "8",
      description: "IT Security Guidelines",
      link: "https://example.com/8",
    },
    {
      id: "9",
      description: "Corporate Social Responsibility",
      link: "https://example.com/9",
    },
    {
      id: "10",
      description: "Quarterly Sales Data",
      link: "https://example.com/10",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "link", header: "Link" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <Card>
      <CardHeader className="text-2xl">
        <CardTitle>Micamp</CardTitle>
        <CardDescription className="">Documents from Micamp</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3">
        <div className="col-span-2">
          <DataTable columns={columns} data={data} />
        </div>
        <div className="flex flex-col items-center justify-center space-y-32">
          <span className="flex w-fit cursor-pointer flex-col items-center justify-center">
            <FileText className="size-16" />
            <p className="text-2xl">Access Report</p>
          </span>
          <span className="flex w-fit cursor-pointer flex-col items-center justify-center">
            <CalendarRange className="size-16" />
            <p className="text-2xl">Access Calendar</p>
          </span>
          <span className="flex w-fit cursor-pointer flex-col items-center justify-center">
            <Info className="size-16" />
            <p className="text-2xl">Access Info</p>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MicampDescription;
