import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { DatePickerWithRange } from "../Shared/Calender/Calender";

interface Props {
  type?: string;
}

const OrderPaymentsReportForm = ({ type }: Props) => {
  const renderContent = () => {
    switch (type) {
      case "DateType":
        return (
          <div>
            <Select>
              <SelectTrigger>Date, Type</SelectTrigger>
              <SelectContent>
                <SelectItem value={"Test"}>Test</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-center py-5">
              <DatePickerWithRange />
            </div>

            <Select>
              <SelectTrigger>Pay Type</SelectTrigger>
              <SelectContent>
                <SelectItem value={"credit"}>Credit Card</SelectItem>
                <SelectItem value={"debit"}>Debit Card</SelectItem>
                <SelectItem value={"cash"}>Cash</SelectItem>
              </SelectContent>
            </Select>

            <div className="my-5 flex items-center gap-5">
              <Checkbox />
              No Zero
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </div>
        );
      case "DateTypeAgent":
        return (
          <div>
            <Select>
              <SelectTrigger>Date, Type, Agent</SelectTrigger>
              <SelectContent>
                <SelectItem value={"Test"}>Test</SelectItem>
              </SelectContent>
            </Select>

            <div className="py-5">
              <DatePickerWithRange />
            </div>

            <Select>
              <SelectTrigger>Pay Type</SelectTrigger>
              <SelectContent>
                <SelectItem value={"credit"}>Credit Card</SelectItem>
                <SelectItem value={"debit"}>Debit Card</SelectItem>
                <SelectItem value={"cash"}>Cash</SelectItem>
              </SelectContent>
            </Select>

            <div className="my-5">
              <Select>
                <SelectTrigger>Sales Representative</SelectTrigger>
                <SelectContent>
                  <SelectItem value={"1"}>Agent 1</SelectItem>
                  <SelectItem value={"2"}>Agent 2</SelectItem>
                  <SelectItem value={"3"}>Agent 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </div>
        );
      case "Date":
        return (
          <div>
            <Select>
              <SelectTrigger>Date</SelectTrigger>
              <SelectContent>
                <SelectItem value={"Test"}>Test</SelectItem>
              </SelectContent>
            </Select>

            <div className="py-5">
              <DatePickerWithRange />
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </div>
        );
      case "SumAgent":
        return (
          <div>
            <div className="pb-5">
              <Select>
                <SelectTrigger>Agent</SelectTrigger>
                <SelectContent>
                  <SelectItem value={"Agent1"}>Agent 1</SelectItem>
                  <SelectItem value={"Agent2"}>Agent 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pb-5">
              <Select>
                <SelectTrigger>Select Agent</SelectTrigger>
                <SelectContent>
                  <SelectItem value={"Micamp"}>Micamp</SelectItem>
                  <SelectItem value={"OtherAgent"}>Other Agent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </div>
        );
      case "Status":
        return (
          <div>
            <div className="pb-5">
              <Select>
                <SelectTrigger>Status</SelectTrigger>
                <SelectContent>
                  <SelectItem value={"paid"}>Paid</SelectItem>
                  <SelectItem value={"pending"}>Pending</SelectItem>
                  <SelectItem value={"denied"}>Denied</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pb-5">
              <Select>
                <SelectTrigger>Select Status</SelectTrigger>
                <SelectContent>
                  <SelectItem value={"paidSelect"}>Paid</SelectItem>
                  <SelectItem value={"pendingSelect"}>Pending</SelectItem>
                  <SelectItem value={"deniedSelect"}>Denied</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </div>
        );
      case "Process":
        return (
          <div>
            <Select>
              <SelectTrigger>In Process</SelectTrigger>
              <SelectContent>
                <SelectItem value={"Process1"}>Process1</SelectItem>
                <SelectItem value={"Process2"}>Process2</SelectItem>
                <SelectItem value={"Process3"}>Process3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case "SalesReport":
        return (
          <div>
            <div className="pb-5">
              <DatePickerWithRange />
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </div>
        );
    }
  };
  return (
    <Card className="w-[95%] max-2xl:w-full">
      <CardHeader>
        <CardTitle>Payment Status Report</CardTitle>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
};

export default OrderPaymentsReportForm;
