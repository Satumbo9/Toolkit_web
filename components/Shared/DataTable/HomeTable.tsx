"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Orders } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";

export default function HomeTable() {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "type", header: "Type" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "amount", header: "Amount" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={Orders}
            enableColumnFilter={true}
            filteredBy="type"
          />
        </CardContent>
      </Card>
    </div>
  );
}
