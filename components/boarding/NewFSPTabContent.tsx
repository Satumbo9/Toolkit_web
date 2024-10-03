"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newFspApplicationTabs } from "@/constants";
import RenderNewFspComponents from "./NewFSPTabSubContent";

const NewFSPTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="moToQuestionaire"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList className="gap-1">
        {newFspApplicationTabs.map((tab) => (
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
      {RenderNewFspComponents(activeItem || "moToQuestionaire")}
    </Tabs>
  );
};

export default NewFSPTabContent;
