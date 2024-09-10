"use client";

import { Price } from "@/components/Shared/DataTable/CellFormat";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  CheckboxForm,
  InputForm,
  SelectForm,
} from "@/components/Shared/InstantForm";
import { Form } from "@/components/ui/form";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FinancialVendors = () => {
  const vendorSchema = z.object({
    vendor: z.string(),
    businessName: z.string(),
    ACHVendor: z.boolean(),
    bankRouting: z.string(),
    bankAccount: z.string(),
    bankType: z.string(),
    bankAcctType: z.string(),
    vendor1099: z.boolean(),
    bypass1099Validation: z.boolean(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    addressType: z.string(),
    SSN: z.string(),
    EIN: z.string(),
    contactName: z.string(),
    phone: z.string(),
    email: z.string(),
  });

  const form = useForm<z.infer<typeof vendorSchema>>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      vendor: "",
      businessName: "",
      ACHVendor: false,
      bankRouting: "",
      bankAccount: "",
      bankType: "",
      bankAcctType: "",
      vendor1099: false,
      bypass1099Validation: false,
      address: "",
      city: "",
      state: "",
      zip: "",
      addressType: "",
      SSN: "",
      EIN: "",
      contactName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof vendorSchema>) => {
    console.log(values);
  };

  const bankAcctType = [
    { id: 1, type: "Checking", value: "checking" },
    { id: 2, type: "Saving", value: "saving" },
    { id: 3, type: "Personal", value: "personal" },
    { id: 4, type: "Business", value: "business" },
  ];

  const addressType = [
    { id: 1, type: "Individual", value: "individual" },
    { id: 2, type: "Company", value: "company" },
  ];

  const tableData = [
    {
      "Doc Type": "Invoice",
      Hist: "Purchase of office supplies",
      Amount1: 125.87,
      Amount2: 28.35,
      Amount3: 97.52,
    },
    {
      "Doc Type": "Receipt",
      Hist: "Reimbursement for travel expenses",
      Amount1: 485.12,
      Amount2: 310.8,
      Amount3: 174.32,
    },
    {
      "Doc Type": "Payment",
      Hist: "Payment for consulting services",
      Amount1: 1500.0,
      Amount2: 1500.0,
      Amount3: 0.0,
    },
    {
      "Doc Type": "Invoice",
      Hist: "Purchase of software license",
      Amount1: 599.99,
      Amount2: 0.0,
      Amount3: 599.99,
    },
    {
      "Doc Type": "Receipt",
      Hist: "Reimbursement for meal expenses",
      Amount1: 62.48,
      Amount2: 25.65,
      Amount3: 36.83,
    },
    {
      "Doc Type": "Payment",
      Hist: "Payment for rent",
      Amount1: 1200.0,
      Amount2: 1200.0,
      Amount3: 0.0,
    },
    {
      "Doc Type": "Invoice",
      Hist: "Purchase of hardware equipment",
      Amount1: 875.5,
      Amount2: 150.0,
      Amount3: 725.5,
    },
    {
      "Doc Type": "Receipt",
      Hist: "Reimbursement for parking fees",
      Amount1: 18.5,
      Amount2: 18.5,
      Amount3: 0.0,
    },
    {
      "Doc Type": "Payment",
      Hist: "Payment for subscription service",
      Amount1: 49.99,
      Amount2: 49.99,
      Amount3: 0.0,
    },
    {
      "Doc Type": "Invoice",
      Hist: "Purchase of marketing materials",
      Amount1: 250.0,
      Amount2: 50.0,
      Amount3: 200.0,
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Doc Type", header: "Doc Type" },
    { accessorKey: "Hist", header: "Hist" },
    { accessorKey: "Amount1", header: "Amount", cell: Price },
    { accessorKey: "Amount2", header: "Amount", cell: Price },
    { accessorKey: "Amount3", header: "Amount", cell: Price },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <div className="mb-5 rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="grid grid-cols-2 gap-3 px-4 py-10 max-xl:grid-cols-1 max-xl:space-y-5">
        <section className="flex flex-col">
          <h1 className="text-3xl text-sky-500">Vendor Edit</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <InputForm
                control={form.control}
                formName="vendor"
                label="Vendor"
              />
              <InputForm
                control={form.control}
                formName="businessName"
                label="Business Name"
              />
              <CheckboxForm
                control={form.control}
                formName="ACHVendor"
                label=""
                placeholder="ACH Vendor"
                className=""
              />
              <div className="mt-3 grid grid-cols-2 gap-5">
                <InputForm
                  control={form.control}
                  formName="bankRouting"
                  label="Bank Routing"
                />
                <InputForm
                  control={form.control}
                  formName="bankType"
                  label="Type"
                />
              </div>
              <InputForm
                control={form.control}
                formName="bankAccount"
                label="Bank Account"
              />
              <SelectForm
                control={form.control}
                formName="bankAcctType"
                content={bankAcctType}
                valueKey="id"
                displayKey="type"
                label="Bank Account Type"
                placeholder="Select bank type..."
              />
              <hr className="my-5" />
              <div className="flex justify-between">
                <CheckboxForm
                  control={form.control}
                  formName="vendor1099"
                  label=""
                  placeholder="1099 Vendor"
                />
                <CheckboxForm
                  control={form.control}
                  formName="bypass1099Validation"
                  label=""
                  placeholder="Bypass 1099 Validation"
                />
              </div>
              <InputForm
                control={form.control}
                formName="address"
                label="Address"
              />
              <div className="flex justify-between">
                <InputForm
                  control={form.control}
                  formName="city"
                  label="City"
                />
                <InputForm
                  control={form.control}
                  formName="state"
                  label="State"
                />
                <InputForm control={form.control} formName="zip" label="Zip" />
              </div>
              <SelectForm
                control={form.control}
                formName="addressType"
                content={addressType}
                valueKey="id"
                displayKey="type"
                label="Address Type"
                placeholder="Select building type..."
              />
              <div className="grid grid-cols-2 gap-5">
                <InputForm control={form.control} formName="SSN" label="SSN" />
                <InputForm control={form.control} formName="EIN" label="EIN" />
              </div>
              <hr className="my-5" />
              <InputForm
                control={form.control}
                formName="contactName"
                label="Contact Name"
              />
              <InputForm
                control={form.control}
                formName="phone "
                label="Phone"
                placeholder="480-000-0000"
              />
              <InputForm
                control={form.control}
                formName="email"
                label="Email"
              />
            </form>
          </Form>
        </section>
        <hr className="my-5 hidden max-xl:block" />
        <DataTable columns={columns} data={tableData} />
      </div>
    </div>
  );
};

export default FinancialVendors;
