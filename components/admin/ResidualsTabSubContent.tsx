"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  adjustmentTable,
  agentEmailList,
  displayResidualsTable,
  equipmentData,
} from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import {
  newAdjustmentCriteriaSchema,
  newDisplayResidualsSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThirdPartyProcessor from "./ThirdPartyProcessors";
import FirstDataOmaha from "./FirstDataOmaha";
import ResidualsReportForm from "./ResidualsReportForm";

const Calculate = () => {
  return (
    <>
      <section className="flex gap-2 text-start max-lg:flex-wrap">
        <ThirdPartyProcessor />
        <FirstDataOmaha />
      </section>
    </>
  );
};

const Adjustments = () => {
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

  const form = useForm<z.infer<typeof newAdjustmentCriteriaSchema>>({
    resolver: zodResolver(newAdjustmentCriteriaSchema),
    defaultValues: {
      ResidualDate: "",
      Agent: "",
      AgentID: "",
      AdjustType: "",
      MID: "",
      DBALegal: "",
      Processor: "",
      Amount: "",
      Notes: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newAdjustmentCriteriaSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2 max-2xl:flex-wrap"
          >
            {/* ADJUSTMENT CRITERIA CARD */}
            <div className="flex-auto">
              <h1 className="my-5 text-center text-xl font-medium">
                Adjustment Criteria
              </h1>

              <div className="m-auto flex w-full gap-4">
                <div className="mt-2 w-1/3 content-center text-end">
                  <p className="">Residual Date</p>
                </div>
                <div className="w-2/3 flex-auto content-center">
                  <DatePickerForm
                    control={form.control}
                    formName="ResidualDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4">
                <div className="mt-2 w-1/3 content-center text-end">
                  <p className="">Agent</p>
                </div>
                <div className="w-2/3">
                  <SelectForm
                    control={form.control}
                    formName={"Agent"}
                    label=""
                    placeholder={"Select Agent"}
                    content={agentEmailList}
                    valueKey="Email"
                    displayKey="Name"
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Agent ID</p>
                <div className="flex w-2/3 gap-2">
                  <div className="flex-1">
                    <InputForm
                      control={form.control}
                      formName={"AgentID"}
                      label=""
                      placeholder=""
                    />
                  </div>
                  <Button className="mt-2 flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                    Search
                  </Button>
                </div>
              </div>

              <hr className="my-7 border" />

              <div>
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Adjust Type</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"AdjustType"}
                      label=""
                      placeholder={"Select Adjust Type"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">MID</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"MID"}
                    label=""
                    placeholder="Enter MID"
                  />
                </div>
              </div>
              <div className="m-auto my-3 w-full text-end">
                <Button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] px-8 text-white hover:opacity-90">
                  Find / Clear
                </Button>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">DBA/Legal</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"DBALegal"}
                    label=""
                    placeholder="Enter DBA/Legal"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Processor</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Processor"}
                    label=""
                    placeholder="Enter Processor"
                  />
                </div>
              </div>

              <div className="m-auto mt-10 flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Amount</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Amount"}
                    label=""
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Notes</p>
                <div className="w-2/3">
                  <TextAreaForm
                    control={form.control}
                    formName={"Notes"}
                    label=""
                    placeholder="Notes..."
                  />
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Edit
                </Button>
                <Button className="my-5 bg-gradient-to-r from-[#FF3333] to-[#8F0000] px-10 text-white hover:opacity-90">
                  Delete
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={adjustmentTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="Agent"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

const Reports = () => {
  const data = [
    {
      id: 1,
      title: "Begin Date",
      value: "BeginDate",
    },
    {
      id: 2,
      title: "Processor / Agent",
      value: "ProcessorAgent",
    },
    {
      id: 3,
      title: "Agent",
      value: "Agent",
    },
    {
      id: 4,
      title: "Processor",
      value: "Processor",
    },
    {
      id: 5,
      title: "Merchant Raw Data",
      value: "MerchantRawData",
    },
  ];

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
    <section className="text-start">
      <div className="mt-5 grid grid-cols-2 overflow-auto max-2xl:grid-cols-1">
        <Tabs defaultValue="BeginDate" className="w-fit">
          <TabsList>
            {data.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.id}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((tab) => (
            <TabsContent value={tab.value} key={tab.id}>
              <ResidualsReportForm type={tab.value} />
            </TabsContent>
          ))}
        </Tabs>
        <DataTable
          columns={columns}
          data={equipmentData}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="brand"
        />
      </div>
    </section>
  );
};

const DisplayResiduals = () => {
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

  const form = useForm<z.infer<typeof newDisplayResidualsSchema>>({
    resolver: zodResolver(newDisplayResidualsSchema),
    defaultValues: {
      ResidualDate: "",
      PayDay: false,
      ExcludePayDay: false,
      PayGroup: false,
      ExcludePayGroup: false,
      ShowOkToPay: false,
      ExcludeNotOkToPay: false,
      ShowNotOkToPay: false,
      OnlyWithEmails: false,
      OnlyMissingEmails: false,
      ResidualsReportsOptIn: false,
      OnlyWithBankingInfo: false,
      OnlyMissingBankingInfo: false,
      OnlyShowPositiveResiduals: false,
      OnlyShowZeroNegativeResiduals: false,
      OnlyShowPhysicalChecks: false,
      EmailReportsToAgent: false,
      EmailReportsToUser: false,
      EmailReportsToWho: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newDisplayResidualsSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 gap-2 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2">
          <div className="flex w-full gap-2 max-2xl:flex-wrap">
            {/* FIRST COLUMN */}
            <div className="flex-auto">
              {/* RESIDUAL DATE */}
              <div className="flex gap-1">
                <div className="mt-2 w-1/4 content-center pr-3 text-end">
                  <p>Residual Date</p>
                </div>
                <div className="w-2/4 content-center">
                  <DatePickerForm
                    control={form.control}
                    formName="ResidualDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              {/* PAY DAY */}
              <div className="flex gap-2">
                <div className="m-auto w-1/4">
                  <CheckboxForm
                    control={form.control}
                    formName={"PayDay"}
                    label={""}
                    placeholder={"Pay Day"}
                  />
                </div>
                <div className="w-2/4">
                  <SelectForm
                    control={form.control}
                    formName={"PayDaySelection"}
                    label=""
                    placeholder={"Select Pay Day"}
                    content={agentEmailList}
                    valueKey="Email"
                    displayKey="Name"
                    disabled={false}
                    className=""
                  />
                </div>
                <div className="m-auto w-1/4">
                  <CheckboxForm
                    control={form.control}
                    formName={"ExcludePayDay"}
                    label={""}
                    placeholder={"Exclude"}
                  />
                </div>
              </div>
              {/* PAY GROUP  */}
              <div className="flex gap-2">
                <div className="m-auto w-1/4">
                  <CheckboxForm
                    control={form.control}
                    formName={"PayGroup"}
                    label={""}
                    placeholder={"Pay Group"}
                  />
                </div>
                <div className="w-2/4">
                  <SelectForm
                    control={form.control}
                    formName={"PayGroupSelection"}
                    label=""
                    placeholder={"Select Pay Group"}
                    content={agentEmailList}
                    valueKey="Email"
                    displayKey="Name"
                    disabled={false}
                    className=""
                  />
                </div>
                <div className="m-auto w-1/4">
                  <CheckboxForm
                    control={form.control}
                    formName={"ExcludePayGroup"}
                    label={""}
                    placeholder={"Exclude"}
                  />
                </div>
              </div>
              <div className="m-auto w-full text-center">
                <Button className="mt-4 w-4/5 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                  Show Residuals
                </Button>
                <div className="m-auto flex justify-center gap-2">
                  <Button className="mt-4 w-2/5 bg-black text-white hover:opacity-90">
                    Create ACH File
                  </Button>
                  <Button className="mt-4 w-2/5 bg-black text-xs text-white hover:opacity-90">
                    Create Summary Spreadsheet
                  </Button>
                </div>
              </div>
            </div>

            {/* SECOND COLUMN */}
            <div className="flex-auto">
              <h2 className="text-xl font-medium">More Options:</h2>
              <div className="grid grid-flow-col grid-rows-7 gap-2">
                {/* Pay Status */}
                <p className="underline">Pay Status:</p>
                <CheckboxForm
                  control={form.control}
                  formName={"ShowOkToPay"}
                  label={""}
                  placeholder={"Show OK to Pay"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"ExcludeNotOkToPay"}
                  label={""}
                  placeholder={"Exclude NOT OK To Pay"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"ShowNotOkToPay"}
                  label={""}
                  placeholder={"Show NOT OK To Pay"}
                />
                {/* BANKING */}
                <p className="mt-2 underline">Banking:</p>
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyWithBankingInfo"}
                  label={""}
                  placeholder={"Only With Banking Info"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyMissingBankingInfo"}
                  label={""}
                  placeholder={"Only Missing Banking Info"}
                />
                {/* EMAILS */}
                <p className="underline">Emails:</p>
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyWithEmails"}
                  label={""}
                  placeholder={"Only with Emails"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyMissingEmails"}
                  label={""}
                  placeholder={"Only Missing Emails"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"ResidualsReportsOptIn"}
                  label={""}
                  placeholder={"Residual Reports Opt-In"}
                />
                {/* NET INCOME TOTALS */}
                <p className="mt-2 underline">Net Income Totals:</p>
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyShowPositiveResiduals"}
                  label={""}
                  placeholder={"Only Show Positive Residuals"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyShowZeroNegativeResiduals"}
                  label={""}
                  placeholder={"Only Show Zero & Negative Residuals"}
                />
                {/* DISTRIBUTION METHOD */}
                <p className="underline">Distribution Method:</p>
                <CheckboxForm
                  control={form.control}
                  formName={"OnlyShowPhysicalChecks"}
                  label={""}
                  placeholder={"Only Show Physical Checks"}
                />
                <Button>Create Excel Residual Reports</Button>
                <CheckboxForm
                  control={form.control}
                  formName={"EmailReportsToAgent"}
                  label={""}
                  placeholder={"Email Reports to AGENT and CC: Residual Emails"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"EmailReportsToUser"}
                  label={""}
                  placeholder={"Email Reports to USER"}
                />
                <CheckboxForm
                  control={form.control}
                  formName={"EmailReportsToWho"}
                  label={""}
                  placeholder={"Email Reports to ???"}
                />
              </div>
              <div className="ml-auto mr-0 w-2/5">
                <InputForm
                  control={form.control}
                  formName={"EmailReportsTo"}
                  label=""
                  placeholder="Email to..?"
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={displayResidualsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="AgentName"
        />
      </div>
    </section>
  );
};

export default function RenderResidualsComponents(value: string) {
  switch (value) {
    case "calculate":
      return <Calculate />;
    case "adjustments":
      return <Adjustments />;
    case "reports":
      return <Reports />;
    case "displayResiduals":
      return <DisplayResiduals />;
  }
}
