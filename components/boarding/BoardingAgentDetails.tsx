"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { agentCompanyNameSelectList } from "@/constants";
import { Form } from "../ui/form";
import { boardingAgentDetailsSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";

const BoardingAgentDetails = () => {
  const form = useForm<z.infer<typeof boardingAgentDetailsSchema>>({
    resolver: zodResolver(boardingAgentDetailsSchema),
    defaultValues: {
      AgentCompanyName: "",
      DisplayName: "",
      FirstName: "",
      LastName: "",
      RelationshipManager: "",
      Address: "",
      SteApt: "",
      City: "",
      State: "",
      Zip: "",
      Email: "",
      RoutingNumber: "",
      Account: "",
      NoShippingEmails: true,
      ShippingAddress: "",
      ShippingAddress2: "",
      ShippingCity: "",
      ShippingState: "",
      ShippingZip: "",
      ShippingEmails: "",
    },
  });

  const onSubmit = (value: z.infer<typeof boardingAgentDetailsSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2">
            <h1 className="my-5 text-center text-2xl font-medium text-sky-500">
              Agent Details
            </h1>
            <div className="w-full">
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
                  className="mt-2 flex-auto bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90"
                >
                  Search
                </CustomButtons>
              </div>

              {/* AGENT INFO DIV */}
              <h1 className="mb-3 mt-10 text-lg font-medium text-sky-500">
                Agent Information
              </h1>
              <div className="grid grid-cols-2 gap-2">
                <InputForm
                  control={form.control}
                  formName={"DisplayName"}
                  label="Display Name"
                  placeholder={"MiCamp House"}
                />
                <div className=""></div>
                <InputForm
                  control={form.control}
                  formName={"FirstName"}
                  label="First Name"
                  placeholder={"MiCamp"}
                />
                <InputForm
                  control={form.control}
                  formName={"LastName"}
                  label="Last Name"
                  placeholder={"House"}
                />
                <InputForm
                  control={form.control}
                  formName={"RelationshipManager"}
                  label="Relationship Manager"
                  placeholder={""}
                />
                <div></div>
                <InputForm
                  control={form.control}
                  formName={"Address"}
                  label="Addres"
                  placeholder={"4021 N 75th"}
                />
                <InputForm
                  control={form.control}
                  formName={"SteApt"}
                  label="Ste. / Apt."
                  placeholder={"Ste 101"}
                />
                <div className="flex gap-2">
                  <div className="flex-auto">
                    <InputForm
                      control={form.control}
                      formName={"City"}
                      label="City"
                      placeholder={"Scottsdale"}
                      className="flex-auto"
                    />
                  </div>
                  <InputForm
                    control={form.control}
                    formName={"State"}
                    label="State"
                    placeholder={"AZ"}
                  />
                  <InputForm
                    control={form.control}
                    formName={"Zip"}
                    label="Zip"
                    placeholder={"85251"}
                  />
                </div>
                <InputForm
                  control={form.control}
                  formName={"Email"}
                  label="Email"
                  placeholder={"micamp@example.com"}
                />
                <InputForm
                  control={form.control}
                  formName={"RoutingNumber"}
                  label="Routing Number"
                  placeholder={""}
                  type="password"
                />
                <InputForm
                  control={form.control}
                  formName={"Account"}
                  label="Account #"
                  placeholder={""}
                  type="password"
                />
              </div>

              {/* SHIPPING INFO DIV */}
              <h1 className="mt-10 text-lg font-medium text-sky-500">
                Shipping Information
              </h1>
              <div className="grid grid-cols-2 gap-2">
                <CheckboxForm
                  control={form.control}
                  formName="NoShippingEmails"
                  label=""
                  placeholder="No Shipping Emails, please"
                />
                <div className=""></div>
                <InputForm
                  control={form.control}
                  formName={"ShippingAddress"}
                  label="Address"
                  placeholder={"4021 N 75th"}
                />
                <InputForm
                  control={form.control}
                  formName={"ShippingAddress2"}
                  label="Address 2"
                  placeholder={""}
                />
                <div className="flex gap-2">
                  <div className="flex-auto">
                    <InputForm
                      control={form.control}
                      formName={"ShippingCity"}
                      label="City"
                      placeholder={"Scottsdale"}
                      className="flex-auto"
                    />
                  </div>
                  <InputForm
                    control={form.control}
                    formName={"ShippingState"}
                    label="State"
                    placeholder={"AZ"}
                  />
                  <InputForm
                    control={form.control}
                    formName={"ShippingZip"}
                    label="Zip"
                    placeholder={"85251"}
                  />
                </div>
                <div></div>
                <InputForm
                  control={form.control}
                  formName={"ShippingEmails"}
                  label="Emails"
                  placeholder={""}
                />
              </div>

              <div className="my-3 text-center">
                <Button className="mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Save
                </Button>
              </div>

              <div className="hidden">
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Entry Date</p>
                  </div>
                  <div className="w-2/3 flex-auto content-center">
                    <DatePickerForm
                      control={form.control}
                      formName="EntryDate"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                </div>
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">To Date</p>
                  </div>
                  <div className="w-2/3 flex-auto content-center">
                    <DatePickerForm
                      control={form.control}
                      formName="ToDate"
                      label=""
                      placeholder="mm/dd/2024"
                    />
                  </div>
                </div>
                <div className="text-end">
                  <Button className="mt-2 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 font-light text-white hover:opacity-90">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default BoardingAgentDetails;
