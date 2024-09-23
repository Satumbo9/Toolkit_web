import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({
  OnlyOutstandingText,
  className,
  children,
}: {
  OnlyOutstandingText?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      // eslint-disable-next-line tailwindcss/classnames-order
      className={`relative flex min-h-[50rem] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2] ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${OnlyOutstandingText && "flex items-center justify-center"} bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black`}
      />
      {!OnlyOutstandingText ? (
        <section>{children}</section>
      ) : (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          {children}
        </p>
      )}
    </div>
  );
}

export function DotBackground({
  OnlyOutstandingText,
  className,
  children,
}: {
  OnlyOutstandingText?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      // eslint-disable-next-line tailwindcss/classnames-order
      className={`flex max-h-[50rem] min-h-[50rem] max-w-full items-center justify-center overflow-y-auto rounded-md bg-background bg-dot-black/[0.2] dark:bg-dot-white/[0.2] ${className}`}
    >
      <div
        className={cn(
          `pointer-events-none absolute inset-0 rounded-md ${OnlyOutstandingText && "flex items-center justify-center"} bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black`,
        )}
      />
      {!OnlyOutstandingText ? (
        <section className="size-full">{children}</section>
      ) : (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          {children}
        </p>
      )}
    </div>
  );
}

export function GridSmallBackground({
  OnlyOutstandingText,
  className,
  children,
}: {
  OnlyOutstandingText?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      // eslint-disable-next-line tailwindcss/classnames-order
      className={`relative flex min-h-[50rem] w-full items-center justify-center rounded-md bg-white bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2] ${className}`}
    >
      <div
        className={cn(
          `pointer-events-none absolute inset-0 rounded-md ${OnlyOutstandingText && "flex items-center justify-center"} bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black`,
        )}
      />
      {!OnlyOutstandingText ? (
        <section>{children}</section>
      ) : (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          {children}
        </p>
      )}
    </div>
  );
}
