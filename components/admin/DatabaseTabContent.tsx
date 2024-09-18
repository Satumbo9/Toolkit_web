"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adminDatabaseTabs } from "@/constants";
import RenderDatabaseComponents from "./DatabaseTabSubContent";

const DatabaseTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs defaultValue="users" className="w-full rounded-md p-4 text-center">
      <TabsList className="gap-2">
        {adminDatabaseTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            className="gap-2"
          >
            <i className="">{React.createElement(tab.icon)}</i>
            <p className="max-lg:hidden">{tab.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderDatabaseComponents(activeItem || "users")}
    </Tabs>
  );
};

export default DatabaseTabContent;
