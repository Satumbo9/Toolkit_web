import React from "react";
import { Badge } from "@/components/ui/badge";
import CustomButtons from "../CustomButtons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type StatusTypes = {
  Success?: string[];
  Failed?: string[];
  Pending?: string[];
};

interface StatusProps {
  row: any;
  status: StatusTypes;
}

/**
 * Read the doc!!

* This is a cell format for price, you can use it by importing it and throw it in a cell row.
 */
export const Price = (row: any) => {
  const amount = parseFloat(row.getValue("price"));
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return <div className="text-start font-medium">{formatted}</div>;
};

/**
 * Read the doc!!
 
* This is a cell format for status, here's how you can use it.
 
* - Step 1: import Status from folder components/Shared/DataTable/CellFormat.tsx

* - Step 2: Declare it in the "cell: ..." row. Here's how
 
* const columnsConfig: ColumnConfig<DataTypes>[] = [{accessorKey: 'status', header: 'Status', cell: (value) => <Status row={value} status={{Success: ['Active', 'Shipped', 'Paid', ...Whatever words you have to display as success], Failed: ['Cancelled', 'Refunded', 'Rejected', ...], Pending: ['Pending', 'Delayed', 'On Hold', ...]}} />}]
 
* - Done, happy coding! 
 * @param row
 * @param status
 */
export const Status: React.FC<StatusProps> = ({ row, status }) => {
  const value = row.getValue();

  const getStatusBadge = (value: any) => {
    if (status.Success?.includes(value)) {
      return (
        <Badge className="text-nowrap" variant={"success"}>
          {value}
        </Badge>
      );
    }
    if (status.Failed?.includes(value)) {
      return (
        <Badge className="text-nowrap" variant={"destructive"}>
          {value}
        </Badge>
      );
    }
    if (status.Pending?.includes(value)) {
      return (
        <Badge className="text-nowrap" variant={"default"}>
          {value}
        </Badge>
      );
    }
    return <></>;
  };

  return getStatusBadge(value);
};

export const Percentage = (row: string | number | any) => {
  const value = row.getValue("percentage");

  return <span>%{value.toFixed(2)}</span>;
};

/**
 * Used on the tables to show the next step of the MPA application on Boarding.
 *
 * @todo In the future, implement the Link. (just generic for now)
 * @param row Pass the column with the next step name.
 */
export const NextStep = (row: string) => {
  return (
    <CustomButtons
      className="relative w-full text-nowrap max-lg:text-xs"
      btnType="primary"
    >
      {row}
      <i className="absolute right-2 h-full content-center">
        {React.createElement(ArrowRight, {
          style: { width: "15px", height: "15px" },
        })}
      </i>
    </CustomButtons>
  );
};

/**
 * Column with the link to redirect the user to another page. (generic for now)
 * @todo  Add the ID of the merchant on the future to link it to the right merchant
 * @param row  The column item from the row.
 * @param link  This is the link the user will be redirected.
 * @param id (number)  The id of the merchant you must open.
 */
export const ColumnLink = (row: string, link: string, id?: number) => {
  if (id === null || id === undefined) id = 0;
  return (
    <Link href={`${link}?id=${id}`} className="w-full text-nowrap">
      <p
        title={`Go to Merchant => ${row.toString()}`}
        className="text-base font-semibold text-sky-500 underline"
      >
        {row}
      </p>
    </Link>
  );
};
