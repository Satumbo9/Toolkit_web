"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { InputForm, TextAreaForm } from "../Shared/InstantForm";
import { newRoleSchema } from "@/lib/utils";
import CustomButtons from "../Shared/CustomButtons";

const NewDepartment = ({
  type,
  isOpen,
  setIsOpen,
}: {
  type: string;
  isOpen?: any;
  setIsOpen?: any;
}) => {
  const form = useForm<z.infer<typeof newRoleSchema>>({
    resolver: zodResolver(newRoleSchema),
    defaultValues: {
      Id: "1",
      Description: "",
      Permission: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newRoleSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <InputForm
            control={form.control}
            formName="Id"
            label="Id:"
            type="number"
            placeholder="ID"
            disabled={false}
          />
          <InputForm
            control={form.control}
            formName="Department"
            label="Department:"
            placeholder="e.g. Sales"
          />
          <TextAreaForm
            control={form.control}
            formName="Description"
            label="Description:"
            placeholder="..."
          />
          <InputForm
            control={form.control}
            formName="Permission"
            label="Permission:"
            placeholder="0"
            type="number"
          />
          <div className="my-4 flex justify-center gap-2">
            <CustomButtons className="px-4" btnType="primary" type="reset">
              Reset
            </CustomButtons>
            <CustomButtons className="px-4" btnType="default" type="submit">
              Create
            </CustomButtons>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default NewDepartment;
