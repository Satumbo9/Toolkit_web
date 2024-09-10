import React from "react";
import { Form } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckboxForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { Button } from "../ui/button";
import { CircleX, FilePlus } from "lucide-react";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import { Percentage, Price } from "../Shared/DataTable/CellFormat";

const EditMerchant = ({ isEdit, setIsEdit }: any) => {
  const newMerchantSchema = z.object({
    merchantID: z.string(),
    merchantName: z.string(),
    funderName: z.string(),
    merchantStatus: z.string(),
    WAVItSplit: z.boolean(),
    reportGroup: z.string(),
    sendDailyReports: z.boolean(),
    sendRemittance: z.boolean(),
    notes: z.string(),
  });

  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      merchantID: "",
      merchantName: "",
      funderName: "",
      merchantStatus: "",
      WAVItSplit: false,
      reportGroup: "",
      sendDailyReports: false,
      sendRemittance: false,
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newMerchantSchema>) => {
    console.log(values);
  };

  const renderForms = [
    {
      id: 1,
      title: "Merchant ID",
      value: "merchantID",
    },
    {
      id: 2,
      title: "Merchant Name",
      value: "merchantName",
    },
    {
      id: 3,
      title: "Funder Name",
      value: "funderName",
    },
    {
      id: 4,
      title: "Merchant Status",
      value: "merchantStatus",
      options: [
        {
          id: 1,
          title: "Active",
          value: "active",
        },
        {
          id: 2,
          title: "Inactive",
          value: "inactive",
        },
      ],
    },
    {
      id: 5,
      title: "Is this a WAVit split?",
      value: "WAVItSplit",
    },
    {
      id: 6,
      title: "Report Group",
      value: "reportGroup",
      options: [
        {
          id: 1,
          title: "None",
          value: "none",
        },
        {
          id: 2,
          title: "Group 1",
          value: "group1",
        },
        {
          id: 3,
          title: "Group 2",
          value: "group 2",
        },
      ],
    },
    {
      id: 7,
      title: "Send Daily Reports",
      value: "sendDailyReports",
    },
    {
      id: 8,
      title: "Send Remittance",
      value: "sendRemittance",
    },
    {
      id: 9,
      title: "Notes",
      value: "notes",
    },
  ];

  const data = [
    {
      id: 1,
      startDate: new Date("01-01-2024"),
      endDate: new Date("01-31-2024"),
      baseValue: 100.0,
      repay: 50.0,
      paid: 25.0,
      balance: 75.0,
      split: 2,
      Seq: 1,
    },
    {
      id: 2,
      startDate: new Date("02-01-2024"),
      endDate: new Date("02-28-2024"),
      baseValue: 200.0,
      repay: 100.0,
      paid: 50.0,
      balance: 150.0,
      split: 3,
      Seq: 2,
    },
    {
      id: 3,
      startDate: new Date("03-01-2024"),
      endDate: new Date("03-31-2024"),
      baseValue: 300.0,
      repay: 150.0,
      paid: 75.0,
      balance: 225.0,
      split: 4,
      Seq: 3,
    },
    {
      id: 4,
      startDate: new Date("04-01-2024"),
      endDate: new Date("04-30-2024"),
      baseValue: 400.0,
      repay: 200.0,
      paid: 100.0,
      balance: 300.0,
      split: 5,
      Seq: 4,
    },
    {
      id: 5,
      startDate: new Date("05-01-2024"),
      endDate: new Date("05-31-2024"),
      baseValue: 500.0,
      repay: 250.0,
      paid: 125.0,
      balance: 375.0,
      split: 6,
      Seq: 5,
    },
    {
      id: 6,
      startDate: new Date("06-01-2024"),
      endDate: new Date("06-30-2024"),
      baseValue: 600.0,
      repay: 300.0,
      paid: 150.0,
      balance: 450.0,
      split: 7,
      Seq: 6,
    },
    {
      id: 7,
      startDate: new Date("07-01-2024"),
      endDate: new Date("07-31-2024"),
      baseValue: 700.0,
      repay: 350.0,
      paid: 175.0,
      balance: 525.0,
      split: 8,
      Seq: 7,
    },
    {
      id: 8,
      startDate: new Date("08-01-2024"),
      endDate: new Date("08-31-2024"),
      baseValue: 800.0,
      repay: 400.0,
      paid: 200.0,
      balance: 600.0,
      split: 9,
      Seq: 8,
    },
    {
      id: 9,
      startDate: new Date("09-01-2024"),
      endDate: new Date("09-30-2024"),
      baseValue: 900.0,
      repay: 450.0,
      paid: 225.0,
      balance: 675.0,
      split: 10,
      Seq: 9,
    },
    {
      id: 10,
      startDate: new Date("10-01-2024"),
      endDate: new Date("10-31-2024"),
      baseValue: 1000.0,
      repay: 500.0,
      paid: 250.0,
      balance: 750.0,
      split: 11,
      Seq: 10,
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "startDate", header: "Start Date" },
    { accessorKey: "endDate", header: "End Date" },
    { accessorKey: "baseValue", header: "Base", cell: Price },
    { accessorKey: "repay", header: "Repay", cell: Price },
    { accessorKey: "paid", header: "Paid", cell: Price },
    { accessorKey: "balance", header: "Balance", cell: Price },
    { accessorKey: "split", header: "Split", cell: Percentage },
    { accessorKey: "Seq", header: "Seq" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div className="grid grid-cols-2 gap-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {renderForms.length > 0 &&
            renderForms.map((item) =>
              item.options ? (
                <SelectForm
                  key={item.id}
                  control={form.control}
                  formName={item.value}
                  label={item.title}
                  content={item.options}
                  placeholder={
                    item.value === "merchantStatus"
                      ? "Select status..."
                      : "None"
                  }
                  valueKey="id"
                  displayKey="title"
                />
              ) : item.value === "sendDailyReports" ||
                item.value === "sendRemittance" ||
                item.value === "WAVItSplit" ? (
                <CheckboxForm
                  key={item.id}
                  control={form.control}
                  formName={item.value}
                  label=""
                  placeholder={item.title}
                />
              ) : item.value === "notes" ? (
                <TextAreaForm
                  key={item.id}
                  control={form.control}
                  formName={item.value}
                  label={item.title}
                />
              ) : (
                <InputForm
                  key={item.id}
                  control={form.control}
                  formName={item.value}
                  label={item.title}
                />
              ),
            )}

          <div className="mt-5 space-x-5">
            <Button className="gap-2">
              <FilePlus />
              Save
            </Button>
            <Button
              className="gap-2"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                setIsEdit(!isEdit);
              }}
            >
              <CircleX />
              Cancel
            </Button>
          </div>
        </form>
      </Form>
      <div>
        <DataTable columns={columns} data={data} />
        <div className="mt-5 space-x-5">
          <Button>Add Split</Button>
          <Button>Edit Split</Button>
        </div>
      </div>
    </div>
  );
};

export default EditMerchant;
