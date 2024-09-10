import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { agentData } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import CustomButtons from "../Shared/CustomButtons";

const FDOmaha = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <div className="my-5 h-auto text-center">
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable columns={columns} data={agentData} enableVisibility={true} />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="grid grid-cols-2">
          <p>Schedule A</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <CustomButtons btnType="primary">Print Schedule A</CustomButtons>
          <CustomButtons btnType="primary">Apply Schedule A</CustomButtons>
        </div>

        <div className="grid grid-cols-2">
          <p>Common Name</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Common Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end">
          <CustomButtons btnType="primary">Add an Item</CustomButtons>
        </div>
        <div className="grid grid-cols-2">
          <p>Item Type</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">1</SelectItem>
              <SelectItem value="option2">2</SelectItem>
              <SelectItem value="option3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end">
          <CustomButtons btnType="primary">Update Item</CustomButtons>
        </div>
        <div className="grid grid-cols-2">
          <p>item Rate</p>
          <Input placeholder="0" />
        </div>
        <div className="flex justify-end">
          <CustomButtons btnType="destructive">Delete Item</CustomButtons>
        </div>
      </div>
    </div>
  );
};

const FDNorth = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
  ];

  const columns = createColumns(columnsConfig);
  return (
    <div className="flex w-fit flex-col">
      <div className="my-5 text-center">
        <div className="grid grid-cols-1 overflow-auto"></div>
        <DataTable columns={columns} data={agentData} enableVisibility={true} />
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="grid grid-cols-2">
            <p>Schedule A</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Common Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col justify-center gap-2">
            <CustomButtons btnType="primary">Print Schedule A</CustomButtons>
            <CustomButtons btnType="primary">Apply Schedule A</CustomButtons>
          </div>

          <div className="grid grid-cols-2">
            <p>Common Name</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Common Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <CustomButtons btnType="primary">Add an Item</CustomButtons>
          </div>
          <div className="grid grid-cols-2">
            <p>Item Type</p>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="0" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">1</SelectItem>
                <SelectItem value="option2">2</SelectItem>
                <SelectItem value="option3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <CustomButtons btnType="primary">Update Item</CustomButtons>
          </div>
          <div className="grid grid-cols-2">
            <p>item Rate</p>
            <Input placeholder="0" />
          </div>
          <div className="flex justify-end">
            <CustomButtons btnType="destructive">Delete Item</CustomButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

const Splits = () => {
  const data = [
    {
      id: 1,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 2,
      title: "Micamp Solutions",
      digits: 0,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 3,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 4,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 5,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 6,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 7,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
    {
      id: 8,
      title: "2G Financial LLC",
      digits: 0.78,
      options: [
        {
          id: 1,
          option: "Option 1",
          value: "opt1",
        },
        {
          id: 2,
          option: "Option 2",
          value: "opt2",
        },
      ],
    },
  ];

  return (
    <div className="mt-5 flex w-full flex-col space-y-4">
      {/* This section's gonna be changing in the future. For now it's just a dummy. */}
      <div className="flex items-center gap-4">
        <p className="w-1/4 text-end">Split Name</p>
        <div className="w-3/4 px-2">
          <Checkbox className="" /> DEFAULT
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="w-1/4 text-end">Sales Rep</p>
        <div className="w-3/4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="2G Financial LLC" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="my-10">
        {data.map((item) => {
          return (
            <div key={item.id} className="my-3 grid grid-cols-3 gap-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={item.title} />
                  <SelectContent>
                    {item.options.map((opt) => (
                      <SelectItem
                        key={opt.id}
                        value={opt.value}
                        className="my-2"
                      >
                        {opt.option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>

              <Input placeholder={item.digits.toString()} />

              <section className="flex items-center justify-center">
                <span className="flex gap-5">
                  <Checkbox defaultChecked />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </span>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Calculations = () => {
  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
    return <div className="text-start font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "price", header: "Price", cell: Price },
  ];

  const columns = createColumns(columnsConfig);
  const data = [
    {
      id: 1,
      date: new Date("2022-05-12"),
      price: 100.5,
    },
    {
      id: 2,
      date: new Date("2021-11-25"),
      price: 105.25,
    },
    {
      id: 3,
      date: new Date("2020-07-18"),
      price: 110.0,
    },
    {
      id: 4,
      date: new Date("2022-02-20"),
      price: 115.75,
    },
    {
      id: 5,
      date: new Date("2019-09-15"),
      price: 120.5,
    },
    {
      id: 6,
      date: new Date("2021-04-28"),
      price: 125.25,
    },
    {
      id: 7,
      date: new Date("2020-01-01"),
      price: 130.0,
    },
    {
      id: 8,
      date: new Date("2018-06-22"),
      price: 135.75,
    },
    {
      id: 9,
      date: new Date("2022-03-17"),
      price: 140.5,
    },
    {
      id: 10,
      date: new Date("2019-12-24"),
      price: 145.25,
    },
    {
      id: 11,
      date: new Date("2021-08-11"),
      price: 150.0,
    },
    {
      id: 12,
      date: new Date("2020-04-09"),
      price: 155.75,
    },
    {
      id: 13,
      date: new Date("2018-02-27"),
      price: 160.5,
    },
    {
      id: 14,
      date: new Date("2022-01-05"),
      price: 165.25,
    },
    {
      id: 15,
      date: new Date("2019-06-19"),
      price: 170.0,
    },
    {
      id: 16,
      date: new Date("2021-03-25"),
      price: 175.75,
    },
    {
      id: 17,
      date: new Date("2020-09-02"),
      price: 180.5,
    },
    {
      id: 18,
      date: new Date("2018-11-15"),
      price: 185.25,
    },
    {
      id: 19,
      date: new Date("2022-06-01"),
      price: 190.0,
    },
    {
      id: 20,
      date: new Date("2019-01-08"),
      price: 195.75,
    },
  ];
  return (
    <div className="mt-5">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default function RenderComponents(value: string) {
  switch (value) {
    case "fd-omaha":
      return <FDOmaha />;
    case "fd-north":
      return <FDNorth />;
    case "splits":
      return <Splits />;
    case "calculations":
      return <Calculations />;
  }
}
