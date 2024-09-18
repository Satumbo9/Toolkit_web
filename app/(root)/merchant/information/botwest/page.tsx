"use client";
import React from "react";
import { z } from "zod";
import { bankOfTheWestSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { InputForm } from "@/components/Shared/InstantForm";
import CustomButtons from "@/components/Shared/CustomButtons";

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
      formName: "AgentRepName",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 2,
      title: "Agent / Rep. Code",
      formName: "AgentRepCode",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 3,
      title: "Branch Name",
      formName: "BranchName",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 4,
      title: "Branch Code",
      formName: "BranchCode",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 5,
      title: "ABA Routing #",
      formName: "AbaRouting",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 6,
      title: "DDA Checking Act. #",
      formName: "DdaCheckingAct",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 7,
      title: "Federal Tax ID #",
      formName: "FederalTaxId",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 8,
      title: "Banker",
      formName: "Banker",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 9,
      title: "Banker Employee ID",
      formName: "BankerEmployeeId",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 10,
      title: "Division Name",
      formName: "DivisionName",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 11,
      title: "Division / LOB #",
      formName: "DivisonLob",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 12,
      title: "Region Name",
      formName: "RegionName",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 13,
      title: "Region #",
      formName: "Region",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 14,
      title: "Segment Name",
      formName: "SegmentName",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 15,
      title: "Referral Lead #",
      formName: "ReferralLead",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 16,
      title: "Entity",
      formName: "Entity",
      placeholder: "",
      type: "input",
      value: "",
    },
    {
      id: 17,
      title: "Client Group",
      formName: "ClientGroup",
      placeholder: "",
      type: "input",
      value: "",
    }
  ];

  return (
    <section>
      <h1 className="mb-3 text-2xl text-sky-500">Bank of The West</h1>

      {/* FIRST COLUMN */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* Processor Information */}
          <h1 className="m-auto my-4 text-center text-2xl font-bold">
            Information
          </h1>
          <div className="m-auto grid max-w-[800px] grid-flow-row grid-cols-2 gap-x-4 px-6 max-lg:grid-cols-1">
            {formList.map((item) => {
              return (
                <div key={item.id} className="m-auto my-2 w-full gap-4">
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
          <div className="my-4 text-center">
            <CustomButtons className="" btnType="default">
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Page;
