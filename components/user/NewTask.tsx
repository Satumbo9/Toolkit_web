"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { Button } from "../ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const NewTask = ({
  type,
  isOpen,
  setIsOpen,
}: {
  type: string;
  isOpen?: any;
  setIsOpen?: any;
}) => {
  const NewTaskForm = z.object({
    mid: z.string(),
    legalName: z.string(),
    dba: z.string(),
    taskCetegory: z.string(),
    taskType: z.string(),
    taskStatus: z.string(),
    notes: z.string().optional(),
    dueDate: z.date(),
    reminderDate: z.date(),
    assignedTo: z.string(),
    assignedUser: z.string(),
    userEmail: z.string().email(),
  });

  const form = useForm<z.infer<typeof NewTaskForm>>({
    resolver: zodResolver(NewTaskForm),
    defaultValues: {
      mid: "",
      legalName: "",
      dba: "",
      taskCetegory: "",
      taskType: "",
      taskStatus: "",
      notes: "",
      dueDate: new Date(),
      reminderDate: new Date(),
      assignedTo: "",
      assignedUser: "",
      userEmail: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewTaskForm>) => {
    console.log(values);
  };

  const data = [
    {
      id: 1,
      title: "MID",
      value: "mid",
    },
    {
      id: 2,
      title: "Legal Name",
      value: "legalName",
    },
    {
      id: 3,
      title: "DBA",
      value: "dba",
    },
    {
      id: 4,
      title: "Task Category",
      value: "taskCategory",
      options: [
        {
          id: 1,
          title: "General Notes",
          value: "generalNotes",
        },
      ],
    },
    {
      id: 5,
      title: "Task Type",
      value: "taskType",
      options: [
        {
          id: 1,
          title: "To do",
          value: "todo",
        },
      ],
    },
    {
      id: 6,
      title: "Task Status",
      value: "taskStatus",
      options: [
        {
          id: 1,
          title: "Active",
          value: "active",
        },
      ],
    },
    {
      id: 7,
      title: "Notes",
      value: "notes",
      desc: true,
    },
    {
      id: 8,
      title: "Due Date",
      value: "dueDate",
      isDate: true,
    },
    {
      id: 9,
      title: "Reminder Date",
      value: "reminderDate",
      isDate: true,
    },
    {
      id: 10,
      title: "Assigned To",
      value: "assignedTo",
    },
    {
      id: 11,
      title: "Assigned User",
      value: "assignedUser",
      options: [
        {
          id: 1,
          title: "Tony Stark",
          value: "tonyStark",
        },
      ],
    },
    {
      id: 12,
      title: "User Email",
      value: "userEmail",
    },
  ];
  return (
    <div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5"
        >
          <div>
            {data
              .slice(0, 7)
              .map((item) =>
                item.options ? (
                  <SelectForm
                    key={item.id}
                    control={form.control}
                    content={item.options}
                    valueKey="id"
                    displayKey="title"
                    label=""
                    placeholder={`Select ${item.title}`}
                    formName={item.value}
                  />
                ) : item.desc === true ? (
                  <TextAreaForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : item.isDate ? null : (
                  <InputForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                    type="text"
                  />
                ),
              )}
          </div>
          <div>
            {data
              .slice(7)
              .map((item) =>
                item.options ? (
                  <SelectForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    content={item.options}
                    valueKey="id"
                    displayKey="title"
                    label={item.title}
                  />
                ) : item.isDate ? (
                  <DatePickerForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.value}
                    placeholder={`Select ${item.title}`}
                  />
                ) : (
                  <InputForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.value}
                  />
                ),
              )}

            <div className="flex space-x-5 pt-5">
              <Button
                type="submit"
                onClick={(e: React.MouseEvent) => e.preventDefault()}
                className="w-full"
              >
                Save
              </Button>

              {type === "New" && (
                <DialogPrimitive.Close asChild className="w-full">
                  <Button type="button">Cancel</Button>
                </DialogPrimitive.Close>
              )}

              {type === "Edit" && (
                <Button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full"
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default NewTask;
