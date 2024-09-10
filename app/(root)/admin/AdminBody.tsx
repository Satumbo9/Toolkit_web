import { DatePickerWithRange } from "@/components/Shared/Calender/Calender";
import React from "react";
import OverviewTabs from "./Overview/OverviewTabs";

const AdminBody = () => {
  return (
    <section className="flex-1 space-y-4 border p-8 pt-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <DatePickerWithRange />
      </div>
      <div className="flex">
        <OverviewTabs />
      </div>
    </section>
  );
};

export default AdminBody;
