"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { adjustmentTable, agentEmailList, usersTable } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Form } from "../ui/form";
import { newAdjustmentCriteriaSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "../Shared/InstantForm";
import Link from "next/link";
import UserDetails from "./UserDetails";

const Users = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Roles", header: "Roles" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "Confirmed", header: "Confirmed" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "LockUnlock", header: "Lock / Unlock" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <h1 className="mt-3 text-center text-2xl font-semibold text-sky-500">
        User Admin Management
      </h1>
      <p className="text-center text-base text-gray-500">
        Select a user to edit or add a new one.
      </p>
      <div className="flex gap-4 max-2xl:flex-wrap">
        <div className="grid flex-auto grid-cols-1 overflow-auto px-2">
          <h2 className="mt-2 text-center text-xl">List of users:</h2>
          <DataTable
            columns={columns}
            data={usersTable}
            enableColumnFilter={true}
            filteredBy="Name"
          />
        </div>
        <div className="mt-8 flex-auto justify-center 2xl:w-2/5">
          <div className="my-4 mr-1 flex justify-end gap-2">
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New Agent
              </Button>
            </Link>
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New User
              </Button>
            </Link>
          </div>
          <UserDetails />
        </div>
      </div>
    </section>
  );
};

const Adjustments = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "Type", header: "Type" },
    { accessorKey: "Amount", header: "Amount" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newAdjustmentCriteriaSchema>>({
    resolver: zodResolver(newAdjustmentCriteriaSchema),
    defaultValues: {
      ResidualDate: "",
      Agent: "",
      AgentID: "",
      AdjustType: "",
      MID: "",
      DBALegal: "",
      Processor: "",
      Amount: "",
      Notes: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newAdjustmentCriteriaSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-2 max-2xl:flex-wrap"
          >
            {/* ADJUSTMENT CRITERIA CARD */}
            <div className="flex-auto">
              <h1 className="my-5 text-center text-xl font-medium">
                Adjustment Criteria
              </h1>

              <div className="m-auto flex w-full gap-4">
                <div className="mt-2 w-1/3 content-center text-end">
                  <p className="">Residual Date</p>
                </div>
                <div className="w-2/3 flex-auto content-center">
                  <DatePickerForm
                    control={form.control}
                    formName="ResidualDate"
                    label=""
                    placeholder="mm/dd/2024"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full gap-4">
                <div className="mt-2 w-1/3 content-center text-end">
                  <p className="">Agent</p>
                </div>
                <div className="w-2/3">
                  <SelectForm
                    control={form.control}
                    formName={"Agent"}
                    label=""
                    placeholder={"Select Agent"}
                    content={agentEmailList}
                    valueKey="Email"
                    displayKey="Name"
                    disabled={false}
                    className=""
                  />
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Agent ID</p>
                <div className="flex w-2/3 gap-2">
                  <div className="flex-1">
                    <InputForm
                      control={form.control}
                      formName={"AgentID"}
                      label=""
                      placeholder=""
                    />
                  </div>
                  <Button className="mt-2 flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90">
                    Search
                  </Button>
                </div>
              </div>

              <hr className="my-7 border" />

              <div>
                <div className="m-auto flex w-full gap-4">
                  <div className="mt-2 w-1/3 content-center text-end">
                    <p className="">Adjust Type</p>
                  </div>
                  <div className="w-2/3">
                    <SelectForm
                      control={form.control}
                      formName={"AdjustType"}
                      label=""
                      placeholder={"Select Adjust Type"}
                      content={agentEmailList}
                      valueKey="Email"
                      displayKey="Name"
                      disabled={false}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">MID</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"MID"}
                    label=""
                    placeholder="Enter MID"
                  />
                </div>
              </div>
              <div className="m-auto my-3 w-full text-end">
                <Button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] px-8 text-white hover:opacity-90">
                  Find / Clear
                </Button>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">DBA/Legal</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"DBALegal"}
                    label=""
                    placeholder="Enter DBA/Legal"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Processor</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Processor"}
                    label=""
                    placeholder="Enter Processor"
                  />
                </div>
              </div>

              <div className="m-auto mt-10 flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Amount</p>
                <div className="w-2/3">
                  <InputForm
                    control={form.control}
                    formName={"Amount"}
                    label=""
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full content-center gap-4">
                <p className="w-1/3 content-center text-end">Notes</p>
                <div className="w-2/3">
                  <TextAreaForm
                    control={form.control}
                    formName={"Notes"}
                    label=""
                    placeholder="Notes..."
                  />
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button className="my-5 bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                  Edit
                </Button>
                <Button className="my-5 bg-gradient-to-r from-[#FF3333] to-[#8F0000] px-10 text-white hover:opacity-90">
                  Delete
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 overflow-auto">
              <DataTable
                columns={columns}
                data={adjustmentTable}
                enableSorting={true}
                enableColumnFilter={true}
                filteredBy="Agent"
              />
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default function RenderUserAdminComponents(value: string) {
  switch (value) {
    case "users":
      return <Users />;
    case "roles":
      return <Adjustments />;
  }
}
