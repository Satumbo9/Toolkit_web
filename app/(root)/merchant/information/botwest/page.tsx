"use client";
import React from "react";
import { z } from "zod";
import { bankOfTheWestSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { InputForm } from "@/components/Shared/InstantForm";

const Page = () => {
  const form = useForm<z.infer<typeof bankOfTheWestSchema>>({
    resolver: zodResolver(bankOfTheWestSchema),
    defaultValues: {
      AgentRepName: "",
      AgentRepCode: "",
      BranchName: "",
      BranchCode: "",
      AbaRouting: "",
      DdaCheckingAct: "",
      FederalTaxId: "",
      Banker: "",
      BankerEmployeeId: "",
      DivisionName: "",
      DivisonLob: "",
      RegionName: "",
      Region: "",
      SegmentName: "",
      ReferralLead: "",
      Entity: "",
      ClientGroup: "",
    },
  });

  const onSubmit = (value: z.infer<typeof bankOfTheWestSchema>) => {
    console.log(value);
  };
  const formList = [
    {
      id: 1,
      title: "Agent / Rep. Name",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 2,
      title: "Agent / Rep. Code",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 3,
      title: "Branch Name",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 4,
      title: "Branch Code",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 5,
      title: "ABA Routing #",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 6,
      title: "DDA Checking Act. #",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 7,
      title: "Federal Tax ID #",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 8,
      title: "Banker",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 9,
      title: "Banker Employee ID",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 10,
      title: "Division Name",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 11,
      title: "Division / LOB #",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 12,
      title: "Region Name",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 13,
      title: "Region #",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 14,
      title: "Segment Name",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 15,
      title: "Referral Lead #",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 16,
      title: "Entity",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 17,
      title: "Client Group",
      formName: "",
      placeholder: "",
      type: "input",
      value: "",
    },
  ];

  return (
    <section>
      <h1 className="mb-3 text-2xl text-sky-500">Bank of The West</h1>

      {/* FIRST COLUMN */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {/* Processor Information */}
          <h1 className="m-auto text-center text-xl font-bold">Information</h1>
          <div className="m-auto grid grid-flow-row grid-cols-2 gap-x-4 px-6 max-lg:grid-cols-1">
            {formList.map((item) => {
              return (
                <div key={item.id} className="m-auto w-full gap-4">
                  <InputForm
                    control={form.control}
                    formName={item.formName}
                    label={item.title}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            })}
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Page;
