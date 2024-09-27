/* eslint-disable react-hooks/exhaustive-deps */
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
import { Info, Send } from "lucide-react";

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
    setEmailSent(true);
  };

  const [data, setData] = useState<string | null>();
  const [emailSent, setEmailSent] = useState<boolean>(false);

  let result;
  useEffect(() => {
    async function fetchData() {
      try {
        result = await getUser();
        setData(result?.username);
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [data]);

  return (
    <section className="m-auto gap-2 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="-m-5 flex gap-2 rounded-b-3xl rounded-tr-lg bg-zinc-100 p-10 px-20 dark:bg-zinc-800 max-xl:flex-wrap">
            <div className="w-1/2 flex-none max-xl:w-full">
              <div className="mx-auto my-20 max-w-md gap-2 space-y-2">
                <div className="">
                  <div className="justify-center">
                    <Send className="m-auto my-3 size-10" />
                  </div>
                  <h1 className="text-center text-2xl font-semibold text-sky-500">
                    Merchant Processing Application
                  </h1>
                  <p className="text-center">
                    You can send up to 30 Leads per day. (You have{" "}
                    <b className="text-sky-500">22</b> more)
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
                  placeholder="Select the lead type"
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
                  {emailSent && (
                    <p className="m-auto w-min text-nowrap rounded-full bg-green-500 px-5 py-2 text-white">
                      Email sent!
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/2 flex-none px-3 max-xl:w-full">
              <div className="my-5 flex items-center justify-center gap-2">
                <Info />
                <h2 className="text-2xl font-semibold">How to send a Lead?</h2>
              </div>
              <p className="my-5 w-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolor odio quidem. Fugiat vitae dignissimos deserunt
                dolorem nobis rem quos distinctio veniam quasi quod, nostrum
                iure voluptas ipsum, autem ut. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique exercitationem expedita
                id quo eveniet? Maiores, similique ex doloribus culpa quidem
                error aut eius tempore, incidunt doloremque quisquam, placeat
                cum quae.
              </p>
              <ul>
                <li className="ml-6 list-disc">
                  Step 1: This is the first step.
                </li>
                <li className="ml-6 list-disc">
                  Step 2: This is the second step.
                </li>
                <li className="ml-6 list-disc">
                  Step 3: This is the third step.
                </li>
              </ul>
              <p className="my-5 w-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dolor odio quidem. Fugiat vitae dignissimos deserunt
                dolorem nobis rem quos distinctio veniam quasi quod, nostrum
                iure voluptas ipsum, autem ut. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique exercitationem expedita
                id quo eveniet? Maiores, similique ex doloribus culpa quidem
                error aut eius tempore, incidunt doloremque quisquam, placeat
                cum quae.
              </p>
            </div>
          </div>
          {/* <hr className="mb-2 mt-16" /> */}
          <h2 className="mt-16 flex justify-center gap-2 text-center text-2xl font-semibold">
            Leads Sent from{" "}
            {data ? <div className="text-sky-500">{data}</div> : null}
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
