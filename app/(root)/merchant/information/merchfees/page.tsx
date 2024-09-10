"use client";
import React from "react";
import { z } from "zod";
import { merchantFeesProcSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  SelectForm,
  CheckboxForm,
  FormGeneration,
  DatePickerForm,
} from "@/components/Shared/InstantForm";
import {
  amountForm,
  billingMonthForm,
  merchantProcessorList,
  productFeeForm,
  statusNonBillingForm,
} from "@/constants";
import CustomButtons from "@/components/Shared/CustomButtons";

const Page = () => {
  const form = useForm<z.infer<typeof merchantFeesProcSchema>>({
    resolver: zodResolver(merchantFeesProcSchema),
    defaultValues: {
      Processor: "",
      IsMicampMasterIso: false,
      IsWavitAccount: false,
      IsWavitEquipReplacement: false,
      IsNutraAccount: false,
      WavitApp: false,
      IsFreePosProgram: false,
      MerchantAnnual: false,
      AmountAnnual: "",
      BillingMonthAnnual: "",
      StatusNonBillingAnnual: "",
      PciAnnual: false,
      PciAmountAnnual: "",
      PciBillingMonthAnnual: "",
      PciStatusNonBillingAnnual: "",
      PciMonthly: false,
      PciAmountMonthly: "",
      PciStatusNonBillingMonthly: "",
      RateIncreases: false,
      RateStatusNonBilling: "",
      LastProcessDate: new Date(),
    },
  });

  const onSubmit = (value: z.infer<typeof merchantFeesProcSchema>) => {
    console.log(value);
  };

  return (
    <section>
      <h1 className="mb-3 text-2xl text-sky-500">Merch Fees / Proc</h1>

      {/* FIRST COLUMN */}
      <div className="mb-5 min-h-96 w-auto rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Processor Information */}
            <h1 className="m-auto text-center text-xl font-bold">
              Processor Information
            </h1>
            <div className="mt-0 flex w-full flex-wrap">
              {/* FIRST COLUMN */}
              <div className="flex-auto">
                <div className="m-auto mb-2 w-3/4">
                  <SelectForm
                    control={form.control}
                    formName="Processor"
                    label="Processor"
                    content={merchantProcessorList}
                    placeholder="Select a processor"
                    valueKey={"id"}
                    displayKey={"name"}
                    disabled={false}
                    className=""
                  />
                </div>
                <div className="m-auto flex content-center justify-center">
                  <CheckboxForm
                    control={form.control}
                    formName="IsMicampMasterIso"
                    label=""
                    placeholder="MiCamp is Master ISO"
                  />
                </div>
              </div>
              {/* SECOND COLUMN */}
              <div className="flex-auto">
                <CheckboxForm
                  control={form.control}
                  formName="IsWavitAccount"
                  label=""
                  placeholder="Is WAVit Account (Split or discount)"
                />
                <CheckboxForm
                  control={form.control}
                  formName="IsWavitEquipReplacement"
                  label=""
                  placeholder="Is WAVit Equip Replacement Program"
                />
                <CheckboxForm
                  control={form.control}
                  formName="IsNutraAccount"
                  label=""
                  placeholder="Is Nutra Account?"
                />
                <CheckboxForm
                  control={form.control}
                  formName="WavitApp"
                  label=""
                  placeholder="WAVit APP (not manual)"
                />
                <CheckboxForm
                  control={form.control}
                  formName="IsFreePosProgram"
                  label=""
                  placeholder="Is Free POS Program?"
                />
              </div>
            </div>
            <hr className="border-gray-400 bg-gray-400" />
            {/* FEE INFORMATION */}
            <h1 className="m-auto text-center text-xl font-bold">
              Fee Information
            </h1>
            <div className="grid grid-cols-4 gap-2 text-nowrap max-lg:grid-cols-2">
              <div className="block">
                <h3 className="text-center text-lg font-semibold">
                  Product Fee
                </h3>
                <FormGeneration
                  formControl={form.control}
                  formFields={productFeeForm}
                  gridCols={"1"}
                />
              </div>
              <div className="block">
                <h3 className="text-center text-lg font-semibold">Amount</h3>
                <FormGeneration
                  formControl={form.control}
                  formFields={amountForm}
                  gridCols={"1"}
                />
              </div>
              <div className="block">
                <h3 className="text-center text-lg font-semibold">
                  Billing Month
                </h3>
                <FormGeneration
                  formControl={form.control}
                  formFields={billingMonthForm}
                  gridCols={"1"}
                />
              </div>
              <div className="block">
                <h3 className="text-center text-lg font-semibold">
                  Status / Non-Billing
                </h3>
                <FormGeneration
                  formControl={form.control}
                  formFields={statusNonBillingForm}
                  gridCols={"1"}
                />
              </div>
            </div>
            <hr className="border-gray-400 bg-gray-400" />
            {/* MiCamp PROCESSING DATA */}
            <h1 className="m-auto text-center text-xl font-bold">
              MiCamp Processing Data
            </h1>
            <div className="m-auto w-full text-center">
              <div className="m-auto mb-2 w-2/5 max-lg:w-3/5">
                <DatePickerForm
                  control={form.control}
                  formName="SalesRep"
                  label="Last Process Date"
                  placeholder="Select a Date"
                />
              </div>
            </div>

            <hr className="border-gray-400 bg-gray-400" />
            <div className="text-center">
              <CustomButtons btnType="success" className="px-10">
                Update
              </CustomButtons>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Page;
