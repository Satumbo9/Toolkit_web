"use client";
import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  blankMPAsAndAddendumsTable,
  changeFormsTable,
  equipmentPricingTable,
} from "@/constants";
import { DataTypes } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import AddFileFinance from "./AddFileFinance";
import { Description } from "@radix-ui/react-dialog";

const BlankMpaAddendums = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "FileName", header: "File Name" },
    { accessorKey: "Size", header: "Size" },
    { accessorKey: "LastUpdate", header: "Last Update" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Blank MPAs & Addendums
      </h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={blankMPAsAndAddendumsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="FileName"
        />
      </div>
    </section>
  );
};

const ChangeForms = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "FileName", header: "File Name" },
    { accessorKey: "Size", header: "Size" },
    { accessorKey: "LastUpdate", header: "Last Update" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Change Forms
      </h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={changeFormsTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="FileName"
        />
      </div>
    </section>
  );
};

const EquipmentPricing = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "FileName", header: "File Name" },
    { accessorKey: "Size", header: "Size" },
    { accessorKey: "LastUpdate", header: "Last Update" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Equipment Pricing
      </h1>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={equipmentPricingTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="FileName"
        />
      </div>
    </section>
  );
};

const UploadAndSendDocuments = () => {
  const renderDialog = [
    {
      id: "1",
      title: "To Finance",
      imgSrc: "/icon/colorful/finance-reports.svg",
      desc: "Send financial documents, CC ACHs, bank ACHs, blank checks, and invoices.",
    },
    {
      id: "2",
      title: "To Shipping and Equipment",
      imgSrc: "/icon/colorful/shipping.svg",
      desc: "Send shipping documents.",
    },
    {
      id: "3",
      title: "To Merchant Support",
      imgSrc: "/icon/colorful/merchant.svg",
      desc: "Send merchant support documents and requests.",
    },
    {
      id: "4",
      title: "To Programming",
      imgSrc: "/icon/colorful/programming.svg",
      desc: "Send programming documents and requests.",
    },
    {
      id: "5",
      title: "To Marketing",
      imgSrc: "/icon/colorful/marketing.svg",
      desc: "Send marketing documents and invoices.",
    },
    {
      id: "6",
      title: "To Applications",
      imgSrc: "/icon/colorful/list.svg",
      desc: "Send applications documents to underwriting department.",
    },
  ];
  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="text-center text-2xl font-medium text-sky-500">
        Upload & Send Documents
      </h1>

      <div className="my-20 grid grid-cols-3 gap-2 px-10">
        {renderDialog.map((item) => {
          return (
            <Dialog key={item.id}>
              <DialogTrigger>
                <div className="h-full space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
                  <h1 className="text-center font-semibold">{item.title}</h1>
                  <div className="flex gap-4 px-2 max-xl:flex-wrap">
                    <Image
                      className="m-auto flex-none"
                      src={item.imgSrc}
                      alt="Logo"
                      width={60}
                      height={60}
                      priority
                    />
                    <p className="flex-auto content-center justify-start text-start text-sm max-xl:text-center max-xl:text-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="2xl:[600px] max-lg:max-w-[600px] lg:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="mb-5 text-center text-2xl font-semibold text-sky-500">
                    Attach File
                  </DialogTitle>
                  <Description />
                  <AddFileFinance />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </section>
  );
};

export default function RenderDocLibraryTabComponents(value: any) {
  switch (value) {
    case "blankMpaAndAddendums":
      return <BlankMpaAddendums />;
    case "changeForms":
      return <ChangeForms />;
    case "equipmentPricing":
      return <EquipmentPricing />;
    case "uploadAndSendDocs":
      return <UploadAndSendDocuments />;
  }
}
