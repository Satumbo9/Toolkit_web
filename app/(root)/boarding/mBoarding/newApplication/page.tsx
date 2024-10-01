"use client";
import NewFSPTabContent from "@/components/boarding/NewFSPTabContent";
import NewManualEntry from "@/components/boarding/newManualEntry";
import NewNorthInterchangeTabContent from "@/components/boarding/NewNorthInterchangeTabContent";
import NewOmahaTabContent from "@/components/boarding/NewOmahaTabContent";
import NewWavitTabContent from "@/components/boarding/NewWavitTabContent";
import { SelectForm } from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import { startMerchantApplication } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const form = useForm<z.infer<typeof startMerchantApplication>>({
    resolver: zodResolver(startMerchantApplication),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof startMerchantApplication>) => {
    console.log(value);
  };

  const options = [
    {
      id: "1",
      title: "MiCamp FSP MPA",
      value: "fsp",
    },
    {
      id: "2",
      title: "NORTH Interchange",
      value: "North",
    },
    {
      id: "3",
      title: "WAVit",
      value: "wavit",
    },
    {
      id: "4",
      title: "OMAHA",
      value: "omaha",
    },
    {
      id: "5",
      title: "Manual Entry",
      value: "manualEntry",
    },
  ];

  const [formType, setFormType] = useState<string>("fsp");
  const handleTypeChange = () => {
    setFormType(form.getValues("ApplicationType"));
  };
  return (
    <section>
      <h1 className="text-center text-2xl text-sky-500">
        MiCamp MSP Applications
      </h1>
      <p className="text-center">Select the type of application and start to fill it.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mx-auto max-w-72">
            <SelectForm
              control={form.control}
              formName="ApplicationType"
              placeholder="FSP"
              label=""
              valueKey={"value"}
              displayKey={"title"}
              content={options}
              onChange={() => handleTypeChange()}
            />
          </div>
        </form>
      </Form>
      <div className="mt-5">{renderForm(formType)}</div>
    </section>
  );
};

function renderForm(value: string) {
  switch (value) {
    case "fsp":
      return (
        <>
          <NewFSPTabContent />
        </>
      );
    case "North":
      return (
        <>
          <NewNorthInterchangeTabContent />
        </>
      );
    case "wavit":
      return (
        <>
          <NewWavitTabContent />
        </>
      );
    case "omaha":
      return (
        <>
          <NewOmahaTabContent />
        </>
      );
    case "manualEntry":
      return (
        <>
          <NewManualEntry />
        </>
      );
  }
}

export default Page;
