/* eslint-disable jsx-a11y/alt-text */
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { DatePickerForm } from "@/components/Shared/InstantForm";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PDFReader from "@/components/pdfRenderer/PDFReader";

const EmailReports = ({ title }: { title: string }) => {
  const ReportsSchema = z.object({
    // Daily split reports
    dateToSend: z.string(),

    // Weekly remittances reports
    remitPeroidForm: z.string(),
    remitPeriodTo: z.string(),

    // Split period
    splitPeriod: z.string(),
  });

  let defaultValues;

  switch (title) {
    case "Daily Split Report":
      defaultValues = {
        dateToSend: "",
      };
      break;
    case "Weekly Remittances Reports":
      defaultValues = {
        remitPeroidForm: "",
        remitPeriodTo: "",
      };
      break;
    case "Daily Master Report":
      defaultValues = {
        splitPeriod: "",
      };
      break;
  }

  const form = useForm<z.infer<typeof ReportsSchema>>({
    resolver: zodResolver(ReportsSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof ReportsSchema>) => {
    console.log(values);
  };

  const data = [
    { id: 1, merchantName: "Merchant 1" },
    { id: 2, merchantName: "Merchant 2" },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "merchantName", header: "Merchant Name" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div>
      <div>
        <section>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {title === "Daily Split Report" && (
                <React.Fragment>
                  <div
                    className={cn(
                      title !== "Daily Split Report" && "hidden",
                      "flex flex-wrap items-center gap-5",
                    )}
                  >
                    <DatePickerForm
                      control={form.control}
                      formName="dateToSend"
                      label="Date to Send"
                      placeholder="Pick date to send"
                    />

                    <span className="gap-2">
                      <Checkbox /> Only Choose Merchants With Splits on This
                      Date?
                    </span>

                    <Button>Search</Button>
                  </div>

                  <div className="mt-5">
                    <DataTable columns={columns} data={data} />
                  </div>

                  <div>
                    <span className="grid grid-cols-2">
                      <span className="mt-5 grid grid-cols-2 gap-5">
                        <Button>Send Emails</Button>
                        <div className="gap-2">
                          <Checkbox /> Only send to admin, not funder.
                        </div>
                      </span>
                    </span>
                    <span className="grid grid-cols-2">
                      <span className="mt-5 grid grid-cols-2 gap-5">
                        <Button>Create Report</Button>
                        <div className="gap-2">
                          <Checkbox /> Create manual email.
                        </div>
                      </span>
                    </span>
                    <span className="grid grid-cols-2">
                      <span className="mt-5 grid grid-cols-[5%_30%] gap-5">
                        <p className="">Status</p>
                        <Input placeholder="Current Status" />
                      </span>
                    </span>
                  </div>
                </React.Fragment>
              )}

              {title === "Weekly Remittances Reports" && (
                <React.Fragment>
                  <div
                    className={cn(
                      title !== "Weekly Remittances Reports" && "hidden",
                      "flex flex-wrap items-center gap-5",
                    )}
                  >
                    <div className="flex flex-col flex-wrap">
                      <div className="flex flex-wrap gap-5">
                        <DatePickerForm
                          control={form.control}
                          formName="remitPeroidForm"
                          label="Remit Period From"
                          placeholder="Pick remit period from..."
                        />

                        <DatePickerForm
                          control={form.control}
                          formName="remitPeriodTo"
                          label="Remit Period To"
                          placeholder="Pick remit period to..."
                        />
                      </div>

                      <span className="mt-5 gap-2">
                        <Checkbox /> Only choose merchants with splits on this
                        week?
                      </span>
                    </div>
                    <Button>Search</Button>
                  </div>

                  <div className="mt-5">
                    <DataTable columns={columns} data={data} />
                  </div>

                  <div>
                    <span className="grid grid-cols-2">
                      <span className="mt-5 grid grid-cols-[20%_30%] gap-5">
                        <Button>Send Emails</Button>
                      </span>
                    </span>
                  </div>
                </React.Fragment>
              )}

              {title === "Daily Master Report" && (
                <React.Fragment>
                  <div
                    className={cn(
                      title !== "Daily Master Report" && "hidden",
                      "flex flex-wrap items-center gap-5",
                    )}
                  >
                    <div className="flex flex-col flex-wrap gap-5">
                      <DatePickerForm
                        control={form.control}
                        formName="remitPeroidForm"
                        label="Remit Period From"
                        placeholder="Pick remit period from..."
                      />
                      <Button>Create Emails</Button>
                      <Button>Copy to Notepad</Button>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </form>
          </Form>
        </section>
      </div>
    </div>
  );
};

const ControlReports = ({ title }: { title: string }) => {
  return (
    <div>
      {title === "Balance Summary (Test for Negative Balances)" && (
        <div className="flex flex-col items-center justify-center">
          <PDFReader />
        </div>
      )}

      {title === "Balance Summary (By Funder / Reporter)" && (
        <div className="grid grid-cols-2 gap-10">
          <div className="grid grid-cols-2 gap-5">
            <span className="gap-2">
              <Checkbox /> Funder
            </span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Funder" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Funder 1</SelectItem>
                <SelectItem value="2">Funder 2</SelectItem>
              </SelectContent>
            </Select>
            <span className="gap-2">
              <Checkbox /> Reporter
            </span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Reporter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Reporter 1</SelectItem>
                <SelectItem value="2">Reporter 2</SelectItem>
              </SelectContent>
            </Select>
            <div />
            <div className="space-x-5">
              <Button>Reset</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ReportPages({ title }: { title: string }) {
  switch (title) {
    case "Daily Split Report":
      return <EmailReports title={title} />;
    case "Weekly Remittances Reports":
      return <EmailReports title={title} />;
    case "Daily Master Report":
      return <EmailReports title={title} />;
    case "Balance Summary (Test for Negative Balances)":
      return <ControlReports title={title} />;
    case "Balance Summary (By Funder / Reporter)":
      return <ControlReports title={title} />;
  }
}
