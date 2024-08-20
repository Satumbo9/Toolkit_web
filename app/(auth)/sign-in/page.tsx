import Auth from "@/components/Shared/AuthForm/Auth";
import Theme from "@/components/Shared/Home/Theme";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex h-screen w-full items-center justify-around max-sm:px-6">
      <div className="absolute right-[28rem] top-20 max-lg:right-28 max-sm:right-16 max-sm:top-10">
        <Theme />
      </div>
      <div>
        <Auth type="sign-in" />
      </div>
    </section>
  );
};

export default SignIn;
