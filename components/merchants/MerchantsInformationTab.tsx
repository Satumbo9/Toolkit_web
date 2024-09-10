"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabItems } from "@/constants";
import Image from "next/image";

const MerchantsInformationTab = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-min flex-none grow-0 justify-items-center text-nowrap rounded bg-gray-100 p-1.5 dark:bg-zinc-800">
        {tabItems.map((item) => {
          const isActive =
            (pathname?.includes(item.route) && item.title.length > 1) ||
            pathname === item.title;

          return (
            <Link
              href={item.route}
              title={item.title}
              className={`${isActive ? " " : ""}`}
              key={item.title}
            >
              <div
                className={`${
                  isActive
                    ? "bg-white dark:bg-zinc-950"
                    : "text-gray-500 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-zinc-800"
                } mb-1 flex-none rounded p-2 text-center font-semibold`}
              >
                <p className="max-xl:hidden">{item.title}</p>
                {/* <p className='hidden max-xl:block '>{item.title.charAt(0)}</p> */}
                <Image
                  className="hidden max-xl:block"
                  src={item.icon}
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MerchantsInformationTab;
