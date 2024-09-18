"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  equipmentData,
  itemsForm,
  lookupForm,
  LookupTable,
  ModelSelectList,
} from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import {
  newItemsSchema,
  newLookupSchema,
  newRecentOrdersSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";

import LookupSubSection from "./LookupSubSection";
import { Card } from "../ui/card";
import CustomButtons from "../Shared/CustomButtons";

const Lookup = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Model", header: "Model" },
    { accessorKey: "Condition", header: "Condition" },
    { accessorKey: "Serial", header: "Serial #" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Del", header: "Del." },
    { accessorKey: "Date", header: "Date" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newLookupSchema>>({
    resolver: zodResolver(newLookupSchema),
    defaultValues: {
      MID: "",
      OrderID: "",
      Serial: "",
      Model: "",
      Condition: "",
      ShelfItems: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newLookupSchema>) => {
    console.log(value);
  };

  return (
    <section className="text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {/* Processor Information */}
          <h1 className="m-auto mt-4 text-center text-xl font-bold">Lookup</h1>

          <div className="grid grid-flow-col grid-rows-3 gap-2 max-lg:grid-flow-row">
            {lookupForm.map((item) =>
              item.content ? (
                <div key={item.id} className="m-auto flex w-3/4 gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">{item.title}</p>
                  </div>
                  <div className="w-full">
                    <SelectForm
                      control={form.control}
                      formName={item.formName}
                      label=""
                      placeholder={item.placeholder}
                      content={item.content}
                      valueKey="id"
                      displayKey="title"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
              ) : item.type === "checkbox" ? (
                <div key={item.id} className="m-auto flex w-3/4 gap-4">
                  <div className="w-1/3 content-center text-end">
                    <p className=""></p>
                  </div>
                  <div className="w-full">
                    <CheckboxForm
                      control={form.control}
                      formName={item.formName}
                      label=""
                      placeholder={item.title}
                    />
                  </div>
                </div>
              ) : (
                <div key={item.id} className="m-auto flex w-3/4 gap-4">
                  <div className="w-1/3 content-center text-end">
                    <p className="">{item.title}</p>
                  </div>
                  <div className="w-2/3">
                    <InputForm
                      control={form.control}
                      formName={item.formName}
                      label=""
                      placeholder={item.placeholder}
                    />
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="text-center">
            <CustomButtons btnType="default" className="my-5 px-10">
              SUBMIT
            </CustomButtons>
          </div>

          <div className="grid w-full grid-cols-1 overflow-auto text-start">
            <DataTable
              columns={columns}
              data={LookupTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Model"
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

const Items = () => {
  const form = useForm<z.infer<typeof newItemsSchema>>({
    resolver: zodResolver(newItemsSchema),
    defaultValues: {
      Model: "",
      Id: "",
      Description: "",
      Alias: "",
      ItemType: "",
      Style: "",
      Manufacturer: "",
      ReorderQty: 0,
      SerialNumber: false,
      TakeInventory: false,
      PhysicallyShippable: false,
      HwPricing: 0,
      DeployFee: 0,
      TaxShipping: 0,
      Total: 0,
      DimensionName: "",
      DimensionWidth: "",
      DimensionHeight: "",
      DimensionLength: "",
      DimensionWeight: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newItemsSchema>) => {
    console.log(value);
  };

  return (
      <section className="mt-4 flex gap-2 text-start max-2xl:flex-wrap">
        <div className="flex-1 p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* Items Form */}
              <div className="space-y-1 max-lg:grid-flow-row">
                {itemsForm.map((item) =>
                  item.content ? (
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="mt-2 w-1/3 content-center text-end">
                        <p className="">{item.title}</p>
                      </div>
                      <div className="w-full">
                        <SelectForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.placeholder}
                          content={item.content}
                          valueKey="id"
                          displayKey="title"
                          disabled={false}
                          className=""
                        />
                      </div>
                    </div>
                  ) : item.type === "checkbox" ? (
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end">
                        <p className=""></p>
                      </div>
                      <div className="w-full">
                        <CheckboxForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.title}
                        />
                      </div>
                    </div>
                  ) : (
                    <div key={item.id} className="m-auto flex w-3/4 gap-4">
                      <div className="w-1/3 content-center text-end">
                        <p className="">{item.title}</p>
                      </div>
                      <div className="w-2/3">
                        <InputForm
                          control={form.control}
                          formName={item.formName}
                          label=""
                          placeholder={item.placeholder}
                        />
                      </div>
                    </div>
                  ),
                )}
                <div className="flex w-full flex-auto">
                  <div className="m-auto mt-2 flex gap-4">
                    <InputForm
                      control={form.control}
                      formName={"HwPricing"}
                      label={"Hardware Pricing"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"DeployFee"}
                      label={"Deploy Fee"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"TaxShipping"}
                      label={"Tax and Shipping"}
                      placeholder={"$"}
                    />
                    <InputForm
                      control={form.control}
                      formName={"Total"}
                      label={"Total"}
                      placeholder={"$"}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <div key={11} className="m-auto mt-2 flex flex-1 gap-4">
                    <div className="w-2/4 grow">
                      <InputForm
                        control={form.control}
                        formName={"DimensionName"}
                        label={"Dimension Name"}
                        placeholder={"Name"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <InputForm
                        control={form.control}
                        formName={"DimensionLength"}
                        label={"Dimension Length"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWidth"}
                        label={"Dimension Width"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionHeight"}
                        label={"Dimension Height"}
                        placeholder={""}
                      />
                      <InputForm
                        control={form.control}
                        formName={"DimensionWeight"}
                        label={"Dimension Weight"}
                        placeholder={""}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <CustomButtons btnType="default" className="my-5">
                  Add New
                </CustomButtons>
                <CustomButtons btnType="primary" className="my-5">
                  Copy
                </CustomButtons>
                <CustomButtons btnType="primary" className="my-5">
                  Save
                </CustomButtons>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex-1">
          <LookupSubSection />
        </div>
      </section>
  );
};

const Reports = () => {
  const form = useForm<z.infer<typeof newRecentOrdersSchema>>({
    resolver: zodResolver(newRecentOrdersSchema),
    defaultValues: {
      FromDate: "",
      ToDate: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newRecentOrdersSchema>) => {
    console.log(value);
  };
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="mt-5 flex gap-4 text-start max-xl:flex-wrap">
          <div className="flex-auto">
            {/* CARD 1 - ORDER REPORTS */}

            <Card className="mt-4 space-y-4 p-4 shadow-md">
              <h1 className="text-xl font-medium">Order Reports</h1>
              <div className="flex w-full gap-2">
                <div className="flex flex-1 content-center gap-2">
                  <label className="mt-1 content-center text-nowrap font-medium">
                    From Date
                  </label>
                  <div className="flex-auto content-center">
                    <DatePickerForm
                      control={form.control}
                      formName="FromDate"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                </div>
                <div className="flex flex-1 content-center gap-2">
                  <label className="mt-1 content-center text-nowrap font-medium">
                    To Date
                  </label>
                  <div className="flex-auto content-center">
                    <DatePickerForm
                      control={form.control}
                      formName="ToDate"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex flex-auto content-center gap-2 text-end">
                <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90">
                  Reset
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Submit
                </Button>
              </div>
            </Card>

            {/* CARD 2 - INVENTORY BY ITEM */}
            <Card className="mt-4 space-y-4 p-4 shadow-md">
              <h1 className="text-xl font-medium">Inventory By Item</h1>

              <div className="flex w-full gap-2">
                <div className="m-auto flex w-full gap-4">
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
              </div>

              <div className="mt-2 flex flex-auto content-center gap-2 text-end">
                <Button className="flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90">
                  Reset
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Submit
                </Button>
              </div>
            </Card>

            {/* CARD 3 - OTHERS */}
            <Card className="mt-4 space-y-2 p-4 shadow-md">
              <h1 className="text-xl font-medium">Others</h1>

              <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                Master Equipment List
              </Button>
              <Button className="w-full bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                Inventory Summary
              </Button>
            </Card>
          </div>

          <div className="grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={equipmentData}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="brand"
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default function RenderEquipmentComponents(value: string) {
  switch (value) {
    case "lookup":
      return <Lookup />;
    case "items":
      return <Items />;
    case "reports":
      return <Reports />;
  }
}
