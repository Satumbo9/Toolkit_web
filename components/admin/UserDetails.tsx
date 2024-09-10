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
import { formatDate, formatRelativeDate } from "@/lib/utils";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function UserDetails() {
  const currentDate = formatDate(new Date());
  const detailsList = [
    {
      id: 1,
      value: "example",
      label: "User ID",
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
      label: "Email",
      placeholder: "micamp@example.com",
    },
    {
      id: 4,
      value: "example",
      label: "Extension",
      placeholder: "Extension",
    },
    {
      id: 5,
      value: "example",
      label: "Status",
      placeholder: "Account Created",
    },
  ];
  return (
    <>
      <Card className="w-full overflow-hidden shadow-md 2xl:block">
        <CardHeader className="flex flex-row items-start border-b bg-[#d9d9d9]/50 p-2 px-5 dark:bg-[#000000]">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              User Details
            </CardTitle>
            <CardDescription>Date: {currentDate}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <h2 className="text-2xl text-sky-500">User Information</h2>

            {detailsList.map((item) => {
              if (item.value === "badge") {
                return (
                    <li key={item.id} className="flex items-center justify-between gap-3">
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
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center justify-between border-t bg-[#d9d9d9] px-6 py-3 dark:bg-[#000000]">
          <div className="text-xs text-muted-foreground">
            Updated {formatRelativeDate(new Date())}
          </div>

          <Link href={"/admin/userAdmin/editUser"}>
            <Button type="button" onClick={() => {}}>
              Edit User
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
