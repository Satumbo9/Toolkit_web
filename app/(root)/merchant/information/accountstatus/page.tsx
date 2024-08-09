"use client";
import React from "react";
import ExtremeDataTable from '@/components/Shared/DataTable/DataTable'
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { newMerchantSchema, cn, formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ContentItem, DataTypes } from "@/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerForm, SelectForm, CheckboxForm } from "@/components/Shared/InstantForm";
import DataTable from '@/components/Shared/DataTable/DataTable';
import { ColumnConfig, createColumns } from '@/components/Shared/DataTable/Columns';
import { accountStatusTable, activityRecordList } from "@/constants";

const page = () => {


  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      DBA: "",
      Phone: "",
      Status: "",
      Approval: "",
      Filter: "",
      Processor: "",
      Fitler2: "",
      AgentID: 0,
      SalesRep: "",
      Split: 0,
      SplitName: "",
      SplitID: 0,
      LeadSource: "",
      SplitLead: 0,
      EstAnnual: 0,
      Transactions: 0,
      Filter3: "",
      Banks: "",
      WAVItAccount: 0,
      MCCCode: "",
      Notice: "",
      ChildMID: false,
      WAVitAccount: false,
      WAVitApp: false,
      NewAccountTasks: false,
      BusinessRetail: false,
      BusinessEcommerce: false,
      BusinessRestaurant: false,
      BusinessMoTo: false,
      DeployBy: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newMerchantSchema>) => {
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "UserID", header: "User ID" },
    { accessorKey: "SQL", header: "SQL" }
  ];

  const columns = createColumns(columnsConfig);
  return (
    <>
      <section>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h1 className='text-2xl text-sky-500 mb-3 '>Account Status</h1>

            <div className='flex gap-3 max-xl:flex-wrap'>
              <div className='flex-auto grid grid-cols-1 overflow-auto rounded-md'>
                <DataTable
                  columns={columns}
                  data={accountStatusTable}
                  enableColumnFilter={true}
                  filteredBy='UserID' 
                />
              </div>
              <div className="flex-auto p-2 ">
                <div className='w-full'>
                  <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label="Select an Activity to Record"
                    content={activityRecordList}
                    placeholder="Select an Activity..."
                    valueKey='id'
                    displayKey='title'
                    disabled={false}
                    className='mb-2'
                  />
                  <Button className="w-full mb-2 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                    SUBMIT
                  </Button>
                  <Button className="w-full mb-2 py-5 bg-gradient-to-r from-[#79CB6C] to-[#285C20] hover:opacity-90 text-white">
                    MERCHANT APPROVED
                  </Button>
                </div>
              </div>

            </div>
            {/* BOTTOM ROW */}
            <div className="flex flex-wrap gap-4">
              {/* CARD Overall EMV Compliance */}
              <div className="flex-auto border shadow-md rounded-md p-4">
                <h2>Overall EMV Compliance</h2>
                <SelectForm
                  control={form.control}
                  formName="SalesRep"
                  label="EMV Status"
                  content={activityRecordList}
                  placeholder="Select an EMV Status..."
                  valueKey='id'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
                <SelectForm
                  control={form.control}
                  formName="SalesRep"
                  label="Method"
                  content={activityRecordList}
                  placeholder="Select a Method..."
                  valueKey='id'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
                <div className="gap-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Compliance Date</label>
                  <DatePickerForm
                    control={form.control}
                    formName="Approval"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
                <div className="gap-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">1-Click Verified</label>
                  <DatePickerForm
                    control={form.control}
                    formName="Approval"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>


              </div>
              {/* Card Solid Portfolio Info */}
              <div className="flex-auto border shadow-md rounded-md p-4">
                <h2>Solid Portfolio Info</h2>
                <div className="flex content-center">
                  <CheckboxForm
                    control={form.control}
                    formName="ChildMID"
                    label=""
                    placeholder=""
                    className="content-center items-center align-middle mt-3"
                  />
                  <span className="content-center mt-1">Child MID</span>
                </div>
                <div className="gap-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Compliance Date</label>
                  <DatePickerForm
                    control={form.control}
                    formName="Approval"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
                <Button className="w-full mb-2 mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] hover:opacity-90 text-white">
                  Go To Sale Detail
                </Button>
              </div>

              {/* Card Overall Status */}
              <div className="flex-auto border shadow-md rounded-md p-4">

                <SelectForm
                  control={form.control}
                  formName="SalesRep"
                  label="Select an Overall Status"
                  content={activityRecordList}
                  placeholder="Select an Overall Status..."
                  valueKey='id'
                  displayKey='title'
                  disabled={false}
                  className=""
                />
                {/* GRID Status Dates */}
                <div className='grid grid-rows-4 grid-flow-col gap-2'>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Received Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Submitted Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Approval Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Decline Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Withdrawn Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Closed Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="gap-1">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Reopen Date</label>
                    <DatePickerForm
                      control={form.control}
                      formName="Approval"
                      label=""
                      placeholder="mm/dd/yyyy"
                    />
                  </div>

                </div>

                <div className='flex mt-4 justify-between gap-2'>
                  <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label=""
                    content={activityRecordList}
                    placeholder="Select an Item..."
                    valueKey='id'
                    displayKey='title'
                    disabled={false}
                    className="flex-1"
                  />
                  <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label=""
                    content={activityRecordList}
                    placeholder="Select an Item..."
                    valueKey='id'
                    displayKey='title'
                    disabled={false}
                    className="flex-1"
                  />
                  <SelectForm
                    control={form.control}
                    formName="SalesRep"
                    label=""
                    content={activityRecordList}
                    placeholder="Select an Item..."
                    valueKey='id'
                    displayKey='title'
                    disabled={false}
                    className="flex-1"
                  />
                </div>

              </div>

            </div>

          </form>
        </Form>
      </section>


    </>
  );
};

export default page;