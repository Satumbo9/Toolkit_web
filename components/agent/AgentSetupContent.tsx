"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AgentSetupTabs } from "@/constants";
import RenderSetupComponents from "./SetupContent";

const AgentSetupContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      <div className="h-screen w-auto">
        <Tabs
          defaultValue="residuals"
          className="flex-auto rounded-md border border-solid border-gray-400 p-4 shadow-md"
        >
          <TabsList className="">
            {AgentSetupTabs.map((tab) => (
              <TabsTrigger
                onClick={() => handleClick(tab.value)}
                key={tab.id}
                value={tab.value}
              >
                <p className="text-sm">{tab.title}</p>
              </TabsTrigger>
            ))}
          </TabsList>
          {RenderSetupComponents(activeItem || "residuals")}
        </Tabs>
      </div>
    </>
  );
};

export default AgentSetupContent;
