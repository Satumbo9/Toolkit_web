"use client";

import EntryHeader from "@/components/financial/EntryHeader";
import FinancialBody from "@/components/financial/FinancialBody";
import React from "react";

const FinancialAddEntry = () => {
  return (
    <div className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <EntryHeader />
      <FinancialBody />
    </div>
  );
};

export default FinancialAddEntry;
