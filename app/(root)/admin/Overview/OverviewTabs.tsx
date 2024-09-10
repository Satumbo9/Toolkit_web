import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewDashboard from "./OverviewDashboard";
import OverviewAnalytics from "./OverviewAnalytics";
import OverviewReports from "./OverviewReports";

const OverviewTabs = () => {
  return (
    <section className="mt-5 flex">
      <Tabs defaultValue="overview" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewDashboard />
        </TabsContent>
        <TabsContent value="analytics">
          <OverviewAnalytics />
        </TabsContent>
        <TabsContent value="reports">
          <OverviewReports />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default OverviewTabs;
