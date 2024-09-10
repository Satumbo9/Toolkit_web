import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

/**
 * This is a custom loading button. It can be use in Forms, and any other places.

 * It will show a loading animation when the button is clicked and the data is being processed.

 * Here's how to use it.

 * Step 1: Declare a pending state with useTransition. For example, const [isPending, startTransition] = useTransition();
 
 * Step 2: Pass the pending state to the LoadingButton component. For example, <LoadingButton loading={isPending} />

 * Step 3: Declare a startTransition in submit function. For example, const onSubmit = (values: z.infer<<typeof something>typeof something>) => {
    startTransition(async () => {
      try{
      await signIn(values);
      } catch(err){
      throw new Error(error); 
      }
    });
  };

  * Done, happy coding!
 * @param loading (required)
 * @returns 
 */
const LoadingButton = ({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      disabled={loading || disabled}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {loading && <Loader2 className="size-5 animate-spin" />}
      {props.children}
    </Button>
  );
};

export default LoadingButton;
