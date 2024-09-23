"use client";

import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas";
import { signUp } from "@/constants/actions/user.action";
import LineSeperator from "../../LineSeperator";
import LoadingButton from "../LoadingButton";
import { SelectForm } from "../InstantForm";

const SignUpForm = ({ type }: { type: string }) => {
  // Use the build-in transitioning function from React to prevent the user to submit the form multiple times.
  const [isPending, startPending] = useTransition();

  // For storing the validation of an error and a success messages.
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  // const [selectedGroup, setSelectedGroup] = useState<string>("");
  const SignUpForm = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: "",
      UserName: "",
      departmentId: "1",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    setError("");
    setSuccess("");
    startPending(() => {
      signUp(values).then((data: any) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });

    console.log(values);
  };

  const departmentId = [
    {
      id: "1",
      title: "IT",
    },
    {
      id: "2",
      title: "Support",
    },
    {
      id: "3",
      title: "Sale",
    },
    {
      id: "4",
      title: "Equipment",
    },
    {
      id: "5",
      title: "Finance",
    },
  ];

  return (
    <Form {...SignUpForm}>
      <form
        onSubmit={SignUpForm.handleSubmit(onSubmit)}
        className="w-full space-y-8"
      >
        <div className="flex flex-col gap-5">
          <CustomInput
            key="UserName"
            control={SignUpForm.control}
            name="UserName"
            label="Username"
            nameHolder="example123"
            type="sign-up"
          />
          <CustomInput
            key="email"
            control={SignUpForm.control}
            name="email"
            label="Email"
            nameHolder="example@micamp.com"
            type="sign-up"
          />
          <CustomInput
            key="password"
            control={SignUpForm.control}
            name="password"
            label="Password"
            nameHolder="•••••••••"
            type="sign-up"
          />
          <CustomInput
            key="phone"
            control={SignUpForm.control}
            name="phone"
            label="Phone number"
            nameHolder="480-000-0000"
            type="sign-up"
          />
          <SelectForm
            control={SignUpForm.control}
            formName="departmentId"
            label="Department"
            placeholder="Select a department"
            content={departmentId}
            displayKey="title"
            valueKey="id"
          />
        </div>
        <div className="mt-7 flex flex-col">
          <div
            data-orientation="horizon"
            role="none"
            className="mb-5 w-full border"
          />
          {error && <FormAlert message={error} type="error" />}
          {success && <FormAlert message={success} type="success" />}
          <LoadingButton loading={isPending} type="submit">
            Sign up
          </LoadingButton>
          <LineSeperator text="Or" className="mt-4" />
          <p className="mt-5 text-center">
            {type === "sign-in"
              ? "Do not have an account yet?"
              : "Already have an account?"}
          </p>
          <p className="cursor-pointer text-center text-sky-600">
            {type === "sign-in" ? (
              <Link href="/sign-up">Sign Up</Link>
            ) : (
              <Link href="/sign-in">Sign In</Link>
            )}
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
