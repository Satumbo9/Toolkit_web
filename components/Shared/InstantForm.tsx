/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { ContentItem } from "@/types/index";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "../ui/switch";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export const InputForm = <
  T extends z.ZodType<any, any>,
  S extends string | number = string | number,
>({
  control,
  formName,
  label,
  placeholder,
  type,
  className,
  state,
  setState,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  state?: S;
  setState?: React.Dispatch<React.SetStateAction<S>>;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={state !== undefined ? state : field.value || ""}
              onChange={(e) => {
                const value =
                  type === "number"
                    ? (Number(e.target.value) as S)
                    : (e.target.value as S);
                field.onChange(e);
                if (setState) {
                  setState(value);
                }
              }}
              type={type}
              className={className}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const SelectForm = <
  T extends z.ZodType<any, any>,
  ItemTypes extends ContentItem,
>({
  control,
  formName,
  label,
  content,
  placeholder,
  valueKey,
  displayKey,
  disabled,
  onChange,
  className,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  content: ItemTypes[];
  placeholder?: string;
  disabled?: any;
  valueKey: keyof ItemTypes;
  displayKey: keyof ItemTypes;
  onChange?: (value: any) => void;
  className?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                if (onChange) {
                  onChange(value);
                }
              }}
              value={field.value}
              disabled={disabled}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent onChange={field.onChange} className={className}>
                {content.map((item) => (
                  <SelectItem
                    key={String(item[valueKey])}
                    value={String(item[valueKey])}
                    className="cursor-pointer"
                  >
                    {item[displayKey]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const TextAreaForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="resize-none"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const CheckboxForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
  className,
  onClick,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className={className}>
              <Checkbox
                checked={field.value ?? false}
                onCheckedChange={field.onChange}
                onClick={onClick}
                {...field}
              />
              <span className="ml-3">{placeholder}</span>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const DatePickerForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
}) => {
  const [date, setDate] = useState<Date>();
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", {
                    "text-muted-foreground": !date,
                  })}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {date ? format(date, "PPP") : <span>{placeholder}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    field.onChange(selectedDate);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const SwitchForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  className,
  id,
  isActive,
  onToggle,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  className?: string;
  id?: string | number;
  isActive?: boolean;
  onToggle?: (id: string | number) => void;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => {
        return (
          <FormItem>
            <div className={cn("flex h-full space-x-5", className)}>
              <FormControl>
                <Switch
                  checked={!isActive ? field.value : isActive}
                  onChange={(e) => {
                    e.stopPropagation();
                  }}
                  onCheckedChange={field.onChange}
                  onClick={() => {
                    if (id) {
                      if (id !== undefined && onToggle) {
                        onToggle(id);
                      }
                    }
                  }}
                />
              </FormControl>
              <span>{label}</span>
            </div>
          </FormItem>
        );
      }}
    />
  );
};

export const RadioForm = <
  T extends z.ZodType<any, any>,
  S extends string | number = string | number,
>({
  control,
  formName,
  label,
  options,
  className,
  labelClass,
  state,
  setState,
  onClick,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  options: { label: string; value: S }[];
  className?: string;
  labelClass?: string;
  state?: S;
  setState?: React.Dispatch<React.SetStateAction<S>>;
  onClick?: () => void;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div>
              {options.map((option) => (
                <div key={option.value}>
                  <Input
                    type="radio"
                    id={`${formName}-${option.value}`}
                    name={formName}
                    value={option.value}
                    checked={state === option.value}
                    onChange={(e) => {
                      const value = e.target.value as S;
                      field.onChange(value); // Pass the value directly to the field
                      if (setState) {
                        setState(value);
                      }
                    }}
                    className={className}
                    onClick={onClick}
                  />
                  <label
                    htmlFor={`${formName}-${option.value}`}
                    className={labelClass}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

// Form generator from Helly

/**
 * @formControl formControl - Used for the (form.control) parameter.
 * @formFields - Receive a const with the configuration of your form,
 * how many fields and the type of the fields (radio, checkbox, input..).
 * @gridCols A string with a number of how many cols you want on the form.
 *  */
export const FormGeneration = ({ formControl, formFields, gridCols }: any) => {
  // Splitting by two to show the grid cols in the mobile view.
  const gridColsMobile = gridCols / 2;
  const roundedCols = Math.round(gridColsMobile);

  return (
    <div
      className={`grid grid-cols-${gridCols} gap-2 max-xl:grid-cols-${roundedCols}`}
    >
      {formFields.map(
        (item: {
          id: number;
          content: any;
          type: string;
          formName: string;
          title: string;
          placeholder?: string | undefined;
        }) =>
          item.content ? (
            <div key={item.id} className="w-full items-end">
              <SelectForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
                valueKey={"value"}
                content={item.content}
                displayKey="value"
              />
            </div>
          ) : item.type === "checkbox" ? (
            <div key={item.id} className="mb-2 w-full content-end">
              <CheckboxForm
                control={formControl}
                formName={item.formName}
                label=""
                placeholder={item.title}
              />
            </div>
          ) : item.type === "datePicker" ? (
            <div key={item.id} className="w-full">
              <DatePickerForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
              />
            </div>
          ) : item.type === "radio" ? (
            <div key={item.id} className="flex w-full gap-3 my-3">
              <InputForm
                control={formControl}
                formName={item.formName}
                label=""
                type="radio"
                className="size-fit"
                placeholder={item.placeholder}
              />
              <span className="mt-0.5">{item.placeholder}</span>
            </div>
          ) : item.type === "number" ? (
            <InputForm
              key={item.id}
              control={formControl}
              formName={item.formName}
              label={item.title}
              type={item.type}
              className=""
              placeholder={item.placeholder}
            />
          ) : item.type === "password" ? (
            <div key={item.id} className="w-full">
              <InputForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
                type="password"
              />
            </div>
          ) : item.type === "switch" ? (
            <div key={item.id} className="my-2 w-full content-end">
              <SwitchForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                className=""
              />
            </div>
          ) : (
            <div key={item.id} className="w-full">
              <InputForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
              />
            </div>
          ),
      )}
    </div>
  );
};

export const FormGenerationRadio = ({
  formControl,
  formFields,
  className,
}: any) => {
  return (
    <div className={`my-2 flex w-1/2 items-end gap-6 ${className}`}>
      {formFields.map(
        (item: {
          content: any;
          type: string;
          formName: string;
          title: string;
          placeholder?: string | undefined;
        }) => (
          <div key={item.title} className="flex items-center gap-2">
            <InputForm
              control={formControl}
              formName={item.formName}
              label=""
              type="radio"
              className="size-fit"
            />
            <label className="mt-2">{item.title}</label>
          </div>
        ),
      )}
    </div>
  );
};


/**
 * @formControl formControl - Used for the (form.control) parameter.
 * @formFields - Receive a component with sections and cards.
 * @gridCols A string with a number of how many cols you want on the form.
 *  */
export const NorthFormGeneration = ({
  formControl,
  formFields,
  gridCols,
}: {
  gridCols: string;
  formFields: {
    formTitle: string;
    description: string;
    section: {
      sectionName: string;
      cards: {
        title: string;
        colQty: string;
        fields: {
          id: number;
          formName: string;
          title: string;
          type: string;
          placeholder: string;
          value: string;
        }[];
        title2?: string;
        fields2?: {
          id: number;
          formName: string;
          title: string;
          type: string;
          placeholder: string;
          value: string;
        }[];
      }[];
    }[];
  };
  formControl: any;
}) => {
  // Splitting by two to show the grid cols in the mobile view.
  const gridColsMobile = Number(gridCols) / 2;
  const roundedCols = Math.round(gridColsMobile);

  return (
    <React.Fragment>
      {formFields.section.map((sec) => (
        <section key={sec.sectionName}>
          <h1 className="mb-3 mt-7 flex gap-2 text-2xl font-semibold text-sky-500">
            {sec.sectionName}
          </h1>
          <div
            className={`grid grid-cols-${gridCols} gap-2 max-xl:grid-cols-${roundedCols}`}
          >
            {sec.cards.map(
              (item: {
                title: string;
                fields: {
                  id: number;
                  formName: string;
                  title: string;
                  type: string;
                  placeholder: string;
                  value: string;
                }[];
                title2?: string;
                fields2?: {
                  id: number;
                  formName: string;
                  title: string;
                  type: string;
                  placeholder: string;
                  value: string;
                }[];
                colQty: string;
              }) => (
                <div key={item.title} className="rounded-md border p-4">
                  <p className="mb-3 text-center text-xl">{item.title}</p>
                  <FormGeneration
                    formControl={formControl}
                    formFields={item.fields}
                    gridCols={item.colQty}
                  />
                  {item.fields2 ? (
                    <div key={item.title}>
                      <p className="my-3 text-start text-base">{item.title2}</p>
                      <FormGeneration
                        formControl={formControl}
                        formFields={item.fields2}
                        gridCols={item.colQty}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ),
            )}
          </div>
        </section>
      ))}
    </React.Fragment>
  );
};

/**
 * @formControl formControl - Used for the (form.control) parameter.
 * @formFields - Receive a component with sections and cards.
 * @gridCols A string with a number of how many cols you want on the form.
 *  */
export const FormGenerator = ({
  formControl,
  formFields,
  gridCols,
}: {
  gridCols: string;
  formFields: {
    formTitle: string;
    description: string;
    tabs: {
      id: number;
      tabName: string;
      value: string;
      section: {
        sectionName: string;
        fields?: {
          id: number;
          formName: string;
          title: string;
          type: string;
          placeholder: string;
          value: string;
          multipleFields?: {
            id: number;
            formName: string;
            title: string;
            type: string;
            placeholder: string;
            value: string;
          }[];
        }[];
        cards?: {
          title: string;
          colQty: string;
          fields: {
            id: number;
            formName: string;
            title: string;
            type: string;
            placeholder: string;
            value: string;
          }[];
          title2?: string;
          fields2?: {
            id: number;
            formName: string;
            title: string;
            type: string;
            placeholder: string;
            value: string;
          }[];
        }[];
      }[];
    }[];
  };
  formControl: any;
}) => {
  const [activeItem, setActiveItem] = useState<string>(
    String(formFields.tabs.at(0)?.value),
  );

  const handleClick = (value: string) => {
    setActiveItem(value);
  };

  return (
    <section>
      <div className="w-auto">
        <Tabs
          defaultValue={formFields.tabs.at(0)?.value}
          className="my-2 flex-auto rounded-md p-4 text-center"
        >
          <TabsList className="">
            {formFields.tabs.map((tab) => (
              <TabsTrigger
                onClick={() => handleClick(tab.value)}
                key={tab.id}
                value={tab.value}
              >
                <p className="text-sm">{tab.tabName}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {formFields.tabs.map((tab) => (
        <section key={tab.id}>
          {tab.value === activeItem && (
            <div>
              <h1 className="text-center text-2xl font-semibold text-sky-500">
                {tab.tabName}
              </h1>
              {/* Mapping the sections */}
              {tab.section.map((Item) => {
                return (
                  <div key={Item.sectionName} className="mt-3">
                    <h2 className="my-2 text-xl font-semibold">
                      {Item.sectionName}
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                      {Item.fields?.map((field) =>
                        field.type === "selectbox" ? (
                          <div key={field.id} className="w-full items-end">
                            {/* <SelectForm
                              control={formControl}
                              formName={field.formName}
                              label={field.title}
                              placeholder={field.placeholder}
                              valueKey={"value"}
                              content={field.content}
                              displayKey="value"
                            /> */}
                          </div>
                        ) : field.type === "checkbox" ? (
                          <div
                            key={field.id}
                            className="mb-2 w-full content-end"
                          >
                            <CheckboxForm
                              control={formControl}
                              formName={field.formName}
                              label=""
                              placeholder={field.title}
                            />
                          </div>
                        ) : field.type === "datePicker" ? (
                          <div key={field.id} className="w-full">
                            <DatePickerForm
                              control={formControl}
                              formName={field.formName}
                              label={field.title}
                              placeholder={field.placeholder}
                            />
                          </div>
                        ) : field.type === "radio" ? (
                          <div key={field.id} className="flex w-full gap-2">
                            <InputForm
                              control={formControl}
                              formName={field.formName}
                              label=""
                              type="radio"
                              className="size-fit"
                              placeholder={field.placeholder}
                            />
                            <span className="">{field.placeholder}</span>
                          </div>
                        ) : field.type === "number" ? (
                          <InputForm
                            key={field.id}
                            control={formControl}
                            formName={field.formName}
                            label={field.title}
                            type={field.type}
                            className=""
                            placeholder={field.placeholder}
                          />
                        ) : field.type === "password" ? (
                          <div key={field.id} className="w-full">
                            <InputForm
                              control={formControl}
                              formName={field.formName}
                              label={field.title}
                              placeholder={field.placeholder}
                              type="password"
                            />
                          </div>
                        ) : field.type === "switch" ? (
                          <div
                            key={field.id}
                            className="my-2 w-full content-end"
                          >
                            <SwitchForm
                              control={formControl}
                              formName={field.formName}
                              label={field.title}
                              className=""
                            />
                          </div>
                        ) : field.type === "multiple" ? (
                          <div key={field.id} className="flex w-full gap-2">
                            {field.multipleFields?.map((subItem) => (
                              <div key={subItem.id} className="flex-auto">
                                <InputForm
                                  control={formControl}
                                  formName={subItem.formName}
                                  label={subItem.title}
                                  placeholder={subItem.placeholder}
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div key={field.id} className="w-full">
                            <InputForm
                              control={formControl}
                              formName={field.formName}
                              label={field.title}
                              placeholder={field.placeholder}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      ))}
    </section>
  );
};

