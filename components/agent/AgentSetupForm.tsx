import React from "react";
import { Form } from "../ui/form";
import { AgentSetupSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import { FindAgent, SubAgentOrChild } from "@/constants";

const AgentSetupForm = () => {
  const form = useForm<z.infer<typeof AgentSetupSchema>>({
    resolver: zodResolver(AgentSetupSchema),
    defaultValues: {
      findAgent: "",
      excludeClosedAgents: false,
      displayName: "",
      firstName: "",
      lastName: "",
      merchantNote: "",
      isChildSubAgent: false,
      subAgentOrChild: "",
      selectRelationshipManager: "",
      email: "",
      phone: "",
      status: "",
      startDate: "",
      endDate: "",
      address1: "",
      address2: "",
      residualEmail: "",
      zohoEmail: "",
      city: "",
      state: "",
      zip: "",
      routing: "",
      account: "",
      ssn: "",
      payDay: "",
      payGroup: "",
      filePrefix: "",
      msoId: "",
      entityType: "",
      reportType: "",
      okToPayResid: false,
      doNotPay: false,
      printPhysicalCheck: false,
      messeging: false,
      residual: false,
      tickets: false,
      flashes: false,
      noBillPay: false,
      payrollId: "",
      agentId: "",
      note: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AgentSetupSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Search Criteria</h1>
            <CheckboxForm
              control={form.control}
              formName="excludeClosedAgents"
              placeholder="Exclude Closed Agents"
              label=""
            />
          </div>
          <hr className="my-3" />
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <h1>Find Agent</h1>
            </div>
            <SelectForm
              control={form.control}
              formName="findAgent"
              content={FindAgent}
              label=""
              placeholder="Select Agent..."
              valueKey="id"
              displayKey="name"
              className="w-full"
            />
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-bold">Contact Information</h1>
          </div>

          <div className="grid">
            <div className="grid">
              <div className="flex items-center">
                <h1>Display Name</h1>
              </div>
              <InputForm
                control={form.control}
                formName="displayName"
                label=""
                placeholder="Average Joe"
              />
            </div>
            <div className="my-2 grid grid-cols-2 gap-3">
              <div>
                <InputForm
                  control={form.control}
                  formName="firstName"
                  label="First Name"
                  placeholder="Average"
                />
              </div>
              <div>
                <InputForm
                  control={form.control}
                  formName="lastName"
                  label="Last Name"
                  placeholder="Joe"
                />
              </div>
            </div>
            <div className="grid">
              <InputForm
                control={form.control}
                formName="merchantNote"
                label="Merchant Note"
                placeholder="Average Joe"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center">
                <CheckboxForm
                  control={form.control}
                  formName="isChildSubAgent"
                  placeholder="Is Child / Sub Agent"
                  label=""
                />
              </div>
              <SelectForm
                control={form.control}
                formName="subAgentOrChild"
                content={SubAgentOrChild}
                label=""
                valueKey="id"
                displayKey="name"
                placeholder="Select Sub Agent or Child"
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center">
                <h1>Relationship Manager</h1>
              </div>
              <SelectForm
                control={form.control}
                formName="selectRelationshipManager"
                content={SubAgentOrChild}
                label=""
                valueKey="id"
                displayKey="name"
                placeholder="Select Relationship Manager"
              />
            </div>
          </div>
          <div className="my-2 grid grid-cols-2 gap-3">
            <div>
              <InputForm
                control={form.control}
                formName="firstName"
                label="Status"
                placeholder="Average"
              />
            </div>
            <div className="content-end">
              <div className="my-1 hidden items-center">
                <h1>Start Date</h1>
              </div>
              <DatePickerForm
                control={form.control}
                formName="startDate"
                label="Start Date"
                placeholder="Start Date"
              />
            </div>
          </div>
          <div className="grid">
            <InputForm
              control={form.control}
              formName="address1"
              label="Address 1"
              placeholder="123 Somewhere Road, 42"
            />
            <InputForm
              control={form.control}
              formName="address2"
              label="House/Flat type"
              placeholder="Unit A"
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <InputForm
              control={form.control}
              formName="city"
              label="City"
              placeholder="Scottsdale"
            />
            <InputForm
              control={form.control}
              formName="state"
              label="State"
              placeholder="Arizona"
            />
            <InputForm
              control={form.control}
              formName="zip"
              label="Zip"
              placeholder="85275"
            />
          </div>
          <div className="grid">
            <InputForm
              control={form.control}
              formName="residualEmail"
              label="Residual Email"
              placeholder="residual@email.com"
            />
            <InputForm
              control={form.control}
              formName="zohoEmail"
              label="Zoho Email"
              placeholder="zoho@email.com"
            />
          </div>
          <h1 className="my-3 text-2xl font-bold">Search Criteria</h1>
          <div className="grid grid-cols-2 gap-3">
            <InputForm
              control={form.control}
              formName="routing"
              label="Routing"
              placeholder="https://routing.com"
            />
            <InputForm
              control={form.control}
              formName="account"
              label="Account"
              placeholder="4646313449"
            />
            <SelectForm
              control={form.control}
              formName="entityType"
              content={SubAgentOrChild}
              valueKey="id"
              displayKey="name"
              label="Individual"
              placeholder="Select type"
            />
            <InputForm
              control={form.control}
              formName="ssn"
              label="SSN / EIN"
              placeholder="111-11-1111"
            />
          </div>
          <div className="my-4 grid grid-cols-3 text-sm">
            <CheckboxForm
              control={form.control}
              formName="okToPayResid"
              placeholder="OK to pay Resid"
              label=""
            />
            <CheckboxForm
              control={form.control}
              formName="doNotPay"
              placeholder="DO NOT PAY"
              label=""
            />
            <CheckboxForm
              control={form.control}
              formName="printPhysicalCheck"
              placeholder="print Physical Check"
              label=""
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <InputForm
              control={form.control}
              formName="payDay"
              label="Pay Day"
              placeholder="22th"
            />
            <InputForm
              control={form.control}
              formName="payGroup"
              label="Pay Group"
              placeholder="05"
            />
            <InputForm
              control={form.control}
              formName="msoId"
              label="MSO ID"
              placeholder="1234567"
            />
          </div>
          <h1 className="my-3 text-2xl font-bold">Reporting</h1>
          <div className="my-4 grid grid-cols-3 text-nowrap text-sm">
            <div className="flex items-center">
              <h1>Opt In To</h1>
            </div>
            <CheckboxForm
              control={form.control}
              formName="messeging"
              placeholder="Messenging"
              label=""
            />
            <CheckboxForm
              control={form.control}
              formName="residual"
              placeholder="Residual"
              label=""
            />
            <CheckboxForm
              control={form.control}
              formName="tickets"
              placeholder="Tickets"
              label=""
            />
            <CheckboxForm
              control={form.control}
              formName="flashes"
              placeholder="Flashes"
              label=""
            />
            <CheckboxForm
              control={form.control}
              formName="noBillPay"
              placeholder="No Bill Pay"
              label=""
            />
          </div>
          <div className="grid">
            <InputForm
              control={form.control}
              formName="filePrefix"
              label="File Prefix"
              placeholder="1"
            />
            <InputForm
              control={form.control}
              formName="reportType"
              label="Report Type"
              placeholder="1"
            />
            <div className="grid grid-cols-2 gap-5">
              <InputForm
                control={form.control}
                formName="payrollId"
                label="Payroll ID"
                placeholder="32131"
              />
              <InputForm
                control={form.control}
                formName="agentId"
                label="Agent ID"
                placeholder="3463"
              />
            </div>
            <TextAreaForm
              control={form.control}
              formName="note"
              label="Note"
              placeholder="Notes..."
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AgentSetupForm;
