import { validateRequest } from "@/auth";
import Header from "@/components/Shared/Profile/Header";
import SideProfileBar from "@/components/Shared/Profile/SideProfileBar";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await validateRequest();

  if (!session.user) {
    return redirect("/sign-in");
  }
  return (
    <div>
      <section className="flex w-full items-center justify-center overflow-hidden p-4">
        <div className="flex max-h-fit w-2/3 space-y-6 rounded-lg border p-10 pb-16 shadow-md md:block">
          <Header />
          <div
            data-orientation="horizontal"
            role="none"
            className="my-6 h-px w-full shrink-0 bg-border"
          />

          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <SideProfileBar />
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default layout;
