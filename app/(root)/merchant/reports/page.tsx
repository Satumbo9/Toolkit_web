"use client";

import PDFReader from "@/components/pdfRenderer/PDFReader";
import CustomButtons from "@/components/Shared/CustomButtons";
import {
  CheckboxForm,
  DatePickerForm,
  SelectForm,
} from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import { agentEmailList } from "@/constants";
import { newNorthBlindLeadSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const form = useForm<z.infer<typeof newNorthBlindLeadSchema>>({
    resolver: zodResolver(newNorthBlindLeadSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof newNorthBlindLeadSchema>) => {
    console.log(value);
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <h1 className="my-2 text-2xl font-semibold text-sky-500">
            Merchant Reports
          </h1>
          <div className="flex gap-2 max-2xl:flex-wrap">
            <div className="w-1/3 max-2xl:w-auto">
              {/* AGENT */}
              <div className="my-3 grid flex-auto grid-cols-3 items-end gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="MerchantAgent"
                  label=""
                  placeholder="Agent"
                  className="col-span-1 pb-2"
                />
                <div className="col-span-2">
                  <SelectForm
                    control={form.control}
                    formName="MerchantAgentSelection"
                    label=""
                    placeholder="Select Agent"
                    content={agentEmailList}
                    displayKey={"Name"}
                    valueKey={"Name"}
                    className=""
                  />
                </div>
              </div>
              <hr className="border" />
              {/* AGENT AND DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="MerchantAgentAndDate"
                  label=""
                  placeholder="Agent & Date"
                  className="col-span-1 pt-2"
                />
                <div className="col-span-2">
                  <SelectForm
                    control={form.control}
                    formName="MerchantAgentSelection"
                    label=""
                    placeholder="Select Agent"
                    content={agentEmailList}
                    displayKey={"Name"}
                    valueKey={"Name"}
                    className=""
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantFromDate"
                    label=""
                    placeholder="From Date"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantToDate"
                    label=""
                    placeholder="To Date"
                  />
                </div>
              </div>
              <hr className="border" />
              {/* APPROVAL DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="ApprovalDate"
                  label=""
                  placeholder="Approval Date"
                  className="col-span-1 pt-2"
                />
                <div className="col-span-2">
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantFromDate"
                    label=""
                    placeholder="From Date"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantToDate"
                    label=""
                    placeholder="To Date"
                  />
                </div>
              </div>
              <hr className="border" />
              {/* PROCESSOR BY APPROVAL DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="ProcessorByApprovalDate"
                  label=""
                  placeholder="Processor by Approval Date"
                  className="col-span-1 pt-2"
                />
                <div className="col-span-2">
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantFromDate"
                    label=""
                    placeholder="From Date"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantToDate"
                    label=""
                    placeholder="To Date"
                  />
                </div>
              </div>
              <hr className="border" />
              {/* MERCHANTS BY APPROVAL DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="MerchantByApprovalDate"
                  label=""
                  placeholder="Merchants by Approval Date (with splits)"
                  className="col-span-1 pt-2"
                />
                <div className="col-span-2">
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantFromDate"
                    label=""
                    placeholder="From Date"
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="MerchantToDate"
                    label=""
                    placeholder="To Date"
                  />
                </div>
              </div>
              <hr className="border" />
              {/* BUTTONS TO SUBMIT */}
              <div className="my-2 flex justify-end gap-2">
                <CustomButtons btnType="destructive" className="px-10">
                  Reset
                </CustomButtons>
                <CustomButtons btnType="default" className="px-10">
                  Submit
                </CustomButtons>
              </div>
            </div>
            {/* DIV PDF READER */}
            <div className="flex flex-auto items-center justify-center">
              <PDFReader />
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Page;
