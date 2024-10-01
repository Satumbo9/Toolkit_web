import { newBoardingAppliactionSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormGeneration, InputButtonForm, TextAreaForm } from "../Shared/InstantForm";
import { fspManualEntryForm, fspManualLocationEntryForm } from "@/constants";
import UploadFileBtn from "../ui/UploadButton";
import { Form } from "../ui/form";

const NewManualEntry = () => {
  const form = useForm<z.infer<typeof newBoardingAppliactionSchema>>({
    resolver: zodResolver(newBoardingAppliactionSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof newBoardingAppliactionSchema>) => {
    console.log(value);
  };
  const [applicationType, setApplicationType] = useState("fspApplication");

  return (
    <section className="mt-5 w-full">
      <h1 className="my-2 text-center text-xl font-semibold">
        Manual Entry for FSP Applications
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mx-auto my-5 flex gap-2">
            <div className="mx-auto flex-1 justify-center">
              <div className="mx-auto max-w-2xl">
                <h2 className="mb-2 mt-4 text-xl font-semibold text-sky-500">
                  Basic Customer Information
                </h2>
                <FormGeneration
                  formControl={form.control}
                  formFields={fspManualEntryForm}
                  gridCols={"2"}
                />
                <h2 className="mb-2 mt-5 text-xl font-semibold text-sky-500">
                  DBA Legal Address
                </h2>
                <FormGeneration
                  formControl={form.control}
                  formFields={fspManualLocationEntryForm}
                  gridCols={"2"}
                />
                <h2 className="mb-4 mt-7 text-center text-xl font-semibold text-sky-500">
                  Application Type
                </h2>
                <div className="mx-auto grid max-w-5xl grid-cols-4 items-end gap-2 max-lg:grid-cols-2">
                  <InputButtonForm
                    control={form.control}
                    formName="testButton"
                    label="MiCamp FSP MPA"
                    value={"MiCamp FSP MPA"}
                    type="button"
                    className={
                      applicationType === "fspApplication" ? "text-white" : ""
                    }
                    setState={setApplicationType}
                    state={applicationType}
                    isActive={applicationType === "fspApplication"}
                    onChange={() => setApplicationType("fspApplication")}
                  />
                  <InputButtonForm
                    control={form.control}
                    formName="testButton"
                    label="NORTH WAVit"
                    value={"NORTH WAVit"}
                    type="button"
                    className={applicationType === "wavit" ? "text-white" : ""}
                    setState={setApplicationType}
                    state={applicationType}
                    isActive={applicationType === "wavit"}
                    onChange={() => setApplicationType("wavit")}
                  />
                  <InputButtonForm
                    control={form.control}
                    formName="testButton"
                    label="NORTH Inter."
                    value={"NORTH Inter."}
                    type="button"
                    className={
                      applicationType === "interchange" ? "text-white" : ""
                    }
                    setState={setApplicationType}
                    state={applicationType}
                    isActive={applicationType === "interchange"}
                    onChange={() => setApplicationType("interchange")}
                  />
                  <InputButtonForm
                    control={form.control}
                    formName="testButton"
                    label="OMAHA"
                    value={"OMAHA"}
                    type="button"
                    className={applicationType === "omaha" ? "text-white" : ""}
                    setState={setApplicationType}
                    state={applicationType}
                    isActive={applicationType === "omaha"}
                    onChange={() => setApplicationType("omaha")}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="my-5">
                <h1 className="mb-5 mt-10 text-center text-2xl font-semibold">
                  Upload Documents
                </h1>
                <div className="mx-auto my-2 max-w-2xl rounded-md border p-4">
                  <h3 className="mb-4 text-center text-xl font-semibold text-sky-500">
                    Document 1
                  </h3>
                  <div className="max-w-2xl flex-auto space-y-3 p-2">
                    <div className="my-2 max-w-fit">
                      <UploadFileBtn />
                    </div>
                    <TextAreaForm
                      control={form.control}
                      formName="1234"
                      label="Document Description"
                    />
                  </div>
                </div>
                <div className="mx-auto my-2 max-w-2xl rounded-md border p-4">
                  <h3 className="mb-4 text-center text-xl font-semibold text-sky-500">
                    Document 2
                  </h3>
                  <div className="max-w-2xl flex-auto space-y-3 p-2">
                    <div className="my-2 max-w-fit">
                      <UploadFileBtn />
                    </div>
                    <TextAreaForm
                      control={form.control}
                      formName="123"
                      label="Document Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default NewManualEntry;
