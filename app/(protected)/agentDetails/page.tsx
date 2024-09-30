"use client";

import React from "react";
import AgentComponents from "./AgentComponents";

const AgentDetails = () => {
  const isAdmin: boolean = true;
  return <AgentComponents isAdmin={isAdmin} />;
};

export default AgentDetails;
