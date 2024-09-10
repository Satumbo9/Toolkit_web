"use client";

import React from "react";
import MerchantMainTabs from "@/components/merchants/MerchantMainTabs";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full px-12 max-sm:w-fit">
      <MerchantMainTabs />
      <div className="mb-0 size-auto rounded-r-lg rounded-bl-lg border p-5 shadow-md">
        {children}
      </div>
      <br />
    </div>
  );
};

export default layout;
