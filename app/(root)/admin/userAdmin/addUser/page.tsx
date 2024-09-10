"use client";
import Link from "next/link";
import { addNewUserForm, addNewUserPasswordForm } from "@/constants";
import React, { useState } from "react";
import { newAddNewUserSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  SwitchForm,
} from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import CustomButtons from "@/components/Shared/CustomButtons";

const Page = () => {
  const form = useForm<z.infer<typeof newAddNewUserSchema>>({
    resolver: zodResolver(newAddNewUserSchema),
    defaultValues: {
      UserId: "",
      Username: "",
      Email: "",
      CellPhone: 0,
      Extension: "",
      Agent: "",
      Password: "",
      ConfirmPassword: "",
      UserStatus: "",
      InProduction: "",
      Role: "",
      Department: "",
      Manager: false,
      Lock: "",
      PermissionCreate: false,
      PermissionEdit: false,
      PermissionDelete: false,
      PermissionSave: false,
      PermissionResiduals: false,
      Boarding: false,
      Toolkit: false,
    },
  });

  const onSubmit = (value: z.infer<typeof newAddNewUserSchema>) => {

    console.log(value);
  };

  const [show, setShow] = useState(false);
  const handleUserType = () => {
    !show ? setShow(true) : setShow(false);

    const test = form.getValues("Boarding");

    if (test === false) {
      form.setValue("Manager", false);
    }
  };

  return (
    <section className="p-2">
      <div className="mt-3 flex items-center justify-center">
        <h1 className="text-2xl text-sky-500">Add New User</h1>
        <Link href={"/admin/userAdmin"} className="absolute left-20">
          <CustomButtons btnType="default">{"<<"} Return</CustomButtons>
        </Link>
      </div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex w-full gap-2">
              <div className="flex-auto p-2">
                {/* SEARCH CRITERIA CARD */}
                <h2 className="mb-3 mt-5 text-center text-xl font-medium">
                  User Info
                </h2>
                <FormGeneration
                  formControl={form.control}
                  formFields={addNewUserForm}
                  gridCols={"2"}
                />
                <h2 className="mb-3 mt-5 text-center text-xl font-medium">
                  Password Setup
                </h2>
                <FormGeneration
                  formControl={form.control}
                  formFields={addNewUserPasswordForm}
                  gridCols={"2"}
                />
              </div>
              <div className="flex-auto p-2">
                <h2 className="my-5 text-center text-xl font-medium">
                  General Settings
                </h2>
                <div className="my-2 rounded-md border p-4">
                  <h2 className="text-center text-xl font-medium">User Type</h2>

                  <div className="grid grid-cols-3 gap-2">
                    <CheckboxForm
                      control={form.control}
                      formName="Toolkit"
                      label=""
                      placeholder="Toolkit"
                    />
                    <CheckboxForm
                      control={form.control}
                      formName="Boarding"
                      label=""
                      placeholder="Boarding"
                      onClick={handleUserType}
                    />
                  </div>
                  {show && (
                    <div>
                      <p className="my-2">If Boarding:</p>
                      <SwitchForm
                        control={form.control}
                        formName="Manager"
                        label="Make Manager"
                        className=""
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* BUTTON SAVE CHANGES */}
            <div className="m-auto my-3 w-full text-center">
              <CustomButtons btnType="default" type="submit">Save New User</CustomButtons>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Page;
