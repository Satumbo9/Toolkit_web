"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { merchResidualsTabs } from "@/constants";
import RenderMerchResidualsComponents from "./MerchResidualsTabSubContent";

const MerchResidualsTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="rawData"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList>
        {merchResidualsTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            className="gap-2"
          >
            <i className="">{React.createElement(tab.icon)}</i>
           <p className="">{tab.title}</p> 
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderMerchResidualsComponents(activeItem || "rawData")}
    </Tabs>
  );
};

export default MerchResidualsTabContent;
