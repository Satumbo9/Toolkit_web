import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainTabs = (tabs: string | number | any) => {
  const pathname = usePathname();

  return (
    <div className="mb-0 box-content inline-flex gap-2 rounded-t-lg border border-b-0 border-gray-300 px-5">
      {tabs.map((item: any) => {
        const isActive =
          (pathname?.includes(item.value) && item.title.length > 1) ||
          pathname === item.title;

        return (
          <>
            <div
              className={`${isActive ? "border-b-8 border-sky-500 pb-1 text-sky-500" : "text-black dark:text-white"} p-3 text-lg`}
            >
              <Link href={item.route}>
                <p className="text-pretty">{item.title}</p>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MainTabs;
