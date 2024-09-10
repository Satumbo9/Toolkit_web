"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem } from "../../ui/form";

export const datePicker = z.object({
  reportDate: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .optional(),
});

export function DatePickerWithRange({
  className,
  showDownload = false,
}: {
  className?: React.HTMLAttributes<HTMLDivElement>;
  showDownload?: boolean;
}) {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const { toast } = useToast();

  console.log(date);

  // form for datePicker
  const form = useForm<z.infer<typeof datePicker>>({
    resolver: zodResolver(datePicker),
  });

  //   handle submit
  const onSubmit = (data: z.infer<typeof datePicker>) => {
    console.log(data);
    toast({
      title: `You have downloaded reports from ${data.reportDate?.from} to ${data.reportDate?.to}`,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(date, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-3">
        <FormField
          control={form.control}
          name="reportDate"
          render={({ field }) => (
            <FormItem className="flex">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <div className={cn("grid gap-2", className)}>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-[300px] justify-start text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 size-4" />
                            {date?.from ? (
                              date?.to ? (
                                <>
                                  {format(date.from, "LLL dd, y")} -{" "}
                                  {format(date.to, "LLL dd, y")}
                                </>
                              ) : (
                                format(date.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={(newDate) => {
                              setDate(newDate);
                            }}
                            numberOfMonths={2}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </FormControl>
                </PopoverTrigger>
              </Popover>
            </FormItem>
          )}
        />
        {showDownload && (
          <div>
            <Button type="submit">Download</Button>
          </div>
        )}
      </form>
    </Form>
  );
}
