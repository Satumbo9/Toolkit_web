"use client";
import React from "react";
import { z } from "zod";
import { EquipmentSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CheckboxForm, SelectForm } from "@/components/Shared/InstantForm";
import {
  equipmentTable1,
  equipmentTable2,
  equipmentTable3,
  equipmentList1,
} from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import CustomButtons from "@/components/Shared/CustomButtons";

const Page = () => {
  const form = useForm<z.infer<typeof EquipmentSchema>>({
    resolver: zodResolver(EquipmentSchema),
    defaultValues: {
      ReturnEquipment: "",
      ShowHistory: false,
      ReturnToInventory: false,
    },
  });

  const onSubmit = (value: z.infer<typeof EquipmentSchema>) => {
    console.log(value);
  };
  /* COSTUMIZATION OF THE COLUMN PRICE */
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-right font-medium">{formatted}</div>;
  };

  const columnsConfig1: ColumnConfig<DataTypes>[] = [
    { accessorKey: "StartDate", header: "Start Date" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "$Cost", header: "$ Cost", cell: Price },
    { accessorKey: "$Pay", header: "$ Pay", cell: Price },
  ];
  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "SerialNumber", header: "Serial Number" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "$Orig", header: "$ Orig", cell: Price },
    { accessorKey: "$Sale", header: "$ Sale", cell: Price },
  ];
  const columnsConfig3: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Method", header: "Method" },
    { accessorKey: "InitialDate", header: "Initial Date" },
    { accessorKey: "AmountDue", header: "Amount Due", cell: Price },
    { accessorKey: "AmountPaid", header: "Amount Paid", cell: Price },
    { accessorKey: "Split", header: "Split", cell: Price },
    { accessorKey: "Note", header: "Note" },
  ];
  const columns1 = createColumns(columnsConfig1);
  const columns2 = createColumns(columnsConfig2);
  const columns3 = createColumns(columnsConfig3);

  return (
    <section>
      <h1 className="mb-3 text-2xl text-sky-500">Equipment</h1>

      <div className="flex gap-4 max-2xl:flex-wrap">
        {/* FIRST COLUMN */}
        <div className="mb-5 grid flex-auto grid-cols-1 overflow-auto rounded-md">
          <DataTable
            columns={columns1}
            data={equipmentTable1}
            enableColumnFilter={true}
            filteredBy="Status"
          />
        </div>
        {/* SECOND COLUMN */}
        <div className="mb-5 min-h-96 w-fit flex-auto rounded-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Activity Row */}
              <div className="flex items-end gap-2 max-lg:flex-wrap">
                <CustomButtons btnType="destructive" className="">
                  Delete Order
                </CustomButtons>
                <CustomButtons btnType="default" className="">
                  Edit Order
                </CustomButtons>
                <div className="flex-auto self-end">
                  <SelectForm
                    control={form.control}
                    formName="ReturnEquipment"
                    label="Return Equipment"
                    content={equipmentList1}
                    placeholder="Select a status.."
                    valueKey={"id"}
                    displayKey={"title"}
                    disabled={false}
                    className=""
                  />
                </div>
                <CheckboxForm
                  control={form.control}
                  formName="ShowHistory"
                  label=""
                  placeholder="Show history"
                />
                <CheckboxForm
                  control={form.control}
                  formName="ReturnToInventory"
                  label=""
                  placeholder="Return to Inventory"
                />
              </div>
              <div className="mb-5 grid flex-auto grid-cols-1 overflow-auto rounded-md">
                <DataTable
                  columns={columns2}
                  data={equipmentTable2}
                  enableColumnFilter={true}
                  filteredBy="Model"
                />
              </div>
              <div className="flex justify-around gap-2">
                <CustomButtons btnType="primary" className="">
                  Copy Serial # to Clipboard
                </CustomButtons>
                <CustomButtons btnType="primary" className="">
                  Return Label
                </CustomButtons>
                <CustomButtons btnType="primary" className="">
                  Send Email
                </CustomButtons>
              </div>
              <div className="mb-5 grid flex-auto grid-cols-1 overflow-auto rounded-md">
                <DataTable
                  columns={columns3}
                  data={equipmentTable3}
                  enableColumnFilter={true}
                  filteredBy="Method"
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Page;
