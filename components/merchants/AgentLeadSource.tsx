import React from "react";
import { SelectForm, InputForm, CheckboxForm } from "../Shared/InstantForm";
import { MerchantAgentLeadSourceSchema } from "@/lib/utils";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { agentData, agentLeadSourceDataTable } from "@/constants";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import { DataTypes } from "@/types";
import CustomButtons from "../Shared/CustomButtons";

const AgentLeadSource = () => {
  const form = useForm<z.infer<typeof MerchantAgentLeadSourceSchema>>({
    resolver: zodResolver(MerchantAgentLeadSourceSchema),
    defaultValues: {
      LeadSource: "",
      SalesVertical: "",
      Agent: "",
      SplitPercentage: 0,
      CalcAfterMasterSplit: false,
      CalcAfterAgentPay: false,
      CalcPartOfMaster: false,
      CalcPartOfSubMaster: false,
      AgentIsMaster: false,
      RebateAccount: false,
      ForceNotifMasterAgent: false,
      TotalEffectiveSplit: 0,
      SubAgent: "",
      Filter: "",
      DefaultSplits: "",
      Agent2: "",
    },
  });

  const SalesVerticalData = [
    { id: 1, name: "Inside", value: "inside" },
    { id: 2, name: "Outside", value: "outside" },
  ];

  const onSubmit = (value: z.infer<typeof MerchantAgentLeadSourceSchema>) => {
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "SalesRep", header: "Sales Rep" },
    { accessorKey: "Split%", header: "Split %" },
    { accessorKey: "Master", header: "Master" },
    { accessorKey: "A/M", header: "A/M" },
    { accessorKey: "F/M", header: "F/M" },
    { accessorKey: "A/A", header: "A/A" },
    { accessorKey: "R", header: "R" },
    { accessorKey: "F/SM", header: "F/SM" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <section className=" ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="text-2xl text-sky-500">Agent/Lead Source</h1>
          <div className="grid grid-cols-2 gap-5 max-2xl:grid-cols-1">
            <div className="grid grid-cols-1 gap-3 border-r pr-4 max-2xl:grid-cols-1">
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Sales Channel Information
              </h1>
              <SelectForm
                control={form.control}
                formName="LeadSource"
                label="Lead Source"
                content={agentData}
                placeholder="Select Lead Source"
                valueKey="id"
                displayKey="name"
                disabled={false}
                className=""
              />
              <SelectForm
                control={form.control}
                formName="SalesVertical"
                label="Sales Vertical"
                content={SalesVerticalData}
                placeholder="Select Sales Vertical"
                valueKey="id"
                displayKey="name"
                disabled={false}
                className=""
              />
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Agent Information
              </h1>
              <div className="grid grid-cols-4 items-end gap-3">
                <div className="col-span-3">
                  <SelectForm
                    control={form.control}
                    formName="Agent"
                    label="Agent"
                    content={agentData}
                    placeholder="Select Agent"
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className=""
                  />
                </div>
                <CustomButtons btnType="default" type="button" className="w-full">
                  Update
                </CustomButtons>
                <InputForm
                  control={form.control}
                  formName="SplitPercentage"
                  label="Split %"
                  placeholder="Split %"
                />
                <div className="col-start-4 w-full max-lg:col-span-2 max-lg:col-start-3">
                  <CustomButtons btnType="success" type="button" className="w-full">
                    Clear/Add New
                  </CustomButtons>
                </div>
              </div>
              <div className="">
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="CalcAfterMasterSplit"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">Calculate After Master Split</span>
                </div>
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="CalcAfterAgentPay"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">Calculate After Agent Pay</span>
                </div>
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="CalcPartOfMaster"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">Calculate As Part of Master</span>
                </div>
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="CalcPartOfSubMaster"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">
                    Calculate As Part of Sub Master (F/M)
                  </span>
                </div>
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="AgentIsMaster"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">Agent is Master</span>
                </div>
                <div className="flex">
                  <CheckboxForm
                    control={form.control}
                    formName="RebateAccount"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5">Rebate Account</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 max-xl:grid-cols-3">
                <div className="col-start-2 max-xl:col-start-1">
                  <CustomButtons btnType="default" type="submit" className="w-full">
                    Add Agent
                  </CustomButtons>
                </div>
                
                <CustomButtons btnType="destructive" type="button" className="w-full">Delete Agent</CustomButtons>
                <CustomButtons btnType="primary" type="button" className="w-full">Set Master</CustomButtons>
              </div>
              <div className="w-full rounded-md p-2">
                <DataTable
                  columns={columns}
                  data={agentLeadSourceDataTable}
                  enableColumnFilter={true}
                  filteredBy="SalesRep"
                />
              </div>
              <div className="grid grid-cols-4">
                <h1 className="col-span-3">Double click to open the agent</h1>
                <InputForm
                  control={form.control}
                  formName="TotalEffectiveSplit"
                  label="Total Effective Split %"
                  placeholder=""
                />
              </div>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-3 border-r pr-4 max-2xl:grid-cols-1">
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Sub-Agent Information
              </h1>
              <SelectForm
                control={form.control}
                formName="Agent"
                label="Agent"
                content={agentData}
                placeholder="Select Agent"
                valueKey="id"
                displayKey="name"
                disabled={false}
                className=""
              />
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Splits Utility
              </h1>
              <div className="flex">
                <CheckboxForm
                  control={form.control}
                  formName="ForceNotifMasterAgent"
                  label=""
                  placeholder=""
                  className=""
                />
                <span className="mt-1.5">
                  Force Notif. of Master Agent (Call Log)
                </span>
              </div>
              <InputForm
                control={form.control}
                formName="Filter"
                label="Filter"
                placeholder=""
              />
              <div className="grid grid-cols-6 items-end gap-3">
                <div className="col-span-5">
                  <SelectForm
                    control={form.control}
                    formName="DefaultSplits"
                    label="Default Splits"
                    content={agentData}
                    placeholder="Select a Default Split"
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className=""
                  />
                </div>
                <CustomButtons btnType="default" type="button" className="w-full">Go</CustomButtons>
                <CustomButtons btnType="default" type="button" className="col-span-2 mt-2">
                  Create a Default Split
                </CustomButtons>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default AgentLeadSource;
