"use client";

import React from "react";
import TasksSection from "../Shared/Home/TasksSection";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Minus, Plus } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { DatePickerWithRange } from "../Shared/Calender/Calender";
import { Price } from "../Shared/DataTable/CellFormat";

const FinanceHome = () => {
  const vendorEditSchema = z.object({
    vendor: z.string(),
    routing: z.string(),
    account: z.string(),
    accountType: z.string(),
    effectiveDate: z.date(),
    refNo: z.string(),
    description: z.string(),
    amount: z.string(),
    notes: z.string(),
    achId: z.string(),
  });

  type vendorEditValues = z.infer<typeof vendorEditSchema>;

  const form = useForm<vendorEditValues>({
    resolver: zodResolver(vendorEditSchema),
    defaultValues: {
      vendor: "",
      routing: "",
      account: "",
      accountType: "",
      effectiveDate: new Date(),
      refNo: "",
      description: "",
      amount: "",
      notes: "",
      achId: "",
    },
  });

  const onSubmit = (values: vendorEditValues) => {
    console.log(values);
  };

  const data = [
    {
      id: "1",
      title: "Global Tech Supplies",
    },
    {
      id: "2",
      title: "NextGen Software Inc.",
    },
    {
      id: "3",
      title: "Office Essentials",
    },
  ];

  const tableData1 = [
    {
      id: "1",
      docType: "PDF",
      hist: "1.0",
      docName: "Project Proposal",
      fileSize: "2.5 MB",
      uploadDateTime: "08/26/2024 09:30 AM",
    },
    {
      id: "2",
      docType: "Word Document",
      hist: "1.0",
      docName: "Team Meeting Minutes",
      fileSize: "1.8 MB",
      uploadDateTime: "08/26/2024 10:45 AM",
    },
    {
      id: "3",
      docType: "Excel Spreadsheet",
      hist: "1.0",
      docName: "Financial Summary Q2",
      fileSize: "3.6 MB",
      uploadDateTime: "08/26/2024 11:20 AM",
    },
    {
      id: "4",
      docType: "PowerPoint",
      hist: "1.0",
      docName: "Marketing Strategy Presentation",
      fileSize: "4.7 MB",
      uploadDateTime: "08/26/2024 01:05 PM",
    },
    {
      id: "5",
      docType: "Text File",
      hist: "1.0",
      docName: "Project Notes",
      fileSize: "500 KB",
      uploadDateTime: "08/26/2024 02:00 PM",
    },
  ];

  const tableData2 = [
    { effectiveDate: new Date("08/26/2024"), amount: 1500.0 },
    { effectiveDate: new Date("09/01/2024"), amount: 2300.75 },
    { effectiveDate: new Date("09/10/2024"), amount: 980.5 },
    { effectiveDate: new Date("09/15/2024"), amount: 4500.0 },
    { effectiveDate: new Date("09/20/2024"), amount: 3200.25 },
  ];

  const tableData3 = [
    {
      id: "1",
      vendor: "Alpha Supplies",
      effDate: new Date("08/26/2024"),
      addedBy: "John Doe",
      addedDate: new Date("08/20/2024"),
      reference: "REF1001",
      description: "Office supplies purchase",
      amount: 1500.0,
      routing: "11000000",
      account: "123456789",
      dateApproved: new Date("08/22/2024"),
      approvedBy: "Jane Smith",
      procBy: "Finance Department",
    },
    {
      id: "2",
      vendor: "Beta Electronics",
      effDate: new Date("08/26/2024"),
      addedBy: "Alice Johnson",
      addedDate: new Date("08/21/2024"),
      reference: "REF1002",
      description: "Electronics procurement",
      amount: 3000.5,
      routing: "12000000",
      account: "234567890",
      dateApproved: new Date("08/23/2024"),
      approvedBy: "Bob Brown",
      procBy: "Procurement Team",
    },
    {
      id: "3",
      vendor: "Gamma Services",
      effDate: new Date("08/26/2024"),
      addedBy: "Charlie Green",
      addedDate: new Date("08/19/2024"),
      reference: "REF1003",
      description: "Consulting services",
      amount: 4500.75,
      routing: "13000000",
      account: "345678901",
      dateApproved: new Date("08/24/2024"),
      approvedBy: "Diana Lee",
      procBy: "Consulting Department",
    },
    {
      id: "4",
      vendor: "Delta Logistics",
      effDate: new Date("08/26/2024"),
      addedBy: "Edward White",
      addedDate: new Date("08/18/2024"),
      reference: "REF1004",
      description: "Logistics services",
      amount: 2500.0,
      routing: "14000000",
      account: "456789012",
      dateApproved: new Date("08/25/2024"),
      approvedBy: "Fiona Black",
      procBy: "Logistics Team",
    },
    {
      id: "5",
      vendor: "Epsilon Solutions",
      effDate: new Date("08/26/2024"),
      addedBy: "George Brown",
      addedDate: new Date("08/20/2024"),
      reference: "REF1005",
      description: "IT support services",
      amount: 5200.0,
      routing: "15000000",
      account: "567890123",
      dateApproved: new Date("08/22/2024"),
      approvedBy: "Hannah Davis",
      procBy: "IT Department",
    },
    {
      id: "6",
      vendor: "Zeta Technologies",
      effDate: new Date("08/26/2024"),
      addedBy: "Ivy Wilson",
      addedDate: new Date("08/19/2024"),
      reference: "REF1006",
      description: "Software license renewal",
      amount: 3400.8,
      routing: "16000000",
      account: "678901234",
      dateApproved: new Date("08/23/2024"),
      approvedBy: "Jack Hill",
      procBy: "Software Team",
    },
    {
      id: "7",
      vendor: "Eta Construction",
      effDate: new Date("08/26/2024"),
      addedBy: "Kathy Parker",
      addedDate: new Date("08/21/2024"),
      reference: "REF1007",
      description: "Building renovation",
      amount: 7850.0,
      routing: "17000000",
      account: "789012345",
      dateApproved: new Date("08/24/2024"),
      approvedBy: "Larry King",
      procBy: "Construction Department",
    },
    {
      id: "8",
      vendor: "Theta Marketing",
      effDate: new Date("08/26/2024"),
      addedBy: "Mona Adams",
      addedDate: new Date("08/18/2024"),
      reference: "REF1008",
      description: "Marketing campaign",
      amount: 6200.5,
      routing: "18000000",
      account: "890123456",
      dateApproved: new Date("08/25/2024"),
      approvedBy: "Nina Carter",
      procBy: "Marketing Team",
    },
    {
      id: "9",
      vendor: "Iota Security",
      effDate: new Date("08/26/2024"),
      addedBy: "Oscar Grant",
      addedDate: new Date("08/20/2024"),
      reference: "REF1009",
      description: "Security system upgrade",
      amount: 4700.25,
      routing: "19000000",
      account: "901234567",
      dateApproved: new Date("08/22/2024"),
      approvedBy: "Pamela Stone",
      procBy: "Security Department",
    },
    {
      id: "10",
      vendor: "Kappa Energy",
      effDate: new Date("08/26/2024"),
      addedBy: "Quincy Long",
      addedDate: new Date("08/19/2024"),
      reference: "REF1010",
      description: "Energy contract",
      amount: 8800.9,
      routing: "20000000",
      account: "012345678",
      dateApproved: new Date("08/24/2024"),
      approvedBy: "Rachel Moore",
      procBy: "Energy Department",
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "docType", header: "Doc Type" },
    { accessorKey: "hist", header: "Hist" },
    { accessorKey: "docName", header: "Doc Name" },
    { accessorKey: "fileSize", header: "File Size" },
    { accessorKey: "uploadDateTime", header: "Upload Date/Time" },
  ];

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "effectiveDate", header: "Effective Date" },
    { accessorKey: "amount", header: "Amount", cell: Price },
  ];

  const columnsConfig3: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "vendor", header: "Vendor" },
    { accessorKey: "effDate", header: "Effective Date" },
    { accessorKey: "addedBy", header: "Added By" },
    { accessorKey: "addedDate", header: "Added Date" },
    { accessorKey: "reference", header: "Reference" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "amount", header: "Amount" },
    { accessorKey: "routing", header: "Routing" },
    { accessorKey: "account", header: "Account" },
    { accessorKey: "dateApproved", header: "Date Approved" },
    { accessorKey: "approvedBy", header: "Approved By" },
    { accessorKey: "procBy", header: "Proc By" },
  ];

  const columns1 = createColumns(columnsConfig);
  const columns2 = createColumns(columnsConfig2);
  const columns3 = createColumns(columnsConfig3);
  return (
    <div className="p-12">
      <TasksSection type="finance" />

      <div className="my-5 rounded-md border p-5 shadow-md">
        <div className="flex items-center justify-between max-xl:flex-col max-xl:space-y-5">
          <span>
            <h1 className="text-3xl text-blue-500">Vendor Edit</h1>
            <p className="text-muted-foreground">
              Select the vendor to edit on the selection or on the table above
            </p>
          </span>

          <div className="flex space-x-5">
            <span className="flex flex-col items-center">
              <h1 className="mb-3 text-center text-2xl">Vendor</h1>
              <div className="space-x-5">
                <Button>Generate Scheduled Vendor</Button>
                <Button>Edit</Button>
              </div>
            </span>
            <span className="flex flex-col items-center">
              <h1 className="mb-3 text-center text-2xl">Attachments</h1>
              <div className="space-x-5">
                <Button>Add Doc</Button>
              </div>
            </span>
            <span className="flex flex-col items-center">
              <h1 className="mb-3 text-center text-2xl">Services</h1>
              <div className="space-x-5">
                <Button>Create ACH Files</Button>
              </div>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <SelectForm
                control={form.control}
                formName="vendor"
                label="Vendor"
                content={data}
                placeholder="Select vendor"
                displayKey="title"
                valueKey="id"
              />
              <InputForm
                control={form.control}
                formName="routing"
                label="routing"
              />
              <div className="grid grid-cols-2 gap-5">
                <InputForm
                  control={form.control}
                  formName="account"
                  label="Account"
                />
                <InputForm
                  control={form.control}
                  formName="accountType"
                  label="Account Type"
                />
              </div>
              <DatePickerForm
                control={form.control}
                formName="effectiveDate"
                label="Effective Date"
                placeholder="Select a date"
              />
              <InputForm
                control={form.control}
                formName="refNo"
                label="Ref No."
              />
              <InputForm
                control={form.control}
                formName="description"
                label="Description"
              />
              <InputForm
                control={form.control}
                formName="amount"
                label="Amount"
              />
              <TextAreaForm
                control={form.control}
                formName="notes"
                label="Notes"
              />
              <InputForm
                control={form.control}
                formName="achId"
                label="ACH ID"
              />
            </form>
          </Form>

          <div>
            <DataTable columns={columns1} data={tableData1} />

            <div className="my-3 flex items-center justify-between">
              <Button>Mark Unprocessed</Button>
              <div className="space-x-5">
                <Button className="rounded-full">
                  <Plus />
                </Button>
                <Button className="rounded-full">
                  <Minus />
                </Button>
              </div>
            </div>

            <div>
              <span className="flex items-center gap-3">
                <Checkbox />
                <p>Data Range: </p>
                <DatePickerWithRange />
              </span>

              <span className="flex items-center gap-3">
                <Checkbox />
                <p>Show processed in data range</p>
              </span>

              <span className="flex items-center gap-3">
                <Checkbox />
                <p>Use approval Date</p>
              </span>

              <span className="flex items-center gap-3">
                <Checkbox />
                <p>Show deleted Docs</p>
              </span>
            </div>
          </div>
          <DataTable columns={columns2} data={tableData2} />
        </div>

        <div className="mt-5 grid grid-cols-1">
          <DataTable
            columns={columns3}
            data={tableData3}
            enableColumnFilter={true}
            filteredBy="vendor"
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceHome;
