"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { marketingDocumentsTable, marketingSelectList } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Form } from "@/components/ui/form";
import { marketingListSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SelectForm } from "@/components/Shared/InstantForm";
import CustomButtons from "@/components/Shared/CustomButtons";


const Page: React.FC = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "#" },
    { accessorKey: "DocName", header: "File Name" },
    { accessorKey: "FileSize", header: "File Size" },
    { accessorKey: "UploadDateTime", header: "Upload Date/Time" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof marketingListSchema>>({
    resolver: zodResolver(marketingListSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof marketingListSchema>) => {
    console.log(value);
  };
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold text-sky-500">
        Marketing
      </h1>
      <p className="text-center text-sm text-gray-500">
        (Select the item you want to see)
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="m-auto flex max-w-sm items-end gap-4">
            <div className="flex-1">
              <SelectForm
                control={form.control}
                formName="SalesRep"
                label=""
                content={marketingSelectList}
                placeholder="Select an Item"
                valueKey={"id"}
                displayKey={"title"}
                className="flex-1"
              />
            </div>
            <CustomButtons btnType="default" className="flex-1">
              Search
            </CustomButtons>
          </div>
        </form>
      </Form>

      <div className="grid flex-auto grid-cols-1 overflow-auto rounded-md">
        <DataTable
          columns={columns}
          data={marketingDocumentsTable}
          enableColumnFilter={true}
          filteredBy="DocName"
        />
      </div>
    </section>
  );
};

export default Page;
