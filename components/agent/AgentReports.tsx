"use client";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Form } from "../ui/form";
import { AgentEquipmentSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePickerForm, SelectForm } from "../Shared/InstantForm";
import { reportList1 } from "@/constants";

const AgentReports = () => {
  const formReport = useForm<z.infer<typeof AgentEquipmentSchema>>({
    resolver: zodResolver(AgentEquipmentSchema),
    defaultValues: {
      copyFromContactInfo: false,
      noShippingEmails: false,
      coCard: false,
      markClosed: false,
      shipPhone: "",
      shipExt: "",
      shippingEmail: "",
      shippingServiceEmail: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      cellPhone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AgentEquipmentSchema>) => {
    console.log(values);
  };

  return (
    <>
      <section className="w-full">
        <h1 className="mb-3 text-2xl text-sky-500">Parameters</h1>

        <Form {...formReport}>
          <form
            onSubmit={formReport.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <div className="flex content-center gap-4">
              <Checkbox className="mt-2 flex-none self-center" />
              <span className="flex-1 self-center pt-2 text-sm">Sys/Prin</span>
              <div className="flex-1">
                <SelectForm
                  control={formReport.control}
                  formName="SalesRep"
                  label=""
                  content={reportList1}
                  placeholder="Select an item.."
                  valueKey={"id"}
                  displayKey={"title"}
                  disabled={false}
                  className=""
                />
              </div>
            </div>
            <div className="flex w-full content-center gap-4">
              <Checkbox className="mt-2 flex-none self-center" />
              <span className="flex-1 self-center pt-2 text-sm">
                Month to View
              </span>
              <div className="flex-1">
                <DatePickerForm
                  control={formReport.control}
                  formName="Approval"
                  label=""
                  placeholder="mm/dd/2024"
                />
              </div>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default AgentReports;
