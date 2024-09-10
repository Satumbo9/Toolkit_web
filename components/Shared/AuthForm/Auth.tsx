"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useTheme } from "next-themes";

const Auth = ({ type }: { type: string }) => {
  const { theme } = useTheme();
  const light = "/icon/LogoWhite.png";
  const dark = "/icon/LogoBlack.webp";

  return (
    <section className="auth-form">
      <div className="flex w-full flex-col items-center gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
          <Image
            src={theme === "dark" ? light : dark}
            alt="logo"
            width={300}
            height={300}
            priority
          />
        </Link>
        <hr className="w-2/3" />
        <div className="flex w-10/12 flex-col gap-1 md:gap-3">
          <h1 className="text-dark_light text-center text-[24px] font-semibold text-gray-900 lg:text-[36px]">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-dark_light pb-5 text-[16px] font-normal text-gray-600">
              {type === "sign-in"
                ? "Sign-in to your account to get started."
                : "Please, enter your details."}
            </p>
          </h1>
          <div className="flex w-full justify-center">
            {type === "sign-in" ? <SignInForm /> : <SignUpForm type={type} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
