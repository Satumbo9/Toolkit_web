import React from "react";
import { Form } from "../ui/form";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { newUnassignedEquipmentSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ConditionSelectList,
  equipmentData,
  ModelSelectList,
} from "@/constants";
import { InputForm, SelectForm } from "../Shared/InstantForm";
import DataTable from "../Shared/DataTable/DataTable";
import { Button } from "../ui/button";

const UnassignedEquipment = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Date Add" },
    { accessorKey: "Condition", header: "Vendor" },
    { accessorKey: "Serial", header: "Original $" },
    { accessorKey: "MID", header: "Contition" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newUnassignedEquipmentSchema>>({
    resolver: zodResolver(newUnassignedEquipmentSchema),
    defaultValues: {
      Model: "",
      Condition: "",
      Serial: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newUnassignedEquipmentSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="rounded-md border p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <h1 className="mb-3 text-2xl text-sky-500">Unassigned Equipment</h1>

            <div className="m-auto w-3/4">
              <div className="m-auto flex gap-4">
                <div className="mt-2 w-1/5 content-center text-end">
                  <p className="">Model</p>
                </div>
                <div className="w-full">
                  <SelectForm
                    control={form.control}
                    formName="Model"
                    label=""
                    placeholder="Select a model..."
                    content={ModelSelectList}
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex gap-4">
                <div className="mt-2 w-1/5 content-center text-end">
                  <p className="">Status</p>
                </div>
                <div className="w-full">
                  <SelectForm
                    control={form.control}
                    formName="Status"
                    label=""
                    placeholder="Select an status..."
                    content={ConditionSelectList}
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex gap-4">
                <div className="w-1/5 content-center text-end">
                  <p className="">Serial #</p>
                </div>
                <div className="w-full">
                  <InputForm
                    control={form.control}
                    formName={"Serial"}
                    label=""
                    placeholder={"SR381274612873"}
                  />
                </div>
              </div>
              <div className="w-full text-end">
                <Button className="my-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  + Add New
                </Button>
              </div>
            </div>
          </form>
        </Form>
        <DataTable
          columns={columns}
          data={equipmentData}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="Model"
        />
      </section>
    </>
  );
};

export default UnassignedEquipment;
