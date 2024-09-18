import React from "react";
import { Form } from "../ui/form";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { newItemDetailSchema } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SelectForm } from "../Shared/InstantForm";
import {
  ConditionSelectList,
  LookupTable,
  serialList,
  sortByList,
} from "@/constants";
import DataTable from "../Shared/DataTable/DataTable";
import CustomButtons from "../Shared/CustomButtons";

const LookupSubSection = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Serial #" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Del", header: "Del." },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newItemDetailSchema>>({
    resolver: zodResolver(newItemDetailSchema),
    defaultValues: {
      Condition: "",
      Serial: "",
      SortBy: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newItemDetailSchema>) => {
    console.log(value);
  };

  return (
    <div className="rounded-md border p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="flex gap-2 p-2">
            <div className="w-full flex-1">
              <SelectForm
                control={form.control}
                formName={"Condition"}
                label="Condition"
                placeholder={""}
                content={ConditionSelectList}
                valueKey="id"
                displayKey="title"
                disabled={false}
                className=""
              />
            </div>
            <div className="w-full flex-1">
              <SelectForm
                control={form.control}
                formName="Serial"
                label="Serial"
                placeholder={""}
                content={serialList}
                valueKey="id"
                displayKey="title"
                disabled={false}
                className=""
              />
            </div>
            <div className="w-full flex-1">
              <SelectForm
                control={form.control}
                formName="SortBy"
                label="Sort By"
                placeholder={""}
                content={sortByList}
                valueKey="id"
                displayKey="title"
                disabled={false}
                className=""
              />
            </div>
            <div className="content-end">
              <CustomButtons btnType="default" className="px-10">
                Save
              </CustomButtons>
            </div>
          </div>
          <div className="grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={LookupTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Model"
            />
          </div>
          <div className="flex w-full justify-end gap-2">
            <CustomButtons btnType="primary" className="my-5">
              Do Inventory
            </CustomButtons>
            <CustomButtons btnType="default" className="my-5">
              Add Detail
            </CustomButtons>
            <CustomButtons btnType="default" className="my-5">
              Edit Detail
            </CustomButtons>
            <CustomButtons btnType="destructive" className="my-5">
              Delete Detail
            </CustomButtons>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LookupSubSection;
