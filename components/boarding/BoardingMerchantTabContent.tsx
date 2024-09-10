"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { boardingMerchantTabs } from "@/constants";
import RenderBoardingMerchantTabComponents from "./BoardingMerchantTabSubContent";

const BoardingMerchantTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      {/* OLD TAB TRIGGER */}
      <Tabs
        defaultValue="merchantInformation"
        className="w-full rounded-md p-4 text-center"
      >
        <TabsList>
          {boardingMerchantTabs.map((tab) => (
            <TabsTrigger
              onClick={() => handleClick(tab.value)}
              key={tab.id}
              value={tab.value}
              title={tab.title}
            >
              <p className="hidden max-xl:block">
                {React.createElement(tab.icon)}
              </p>
              <p className="max-xl:hidden">{tab.title}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {RenderBoardingMerchantTabComponents(
          activeItem || "merchantInformation",
        )}
      </Tabs>
    </>
  );
};

export default BoardingMerchantTabContent;
