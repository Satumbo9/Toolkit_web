"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import RenderComponents from "./fdOmaha";

const AgentResidualsContent = () => {
  const [activeItem, setActiveItem] = useState<string>("fd-omaha");
  const navItems = [
    { id: "1", title: "FD Omaha", value: "fd-omaha" },
    { id: "2", title: "FD North", value: "fd-north" },
    { id: "3", title: "Splits", value: "splits" },
    {
      id: "4",
      title: "Calculations",
      value: "calculations",
    },
  ];

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <div className="flex w-full gap-5">
      <div className="mt-5 flex flex-col">
        {navItems.map((item) => {
          const isActive = activeItem === item.value;
          return (
            <div key={item.value}>
              <Button
                className={`${isActive ? "bg-slate-300 text-sky-500 shadow-md dark:bg-zinc-800 dark:text-white" : "text-black dark:text-white"} flex w-full items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
                onClick={() => handleClick(item.value)}
                variant="ghost"
              >
                {item.title}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 overflow-auto">
        {RenderComponents(activeItem || "fd-omaha")}
      </div>
    </div>
  );
};

export default AgentResidualsContent;
