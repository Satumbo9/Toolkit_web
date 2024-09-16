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
import { newMerchantReport } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const form = useForm<z.infer<typeof newMerchantReport>>({
    resolver: zodResolver(newMerchantReport),
    defaultValues: {
      BoolAgent: false,
      BoolAgentDate: false,
      BoolApprovalDate: false,
      BoolProcessor: false,
      BoolMerchant: false,
      SelectedAgent: "",
      DateFrom: "",
      DateTo: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newMerchantReport>) => {
    console.log(value);
  };

  const [agent, setAgent] = useState(false);
  const [agentDate, setAgentDate] = useState(false);
  const [approvalDate, setApprovalDate] = useState(false);
  const [processor, setProcessor] = useState(false);
  const [merchant, setMerchant] = useState(false);

  const handleClickReport = (value: string) => {
    setAgent(false);
    setAgentDate(false);
    setApprovalDate(false);
    setProcessor(false);
    setMerchant(false);
    // Testing the cases to able the right fields
    switch (value.toLowerCase()) {
      case "agent":
        if (!form.getValues("BoolAgent")) setAgent(true);
        break;
      case "agentdate":
        if (!form.getValues("BoolAgentDate")) setAgentDate(true);
        break;
      case "approvaldate":
        if (!form.getValues("BoolApprovalDate")) setApprovalDate(true);
        break;
      case "processor":
        if (!form.getValues("BoolProcessor")) setProcessor(true);
        break;
      case "merchant":
        if (!form.getValues("BoolMerchant")) setMerchant(true);
        break;
      default:
        break;
    }
    // Handling the values from the form
    if(agent) form.setValue("BoolAgent", false);
    if(agentDate) form.setValue("BoolAgentDate", false);
    if(approvalDate) form.setValue("BoolApprovalDate", false);
    if(processor) form.setValue("BoolProcessor", false);
    if(merchant) form.setValue("BoolMerchant", false);
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
                  formName="BoolAgent"
                  label=""
                  placeholder="Agent"
                  className="col-span-1 pb-2"
                  onClick={() => handleClickReport("agent")}
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
                    disabled={!agent}
                  />
                </div>
              </div>
              <hr className="border" />
              {/* AGENT AND DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="BoolAgentDate"
                  label=""
                  placeholder="Agent & Date"
                  className="col-span-1 pt-2"
                  onClick={() => handleClickReport("agentDate")}
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
                    disabled={!agentDate}
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="DateFrom"
                    label=""
                    placeholder="From Date"
                    disabled={!agentDate}
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="DateTo"
                    label=""
                    placeholder="To Date"
                    disabled={!agentDate}
                  />
                </div>
              </div>
              <hr className="border" />
              {/* APPROVAL DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="BoolApprovalDate"
                  label=""
                  placeholder="Approval Date"
                  className="col-span-1 pt-2"
                  onClick={() => handleClickReport("approvalDate")}
                />
                <div className="col-span-2">
                  <DatePickerForm
                    control={form.control}
                    formName="DateFrom"
                    label=""
                    placeholder="From Date"
                    disabled={!approvalDate}
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="DateTo"
                    label=""
                    placeholder="To Date"
                    disabled={!approvalDate}
                  />
                </div>
              </div>
              <hr className="border" />
              {/* PROCESSOR BY APPROVAL DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="BoolProcessor"
                  label=""
                  placeholder="Processor by Approval Date"
                  className="col-span-1 pt-2"
                  onClick={() => handleClickReport("processor")}
                />
                <div className="col-span-2">
                  <DatePickerForm
                    control={form.control}
                    formName="DateFrom"
                    label=""
                    placeholder="From Date"
                    disabled={!processor}
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="DateTo"
                    label=""
                    placeholder="To Date"
                    disabled={!processor}
                  />
                </div>
              </div>
              <hr className="border" />
              {/* MERCHANTS BY APPROVAL DATE */}
              <div className="my-3 grid flex-auto grid-cols-3 items-start gap-10">
                <CheckboxForm
                  control={form.control}
                  formName="BoolMerchant"
                  label=""
                  placeholder="Merchants by Approval Date (with splits)"
                  className="col-span-1 pt-2"
                  onClick={() => handleClickReport("merchant")}
                />
                <div className="col-span-2">
                  <DatePickerForm
                    control={form.control}
                    formName="DateFrom"
                    label=""
                    placeholder="From Date"
                    disabled={!merchant}
                  />
                  <DatePickerForm
                    control={form.control}
                    formName="DateTo"
                    label=""
                    placeholder="To Date"
                    disabled={!merchant}
                  />
                </div>
              </div>
              <hr className="border" />
              {/* BUTTONS TO SUBMIT */}
              <div className="my-2 flex justify-end gap-2">
                <CustomButtons btnType="destructive" type="reset" className="px-10">
                  Reset
                </CustomButtons>
                <CustomButtons btnType="default" type="submit" className="px-10">
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
