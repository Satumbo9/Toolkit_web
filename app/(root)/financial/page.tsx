"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DatePickerForm, InputForm } from "@/components/Shared/InstantForm";
import CustomButtons from "@/components/Shared/CustomButtons";

const FinancialFind = () => {
  const financialFindSchema = z.object({
    name: z.string(),
    fromAmount: z.number(),
    toAmount: z.number(),
    fromDate: z.string(),
    toDate: z.string(),
  });

  const form = useForm<z.infer<typeof financialFindSchema>>({
    resolver: zodResolver(financialFindSchema),
    defaultValues: {
      name: "",
      fromAmount: 0,
      toAmount: 0,
      fromDate: "",
      toDate: "",
    },
  });

  const onSubmit = (values: z.infer<typeof financialFindSchema>) => {
    console.log(values);
  };

  return (
    <div className="my-10 flex items-center justify-center">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Search Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <InputForm
                control={form.control}
                formName="name"
                label="Name/Desc/Routing/Account/Addenda"
                placeholder="Enter to search..."
              />
              <div className="grid grid-cols-2 gap-5">
                <InputForm
                  control={form.control}
                  formName="fromAmount"
                  label="From Amount"
                  placeholder="Enter to search..."
                />
                <InputForm
                  control={form.control}
                  formName="toAmount"
                  label="To Amount"
                  placeholder="Enter to search..."
                />
                <DatePickerForm
                  control={form.control}
                  formName="fromDate"
                  label="From Date"
                  placeholder="Pick a start date..."
                />
                <DatePickerForm
                  control={form.control}
                  formName="toDate"
                  label="To Date"
                  placeholder="Pick a end date..."
                />
              </div>

              <div className="mt-5 flex items-center justify-center">
                <CustomButtons btnType="default" className="px-10" type="submit">Search</CustomButtons>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialFind;
