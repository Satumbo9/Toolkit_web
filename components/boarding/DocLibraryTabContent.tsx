"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { documentLibraryTabs } from "@/constants";
import RenderDocLibraryTabComponents from "./DocLibraryTabSubContent";
import { useRouter, useSearchParams } from "next/navigation";

const DocLibraryTabContent = () => {
  const [activeItem, setActiveItem] = useState<string>("blankMpaAndAddendums");
  const search = useSearchParams();
  const result = search.get("tab");
  const router = useRouter();

  const handleClick = (value: string) => {
    setActiveItem(value);
    if (value) {
      router.push(`/boarding/docLibrary?tab=${value}`);
    }
  };

  return (
    <Tabs
      defaultValue={!result ? activeItem : result}
      className="w-full rounded-md p-4 text-center"
    >
      <TabsList className="gap-2">
        {documentLibraryTabs.map((tab) => (
          <TabsTrigger
            onClick={() => handleClick(tab.value)}
            key={tab.id}
            value={tab.value}
            title={tab.title}
            className="gap-2"
          >
            <p className="max-xl:block">{React.createElement(tab.icon)}</p>
            <p className="max-xl:hidden">{tab.title}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {RenderDocLibraryTabComponents(!result ? activeItem : result)}
    </Tabs>
  );
};

export default DocLibraryTabContent;
