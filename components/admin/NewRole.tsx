"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { InputForm, TextAreaForm } from "../Shared/InstantForm";
import { newRoleSchema } from "@/lib/utils";
import CustomButtons from "../Shared/CustomButtons";

const NewRole = ({ isOpen, setIsOpen }: { isOpen?: any; setIsOpen?: any }) => {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
            formName="Role"
            label="Role Name:"
            placeholder="e.g. Admin"
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
          <div className="flex justify-center gap-2">
            <CustomButtons
              className="m-auto my-4 px-10"
              btnType="default"
              type="submit"
            >
              Create
            </CustomButtons>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default NewRole;
