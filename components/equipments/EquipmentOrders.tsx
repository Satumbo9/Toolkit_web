import React from "react";
import { Form } from "../ui/form";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { newEquipmentOrderSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ConditionSelectList,
  equipmentData,
  ModelSelectList,
} from "@/constants";
import { CheckboxForm, InputForm, SelectForm } from "../Shared/InstantForm";
import DataTable from "../Shared/DataTable/DataTable";

const EquipmentOrders = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Merchant" },
    { accessorKey: "Condition", header: "MID" },
    { accessorKey: "Serial", header: "Start Date" },
    { accessorKey: "MID", header: "Status" },
    { accessorKey: "DBA", header: "$ Cost" },
    { accessorKey: "Status", header: "$ Pay" },
  ];

  const columns = createColumns(columnsConfig);

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Orig $" },
    { accessorKey: "MID", header: "Sale $" },
    { accessorKey: "DBA", header: "Serial #" },
  ];

  const columns2 = createColumns(columnsConfig2);

  const form = useForm<z.infer<typeof newEquipmentOrderSchema>>({
    resolver: zodResolver(newEquipmentOrderSchema),
    defaultValues: {
      Merchant: "",
      MID: "",
      Status: "",
      Model: "",
      NoSerial: false,
      Limit: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newEquipmentOrderSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="rounded-md border p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <h1 className="mb-3 text-2xl text-sky-500">Equipment Orders</h1>

            {/* EQUIPMENT ORDERS FORM */}
            <div className="flex gap-2">
              <div className="m-auto flex w-2/3 gap-4">
                <div className="w-1/4 content-center text-end">
                  <p className="">Merchant</p>
                </div>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Merchant"}
                    label=""
                    placeholder={"Ex: MiCamp Solutions"}
                  />
                </div>
              </div>
              <div className="w-1/3 content-center">
                <div className="w-full text-sm">
                  <CheckboxForm
                    control={form.control}
                    formName={"NoSerial"}
                    label=""
                    placeholder={"Equipment w/ no serial #'s"}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="m-auto flex w-2/3 gap-4">
                <div className="w-1/4 content-center text-end">
                  <p className="">MID</p>
                </div>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"MID"}
                    label=""
                    placeholder={"129381274612873"}
                  />
                </div>
              </div>
              <div className="w-1/3 content-center">
                <div className="w-full text-sm">
                  <CheckboxForm
                    control={form.control}
                    formName={"Limit"}
                    label=""
                    placeholder={"Limit to first 100 merchants"}
                  />
                </div>
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

            <DataTable
              columns={columns}
              data={equipmentData}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Model"
            />
            <DataTable
              columns={columns2}
              data={equipmentData}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Model"
            />
          </form>
        </Form>
      </section>
    </>
  );
};

export default EquipmentOrders;
