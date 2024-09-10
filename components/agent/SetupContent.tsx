"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { DataTypes } from "@/types";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import AgentResidualsContent from "./AgentResidualsContent";
import { Form } from "../ui/form";
import { AgentEquipmentSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckboxForm, InputForm } from "../Shared/InstantForm";
import { documentsTable, agentAdjustments, agentEmailList } from "@/constants";
import CustomButtons from "../Shared/CustomButtons";

const Billing = () => {
  return (
    <div className="m-auto mt-10 text-center">
      <Button className="m-auto w-2/5 text-center">Show Billing Ruless</Button>
    </div>
  );
};

const CustomerFinance = () => {
  return (
    <h1 className="mt-5 text-center text-2xl font-bold">Customer Finance</h1>
  );
};

const Equipment = () => {
  const formEquipment = useForm<z.infer<typeof AgentEquipmentSchema>>({
    resolver: zodResolver(AgentEquipmentSchema),
    defaultValues: {
      copyFromContactInfo: false,
      noShippingEmails: false,
      coCard: false,
      markClosed: false,
      shipPhone: "",
      shipExt: "",
      shippingEmail: "",
      shippingServiceEmail: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      cellPhone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AgentEquipmentSchema>) => {
    console.log(values);
  };
  return (
    <Form {...formEquipment}>
      <form
        onSubmit={formEquipment.handleSubmit(onSubmit)}
        className="space-y-2"
      >
        <div className="m-auto mt-5 w-4/6">
          <h1 className="text-center text-2xl font-bold">
            Shipping Information
          </h1>

          <div className="my-5 flex items-center justify-center gap-5">
            <div className="flex gap-2">
              <Checkbox />
              <span className="flex content-center gap-5 text-sm">
                Copy from Contact Info
              </span>
            </div>
            <div className="flex gap-2">
              <Checkbox />
              <span className="flex content-center gap-5 text-sm">
                No Shipping Emails
              </span>
            </div>
          </div>

          <div className="my-3 flex gap-3">
            <p className="w-2/6 content-center text-nowrap pt-2 text-end">
              Address 1
            </p>
            <div className="w-4/6">
              <InputForm
                control={formEquipment.control}
                formName="address1"
                label=""
                placeholder="Enter text..."
              />
            </div>
          </div>
          <div className="my-3 flex gap-3">
            <p className="w-2/6 content-center text-nowrap pt-2 text-end">
              Address 2
            </p>
            <div className="w-4/6">
              <InputForm
                control={formEquipment.control}
                formName="address2"
                label=""
                placeholder="Enter text..."
              />
            </div>
          </div>
          <div className="my-3 flex gap-3">
            <p className="w-2/6 content-center text-nowrap pt-2 text-end">
              City / State / Zip
            </p>
            <div className="flex w-4/6 gap-2">
              <div className="w-3/6">
                <InputForm
                  control={formEquipment.control}
                  formName="city"
                  label=""
                  placeholder="City"
                />
              </div>
              <div className="w-1/6">
                <InputForm
                  control={formEquipment.control}
                  formName="state"
                  label=""
                  placeholder="St"
                />
              </div>
              <div className="w-2/6">
                <InputForm
                  control={formEquipment.control}
                  formName="zip"
                  label=""
                  placeholder="Zipcode"
                />
              </div>
            </div>
          </div>
          <div className="my-3 flex gap-3">
            <p className="w-2/6 content-center text-nowrap pt-2 text-end">
              Shipping Email
            </p>
            <div className="w-4/6">
              <InputForm
                control={formEquipment.control}
                formName="shippingEmail"
                label=""
                placeholder="Valid Email"
              />
            </div>
          </div>
          <div className="my-3 flex gap-3">
            <p className="w-2/6 content-center text-nowrap pt-2 text-end">
              Costumer Service Email
            </p>
            <div className="w-4/6">
              <InputForm
                control={formEquipment.control}
                formName="shippingServiceEmail"
                label=""
                placeholder="Valid Email"
              />
            </div>
          </div>

          <CustomButtons btnType="default" className="my-4 w-full">
            CLICK HERE: Anyone can Save Shipping Info Above
          </CustomButtons>

          <h1 className="my-4 text-center text-2xl font-bold">
            Extra Information
          </h1>

          <div className="flex content-center justify-center gap-2">
            <CheckboxForm
              control={formEquipment.control}
              formName="coCard"
              label=""
              placeholder=""
              className="mt-3 content-center items-center align-middle"
            />
            <span className="mt-1 content-center">CoCard</span>
          </div>
          <div className="my-3 flex gap-3">
            <p className="w-2/6 content-center text-nowrap pt-2 text-end">
              Cell Phone
            </p>
            <div className="w-4/6">
              <InputForm
                control={formEquipment.control}
                formName="cellPhone"
                label=""
                placeholder="(___) ____-______"
              />
            </div>
          </div>
          <div className="mt-10 flex content-center justify-center gap-2">
            <CheckboxForm
              control={formEquipment.control}
              formName="markClosed"
              label=""
              placeholder=""
              className="mt-3 content-center items-center align-middle"
            />
            <span className="mt-1 content-center">
              Mark as Closed (ADMINS Only)
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
};

const Documentation = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DocType", header: "Doc Type" },
    { accessorKey: "Historic", header: "Historic" },
    { accessorKey: "DocName", header: "Doc Name" },
    { accessorKey: "FileSize", header: "File size" },
    { accessorKey: "UploadDateTime", header: "Upload Date/Time" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div className="my-5 flex justify-between">
        <div className="flex gap-2 pl-3">
          <Checkbox />
          <span className="flex content-center gap-5 text-nowrap text-sm">
            Show Deleted Documents
          </span>
        </div>

        <div className="flex gap-2">
          <CustomButtons btnType="default" className="rounded-full">
            +
          </CustomButtons>
          <CustomButtons btnType="default" className="rounded-full">
            -
          </CustomButtons>
        </div>
      </div>

      <div className="w-full rounded-md p-2">
        <DataTable
          columns={columns}
          data={documentsTable}
          enableColumnFilter={true}
          filteredBy="DocName"
        />
      </div>
    </section>
  );
};

const Reporting = () => {
  return <h1 className="mt-5 text-center text-2xl font-bold">Reporting</h1>;
};

const EmailLists = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <div className="m-auto mt-7 w-11/12">
        <div className="flex justify-between px-2">
          <h2 className="content-center text-2xl font-semibold">
            Email Notices:
          </h2>
          <div className="flex gap-2">
            <CustomButtons btnType="primary" className="rounded-md">
              Add Item
            </CustomButtons>
            <CustomButtons btnType="destructive" className="rounded-md">
              Delete Item
            </CustomButtons>
          </div>
        </div>
        <div className="w-full rounded-md p-2 text-sm">
          <DataTable
            columns={columns}
            data={agentEmailList}
            enableColumnFilter={false}
            pagination={true}
            filteredBy="username"
          />
        </div>
      </div>
      <div className="m-auto mt-7 w-11/12">
        <div className="flex justify-between px-2">
          <h2 className="content-center text-2xl font-semibold">
            Email Reports:
          </h2>
          <div className="flex gap-2">
            <CustomButtons btnType="primary" className="rounded-md">
              Add Item
            </CustomButtons>
            <CustomButtons btnType="destructive" className="rounded-md">
              Delete Item
            </CustomButtons>
          </div>
        </div>
        <div className="w-full rounded-md p-2 text-sm">
          <DataTable
            columns={columns}
            data={agentEmailList}
            enableColumnFilter={false}
            filteredBy="username"
          />
        </div>
      </div>
      <div className="m-auto mt-7 w-11/12">
        <div className="flex justify-between px-2">
          <h2 className="content-center text-2xl font-semibold">
            Email Residuals:
          </h2>
          <div className="flex gap-2">
            <CustomButtons btnType="primary" className="rounded-md">
              Add Item
            </CustomButtons>
            <CustomButtons btnType="destructive" className="rounded-md">
              Delete Item
            </CustomButtons>
          </div>
        </div>
        <div className="w-full rounded-md p-2 text-sm">
          <DataTable
            columns={columns}
            data={agentEmailList}
            enableColumnFilter={false}
            filteredBy="username"
          />
        </div>
      </div>
    </section>
  );
};

const Adjustments = () => {
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-left font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount", cell: Price },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div>
      <h1 className="mt-5 text-center text-2xl font-bold">Adjustments</h1>

      <div className="w-full rounded-md p-2">
        <DataTable
          columns={columns}
          data={agentAdjustments}
          enableColumnFilter={true}
          filteredBy="MID"
        />
      </div>
    </div>
  );
};

export default function RenderSetupComponents(value: string) {
  switch (value) {
    case "residuals":
      return <AgentResidualsContent />;
    case "billing":
      return <Billing />;
    case "customerFinance":
      return <CustomerFinance />;
    case "equipment":
      return <Equipment />;
    case "documentation":
      return <Documentation />;
    case "reporting":
      return <Reporting />;
    case "emailLists":
      return <EmailLists />;
    case "adjustments":
      return <Adjustments />;
  }
}
