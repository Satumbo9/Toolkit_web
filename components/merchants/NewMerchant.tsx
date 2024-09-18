"use client";

import React from "react";
import { z } from "zod";
import { newMerchantSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";
import {
  deployByList,
  mccCode,
  newMerchantInfoForm,
  bankList,
} from "@/constants/index";

const NewMerchant = () => {
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

  return (
    <div className="max-2xl:h-[90vh] max-2xl:overflow-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-5 max-2xl:grid-cols-1">

            {/* FORM GENERATION - Left Side */}
            <div className="">
              <FormGeneration
                formControl={form.control}
                formFields={newMerchantInfoForm}
                gridCols={"2"}
              />
            </div>
            <div className="my-5 hidden w-full border max-2xl:block" />

            {/* Right side */}
            <div className="grid gap-3">
              <InputForm
                control={form.control}
                formName="Filter3"
                label="Filter"
                placeholder="Enter text..."
              />
              <div className="grid grid-cols-2 items-center">
                {/* Child MID */}
                <CheckboxForm
                  control={form.control}
                  formName="ChildMID"
                  label=""
                  placeholder="Child MID"
                  className="mt-3 content-center items-center align-middle"
                />
                {/* Banks */}
                <div className="h-full content-center">
                  <SelectForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    content={bankList}
                    placeholder="Banks"
                    valueKey={"value"}
                    displayKey={"name"}
                    disabled={false}
                    className="m-0"
                  />
                </div>
                {/* Wavit Account? */}
                <div className="flex h-full items-center">
                  <CheckboxForm
                    control={form.control}
                    formName="WAVitAccount"
                    label=""
                    placeholder="WAVit Account?"
                  />
                </div>
                {/* Number */}
                <div className="h-full content-center">
                  <InputForm
                    control={form.control}
                    formName="Filter3"
                    label=""
                    placeholder="7"
                  />
                </div>
              </div>
              {/* WAVit APP (not manual) */}
              <CheckboxForm
                control={form.control}
                formName="WAVitApp"
                label=""
                placeholder="WAVit APP (not manual)"
              />
              <CheckboxForm
                control={form.control}
                formName="NewAccountTasks"
                label=""
                placeholder="Perform new account tasks immediately"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold">
                  Business Type(s) for onboarding
                </h3>
                <div className="my-5 grid w-full grid-cols-2 gap-2">
                  {/* Retail */}
                  <div className="flex h-full content-center">
                    <CheckboxForm
                      control={form.control}
                      formName="BusinessRetail"
                      label=""
                      placeholder="Retail"
                    />
                  </div>
                  {/* e-Commerce */}
                  <div className="flex h-full content-center">
                    <CheckboxForm
                      control={form.control}
                      formName="BusinessEcommerce"
                      label=""
                      placeholder="e-Commerce"
                    />
                  </div>
                  {/* Restaurant */}
                  <div className="flex h-full content-center">
                    <CheckboxForm
                      control={form.control}
                      formName="BusinessRestaurant"
                      label=""
                      placeholder="Restaurant"
                    />
                  </div>
                  {/* MO / TO */}
                  <div className="flex h-full content-center">
                    <CheckboxForm
                      control={form.control}
                      formName="BusinessMoTo"
                      label=""
                      placeholder="MO/TO"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-3">
                <h3 className="text-2xl font-semibold">Deploys By</h3>
                <div className="w-full">
                  <SelectForm
                    control={form.control}
                    formName="DeployBy"
                    label=""
                    content={deployByList}
                    placeholder="Select an option..."
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className="m-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <SelectForm
                  control={form.control}
                  formName="MCCCode"
                  label="MCC Code"
                  content={mccCode}
                  placeholder="Select a MCC Code..."
                  valueKey="id"
                  displayKey="name"
                  disabled={false}
                  className="m-0"
                />
                <InputForm
                  control={form.control}
                  formName="Notice"
                  label="Notice"
                  placeholder="Enter your notice"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end max-2xl:justify-center">
            <Button>Create Merchant</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewMerchant;
