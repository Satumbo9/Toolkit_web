"use client";

import { FormGenerator, ReadJson } from "@/components/Shared/InstantForm";
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
    
    const testing = ReadJson(testingForm);
    console.log(testing);
  };

  return (
    <section className="m-auto p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormGenerator formControl={form.control} formFields={testingForm} />
        </form>
      </Form>
    </section>
  );
};

export default Page;
