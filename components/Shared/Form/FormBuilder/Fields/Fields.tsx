import { InputForm } from "@/components/Shared/InstantForm";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface FieldComponentProps {
  control: any;
  formName: any;
  label: string;
}

const FieldComponents: { [key: string]: React.FC<FieldComponentProps> } = {
  "1": ({
    control,
    formName,
    label,
  }: {
    control: any;
    formName: any;
    label: string;
  }) => (
    <div className="w-full p-2">
      <label className="mb-2 block">Heading</label>
      <InputForm
        control={control}
        formName={formName}
        label={label}
        type="text"
        className="w-full rounded border p-2"
        placeholder="Enter text"
      />
    </div>
  ),
  "2": () => (
    <div className="w-full p-2">
      <label className="mb-2 block">Sub-heading</label>
      <Input
        type="text"
        className="h-[144px] w-full resize-none rounded border p-2"
        placeholder="Enter text"
      />
    </div>
  ),
  "3": () => (
    <div className="w-full p-2">
      <label className="inline-flex items-center">
        <Input type="checkbox" />
        <span className="ml-2">Paragraph</span>
      </label>
    </div>
  ),
  "4": () => <div className="w-full border border-solid p-2" />,
  "5": () => <br />,
  "6": ({ control, formName, label }) => (
    <div className="w-full p-2">
      <InputForm
        control={control}
        formName={formName}
        label={label}
        className="w-full rounded-md"
      />
    </div>
  ),
};

export default FieldComponents;
