"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supportTicketsTabs } from "@/constants";
import RenderSupportTabComponents from "./SupportTabSubContent";

const SupportTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <Tabs
      defaultValue="myTickets"
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList className="gap-2">
        {supportTicketsTabs.map((tab) => (
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
      {RenderSupportTabComponents(activeItem || "myTickets")}
    </Tabs>
  );
};

export default SupportTabContent;
