"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { LeadTypesList, LeadsTable } from "@/constants";
import { DataTypes } from "@/types";
import { Form } from "../ui/form";
import { newLeadSchema } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputForm, SelectForm } from "../Shared/InstantForm";
import { getUser } from "@/constants/actions/user.action";
import { Send } from "lucide-react";

const Leads = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Date", header: "Sent Date" },
    { accessorKey: "Type", header: "Lead Type" },
    { accessorKey: "Status", header: "Status" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newLeadSchema>>({
    resolver: zodResolver(newLeadSchema),
    defaultValues: {
      Email: "",
      Name: "",
      LeadType: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newLeadSchema>) => {
    console.log(value);
  };

  const [data, setData] = useState<string | null>();
  let result;
  useEffect(() => {
    async function fetchData() {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        result = await getUser();
        setData(result?.username);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="m-auto gap-2 text-start max-2xl:flex-wrap">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="mx-auto my-20 max-w-lg gap-2 space-y-2">
            <div className="">
              <div className="justify-center">
                <Send className="m-auto my-3 size-10" />
              </div>
              <h1 className="text-center text-2xl font-semibold text-sky-500">
                Merchant Processing Application
              </h1>
              <p className="text-center">
                You can send up to 15 Leads per day. (You have 15 more)
              </p>
            </div>
            <InputForm
              control={form.control}
              formName="Email"
              label="Email"
              placeholder="Insert a valid Email"
            />
            <InputForm
              control={form.control}
              formName="Name"
              label="Name:"
              placeholder="Insert a name"
            />
            <SelectForm
              control={form.control}
              formName="LeadType"
              label="Lead Type:"
              placeholder="Select the Lead"
              content={LeadTypesList}
              displayKey="title"
              valueKey="value"
            />
            <div className="">
              <Button
                className="my-4 flex w-full gap-2 px-10 text-white"
                variant={"submit"}
              >
                Send Lead
              </Button>
            </div>
          </div>
          <hr className="mb-2 mt-16" />
          <h2 className="mt-5 text-center text-2xl font-semibold">
            Leads Sent from {data ? <>{data}</> : null}
          </h2>
          <p className="text-center text-lg text-gray-400">
            These are the leads sent on the last 30 days.
          </p>
          <div className="grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={LeadsTable}
              enableSorting={true}
              enableColumnFilter={true}
              filteredBy="Name"
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Leads;
