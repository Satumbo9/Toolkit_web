"use client";
import NewMpaTabContent from "@/components/boarding/NewMpaTabContent";
import CustomButtons from "@/components/Shared/CustomButtons";
import { Form } from "@/components/ui/form";
import { startMerchantApplication } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
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

  // const options = [
  //   {
  //     id: "1",
  //     title: "MiCamp FSP MPA",
  //     value: "fsp",
  //   },
  //   {
  //     id: "2",
  //     title: "NORTH Interchange",
  //     value: "North",
  //   },
  //   {
  //     id: "3",
  //     title: "WAVit",
  //     value: "wavit",
  //   },
  //   {
  //     id: "4",
  //     title: "OMAHA",
  //     value: "omaha",
  //   },
  //   {
  //     id: "5",
  //     title: "Pre Signed Form",
  //     value: "manualEntry",
  //   },
  // ];

  // const [formType, setFormType] = useState<string>("");
  // const handleTypeChange = () => {
  //   setFormType(form.getValues("ApplicationType"));
  // };
  return (
    <section>
      <div className="-mx-5 -mt-5 mb-5 rounded-b-2xl rounded-tr-lg bg-zinc-200 px-5 py-10 dark:bg-zinc-800">
        <div className="mx-auto flex max-w-[1600px] gap-2 max-xl:flex-col max-xl:text-center">
          <div className="flex-none">
            <h1 className="my-3 text-2xl text-sky-500">
              MiCamp MPA Applications
            </h1>
            <p className="">
              Fill the merchant information and at the end, select your MPA
              type.
            </p>
          </div>
          <div className="flex-1 text-end max-xl:text-center">
            <div className="ml-auto mr-0 w-min max-xl:mx-auto">
              <Link href={"/boarding/mBoarding/finishApplication"} className="">
                <CustomButtons
                  btnType="default"
                  className="my-2 justify-end gap-2 max-xl:justify-center"
                >
                  Finish the application
                  <ArrowRight className="size-5" />
                </CustomButtons>
              </Link>
            </div>
            <p className="">Go to the last part of the application.</p>
          </div>
        </div>
      </div>
      <NewMpaTabContent />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mx-auto max-w-72">
            {/* <SelectForm
              control={form.control}
              formName="ApplicationType"
              placeholder="Select an Application Type"
              label=""
              valueKey={"value"}
              displayKey={"title"}
              content={options}
              onChange={() => handleTypeChange()}
            /> */}
          </div>
        </form>
      </Form>
      {/* <div className="mt-5 px-10">{renderForm(formType)}</div> */}
    </section>
  );
};

// function renderForm(value: string) {
//   switch (value) {
//     case "fsp":
//       return <NewFSPTabContent />;
//     case "North":
//       return <NewNorthInterchangeTabContent />;
//     case "wavit":
//       return <NewNorthInterchangeTabContent />;
//     case "omaha":
//       return <NewOmahaTabContent />;
//     case "manualEntry":
//       return <NewManualEntry />;
//   }
// }

export default Page;
