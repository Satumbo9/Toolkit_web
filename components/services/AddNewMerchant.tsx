import React from "react";
import { Form } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckboxForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { Button } from "../ui/button";
import { CircleX, FilePlus } from "lucide-react";

const AddNewMerchant = ({ isOpen, setIsOpen }: any) => {
  const newMerchantSchema = z.object({
    merchantID: z.string(),
    merchantName: z.string(),
    funderName: z.string(),
    merchantStatus: z.string(),
    WAVItSplit: z.boolean(),
    reportGroup: z.string(),
    sendDailyReports: z.boolean(),
    sendRemittance: z.boolean(),
    notes: z.string(),
  });

  const form = useForm<z.infer<typeof newMerchantSchema>>({
    resolver: zodResolver(newMerchantSchema),
    defaultValues: {
      merchantID: "",
      merchantName: "",
      funderName: "",
      merchantStatus: "",
      WAVItSplit: false,
      reportGroup: "",
      sendDailyReports: false,
      sendRemittance: false,
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newMerchantSchema>) => {
    console.log(values);
  };

  const renderForms = [
    {
      id: 1,
      title: "Merchant ID",
      value: "merchantID",
    },
    {
      id: 2,
      title: "Merchant Name",
      value: "merchantName",
    },
    {
      id: 3,
      title: "Funder Name",
      value: "funderName",
    },
    {
      id: 4,
      title: "Merchant Status",
      value: "merchantStatus",
      options: [
        {
          id: 1,
          title: "Active",
          value: "active",
        },
        {
          id: 2,
          title: "Inactive",
          value: "inactive",
        },
      ],
    },
    {
      id: 5,
      title: "Is this a WAVit split?",
      value: "WAVItSplit",
    },
    {
      id: 6,
      title: "Report Group",
      value: "reportGroup",
      options: [
        {
          id: 1,
          title: "None",
          value: "none",
        },
        {
          id: 2,
          title: "Group 1",
          value: "group1",
        },
        {
          id: 3,
          title: "Group 2",
          value: "group 2",
        },
      ],
    },
    {
      id: 7,
      title: "Send Daily Reports",
      value: "sendDailyReports",
    },
    {
      id: 8,
      title: "Send Remittance",
      value: "sendRemittance",
    },
    {
      id: 9,
      title: "Notes",
      value: "notes",
    },
  ];

  return (
    <div className="mt-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="w-1/2">
            {renderForms.length > 0 &&
              renderForms.map((item) =>
                item.options ? (
                  <SelectForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                    content={item.options}
                    placeholder={
                      item.value === "merchantStatus"
                        ? "Select status..."
                        : "None"
                    }
                    valueKey="id"
                    displayKey="title"
                  />
                ) : item.value === "sendDailyReports" ||
                  item.value === "sendRemittance" ||
                  item.value === "WAVItSplit" ? (
                  <CheckboxForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label=""
                    placeholder={item.title}
                  />
                ) : item.value === "notes" ? (
                  <TextAreaForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : (
                  <InputForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ),
              )}

            <div className="mt-5 space-x-5">
              <Button className="gap-2">
                <FilePlus />
                Save
              </Button>
              <Button
                className="gap-2"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
              >
                <CircleX />
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddNewMerchant;
