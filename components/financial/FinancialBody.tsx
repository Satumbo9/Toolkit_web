import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "@/components/Shared/InstantForm";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Button } from "../ui/button";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Price } from "../Shared/DataTable/CellFormat";
import { entryData } from "@/constants";
import { financialSchema } from "@/lib/utils";

const FinancialBody = () => {
  const form = useForm<z.infer<typeof financialSchema>>({
    resolver: zodResolver(financialSchema),
    defaultValues: {
      vendor: "",
      routing: "",
      account: "",
      type: "",
      date: "",
      refNo: "",
      description: "",
      amount: 0,
      notes: "",
      ACHId: "",
    },
  });

  const onSubmit = (values: z.infer<typeof financialSchema>) => {
    console.log(values);
  };

  const content = [
    {
      id: 1,
      title: "Test 1",
      value: "test1",
    },
    {
      id: 2,
      title: "Test 2",
      value: "test2",
    },
    {
      id: 3,
      title: "Test 3",
      value: "test3",
    },
  ];

  const bodyData: DataTypes[] = [
    {
      id: 1,
      docType: "DocType1",
      hist: "1",
      docName: "Doc1",
      size: "10",
      uploadDate: new Date("09-25-2019"),
      amount: 111,
    },
    {
      id: 2,
      docType: "DocType2",
      hist: "2",
      docName: "Doc2",
      size: "8",
      uploadDate: new Date("03-18-2022"),
      amount: 111,
    },
    {
      id: 3,
      docType: "DocType3",
      hist: "3",
      docName: "Doc3",
      size: "17",
      uploadDate: new Date("11-02-2025"),
      amount: 111,
    },
    {
      id: 4,
      docType: "DocType4",
      hist: "4",
      docName: "Doc4",
      size: "6",
      uploadDate: new Date("06-15-2018"),
      amount: 111,
    },
    {
      id: 5,
      docType: "DocType5",
      hist: "5",
      docName: "Doc5",
      size: "13",
      uploadDate: new Date("02-28-2024"),
      amount: 111,
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "docType", header: "Doc Type" },
    { accessorKey: "hist", header: "Hist" },
    { accessorKey: "docName", header: "Doc Name" },
    { accessorKey: "size", header: "File Size" },
    { accessorKey: "uploadDate", header: "Upload Date" },
  ];

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "uploadDate", header: "Eff Date" },
    { accessorKey: "amount", header: "Amount" },
  ];

  const columnsConfig3: ColumnConfig<DataTypes>[] = [
    { accessorKey: "P Vendor", header: "Vendor" },
    { accessorKey: "Eff. Date", header: "Eff. Date" },
    { accessorKey: "Added By", header: "Added By" },
    { accessorKey: "Added Date", header: "Added Date" },
    { accessorKey: "Reference", header: "Reference" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Amount", header: "Amount", cell: Price },
    { accessorKey: "Routing#", header: "Routing#" },
    { accessorKey: "Account #", header: "Account #" },
    { accessorKey: "Date Approved", header: "Date Approved" },
    { accessorKey: "Approved by", header: "Approved by" },
    { accessorKey: "Proc. By", header: "Proc. By" },
  ];

  const columns = createColumns(columnsConfig);
  const columns2 = createColumns(columnsConfig2);
  const columns3 = createColumns(columnsConfig3);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-3 px-5 pb-5 max-xl:grid-cols-1">
        <div className="flex flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <SelectForm
                control={form.control}
                formName="vendor"
                content={content}
                valueKey="id"
                displayKey="title"
                label="Vendor"
                placeholder="Select a vendor"
              />
              <InputForm
                control={form.control}
                formName="routing"
                label="Routing"
                placeholder="Routing..."
              />
              <div className="grid grid-cols-2 gap-3">
                <InputForm
                  control={form.control}
                  formName="account"
                  label="Account"
                  placeholder="111-111-1111"
                />
                <InputForm
                  control={form.control}
                  formName="type"
                  label="Type"
                  placeholder="Test Type"
                />
              </div>
              <DatePickerForm
                control={form.control}
                formName="date"
                label="Effective Date"
                placeholder="Select a date..."
              />
              <InputForm
                control={form.control}
                formName="refNo"
                label="Ref No"
                placeholder="31321312"
              />
              <InputForm
                control={form.control}
                formName="description"
                label="Description"
                placeholder="Testing description..."
              />
              <InputForm
                control={form.control}
                formName="amount"
                label="Amount"
                placeholder="$15.00"
              />
              <TextAreaForm
                control={form.control}
                formName="notes"
                label="Notes"
                placeholder="Add notes here..."
              />
              <InputForm
                control={form.control}
                formName="ACHId"
                label="ACH ID"
                placeholder="1231312312"
              />
            </form>
          </Form>
        </div>
        <hr className="my-5 hidden max-xl:block" />
        <div className="flex flex-col">
          <div className="grid grid-cols-1 overflow-auto">
            <DataTable columns={columns} data={bodyData} />
          </div>
          <div className="my-3 flex justify-between">
            <div>
              <Button>Mark as unprocessed</Button>
            </div>
            <div className="space-x-5">
              <Button variant={"ghost"}>
                <PlusCircle />
              </Button>
              <Button variant={"ghost"}>
                <MinusCircle />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="mr-3 flex gap-3">
              <Checkbox /> <span className="text-nowrap">Date Range</span>
            </div>
            <div>
              <Input placeholder="From Date" />
            </div>
            <div>
              <Input placeholder="To Date" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Checkbox /> <span>Show processed in data range</span>
            </div>
            <div>
              <Checkbox /> <span>Use approval date</span>
            </div>
            <div>
              <Checkbox /> <span>Show deleted Docs</span>
            </div>
          </div>
        </div>
        <hr className="my-5 hidden max-xl:block" />
        <div className="grid grid-cols-1 overflow-auto">
          <DataTable columns={columns2} data={bodyData} />
        </div>
      </div>
      <hr className="my-5 hidden max-xl:block" />
      <div className="grid grid-cols-1 overflow-auto p-5">
        <DataTable
          columns={columns3}
          data={entryData}
          enableColumnFilter={true}
          filteredBy="P Vendor"
        />
      </div>
    </div>
  );
};

export default FinancialBody;
