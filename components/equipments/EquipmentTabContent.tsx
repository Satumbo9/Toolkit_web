"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EquipmentTabs } from "@/constants";
import RenderEquipmentComponents from "./EquipmentTabSubContent";

const EquipmentTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      <Tabs defaultValue="lookup" className="w-full rounded-md p-4 text-center">
        <TabsList className="">
          {EquipmentTabs.map((tab) => (
            <TabsTrigger
              onClick={() => handleClick(tab.value)}
              key={tab.id}
              value={tab.value}
              className="gap-3"
             
            >
              {React.createElement(tab.icon)}
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {RenderEquipmentComponents(activeItem || "lookup")}
      </Tabs>
    </>
  );
};

export default EquipmentTabContent;
