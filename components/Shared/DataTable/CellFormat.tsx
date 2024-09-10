import React from "react";
import { Badge } from "@/components/ui/badge";
import CustomButtons from "../CustomButtons";
import { ArrowRight } from "lucide-react";

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
      return <Badge className="text-nowrap" variant={"success"}>{value}</Badge>;
    }
    if (status.Failed?.includes(value)) {
      return <Badge className="text-nowrap" variant={"destructive"}>{value}</Badge>;
    }
    if (status.Pending?.includes(value)) {
      return <Badge className="text-nowrap" variant={"default"}>{value}</Badge>;
    }
    return <></>;
  };

  return getStatusBadge(value);
};

export const Percentage = (row: string | number | any) => {
  const value = row.getValue("percentage");

  return <span>%{value.toFixed(2)}</span>;
};

export const NextStep = (row: string) => {
  return (
    <CustomButtons
      className="relative h-fit w-full text-nowrap text-xs"
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
