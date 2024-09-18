"use client";

import React from "react";
import Link from "next/link";
import { financialMainTabs as tabs } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const FinancialMainTabs = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        pathname === "/financial"
          ? "mb-0 box-content inline-flex gap-2 rounded-lg border px-5"
          : "mb-0 box-content inline-flex gap-2 rounded-t-lg border border-b-0 px-5",
      )}
    >
      {tabs.map((item: any) => {
        const isActive =
          (pathname?.includes(item.value) && item.value.length > 1) ||
          pathname === item.path;

        return (
          <div
            key={item.id}
            className={`${isActive ? "border-b-8 border-sky-500 pb-1 text-sky-500" : "text-black dark:text-white"} p-3 text-lg`}
          >
            <Link href={item.path}>
              <p className="text-pretty">{item.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FinancialMainTabs;
