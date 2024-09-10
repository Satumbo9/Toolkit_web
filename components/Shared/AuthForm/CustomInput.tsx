import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { SignInSchema, SignUpSchema } from "@/schemas";

// declare type for interface, if the type is sign-in use SignInSchema.
type SchemaType<Type extends string> = Type extends "sign-in"
  ? typeof SignInSchema
  : typeof SignUpSchema;

interface CustomInputProps<Type extends string> {
  control: Control<z.infer<SchemaType<Type>>>;
  name: FieldPath<z.infer<SchemaType<Type>>>;
  label: string;
  nameHolder: string;
  type: Type;
  groups?: { id: number; title: string }[];
}

const CustomInput = <Type extends "sign-in" | "sign-up">({
  control,
  name,
  label,
  nameHolder,
  type,
}: CustomInputProps<Type>) => {
  return (
    <div>
      <FormField
        key={name}
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label dark:text-white">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  key={name}
                  placeholder={nameHolder}
                  className="input-class placeholder:opacity-50"
                  type={
                    name === "password"
                      ? "Password"
                      : name === "email"
                        ? "email"
                        : "text"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInput;
