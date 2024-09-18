"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { boardingAgentsTabs } from "@/constants";
import RenderAgentsTabComponents from "./AgentsTabSubContent";

const BoardingAgentTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="agentDetails"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList className="gap-2">
        {boardingAgentsTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            title={tab.title}
            className="gap-2"
          >
            <i className="size-fit">{React.createElement(tab.icon)}</i>
            <p className="max-lg:hidden">{tab.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderAgentsTabComponents(activeItem || "agentDetails")}
    </Tabs>
  );
};

export default BoardingAgentTabContent;
