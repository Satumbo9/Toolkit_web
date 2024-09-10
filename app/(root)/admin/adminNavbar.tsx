"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Theme from "@/components/Shared/Home/Theme";

import React, { useState } from "react";
import { profileLinks } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigLeftDash } from "lucide-react";
const nav = [
  {
    title: "Overview",
  },
  {
    title: "Users",
  },
  {
    title: "Products",
  },
  {
    title: "Settings",
  },
];

const AdminNavbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [store, setStore] = useState("Overview");
  const Firstname = "Tony";

  return (
    <nav className="mx-6 flex w-full items-center justify-between space-x-4 lg:space-x-6">
      <div className="w-2/3">
        {nav.map((item) => {
          const isActive =
            (store.includes(item.title) && item.title.length > 1) ||
            store === item.title;
          return (
            <Link
              key={item.title}
              href="/admin"
              className={`${isActive ? "text-black dark:text-white" : "text-slate-400 transition-colors hover:text-black dark:text-gray-500 dark:hover:text-white"} mr-7 cursor-pointer text-sm font-medium hover:text-primary`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="ml-auto flex w-2/5 items-center justify-end space-x-4">
        <Link href="/">
          <Button>
            <ArrowBigLeftDash />
            Home
          </Button>
        </Link>

        <Input placeholder="Search..." />

        <div className="pl-5">
          <Theme />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex px-5 outline-none">
            <Avatar>
              <AvatarFallback>{Firstname[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {profileLinks.map((item) => (
              <DropdownMenuItem key={item.title}>
                <Link href={item.url} className="w-full">
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AdminNavbar;
