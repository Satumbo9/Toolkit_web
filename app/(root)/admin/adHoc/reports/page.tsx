/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { agentEmailList } from "@/constants";
import React from "react";
import { newAdHocSearchSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import PDFReader from "@/components/pdfRenderer/PDFReader";

const page = () => {
  const form = useForm<z.infer<typeof newAdHocSearchSchema>>({
    resolver: zodResolver(newAdHocSearchSchema),
    defaultValues: {
      ReportName: "",
      MID: "",
      FromDate: "",
      ToDate: "",
      YearMonth: "",
      UseAO: false,
      SaveToC: false,
      MIDS: "",
      User: "",
      Processor: "",
      AuditType: "",
      Agent: "",
      Phrase: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newAdHocSearchSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="p-2">
        <Link href={"/admin/adHoc"}>
          <Button className="mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
            <p className="text-pretty">{"<<"} Return</p>
          </Button>
        </Link>
        <div className="flex gap-10 max-2xl:flex-wrap">
          <div className="flex-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                {/* SEARCH CRITERIA CARD */}
                <h1 className="my-5 text-center text-xl font-medium">
                  Search Criteria
                </h1>

                {/* REPORT NAME */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Report Name</p>
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
                {/* MID */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">MID</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"Agent"}
                      label=""
                      placeholder={"Select MID"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
                {/* FROM DATE */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">From Date</p>
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
                {/* TO DATE */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">To Date</p>
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
                {/* YEAR/MONTH */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Year/Month</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"Agent"}
                      label=""
                      placeholder={"Select Year/Month"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
                <div className="m-auto flex w-2/3 justify-end gap-6">
                  <CheckboxForm
                    control={form.control}
                    formName={"PayDay"}
                    label={""}
                    placeholder={"Use AO"}
                  />
                  <CheckboxForm
                    control={form.control}
                    formName={"PayDay"}
                    label={""}
                    placeholder={"Save to C:/ToolkitWeb"}
                  />
                </div>
                {/* MIDS */}
                <div className="m-auto flex w-full content-center gap-4">
                  <p className="w-1/3 content-center text-end">MIDS</p>
                  <div className="w-2/3">
                    <TextAreaForm
                      control={form.control}
                      formName={"Notes"}
                      label=""
                      placeholder="Notes..."
                    />
                  </div>
                </div>
                {/* USER */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">User</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"Agent"}
                      label=""
                      placeholder={"Select User"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
                {/* PROCESSOR */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Processor</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"Agent"}
                      label=""
                      placeholder={"Select Processor"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
                {/* AUDIT TYPE */}
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Audit Type</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"Agent"}
                      label=""
                      placeholder={"Select Audit Type"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
                {/* AGENT */}
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
                {/* PHRASE */}
                <div className="m-auto flex w-full content-center gap-4">
                  <p className="w-1/3 content-center text-end">Phrase</p>
                  <div className="w-2/3">
                    <InputForm
                      control={form.control}
                      formName={"AgentID"}
                      label=""
                      placeholder="Enter Phrase"
                    />
                  </div>
                </div>
                <div className="m-auto my-3 w-full text-end">
                  <Button className="bg-gradient-to-r from-[#79CB6C] to-[#285C20] px-8 text-white hover:opacity-90">
                    Generate Excel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="flex-auto justify-center">
            <div className="ml-auto mr-0 w-full items-center justify-center">
              <PDFReader />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
