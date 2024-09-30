import Builder from "@/components/Shared/Form/FormBuilder/Builder";
import React from "react";
import { GetFormById } from "@/constants/actions/form.action";

const BuilderEdit = async ({ params }: { params: { id: string } }) => {
  const result = await GetFormById(params.id);

  if (!result) throw new Error("Form not found!");

  return (
    <section className="px-12">
      <Builder result={result} />
    </section>
  );
};

export default BuilderEdit;
