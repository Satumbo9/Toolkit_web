"use client";
import CustomButtons from "@/components/Shared/CustomButtons";
import { CheckboxForm } from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ImportDataSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FinancialImportData = () => {
  const form = useForm<z.infer<typeof ImportDataSchema>>({
    resolver: zodResolver(ImportDataSchema),
    defaultValues: {
      AchCredit: false,
      AchDebit: false,
      AchRejects: false,
      AchCreditOther: false,
    },
  });

  const onSubmit = (values: z.infer<typeof ImportDataSchema>) => {
    console.log(values);
  };

  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="p-4">
        <h1 className="text-3xl text-sky-500">Search Criteria</h1>
        <div className="my-5 flex flex-col items-center justify-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="">
                <section className="flex flex-col">
                  <CheckboxForm
                    control={form.control}
                    formName="AchCredit"
                    label=""
                    placeholder="ACH Credit (Acct #8950)"
                  />
                  <CheckboxForm
                    control={form.control}
                    formName="AchDebit"
                    label=""
                    placeholder="ACH Debit (ModPay)"
                  />
                  <CheckboxForm
                    control={form.control}
                    formName="AchRejects"
                    label=""
                    placeholder="ACH Rejects (Merchant Rejects - ACH Rejects by
                    Email)"
                  />
                  <CheckboxForm
                    control={form.control}
                    formName="AchCreditOther"
                    label=""
                    placeholder="ACH Credit (BOK Bank) (TextFile, COmma
                    Delimited, No Header Row)"
                  />
                </section>
                <div className="flex flex-col items-center justify-center">
                  <Textarea
                    placeholder="Text area..."
                    className="my-5 h-[14vh] w-full resize-none"
                  />
                  <CustomButtons btnType="primary" className="px-10">
                    Import
                  </CustomButtons>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FinancialImportData;
