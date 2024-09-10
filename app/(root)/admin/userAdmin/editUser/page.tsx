/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { agentEmailList } from "@/constants";
import React from "react";
import { newEditUserSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  InputForm,
  SelectForm,
} from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";

const page = () => {
  const form = useForm<z.infer<typeof newEditUserSchema>>({
    resolver: zodResolver(newEditUserSchema),
    defaultValues: {
      UserId: "",
      Username: "",
      Email: "",
      Extension: "",
      UserStatus: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newEditUserSchema>) => {
    console.log(value);
  };

  return (
    <section className="p-2">
      <div className="flex justify-between">
        <h1 className="text-2xl text-sky-500">Edit User</h1>
        <Link href={"/admin/userAdmin"}>
          <Button className="mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
            <p className="text-pretty">{"<<"} Return</p>
          </Button>
        </Link>
      </div>
      <div className="m-auto w-2/4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* SEARCH CRITERIA CARD */}
            <h2 className="my-5 text-center text-xl font-medium">User Info</h2>

            {/* USER ID */}
            <div className="m-auto flex w-full content-center gap-4">
              <p className="w-1/3 content-center text-end">User ID</p>
              <div className="w-2/3">
                <InputForm
                  control={form.control}
                  formName={"UserId"}
                  label=""
                  placeholder="ID"
                />
              </div>
            </div>
            {/* USER NAME */}
            <div className="m-auto flex w-full content-center gap-4">
              <p className="w-1/3 content-center text-end">User Name</p>
              <div className="w-2/3">
                <InputForm
                  control={form.control}
                  formName={"Username"}
                  label=""
                  placeholder="Enter user name"
                />
              </div>
            </div>
            {/* EMAIL */}
            <div className="m-auto flex w-full content-center gap-4">
              <p className="w-1/3 content-center text-end">Email</p>
              <div className="w-2/3">
                <InputForm
                  control={form.control}
                  formName={"Email"}
                  label=""
                  placeholder="micamp@example.com"
                />
              </div>
            </div>
            {/* EXTENSION */}
            <div className="m-auto flex w-full content-center gap-4">
              <p className="w-1/3 content-center text-end">Extension</p>
              <div className="w-2/3">
                <InputForm
                  control={form.control}
                  formName={"Extension"}
                  label=""
                  placeholder="Enter Extension"
                />
              </div>
            </div>
            {/* USER STATUS */}
            <div className="m-auto flex w-full gap-4">
              <div className="mt-2 w-1/3 content-center text-end">
                <p className="">User Status</p>
              </div>
              <div className="w-2/3">
                <SelectForm
                  control={form.control}
                  formName={"UserStatus"}
                  label=""
                  placeholder={"Select User Status"}
                  content={agentEmailList}
                  valueKey="Email"
                  displayKey="Name"
                  disabled={false}
                  className=""
                />
              </div>
            </div>

            <h2 className="my-5 text-center text-xl font-medium">Settings</h2>

            <div className="m-auto w-2/4 text-start">
              <CheckboxForm
                control={form.control}
                formName="ShowRingCentral"
                label=""
                placeholder="Show Ring Central Interface"
                className="mt-3 content-center items-center align-middle"
              />
              <CheckboxForm
                control={form.control}
                formName="EnableDarkMode"
                label=""
                placeholder="Enable Dark Mode"
                className="mt-3 content-center items-center align-middle"
              />
            </div>
            <div className="m-auto my-3 w-full text-end">
              <Button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] px-8 text-white hover:opacity-90">
                Save New User
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default page;
