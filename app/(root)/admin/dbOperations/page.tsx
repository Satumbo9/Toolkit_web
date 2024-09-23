import FormBuilder from "@/components/Shared/Form/FormBuilder/FormBuilder";
import { StatCardWrapper } from "@/components/Shared/Form/FormBuilder/StatCards";
// import { FormBuilder } from "@/components/Shared/InstantForm";
// import { testingForm } from "@/constants";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <section>
      <Suspense>
        <StatCardWrapper />
      </Suspense>
      <p className="mb-3 mt-10 text-4xl font-semibold">Your Form</p>
      <hr className="mb-5" />
      <FormBuilder />
    </section>
  );
};

export default Page;
