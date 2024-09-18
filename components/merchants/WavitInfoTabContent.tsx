"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { wavitInfoTabs } from "@/constants";
import RenderWavitInfoTabComponents from "./WavitInfoSubContent";

const WavitInfoTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="transactions"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList>
        {wavitInfoTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            className="gap-2"
          >
            {React.createElement(tab.icon)}
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderWavitInfoTabComponents(activeItem || "transactions")}
    </Tabs>
  );
};

export default WavitInfoTabContent;
