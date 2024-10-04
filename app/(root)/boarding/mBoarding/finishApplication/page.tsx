"use client";
import NewFSPTabContent from "@/components/boarding/NewFSPTabContent";
import NewManualEntry from "@/components/boarding/newManualEntry";
import NewNorthInterchangeTabContent from "@/components/boarding/NewNorthInterchangeTabContent";
import NewOmahaTabContent from "@/components/boarding/NewOmahaTabContent";
import CustomButtons from "@/components/Shared/CustomButtons";
import { SelectForm } from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import { startMerchantApplication } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
      title: "Pre Signed Form",
      value: "manualEntry",
    },
  ];

  const [formType, setFormType] = useState<string>("");
  const handleTypeChange = () => {
    setFormType(form.getValues("ApplicationType"));
  };

  return (
    <section className="">
      <div className="-mx-5 -mt-5 mb-5 rounded-b-2xl rounded-tr-lg bg-zinc-200 px-5 py-10 dark:bg-zinc-800">
        <div className="mx-auto flex max-w-[1600px] gap-2 max-xl:flex-col max-xl:text-center">
          <div className="flex-none">
            <h1 className="my-3 text-2xl text-sky-500">
              MiCamp MPA Applications
            </h1>
            <p className="">MPA Selection.</p>
          </div>
          <div className="flex-1 text-end max-xl:text-center">
            <div className="ml-auto mr-0 w-min max-xl:mx-auto">
              <Link href={"/boarding/mBoarding/"} className="">
                <CustomButtons
                  btnType="default"
                  className="my-2 justify-end gap-2 max-xl:justify-center"
                >
                  Finish the application
                  <ArrowRight className="size-5" />
                </CustomButtons>
              </Link>
            </div>
            <p className="">2/2</p>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h2 className="text-center text-base">
            Please, select the MPA Application type to continue.
          </h2>
          <div className="mx-auto max-w-72">
            <SelectForm
              control={form.control}
              formName="ApplicationType"
              placeholder="Select an Application Type"
              label=""
              valueKey={"value"}
              displayKey={"title"}
              content={options}
              onChange={() => handleTypeChange()}
            />
          </div>
        </form>
      </Form>
      <div className="mt-5 px-10">{renderForm(formType)}</div>
    </section>
  );
};

function renderForm(value: string) {
  switch (value) {
    case "fsp":
      return <NewFSPTabContent />;
    case "North":
      return <NewNorthInterchangeTabContent />;
    case "wavit":
      return <NewNorthInterchangeTabContent />;
    case "omaha":
      return <NewOmahaTabContent />;
    case "manualEntry":
      return <NewManualEntry />;
  }
}

export default Page;
