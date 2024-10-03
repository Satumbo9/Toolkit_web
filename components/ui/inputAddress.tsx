import * as React from "react";

import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputMap = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex gap-0">
        <div className="mb-2 flex-none content-center rounded-l-md border bg-zinc-200 px-2 py-1 dark:bg-zinc-800">
          <MapPin className="size-5" />
        </div>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full flex-1 rounded-r-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
InputMap.displayName = "Input";

export { InputMap };
