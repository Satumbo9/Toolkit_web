import { newBoardingAppliactionSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormGeneration, InputButtonForm } from "../Shared/InstantForm";
import { fspManualEntryForm, fspManualLocationEntryForm } from "@/constants";
import UploadFileBtn from "../ui/UploadButton";
import { Form } from "../ui/form";
import CustomButtons from "../Shared/CustomButtons";

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
    <section className="w-full">
      <h1 className="my-2 text-center text-2xl font-semibold">
        Manual Entry for FSP Applications
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-[1600px]"
        >
          <div className="mx-auto my-5 flex gap-2">
            <div className="mx-auto flex-1 justify-center">
              <div className="mx-auto max-w-2xl">
                <h2 className="mb-2 mt-5 text-xl text-sky-500">
                  Basic Customer Information
                </h2>
                <FormGeneration
                  formControl={form.control}
                  formFields={fspManualEntryForm}
                  gridCols={"2"}
                />
                <h2 className="mb-2 mt-5 text-xl text-sky-500">
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
                <div className="mx-auto grid max-w-5xl grid-cols-4 items-end gap-2 max-xl:grid-cols-2">
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
              <div className="space-y-3">
                <h1 className="mt-5 text-xl font-medium text-sky-500">
                  Upload Documents
                </h1>
                <p className="mb-5 text-base">
                  * Choose file(s) and click Save. (Click on the filenames to
                  view them.)
                </p>
                {/* UPLOAD VOIDED CHECK / BANK LETTER */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Voided Check / Bank Letter
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD DRIVER'S LICENSE */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    {"Upload Driver's License"}
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD BANK STATEMENT */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Bank Statement
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD PROCESSOR STATEMENT */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Processor Statement
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                <hr className="my-5 border-2" />
                <h2 className="mb-2 text-center text-xl font-semibold">
                  Other documents:
                </h2>
                {/* UPLOAD TAX DOCUMENTS */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Tax Documents
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD COMPANY / BUSINESS DOCUMENTS */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Company / Business Documents
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD CERTIFICATIONS */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Certifications
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD ACH FORMS */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload ACH Forms
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD OTHER IDENTIFICATION */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Other Identification Documents
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
                  </div>
                </div>
                {/* UPLOAD MISCELLANEOUS DOCUMENTS */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-4 text-xl text-sky-500">
                    Upload Miscellaneous Documents
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-fit flex-none space-y-3">
                      <UploadFileBtn />
                      <CustomButtons btnType="primary" className="w-full">
                        Send Upload Link
                      </CustomButtons>
                    </div>

                    <div className="flex-auto p-2">
                      <p>1. Docname1.pdf</p>
                      <p>2. Docname1.pdf</p>
                      <p>3. </p>
                    </div>
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
