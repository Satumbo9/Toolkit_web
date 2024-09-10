"use client";

import React from "react";
import AdminMainTabs from "@/components/admin/AdminMainTabs";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full px-12 max-sm:w-fit">
      <AdminMainTabs />
      <div className="mb-0 size-auto rounded-r-lg rounded-bl-lg border p-2 shadow-md">
        {children}
      </div>
      <br />
    </div>
  );
};

export default layout;

