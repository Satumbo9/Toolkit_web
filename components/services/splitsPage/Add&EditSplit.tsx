import { Price } from "@/components/Shared/DataTable/CellFormat";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  DatePickerForm,
  InputForm,
  SelectForm,
  TextAreaForm,
} from "@/components/Shared/InstantForm";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { DataTypes } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { documentsTable } from "@/constants";

const AddEditSplit = ({ isNewOrEdit, setIsNewOrEdit }: any) => {
  const AddSplitSchema = z.object({
    splitID: z.string(),
    merchantID: z.string(),
    merchantMID: z.string(),
    merchantName: z.string(),
    splitSequence: z.string(),
    linkToParent: z.string(),
    funderName: z.string(),
    splitStartDate: z.string(),
    splitEndDate: z.string(),
    fundingBase: z.string(),
    fundingRepay: z.string(),
    splitRate: z.string(),
    splitStatus: z.string(),
    notes: z.string().optional(),
  });

  const form = useForm<z.infer<typeof AddSplitSchema>>({
    resolver: zodResolver(AddSplitSchema),
    defaultValues: {
      splitID: "",
      merchantID: "",
      merchantMID: "",
      merchantName: "",
      splitSequence: "",
      linkToParent: "",
      funderName: "",
      splitStartDate: "",
      splitEndDate: "",
      fundingBase: "",
      fundingRepay: "",
      splitRate: "",
      splitStatus: "",
      notes: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddSplitSchema>) => {
    console.log(values);
  };

  const renderForm = [
    { id: 1, title: "Split ID", value: "splitId" },
    { id: 2, title: "Merchant ID", value: "merchantId" },
    { id: 3, title: "Merchant Name", value: "merchantName" },
    { id: 4, title: "Split Sequence", value: "splitSequence" },
    { id: 5, title: "Link To Parent", value: "linkToParent" },
    { id: 6, title: "Funder Name", value: "funderName" },
    {
      id: 7,
      title: "Split Start Date",
      value: "splitStartDate",
      button: "Create Split File",
    },
    {
      id: 8,
      title: "Split End Date",
      value: "splitEndDate",
      button: "Create Term File",
    },
    { id: 9, title: "Funding Base", value: "fundingBase" },
    { id: 10, title: "Funding Repay", value: "fundingRepay" },
    { id: 11, title: "Split Rate", value: "splitRate" },
    { id: 12, title: "Split Status", value: "splitStatus" },
    { id: 13, title: "Notes", value: "notes" },
  ];

  const linkToParentsData = [
    {
      id: 1,
      title: "Link 1",
      value: "link1",
    },
    {
      id: 2,
      title: "Link 2",
      value: "link2",
    },
    {
      id: 3,
      title: "Link 3",
      value: "link3",
    },
  ];

  const batchData = [
    {
      Id: 1,
      Batch: 100.0,
      Split: 0.05,
      Adjust: 0.0,
      Balance: 100.0,
    },
    {
      Id: 2,
      Batch: 200.0,
      Split: 0.1,
      Adjust: 5.0,
      Balance: 200.0,
    },
    {
      Id: 3,
      Batch: 50.0,
      Split: 0.03,
      Adjust: -2.0,
      Balance: 50.0,
    },
    {
      Id: 4,
      Batch: 150.0,
      Split: 0.07,
      Adjust: 0.0,
      Balance: 150.0,
    },
    {
      Id: 5,
      Batch: 80.0,
      Split: 0.02,
      Adjust: 3.0,
      Balance: 80.0,
    },
    {
      Id: 6,
      Batch: 250.0,
      Split: 0.12,
      Adjust: -1.0,
      Balance: 250.0,
    },
    {
      Id: 7,
      Batch: 120.0,
      Split: 0.08,
      Adjust: 0.0,
      Balance: 120.0,
    },
    {
      Id: 8,
      Batch: 90.0,
      Split: 0.04,
      Adjust: 2.0,
      Balance: 90.0,
    },
    {
      Id: 9,
      Batch: 180.0,
      Split: 0.09,
      Adjust: -3.0,
      Balance: 180.0,
    },
    {
      Id: 10,
      Batch: 110.0,
      Split: 0.06,
      Adjust: 0.0,
      Balance: 110.0,
    },
  ];

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Batch", header: "Batch", cell: Price },
    { accessorKey: "Split", header: "Split", cell: Price },
    { accessorKey: "Adjust", header: "Adjust", cell: Price },
    { accessorKey: "Balance", header: "Balance", cell: Price },
  ];
  const columnsConfig2: ColumnConfig<DataTypes>[] = [
    { accessorKey: "DocType", header: "Doc Type" },
    { accessorKey: "Historic", header: "Historic" },
    { accessorKey: "DocName", header: "Doc Name" },
    { accessorKey: "FileSize", header: "File Size" },
    { accessorKey: "UploadDateTime", header: "UploadDateTime" },
  ];

  const columns = createColumns(columnsConfig);
  const columns2 = createColumns(columnsConfig2);

  return (
    <React.Fragment>
      <h1 className="mb-5 text-3xl text-blue-500">Add Split</h1>
      <div className="grid grid-cols-[30%_70%] gap-2">
        <section>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {renderForm.map((item) =>
                item.value === "splitId" || item.value === "merchantId" ? (
                  <div key={item.id}>
                    <InputForm
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                    />
                  </div>
                ) : item.value === "linkToParent" ? (
                  <SelectForm
                    key={item.id}
                    control={form.control}
                    formName={item.value}
                    content={linkToParentsData}
                    valueKey={"id"}
                    displayKey={"title"}
                    label={item.title}
                    placeholder="Select link to parents..."
                  />
                ) : item.button ? (
                  <div className="grid grid-cols-2 gap-5">
                    <DatePickerForm
                      control={form.control}
                      formName={item.value}
                      label={item.title}
                      placeholder={`Select ${item.title}`}
                    />
                    <div className="mt-5 flex justify-end">
                      <Button>{item.button}</Button>
                    </div>
                  </div>
                ) : item.value === "notes" ? (
                  <TextAreaForm
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ) : (
                  <InputForm
                    control={form.control}
                    formName={item.value}
                    label={item.title}
                  />
                ),
              )}

              <div className="mt-5 flex justify-between">
                <span className="space-x-5">
                  <Button>Save</Button>
                  <Button onClick={() => setIsNewOrEdit(!isNewOrEdit)}>
                    Cancel
                  </Button>
                  <Button>Upload File</Button>
                </span>
                <Button variant={"destructive"}>Delete</Button>
              </div>
            </form>
          </Form>
        </section>

        <section>
          <DataTable columns={columns} data={batchData} />
          <hr className="my-5" />
          <div className="flex flex-col">
            <span className="mb-5 flex items-center justify-center gap-5">
              <span>
                <Checkbox /> Show Deleted Documents
              </span>
              <Button className="rounded-full">
                <Plus />
              </Button>
              <Button variant={"destructive"} className="rounded-full">
                <Minus />
              </Button>
            </span>
            <DataTable columns={columns2} data={documentsTable} />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AddEditSplit;
