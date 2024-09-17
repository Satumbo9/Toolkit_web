/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { InputForm, SelectForm } from "@/components/Shared/InstantForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { agentCompanyNameSelectList, merchantForAgentTable } from "@/constants";
import { searchMerchantSchema } from "@/lib/utils";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ColumnLink, Status } from "@/components/Shared/DataTable/CellFormat";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "Id" },
    { accessorKey: "MID", header: "MID" },
    {
      accessorKey: "DBA",
      header: "DBA",
      cell: (row) => ColumnLink(row.getValue(), "/boarding/merch/edit"),
    },
    {
      accessorKey: "Status",
      header: "Status",
      cell: (value) => (
        <Status
          row={value}
          status={{
            Success: ["Approved"],
            Failed: ["Closed", "Cancelled"],
            Pending: ["In Progress", "Waiting"],
          }}
        />
      ),
    },
    { accessorKey: "OpenDate", header: "Open date" },
    { accessorKey: "ClosedDate", header: "Closed Date" },
    { accessorKey: "Processor", header: "Processor" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof searchMerchantSchema>>({
    resolver: zodResolver(searchMerchantSchema),
    defaultValues: {
      MerchantName: "",
      Agent: "",
    },
  });

  const onSubmit = (value: z.infer<typeof searchMerchantSchema>) => {
    console.log(value);
  };

  const onAnotherPage = () => {
    router.push("/boarding/merch/edit");
  };
  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2">
          <h1 className="my-5 text-center text-xl font-medium text-sky-500">
            Find Merchants & Order Equipment
          </h1>

          {/* SEARCH DIV */}
          <div className="w-3/6 space-y-2 max-xl:w-5/6">
            <div className="m-auto flex w-full items-end gap-2">
              <div className="w-3/4">
                <InputForm
                  control={form.control}
                  formName={"MerchantName"}
                  label="Search by the Merchant's Name"
                  placeholder="Search for names..."
                />
              </div>
              <Button className="mt-2 flex-auto bg-gradient-to-r from-[#14ADD6] to-[#384295] px-2 text-white hover:opacity-90">
                Search For Merchant
              </Button>
            </div>
            <div className="w-3/4">
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
          </div>

          <h3 className="mt-10 text-xl font-semibold">
            Merchants for agent: Agents Name
          </h3>
          <div className="grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={merchantForAgentTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="DBA"
              actionsColumn={true}
              editFunction={onAnotherPage}
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

export default page;
