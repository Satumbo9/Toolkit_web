"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { profileLinks } from "@/constants";
import ProfileFooter from "./ProfileFooter";
import { signOut } from "@/constants/actions/user.action";
import Image from "next/image";
import ThemeIcon from "@/components/ThemeIcon";

const SideProfileBar = () => {
  const pathname = usePathname();

  return (
    <aside className="mx-4 lg:w-1/5">
      <nav className="flex items-start gap-4 space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
        <Link href="/">
          <Image src={ThemeIcon()} alt="icon" width={250} height={250} />
        </Link>
        {profileLinks.map((item) => {
          const isActive =
            (pathname?.includes(item.url) && item.title.length > 1) ||
            pathname === item.title;
          return (
            <React.Fragment key={item.title}>
              {item.title === "Logout" ? (
                <div
                  key={item.title}
                  className={`${isActive ? "bg-slate-200 dark:bg-zinc-800" : "hover:bg-slate-100 hover:dark:bg-zinc-700"} w-full cursor-pointer rounded-md p-3 font-semibold`}
                  onClick={() => signOut()}
                >
                  {item.title}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`${isActive ? "bg-slate-200 dark:bg-zinc-800" : "hover:bg-slate-100 hover:dark:bg-zinc-700"} w-full rounded-md p-3 font-semibold`}
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      <ProfileFooter />
    </aside>
  );
};

export default SideProfileBar;
