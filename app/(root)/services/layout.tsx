import ServiceTabs from "@/components/services/ServiceTabs";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="px-12">
      <ServiceTabs />
      {children}
    </div>
  );
};

export default layout;
