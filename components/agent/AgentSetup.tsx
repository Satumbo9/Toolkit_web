import React from "react";
import AgentSetupForm from "./AgentSetupForm";
import AgentSetupContent from "./AgentSetupContent";

const AgentSetup = () => {
  return (
    <div className="flex h-auto gap-4 max-xl:flex-wrap">
      <div className="flex-auto">
        <AgentSetupForm />
      </div>
      <div className="flex-auto">
        <AgentSetupContent />
      </div>
    </div>
  );
};

export default AgentSetup;
