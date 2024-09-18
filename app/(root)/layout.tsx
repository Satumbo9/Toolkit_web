import React from "react";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import WelcomeBar from "@/components/Shared/Home/WelcomeBar";
import Footer from "@/components/Shared/Footer/Footer";
import { getUser } from "@/constants/actions/user.action";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const result = await getUser();

  const session = await validateRequest();
  if (!session.user) {
    return redirect("/sign-in");
  }
  return (
    <div className="flex">
      <Sidebar props={result} />
      <div className="relative flex-1">
        <WelcomeBar user={result?.username} />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
