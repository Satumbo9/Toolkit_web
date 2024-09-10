"use client";
import React from "react";
import { z } from "zod";
import { newSupportTicketSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import UploadFileBtn from "../ui/UploadButton";
import CustomButtons from "../Shared/CustomButtons";

const AddFileFinance = () => {
  const form = useForm<z.infer<typeof newSupportTicketSchema>>({
    resolver: zodResolver(newSupportTicketSchema),
    defaultValues: {
      Subject: "",
      Support: true,
      Sales: false,
      Description: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newSupportTicketSchema>) => {
    console.log(value);
  };

  return (
    <div className="max-2xl:overflow-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center gap-2">
            <UploadFileBtn />
            <p className="text-base font-bold">Selected File:</p>
            <p className="text-base">Name of the file</p>
          </div>

          <p>
            <b>The file can be: </b>.txt, .csv, .pdf, .docx, .xlsx
          </p>
          <div className="flex justify-center gap-2 max-2xl:justify-center">
            
            <CustomButtons btnType="default">
              Send Email
            </CustomButtons>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddFileFinance;
