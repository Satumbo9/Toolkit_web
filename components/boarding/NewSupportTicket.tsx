"use client";
import React, { useState } from "react";
import { z } from "zod";
import { newSupportTicketSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CheckboxForm, InputForm, SelectForm, TextAreaForm } from "../Shared/InstantForm";
import {  supportTicketList } from "@/constants";

const NewSupportTicket = () => {
  const form = useForm<z.infer<typeof newSupportTicketSchema>>({
    resolver: zodResolver(newSupportTicketSchema),
    defaultValues: {
      Subject: "",
      Support: true,
      Sales: false,
      SupportType: "",
      Description: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newSupportTicketSchema>) => {
    console.log(value);
    console.log(form.getValues("SupportType"));
  };

  const [selectStatus, setSelectStatus] = useState<string>("");
  const handleSelectField = () => {
    setSelectStatus(form.getValues("SupportType"));
    console.log(form.getValues("SupportType"));


  }

  return (
    <div className="max-2xl:h-[50vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <InputForm
              control={form.control}
              formName="Subject"
              label="Subject"
              placeholder="Insert a subject"
            />
            <div className="flex items-end gap-2">
              <CheckboxForm
                control={form.control}
                formName="Support"
                label="Ticket for: *select at least one"
                placeholder="Support"
              />
              <CheckboxForm
                control={form.control}
                formName="Sales"
                label=""
                placeholder="Sales"
                className="flex-1"
              />
            </div>
            <SelectForm
                  control={form.control}
                  formName="SupportType"
                  label="Select an Activity to Record:"
                  content={supportTicketList}
                  placeholder="Select a Status..."
                  valueKey="title"
                  displayKey="title"
                  disabled={false}
                  className=""
                  onChange={() => handleSelectField()}
                /> 
            {selectStatus === "Merchant" && 
            (<div>
            <InputForm
              control={form.control}
              formName="Subject"
              label="MID"
              placeholder="Insert the Merchant ID"
            />
            
            <InputForm
              control={form.control}
              formName="Subject"
              label="Name"
              placeholder="Insert the Merchant Name"
            />
            
            <InputForm
              control={form.control}
              formName="Subject"
              label="DBA"
              placeholder="Insert the DBA"
            />



            </div>)}
            {selectStatus === "Equiment" && (
              <div>
              
              <InputForm
              control={form.control}
              formName="Subject"
              label="MID"
              placeholder="Insert the equiment MID"
            />
          <InputForm
              control={form.control}
              formName="Subject"
              label="Order"
              placeholder="Insert the equiment Order"
            />
            <InputForm
              control={form.control}
              formName="Subject"
              label="Serial#"
              placeholder="Insert the equiment Serial#"
            />
              </div>
              )}
            {selectStatus === "Agent" && (
            
            <div>
          <InputForm
              control={form.control}
              formName="Subject"
              label="ID"
              placeholder="Insert the agent ID"
            />
                      <InputForm
              control={form.control}
              formName="Subject"
              label="Name"
              placeholder="Insert the agent Name"
            />
                                  <InputForm
              control={form.control}
              formName="Subject"
              label="Email"
              placeholder="Insert the agent Email"
            />
                                  <InputForm
              control={form.control}
              formName="Subject"
              label="Phone numbner"
              placeholder="Insert the agent Phone numbner"
            />

            </div>
          )}

            <TextAreaForm
              control={form.control}
              formName="Description"
              label="Description"
              placeholder="Insert your description here..."
            />
          </div>

          <div className="flex justify-center max-2xl:justify-center">
            <Button>Create Merchant</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewSupportTicket;
