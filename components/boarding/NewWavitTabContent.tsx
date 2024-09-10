"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newWavitApplicationTabs } from "@/constants";
import RenderNewWavitComponents from "./NewWaivitTabSubContent";


const NewWavitTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="merchantDetail"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList className="">
        {newWavitApplicationTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            title={tab.title}
          >
            <p className="hidden max-xl:block">{React.createElement(tab.icon)}</p>
            <p className="max-xl:hidden">{tab.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderNewWavitComponents(activeItem || "merchantDetail")}
    </Tabs>
  );
};

export default NewWavitTabContent;
