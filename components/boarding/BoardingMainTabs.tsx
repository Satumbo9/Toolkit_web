import React from "react";
import Link from "next/link";
import { boardingMainTabs as tabs } from "@/constants";
import { usePathname } from "next/navigation";

const BoardingMainTabs = () => {
  const pathname = usePathname();

  return (
    <div className="mb-0 box-content inline-flex items-end gap-2 rounded-t-lg border border-b-0 px-5 max-lg:gap-0">
      {tabs.map((item) => {
        const isActive =
          (pathname?.includes(item.value) && item.title.length > 1) ||
          pathname === item.route;

        return (
          <React.Fragment key={item.value}>
            <div
              className={`${isActive ? "border-b-8 border-sky-500 pb-1 text-sky-500 max-lg:border-b-2" : "text-black dark:text-white"} p-3 text-lg max-lg:p-2`}
            >
              <Link href={item.route}>
                <p className="text-pretty max-xl:text-sm">{item.title}</p>
              </Link>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BoardingMainTabs;
