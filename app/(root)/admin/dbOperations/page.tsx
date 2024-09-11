"use client";

import { FormGenerator } from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import { testingForm } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const testSchema = z.object({
    test1: z.string(),
  });

  const form = useForm<z.infer<typeof testSchema>>({
    resolver: zodResolver(testSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof testSchema>) => {
    console.log(values);
  };
  return (
    <section className="m-auto h-[40rem] p-2">
      <h1 className="text-center text-2xl text-sky-500">Page in Test</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormGenerator
            formControl={form.control}
            formFields={testingForm}
            gridCols=""
          />
        </form>
      </Form>
    </section>
  );
};

export default Page;
