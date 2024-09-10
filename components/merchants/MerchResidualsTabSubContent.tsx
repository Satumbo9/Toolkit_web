"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  adjustmentTable,
  displayResidualsTable,
  merchResidualPaymentsTable,
} from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import { MerchEnterAdjustmentSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";

const RawData = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="gap-2 text-start">
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={adjustmentTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="DBA"
        />
      </div>
    </section>
  );
};

const RawRefunds = () => {
  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap"></section>
  );
};

const ResidualPayments = () => {
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return <div className="text-start font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DataMonth", header: "Data Month" },
    { accessorKey: "PayMonth", header: "Pay Month" },
    { accessorKey: "Vol", header: "$ Vol", cell: Price },
    { accessorKey: "Trans", header: "# Trans" },
    { accessorKey: "Rev", header: "$ Rev", cell: Price },
    { accessorKey: "Exp", header: "$ Exp", cell: Price },
    { accessorKey: "NetInc", header: "$ Net Inc", cell: Price },
    { accessorKey: "Split", header: "Split %" },
    { accessorKey: "Adj", header: "Adj" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="text-start">
      <div className="mt-5 grid grid-cols-1 overflow-auto">
        <h3 className="m-2 text-lg font-bold">Agent: Tony Stark</h3>
        <DataTable
          columns={columns}
          data={merchResidualPaymentsTable}
          enableSorting={true}
          enableColumnFilter={false}
        />
      </div>
    </section>
  );
};

const AccountAnalysis = () => {
  return (
    <>
      <section className="mt-4 gap-2 text-start"></section>
    </>
  );
};

const EnterAdjustments = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "AgentName", header: "Agent Name" },
    { accessorKey: "Pay", header: "Pay" },
    { accessorKey: "Send", header: "Send" },
    { accessorKey: "Day", header: "Day" },
    { accessorKey: "Phys", header: "Phys" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "RoutingNo", header: "Routing No." },
    { accessorKey: "AccountNo", header: "Account No." },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "RptType", header: "RPT Type" },
    { accessorKey: "EmailList", header: "Email List" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof MerchEnterAdjustmentSchema>>({
    resolver: zodResolver(MerchEnterAdjustmentSchema),
    defaultValues: {
      Agent: "",
      DataDate: "",
      DisplayDate: "",
      AdjustType: "",
      Notes: "",
      AdjustAmount: "",
      Split: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof MerchEnterAdjustmentSchema>) => {
    console.log(value);
  };

  const AdjustTypeSelect = [
    { id: 1, name: "Buypass", value: "buypass" },
    { id: 2, name: "Nashville", value: "nashville" },
    { id: 3, name: "North", value: "north" },
    { id: 4, name: "None", value: "none" },
  ];

  return (
    <section className="mt-5 flex gap-2 text-start max-xl:flex-wrap">
      <div className="grid flex-1 grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={displayResidualsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="AgentName"
        />
      </div>
      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="m-auto w-3/4 space-y-3"
          >
            <SelectForm
              control={form.control}
              formName="Agent"
              label="Agent"
              content={AdjustTypeSelect}
              placeholder="Select an Agent"
              valueKey="id"
              displayKey="name"
              disabled={false}
              className=""
            />
            <DatePickerForm
              control={form.control}
              formName="DataDate"
              label="Data Date"
              placeholder="Pick a date"
            />
            <DatePickerForm
              control={form.control}
              formName="DisplayDate"
              label="Display Date"
              placeholder="Pick a date"
            />
            <SelectForm
              control={form.control}
              formName="AdjustType"
              label="Adjust Type"
              content={AdjustTypeSelect}
              placeholder="Select Adjust Type"
              valueKey="id"
              displayKey="name"
              disabled={false}
              className=""
            />
            <TextAreaForm
              control={form.control}
              formName="Notes"
              label="Notes"
              placeholder="Add your notes here"
            />
            <InputForm
              control={form.control}
              formName="AdjustAmount"
              label="Adjust Amount"
              placeholder=""
            />
            <div className="w-1/3">
              <InputForm
                control={form.control}
                formName="Split"
                label="Split %"
                placeholder=""
              />
            </div>
            <CustomButtons btnType="default" className="">
              Enter Adjustment
            </CustomButtons>
          </form>
        </Form>
      </div>
    </section>
  );
};

const CalculateResiduals = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "AgentName", header: "Agent Name" },
    { accessorKey: "Pay", header: "Pay" },
    { accessorKey: "Send", header: "Send" },
    { accessorKey: "Day", header: "Day" },
    { accessorKey: "Phys", header: "Phys" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "RoutingNo", header: "Routing No." },
    { accessorKey: "AccountNo", header: "Account No." },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "RptType", header: "RPT Type" },
    { accessorKey: "EmailList", header: "Email List" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof MerchEnterAdjustmentSchema>>({
    resolver: zodResolver(MerchEnterAdjustmentSchema),
    defaultValues: {
      Agent: "",
      DataDate: "",
      DisplayDate: "",
      AdjustType: "",
      Notes: "",
      AdjustAmount: "",
      Split: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof MerchEnterAdjustmentSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-5 flex gap-2 text-start max-xl:flex-wrap">
      <div className="grid flex-1 grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={displayResidualsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="AgentName"
        />
      </div>
      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-end justify-center gap-4 space-y-3"
          >
            <DatePickerForm
              control={form.control}
              formName="ResidualMonth"
              label="(Residual Month)"
              placeholder="Pick a date"
            />
            <CustomButtons btnType="default" className="">
              Enter Adjustment
            </CustomButtons>
          </form>
        </Form>
      </div>
    </section>
  );
};
export default function RenderMerchResidualsComponents(value: string) {
  switch (value) {
    case "rawData":
      return <RawData />;
    case "rawRefunds":
      return <RawRefunds />;
    case "residualPayments":
      return <ResidualPayments />;
    case "accountAnalysis":
      return <AccountAnalysis />;
    case "enterAdjustments":
      return <EnterAdjustments />;
    case "calculateResiduals":
      return <CalculateResiduals />;
  }
}
