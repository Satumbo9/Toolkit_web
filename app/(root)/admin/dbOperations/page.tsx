"use client";

import { FormBuilder } from "@/components/Shared/InstantForm";
import { testingForm } from "@/constants";
import React from "react";


const Page = () => {
  return (
    <section className="m-auto p-2">
      <FormBuilder formFields={testingForm} />
    </section>
  );
};

export default Page;
