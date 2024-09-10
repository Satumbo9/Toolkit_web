import React from "react";
import { Form } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { newRecentOrdersSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePickerForm } from "../Shared/InstantForm";
import { Button } from "../ui/button";
import { RecentOrderTable } from "@/constants";
import DataTable from "../Shared/DataTable/DataTable";
import { ColumnConfig, createColumns } from "../Shared/DataTable/Columns";
import { DataTypes } from "@/types";

const RecentOrdersSection = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DBA", header: "DBA" },
    { accessorKey: "Date", header: "Date" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "MID", header: "MID" },
    { accessorKey: "Order", header: "Order #" },
    { accessorKey: "Agent", header: "Agent" },
    { accessorKey: "Tracking", header: "Tracking" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof newRecentOrdersSchema>>({
    resolver: zodResolver(newRecentOrdersSchema),
    defaultValues: {
      FromDate: "",
      ToDate: "",
    },
  });

  const onSubmit = (value: z.infer<typeof newRecentOrdersSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="text-start">
        <div className="grid grid-cols-1 overflow-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="flex justify-around gap-4 max-xl:flex-wrap">
                <div className="flex flex-auto gap-2">
                  <div className="flex content-center gap-2">
                    <label className="mt-1 content-center text-nowrap font-medium">
                      From Date
                    </label>
                    <div className="content-center">
                      <DatePickerForm
                        control={form.control}
                        formName="FromDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                  <div className="flex content-center gap-2">
                    <label className="mt-1 content-center text-nowrap font-medium">
                      To Date
                    </label>
                    <div className="content-center">
                      <DatePickerForm
                        control={form.control}
                        formName="ToDate"
                        label=""
                        placeholder="mm/dd/2024"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex-auto content-center text-end">
                  <Button className="bg-gradient-to-r from-[#14ADD6] to-[#384295] px-10 text-white hover:opacity-90">
                    + Add New
                  </Button>
                </div>
              </div>
              <div className="grid overflow-auto">
                <DataTable
                  columns={columns}
                  data={RecentOrderTable}
                  enableSorting={true}
                  enableColumnFilter={true}
                  filteredBy="DBA"
                />
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default RecentOrdersSection;
