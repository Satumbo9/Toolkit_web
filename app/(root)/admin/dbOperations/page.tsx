import { FormGenerator } from "@/components/Shared/InstantForm";
import { testingForm } from "@/constants";
import React from "react";

const page = () => {
  return (
    <section className="m-auto h-[40rem] p-2">
      <h1 className="text-2xl text-sky-500">Page in development</h1>

      <FormGenerator 
        formControl={""}
        formFields={testingForm}
        gridCols=""
      />
    </section>
  );
};

export default page;
