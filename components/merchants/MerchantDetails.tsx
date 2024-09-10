"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency, formatDate, formatRelativeDate } from "@/lib/utils";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

export default function MerchantDetails() {
  const currentDate = formatDate(new Date());
  const detailsList = [
    {
      id: 1,
      value: "example",
      label: "MID",
      placeholder: "12398324",
    },
    {
      id: 2,
      value: "example",
      label: "Name",
      placeholder: "MiCamp Solutions",
    },
    {
      id: 3,
      value: "example",
      label: "DBA",
      placeholder: "DBA of merchant",
    },
    {
      id: 4,
      value: "example",
      label: "Phone Number",
      placeholder: "+1 (___) ___-_____",
    },
    {
      id: 5,
      value: "badge",
      label: "Status",
      placeholder: "Denied",
    },
    {
      id: 6,
      value: "example",
      label: "Approval Date",
      placeholder:
        formatDate(new Date()) + ` (${formatRelativeDate(new Date())})`,
    },
    {
      id: 7,
      value: "example",
      label: "Processor",
      placeholder: "Intel i3 12400K",
    },
    {
      id: 8,
      value: "example",
      label: "Sales Rep",
      placeholder: "MiCamp Solutions LLC",
    },
  ];
  return (
    <>
      <Card className="w-full overflow-hidden border shadow-md max-sm:hidden sm:hidden 2xl:block">
        <CardHeader className="flex flex-row items-start border-b bg-gray-100 p-2 px-5 dark:bg-black">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Merchant Details
            </CardTitle>
            <CardDescription>Date: {currentDate}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="bg-transparent p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Merchant Details</div>

            {detailsList.map((item) => {
              if (item.value === "badge") {
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="w-1/4 text-end text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="w-3/4 text-end">
                      <Badge variant="destructive" className="text-start">
                        Denied
                      </Badge>
                    </span>
                  </li>
                );
              } else {
                return (
                  <li key={item.id} className="flex items-center justify-between gap-3">
                    <span className="w-1/4 text-end text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="w-3/4">
                      <Input placeholder={item.placeholder} disabled />
                    </span>
                  </li>
                );
              }
            })}

            <Separator className="my-2 border" />

            <div className="w-full">
              <ul className="grid grid-cols-3 gap-3">
                <li className="items-center justify-between gap-3 text-center">
                  <span className="mb-2 text-muted-foreground">
                    Est Annual Volumn
                  </span>
                  <span className="w-full">
                    <Input
                      className="text-center"
                      placeholder={formatCurrency(25000)}
                      disabled
                    />
                  </span>
                </li>
                <li className="items-center justify-between gap-3 text-center">
                  <span className="text-muted-foreground">Transactions</span>
                  <span className="w-full">
                    <Input placeholder="10000" disabled />
                  </span>
                </li>
                <li className="items-center justify-between gap-3 text-center">
                  <span className="text-muted-foreground">Type</span>
                  <span className="w-full">
                    <Input placeholder="Restaurant" disabled />
                  </span>
                </li>
                <li></li>
                <li className="items-center justify-between gap-3 text-center">
                  <span className="text-muted-foreground">Deployed</span>
                  <span className="w-full">
                    <Input placeholder="Micamp Solutions" disabled />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center justify-between border-t bg-gray-100 px-6 py-3 dark:bg-black">
          <div className="text-xs text-muted-foreground">
            Updated {formatRelativeDate(new Date())}
          </div>

          <Button type="button" onClick={() => {}}>
            Edit
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
