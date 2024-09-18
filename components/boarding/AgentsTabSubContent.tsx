"use client";
import React from "react";
import {
  agentCompanyNameSelectList,
  boardingAgentSettingsForm,
} from "@/constants";
import BoardingAgentDetails from "./BoardingAgentDetails";
import { NorthFormGeneration, SelectForm } from "../Shared/InstantForm";
import { Form } from "../ui/form";
import { boardingAgentSettingsSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButtons from "../Shared/CustomButtons";

const AgentDetails = () => {
  return (
    <section>
      <BoardingAgentDetails />
    </section>
  );
};

const AgentSettings = () => {
  const form = useForm<z.infer<typeof boardingAgentSettingsSchema>>({
    resolver: zodResolver(boardingAgentSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof boardingAgentSettingsSchema>) => {
    console.log(value);
  };
  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2">
          <div className="items-center">
            <h1 className="my-5 text-center text-2xl font-medium text-sky-500">
              Agent Settings
            </h1>
            {/* SEARCH FIELD */}
            <div className="flex items-end gap-2 px-28">
              <div className="w-4/5">
                <SelectForm
                  control={form.control}
                  formName={"Agent"}
                  label="Agent / Company Name (choose one and 'Search')"
                  placeholder={"Select Agent or Company Name"}
                  content={agentCompanyNameSelectList}
                  valueKey="value"
                  displayKey="title"
                  disabled={false}
                  className=""
                />
              </div>
              <CustomButtons
                btnType="default"
                type="button"
                className="mt-2 flex-auto bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90"
              >
                Search
              </CustomButtons>
            </div>
            {/* GENERATION OF THE WHOLE  */}
            <div className="items-end">
              <NorthFormGeneration
                formControl={form.control}
                formFields={boardingAgentSettingsForm}
                gridCols={"1"}
              />
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default function RenderAgentsTabComponents(value: string) {
  switch (value) {
    case "agentDetails":
      return <AgentDetails />;
    case "agentSettings":
      return <AgentSettings />;
  }
}
