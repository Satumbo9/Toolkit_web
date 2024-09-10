"use client";

import React from "react";
import { z } from "zod";
import { addMerchantOwnerFspSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
} from "../Shared/InstantForm";
import { addNewMerchantOwnerAddressFspForm, addNewMerchantOwnerBasicFspForm } from "@/constants";

const AddNewMerchantOwner = () => {
  const form = useForm<z.infer<typeof addMerchantOwnerFspSchema>>({
    resolver: zodResolver(addMerchantOwnerFspSchema),
    defaultValues: {
      PrimaryOwner: false,
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Ownership: 0,
      CellNumber: 0,
      SSN: 0,
      MerchantAgreesSms: false,
      TitleDocuSign: "",
      EmailDocuSign: "",
      Address: "",
      City: "",
      State: "",
      PostalCode: 0,
      DriverLicense: 0,
      DriverLicenseState: "",
    },
  });

  const onSubmit = (value: z.infer<typeof addMerchantOwnerFspSchema>) => {
    console.log(value);
  };

  return (
    <div className="min-2xl:h-[60vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* BASIC MERCHANT INFORMATION */}
          <h1 className="mt-5 flex gap-2 text-xl font-semibold">
            Basic Merchant Information
          </h1>
          <CheckboxForm
            control={form.control}
            formName="PrimaryOwner"
            label=""
            placeholder="Primary Owner"
            className="my-5"
          />
          <br />
          <FormGeneration
            formControl={form.control}
            formFields={addNewMerchantOwnerBasicFspForm}
            gridCols={"3"}
          />
          <br />
          <CheckboxForm
            control={form.control}
            formName="MerchantAgreesSms"
            label=""
            placeholder="Merchant Agrees to receive SMS"
            className="my-5"
          />
          <div className="my-5 grid grid-cols-2 gap-2">
            <InputForm
              control={form.control}
              formName="TitleDocuSign"
              label="Title: *"
              placeholder="Title"
            />
            <InputForm
              control={form.control}
              formName="EmailDocuSign"
              label="Email: (for DocuSign) *"
              placeholder="example@micamp.com"
            />
          </div>
          {/* ADDRESS INFORMATION */}
          <h1 className="mt-5 flex gap-2 text-xl font-semibold">
            Address Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={addNewMerchantOwnerAddressFspForm}
            gridCols={"2"}
          />
          <div className="my-3 flex justify-end max-2xl:justify-center">
            <Button>Create Merchant</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddNewMerchantOwner;
