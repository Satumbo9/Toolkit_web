"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { leadsTabs } from "@/constants";
import RenderLeadsTabComponents from "./LeadsTabSubContent";
import { useRouter, useSearchParams } from "next/navigation";

const LeadsTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("miCampLeads");
  const search = useSearchParams();
  const result = search.get("tab");
  const router = useRouter();

  const handleClick = (value: string) => {
    setActiveItem(value);
    // We're gonna make the router pushing the new URL params. If the result is not null.
    if(result){
      router.push(`/boarding/leads?tab=${value}`);
    }
  };
  return (
    <Tabs
      defaultValue={!result ? activeItem : result}
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList>
        {leadsTabs.map((tab) => (
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
      {RenderLeadsTabComponents(!result ? activeItem : result)}
    </Tabs>
  );
};

export default LeadsTabContent;
