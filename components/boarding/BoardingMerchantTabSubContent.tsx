"use client";
import React, { useState } from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  contactInfoMerchantForm,
  dbaInfoForm,
  dbaSelectionMerchantForm,
  merchantBillingForm,
  merchantEquipmentOrderTable,
  merchantEquipmentTrackingTable,
  merchantInfoEditForm,
  merchantOptionsForm,
  ModelSelectList,
} from "@/constants";
import { DataTypes } from "@/types";
import { Form } from "../ui/form";
import {
  boardingMerchantInfoSchema,
  newFspLeadSchema,
  newNorthBlindLeadSchema,
  newOrderInfoSchema,
} from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FormGeneration,
  InputButtonForm,
  InputForm,
  SelectForm,
  SwitchForm,
} from "../Shared/InstantForm";
import UploadFileBtn from "../ui/UploadButton";
import CustomButtons from "../Shared/CustomButtons";

const MerchantInformation = () => {
  const form = useForm<z.infer<typeof boardingMerchantInfoSchema>>({
    resolver: zodResolver(boardingMerchantInfoSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      ContactName: "",
      Address: "",
      SteApt: "",
      City: "",
      State: "",
      Zip: "",
      phone1: "",
      Ext1: "",
      Phone2: "",
      Ext2: "",
      Email: "",
      DbaLegalName: "",
      DbaContactName: "",
      DbaAddress: "",
      DbaSteApt: "",
      DbaCity: "",
      DbaState: "",
      DbaZip: "",
    },
  });

  const onSubmit = (value: z.infer<typeof boardingMerchantInfoSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <h1 className="mt-10 text-xl font-medium text-sky-500">
            Merchant Details
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={merchantInfoEditForm}
            gridCols={"4"}
          />
          <br />
          <br />
          <FormGeneration
            formControl={form.control}
            formFields={dbaInfoForm}
            gridCols={"4"}
          />
          <div className="mt-0 flex justify-end p-0 max-2xl:justify-center">
            <Button className="px-10 text-white" variant={"submit"}>
              Send
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

const EquipmentOrders = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Serial", header: "Serial" },
    { accessorKey: "Tracking", header: "Tracking" },
    { accessorKey: "Price", header: "Price" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Edit", header: "Edit" },
    { accessorKey: "Delete", header: "Delete" },
  ];

  const columns = createColumns(columnsConfig);

  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "ContactName", header: "Contact Name" },
    { accessorKey: "CompanyName", header: "Company Name" },
    { accessorKey: "Address", header: "Address" },
    { accessorKey: "CityStZip", header: "City / State / Zip" },
    { accessorKey: "DimW", header: "Dimens. (W)" },
    { accessorKey: "Service", header: "Service" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Tracking", header: "Tracking" },
    { accessorKey: "Details", header: "Details" },
  ];

  const columns2 = createColumns(columnsConfig2);

  const form = useForm<z.infer<typeof newNorthBlindLeadSchema>>({
    resolver: zodResolver(newNorthBlindLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newNorthBlindLeadSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <h1 className="mt-10 text-xl font-medium text-sky-500">
            Equipment Orders
          </h1>
          <p className="text-base">
            <b>Merchant:</b> Puerto del Sur
          </p>
          <p className="text-base">
            <b>Agent:</b> Express Payment Solution (SOLD)
          </p>

          <div className="grid grid-cols-1 overflow-auto">
            <h2 className="text-center text-2xl font-semibold text-sky-500">
              Equipments
            </h2>
            <DataTable
              columns={columns}
              data={merchantEquipmentOrderTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Description"
            />
          </div>
          <div className="mt-5 grid grid-cols-1 overflow-auto">
            <h2 className="text-center text-2xl font-semibold text-sky-500">
              Tracking
            </h2>
            <DataTable
              columns={columns2}
              data={merchantEquipmentTrackingTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="ContactName"
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

const OrderNewEquipment = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Description", header: "Description" },
    { accessorKey: "Serial", header: "Serial" },
    { accessorKey: "Tracking", header: "Tracking" },
    { accessorKey: "Price", header: "Price" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "Edit", header: "Edit" },
    { accessorKey: "Delete", header: "Delete" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newOrderInfoSchema>>({
    resolver: zodResolver(newOrderInfoSchema),
    defaultValues: {
      ModelType: "",
      Quantity: 0,
      AgentCompanyName: "",
      Warrantly: false,
      WillPayByACH: false,
      Billing: false,
      ShippingMethod: false,
      UseLegalDbaInfo: false,
      ContactName: "",
      Address: "",
      Address2: "",
      City: "",
      State: "",
      PostalCode: "",
      ContactPhone: "",
      ContactEmail: "",
      UploadAchForm: "",
      UploadProgRequest: z.any(),
    },
  });

  const onSubmit = (value: z.infer<typeof newOrderInfoSchema>) => {
    console.log(value);
  };

  const [activeSwitchId, setActiveSwitchId] = useState<string | number>();
  const handleToggle = (id: string | number) => {
    console.log(id);
    setActiveSwitchId((prevId) => (prevId === id ? undefined : id));
  };
  const [shipPriority, setShipPriority] = useState("2 Days");
  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mt-5 flex items-center justify-between">
            <h1 className="text-xl font-medium text-sky-500">
              Order New Equipment
            </h1>
            <div className="flex gap-2">
              <Button>View Prog. Request</Button>
              <Button>View Bank ACH</Button>
              <Button>View CC ACH</Button>
            </div>
          </div>
          <div className="my-5 grid grid-cols-5 gap-2">
            <SelectForm
              control={form.control}
              formName="ModelType"
              label="Model Type:"
              placeholder="Select a Model"
              content={ModelSelectList}
              displayKey="title"
              valueKey={"value"}
            />
            <InputForm
              control={form.control}
              formName="Quantity"
              label="Quantity:"
              placeholder="1"
            />
            <InputForm
              control={form.control}
              formName="AgentCompanyName"
              label="Agent / Company Name:"
              placeholder="Insert a name"
              className=""
            />
          </div>
          <h1 className="text-xl font-medium text-sky-500">
            Shipping Information
          </h1>
          <span className="text-sm">
            {`(Choose an item from the inventory dropdown. Specify billing preference and shipping address. 
          Check 'Will pay by ACH or Invoice' & Upload a completed ACH if necessary.)`}
          </span>
          <div className="w-full">
            {/* Options / Billing */}
            <div className="my-5 flex gap-20">
              <div className="flex-auto">
                <p className="mb-2 mt-4">Options:</p>
                <FormGeneration
                  formControl={form.control}
                  formFields={merchantOptionsForm}
                  gridCols={"1"}
                />
              </div>
              <div className="flex-auto content-end">
                <p className="mt-4">Billing:</p>
                <FormGeneration
                  formControl={form.control}
                  formFields={merchantBillingForm}
                  gridCols={"6"}
                />
              </div>
            </div>
            {/* SHIPPING METHOD */}
            <div className="flex-auto content-end">
              <p className="my-3 text-center text-xl font-semibold">
                Shipping Method:
              </p>
              <div className="m-auto grid max-w-[1000px] grid-cols-5 gap-2">
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"Ground"}
                  type="button"
                  value={"Ground"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "Ground"}
                  onChange={() => setShipPriority("Ground")}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"2 Days"}
                  type="button"
                  value={"2 Days"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "2 Days"}
                  onChange={() => setShipPriority("2 Days")}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"3 Days"}
                  type="button"
                  value={"3 Days"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "3 Days"}
                  onChange={() => setShipPriority("3 Days")}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"Standard"}
                  type="button"
                  value={"Standard"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "Standard"}
                  onChange={() => setShipPriority("Standard")}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"Priority"}
                  type="button"
                  value={"Priority"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "Priority"}
                  onChange={() => setShipPriority("Priority")}
                />
              </div>
            </div>
            {/* DBA Address Selection */}
            <div className="my-5 flex justify-center gap-6 max-xl:block max-xl:space-y-2">
              {dbaSelectionMerchantForm.map((item) => (
                <SwitchForm
                  key={item.id}
                  control={form.control}
                  formName={item.formName}
                  label={item.title}
                  id={item.id}
                  isActive={activeSwitchId === item.id}
                  onToggle={handleToggle}
                />
              ))}
            </div>
            {/* CONTACT INFORMATION */}
            <div className="w-full">
              <p className="my-2 text-xl font-semibold text-sky-500">
                Contact Information
              </p>
              <FormGeneration
                formControl={form.control}
                formFields={contactInfoMerchantForm}
                gridCols={"3"}
              />
            </div>
          </div>

          <div className="my-3 flex justify-end p-0 max-2xl:justify-center">
            <Button className="px-10" variant={"submit"}>
              Save
            </Button>
          </div>

          <div className="grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={merchantEquipmentOrderTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Description"
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

const UploadDocuments = () => {
  const form = useForm<z.infer<typeof newFspLeadSchema>>({
    resolver: zodResolver(newFspLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newFspLeadSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <h1 className="mt-10 text-xl font-medium text-sky-500">
            Upload Documents
          </h1>
          <p className="mb-10 text-base">
            * Choose file(s) and click Save. (Click on the filenames to view
            them.)
          </p>
          {/* MERCHANT DOCUMENTS */}
          <div className="grid grid-cols-2 gap-2 max-xl:grid-cols-1">
            {/* UPLOAD VOIDED CHECK / BANK LETTER */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Voided Check / Bank Letter
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD DRIVER'S LICENSE */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                {"Upload Driver's License"}
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD BANK STATEMENT */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Bank Statement
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD PROCESSOR STATEMENT */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Processor Statement
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-max">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
          </div>
          {/* SAVE MERCHANT DOCUMENTS BUTTON */}
          <div className="my-5 flex justify-end p-0 max-2xl:justify-center">
            <CustomButtons className="px-10" btnType="default">
              Save Changes
            </CustomButtons>
          </div>

          {/* OTHER DOCUMENTS */}
          <h1 className="mt-10 text-xl font-medium text-sky-500">
            Other Documents
          </h1>
          <p className="mb-10 text-base">
            * Choose file(s) and click Save. (Click on the filenames to view
            them.)
          </p>
          <div className="grid grid-cols-2 gap-2 max-xl:grid-cols-1">
            {/* UPLOAD TAX DOCUMENTS */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Tax Documents
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD COMPANY BUSINESS DOCUMENTS */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Company / Business Documents
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD CERTIFICATIONS */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Certifications
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD ACH FORMS */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload ACH Forms
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-max">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD OTHER IDENTIFICATION DOCUMENTS */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Other Identification Documents
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-full">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
            {/* UPLOAD MISCELLANEOUS DOCUMENTS */}
            <div className="rounded-md border p-4">
              <h3 className="mb-4 text-xl font-semibold text-sky-500">
                Upload Miscellaneous Documents
              </h3>
              <div className="flex gap-2">
                <div className="w-fit flex-none space-y-3">
                  <UploadFileBtn />
                  <CustomButtons btnType="primary" className="w-max">
                    Send Upload Link
                  </CustomButtons>
                </div>

                <div className="flex-auto p-2">
                  <p>1. Docname1.pdf</p>
                  <p>2. Docname1.pdf</p>
                  <p>3. </p>
                </div>
              </div>
            </div>
          </div>
          {/* SAVE OTHER DOCUMENTS BUTTON */}
          <div className="my-5 flex justify-end p-0 max-2xl:justify-center">
            <CustomButtons className="px-10" btnType="default">
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default function RenderBoardingMerchantTabComponents(value: string) {
  switch (value) {
    case "merchantInformation":
      return <MerchantInformation />;
    case "equipmentOrders":
      return <EquipmentOrders />;
    case "orderNewEquipment":
      return <OrderNewEquipment />;
    case "uploadDocuments":
      return <UploadDocuments />;
  }
}
