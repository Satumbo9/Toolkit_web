import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import Theme from "../Home/Theme";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import ProfileLogo from "../Profile/ProfileLogo";

const MobileSideNav = ({ props }: any) => {
  const pathname = usePathname();
  const light = "/icon/LogoWhite.png";
  const dark = "/icon/LogoBlack.webp";
  const { theme, systemTheme } = useTheme();

  // Set the theme for system, dark, and light
  // eslint-disable-next-line no-unused-vars
  const [resolvedTheme, setResolvedTheme] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme, systemTheme]);

  const imgSrc =
    theme === "system"
      ? systemTheme === "dark"
        ? light
        : dark
      : theme === "light"
        ? dark
        : light;

  return (
    <div className="absolute right-8 top-5 z-10 sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="flex flex-col justify-center">
                <SheetClose asChild>
                  <Link href="/">
                    <Image
                      src={imgSrc}
                      alt="logo"
                      width={250}
                      height={250}
                      priority
                    />
                  </Link>
                </SheetClose>
                <Theme />
                <div data-orientation="horizon" className="mt-6 border" />
              </div>
            </SheetTitle>
            <SheetDescription className="flex grow flex-col justify-between">
              <div className="grow overflow-y-auto">
                {sidebarLinks.map((item) => {
                  const isActive =
                    (pathname?.includes(item.route) && item.label.length > 1) ||
                    pathname === item.label;
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        className={`${isActive ? "text-dark300_light900 border bg-stone-300 dark:bg-zinc-800" : ""} flex items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
                        href={item.route}
                      >
                        {React.createElement(item.icon)}
                        <p className={`${isActive ? "font-semibold" : ""}`}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              <div className="mt-auto">
                <ProfileLogo Firstname="Tony" Lastname="Stark" />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideNav;
