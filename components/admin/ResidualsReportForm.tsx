import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Button } from "../ui/button";
import { DatePickerWithRange } from "../Shared/Calender/Calender";
import { Input } from "../ui/input";

interface Props {
  type?: string;
}

const ResidualsReportForm = ({ type }: Props) => {
  const renderContent = () => {
    switch (type) {
      case "BeginDate":
        return (
          <>
            <label className="text-sm font-medium leading-none">
              Begin Date
            </label>
            <div className="pb-5 pt-1">
              <DatePickerWithRange />
            </div>

            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </>
        );
      case "ProcessorAgent":
        return (
          <>
            <label className="text-sm font-medium leading-none">
              Begin Date
            </label>
            <div className="pb-4 pt-1">
              <DatePickerWithRange />
            </div>

            <label className="text-sm font-medium">Processor</label>
            <Select>
              <SelectTrigger>Select Processor</SelectTrigger>
              <SelectContent>
                <SelectItem value={"Test"}>Processor 1</SelectItem>
              </SelectContent>
            </Select>
            <hr className="my-2 border-none" />
            <label className="pt-5 text-sm font-medium">Agent</label>
            <Select>
              <SelectTrigger>Select Agent</SelectTrigger>
              <SelectContent>
                <SelectItem value={"credit"}>Agent 1</SelectItem>
                <SelectItem value={"debit"}>Agent 2</SelectItem>
                <SelectItem value={"cash"}>Agent 3</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-4 flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </>
        );
      case "Agent":
        return (
          <>
            <label className="text-sm font-medium leading-none">
              Begin Date
            </label>
            <div className="pb-4 pt-1">
              <DatePickerWithRange />
            </div>
            <label className="pt-5 text-sm font-medium">Agent</label>
            <Select>
              <SelectTrigger>Select Agent</SelectTrigger>
              <SelectContent>
                <SelectItem value={"credit"}>Agent 1</SelectItem>
                <SelectItem value={"debit"}>Agent 2</SelectItem>
                <SelectItem value={"cash"}>Agent 3</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-4 flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </>
        );
      case "Processor":
        return (
          <>
            <label className="text-sm font-medium leading-none">
              Begin Date
            </label>
            <div className="pb-4 pt-1">
              <DatePickerWithRange />
            </div>
            <label className="pt-5 text-sm font-medium">Processor</label>
            <Select>
              <SelectTrigger>Select Processor</SelectTrigger>
              <SelectContent>
                <SelectItem value={"credit"}>Processor 1</SelectItem>
                <SelectItem value={"debit"}>Processor 2</SelectItem>
                <SelectItem value={"cash"}>Processor 3</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-4 flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </>
        );
      case "MerchantRawData":
        return (
          <>
            <label className="pt-5 text-sm font-medium">Account Number</label>
            <div className="pb-3 pt-1">
              <Input type="" placeholder="Enter Account Number" />
            </div>

            <label className="text-sm font-medium leading-none">
              Residual Month
            </label>
            <div className="pb-4 pt-1">
              <DatePickerWithRange />
            </div>

            <label className="pt-5 text-sm font-medium">Residual Version</label>
            <div className="pb-3 pt-1">
              <Input type="number" placeholder="Enter Account Number" />
            </div>
            <div className="flex w-full justify-around">
              <Button variant="destructive">Reset</Button>
              <Button variant="default">Submit</Button>
            </div>
          </>
        );
    }
  };
  return (
    <Card className="w-[95%] max-2xl:w-full">
      <CardHeader>
        <CardTitle>Residuals Reports</CardTitle>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
};

export default ResidualsReportForm;
