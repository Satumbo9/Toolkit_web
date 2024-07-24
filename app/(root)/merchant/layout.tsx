"use client";

import React from "react";
import MerchantMainTabs from "@/components/merchants/MerchantMainTabs";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
        <div className="px-12 w-full max-sm:w-fit">
            <MerchantMainTabs/>
            <div className="h-auto p-5 mb-0 border border-solid border-gray-600 rounded-tr-lg rounded-br-lg rounded-bl-lg">
              {children}
            </div>
            <br/>
        </div>
    </>
  );
};

export default layout;
