"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ReportPages from "@/components/services/reports/ReportPages";

const components: { type: string; title: string; description: string }[] = [
  {
    type: "emailReport",
    title: "Daily Split Report",
    description:
      "Daily Split Report provides a comprehensive overview of daily financial transactions, including income, expenses, and the resulting profit or loss. It's a valuable tool for tracking your business's financial health on a daily basis.",
  },
  {
    type: "emailReport",
    title: "Weekly Remittances Reports",
    description:
      "Weekly Remittances Reports summarize all incoming and outgoing payments made during a specific week. This report is essential for monitoring cash flow, identifying trends in payments, and ensuring accurate financial record-keeping.",
  },
  {
    type: "emailReport",
    title: "Daily Master Report",
    description:
      "Daily Master Report consolidates key financial data from various sources, providing a holistic view of a business's daily performance. It typically includes sales figures, expenses, cash flow, and other relevant metrics for comprehensive analysis.",
  },
  {
    type: "controlReport",
    title: "Balance Summary (Test for Negative Balances)",
    description:
      "Balance Summary (Test for Negative Balances) is a financial report that checks for and highlights any negative balances in accounts or financial categories. This report helps identify potential overdrafts or accounting errors, ensuring accurate financial records.",
  },
  {
    type: "controlReport",
    title: "Balance Summary (By Funder / Reporter)",
    description:
      "Balance Summary (By Funder / Reporter) provides a detailed breakdown of balances for each funder or reporter, offering a clear view of financial obligations and receivables. It helps track individual performance and ensures transparency in financial reporting.",
  },
];

export default function NavigationMenuDemo() {
  const [activeTitle, setActiveTitle] = useState<string | null>(
    "Daily Split Report",
  );

  const handleClick = (title: string) => {
    setActiveTitle((prevTitle) => (prevTitle === title ? null : title));
  };

  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="px-4 py-10">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Email Reports</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[400px] cursor-pointer gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {components.map((item) => (
                    <React.Fragment key={item.title}>
                      {item.type === "emailReport" && (
                        <ListItem
                          title={item.title}
                          onClick={() => handleClick(item.title)}
                        >
                          {item.description}
                        </ListItem>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Control Reports</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[400px] cursor-pointer gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {components.map((item) => (
                    <React.Fragment key={item.title}>
                      {item.type === "controlReport" && (
                        <ListItem
                          title={item.title}
                          onClick={() => handleClick(item.title)}
                        >
                          {item.description}
                        </ListItem>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="py-5 text-3xl text-sky-500">
          <h1>{activeTitle}</h1>
        </div>

        {activeTitle && <ReportPages title={activeTitle} />}

        {!activeTitle && (
          <div className="flex flex-col items-center justify-center">
            <span className="text-9xl">🤷</span>
            <p className="mt-5 text-center text-2xl">
              <span className="text-4xl font-semibold text-blue-500">
                Oops!
              </span>{" "}
              <br />
              There is nothing to show here. <br /> Please, select something to
              work on.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
