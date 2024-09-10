"use client";
import { Button } from "@/components/ui/button";
import { thirdPartyForm } from "@/constants";
import React from "react";
import { Form } from "../ui/form";
import { newThirdPartyProcessorsSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";

const ThirdPartyProcessor = () => {
  const form = useForm<z.infer<typeof newThirdPartyProcessorsSchema>>({
    resolver: zodResolver(newThirdPartyProcessorsSchema),
    defaultValues: {
      Processor: "",
      MID: "",
      ResidualDate: "",
      CalculateAllMonths: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newThirdPartyProcessorsSchema>) => {
    console.log(value);
  };

  return (
    <section className="flex-auto text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          {/* Processor Information */}
          <h1 className="m-auto mt-4 text-center text-xl font-bold">
            Third-Party Processors
          </h1>

          <div className="m-auto w-3/5 gap-2 space-y-2">
            {thirdPartyForm.map((item) =>
              item.content ? (
                <div className="w-full" key={item.id}>
                  <SelectForm
                    control={form.control}
                    formName={item.formName}
                    label={item.title}
                    placeholder={item.placeholder}
                    content={item.content}
                    valueKey="id"
                    displayKey="title"
                    disabled={false}
                    className=""
                  />
                </div>
              ) : item.type === "checkbox" ? (
                <div key={item.id} className="m-auto flex w-full gap-4">
                  <CheckboxForm
                    control={form.control}
                    formName={item.formName}
                    label={""}
                    placeholder={item.placeholder}
                  />
                </div>
              ) : item.type === "date" ? (
                <div className="flex-auto content-center" key={item.id}>
                  <DatePickerForm
                    control={form.control}
                    formName="FromDate"
                    label={item.title}
                    placeholder="mm/dd/2024"
                  />
                </div>
              ) : (
                <div key={item.id} className="w-full gap-4">
                  <InputForm
                    control={form.control}
                    formName={item.formName}
                    label={item.title}
                    placeholder={item.placeholder}
                  />
                </div>
              ),
            )}
            <div className="text-end">
              <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ThirdPartyProcessor;
