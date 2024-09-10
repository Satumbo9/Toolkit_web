"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import Link from "next/link";
import { Button } from "../../ui/button";
import CustomInput from "./CustomInput";
import FormAlert from "./FormAlert";
import LineSeperator from "../../LineSeperator";
import Image from "next/image";
import { signIn } from "@/constants/actions/user.action";
import LoadingButton from "../LoadingButton";

const SignInForm = () => {
  const [isPending, startPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError("");
    setSuccess("");
    startPending(() => {
      signIn(values).then((data: any) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div>
      {/* Slack login */}
      <Link href="/login/slack">
        <Button className="flex w-full items-center gap-5">
          <Image
            src="/icon/slack.svg"
            alt="slack"
            width={30}
            height={30}
            priority
          />
          <span>Continue with Slack</span>
        </Button>
      </Link>

      <div data-orientation="horizon" className="my-5 w-full border" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <CustomInput
            key="email"
            control={form.control}
            name="email"
            label="Email"
            nameHolder="example@micamp.com"
            type="sign-in"
          />
          <CustomInput
            key="password"
            control={form.control}
            name="password"
            label="Password"
            nameHolder="*********"
            type="sign-in"
          />
          <div className="mt-7 flex flex-col">
            {error && <FormAlert message={error} type="error" />}
            {success && <FormAlert message={success} type="success" />}
            <LoadingButton loading={isPending} type="submit">
              Sign in
            </LoadingButton>
            <p className="my-5 cursor-pointer text-center">Forget password</p>
            <LineSeperator text="Or" />
          </div>
        </form>
      </Form>

      <div className="mt-3 flex justify-center">
        <span>Create an account</span>
      </div>
      <p className="mt-1 cursor-pointer text-center">
        <Link href="/sign-up">
          <span className="text-sky-600">Sign-Up</span>
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
