import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { Save } from "lucide-react";

interface CustomButtonProps extends ButtonProps {
  btnType: "destructive" | "default" | "success" | "primary" | "save";
}

const CustomButtons = ({
  disabled,
  type,
  className,
  title,
  btnType,
  onClick,
  ...props
}: CustomButtonProps) => {
  return (
    <div>
      {btnType === "destructive" && (
        <Button
          disabled={disabled}
          type={type}
          className={cn(
            "flex-1 bg-gradient-to-r from-[#FF3333] to-[#8F0000] text-white hover:opacity-90",
            className,
          )}
          onClick={onClick}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "default" && (
        <Button
          disabled={disabled}
          type={type}
          className={cn(
            "flex-1  bg-sky-500 text-white hover:opacity-90",
            className,
          )}
          onClick={onClick}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "success" && (
        <Button
          disabled={disabled}
          type={type}
          className={cn(
            "flex-1 bg-gradient-to-r from-[#79CB6C] to-[#285C20] text-white hover:opacity-90",
            className,
          )}
          onClick={onClick}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "primary" && (
        <Button
          disabled={disabled}
          type={type}
          className={cn("w-full hover:opacity-90", className)}
          onClick={onClick}
        >
          {title}
          {props.children}
        </Button>
      )}

      {btnType === "save" && (
        <Button
          disabled={disabled}
          type={type}
          className={cn(
            "flex-1 gap-2 bg-sky-500 text-white hover:opacity-90 dark:hover:text-black",
            className,
          )}
          onClick={onClick}
        >
          <Save className="size-5" />
          {title}
          {props.children}
        </Button>
      )}
    </div>
  );
};

export default CustomButtons;
