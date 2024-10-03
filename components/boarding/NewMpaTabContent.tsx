"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newMpaApplicationTabs } from "@/constants";
import RenderNewMpaComponents from "./NewMpaTabSubContent";

const NewMpaTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="merchantDetail"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList className="gap-1">
        {newMpaApplicationTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            title={tab.title}
            className="gap-2"
          >
            <p className="">{React.createElement(tab.icon)}</p>
            <p className="max-xl:hidden">{tab.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderNewMpaComponents(activeItem || "merchantDetail")}
    </Tabs>
  );
};

export default NewMpaTabContent;
