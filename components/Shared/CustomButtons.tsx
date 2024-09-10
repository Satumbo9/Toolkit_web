import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends ButtonProps {
  btnType: "destructive" | "default" | "success" | "primary";
}

const CustomButtons = ({
  disabled,
  className,
  title,
  btnType,
  ...props
}: CustomButtonProps) => {
  return (
    <div>
      {btnType === "destructive" && (
        <Button
          disabled={disabled}
          className={cn(
            "flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90",
            className,
          )}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "default" && (
        <Button
          disabled={disabled}
          className={cn(
            "flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90",
            className,
          )}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "success" && (
        <Button
          disabled={disabled}
          className={cn(
            "flex-1 bg-gradient-to-r from-[#79CB6C] to-[#285C20] text-white hover:opacity-90",
            className,
          )}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "primary" && (
        <Button
          disabled={disabled}
          className={cn("w-full hover:opacity-90", className)}
        >
          {title}
          {props.children}
        </Button>
      )}
    </div>
  );
};

export default CustomButtons;
