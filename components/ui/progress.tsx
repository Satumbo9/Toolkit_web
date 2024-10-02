"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <>
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-full bg-secondary",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          value === 100 ? "bg-green-600 text-white" : "bg-sky-500",
          "absolute size-full flex-1 transition-all",
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      <div
        className={cn(
          (value! && value >= 60 ? "text-white" : " "),
          "relative z-10 text-center",
        )}
      >
        {props.children}
      </div>
    </ProgressPrimitive.Root>
  </>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
