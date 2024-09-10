"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  boardingAgentsTabs } from "@/constants";
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
      <TabsList>
        {boardingAgentsTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderAgentsTabComponents(activeItem || "agentDetails")}
    </Tabs>
  );
};

export default BoardingAgentTabContent;
