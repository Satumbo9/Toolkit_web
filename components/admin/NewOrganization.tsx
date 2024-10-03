"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { CheckboxForm, InputForm, SwitchForm, TextAreaForm } from "../Shared/InstantForm";
import { newOrganizationSchema } from "@/lib/utils";
import CustomButtons from "../Shared/CustomButtons";

const NewOrganization = ({
  isOpen,
  setIsOpen,
}: {
  isOpen?: any;
  setIsOpen?: any;
}) => {
  const form = useForm<z.infer<typeof newOrganizationSchema>>({
    resolver: zodResolver(newOrganizationSchema),
    defaultValues: {
      Id: "1",
      Name: "",
      Status: null,
      AgentID:"1",
      AliasName:"",
      Description: "",
      Manager: false,
      Boarding: false,
    },
  });

  const onSubmit = (values: z.infer<typeof newOrganizationSchema>) => {
    console.log(values);
  };

// Conditional Checker to make someone manager 
  const [show, setShow] = useState(false);
  const handleUserType = () => {
    !show ? setShow(true) : setShow(false);

    const test = form.getValues("Boarding");

    if (test === false) {
      form.setValue("Manager", false);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <InputForm
            control={form.control}
            formName="Name"
            label="Name:"
            type="text"
            placeholder="Name"
            disabled={false}
          />

        <InputForm
            control={form.control}
            formName="Id"
            label="ID:"
            type="text"
            placeholder="ID"
            disabled={false}
          />
        
         <InputForm
            control={form.control}
            formName="Status"
            label="Status:"
            type="text"
            placeholder="Status"
            disabled={false}
          />
                   <InputForm
            control={form.control}
            formName="AgentID"
            label="AgentID:"
            type="text"
            placeholder="AgentID"
            disabled={false}
          />
          <InputForm
            control={form.control}
            formName="Organization"
            label="Organization:"
            placeholder="e.g. Sales"
          />
                              <InputForm
            control={form.control}
            formName="AliasName"
            label="Alias Name:"
            type="text"
            placeholder="AliasName"
            disabled={false}
          />
        
          {/* PlaceHolder for not the final data  */}
          <div className="grid grid-cols-3 gap-2">

            <CheckboxForm
            control={form.control}
            formName="Boarding"
            label=""
            placeholder="Boarding"
            onClick={handleUserType}/>
            </div>
            { show && (
                    <div>
                        <p className= "my-2"> If Boarding:</p>
                        <SwitchForm
                        control={form.control}
                        formName="Manager"
                        label="Make Manager"
                        />
                    </div>
                )
            }



          <TextAreaForm
            control={form.control}
            formName="Description"
            label="Description:"
            placeholder="..."
          />
          <div className="flex justify-center gap-2">
            <CustomButtons
              className="m-auto my-2 px-10"
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

export default NewOrganization;
