"use client";

import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Button } from "@/components/ui/button";
import { Import } from "lucide-react";

const ImportSplitFile = () => {
  return (
    <div>
      <Textarea className="h-[300px] resize-none" />
      <Button className="mt-5 gap-2 text-center">
        <Import />
        Import
      </Button>
    </div>
  );
};

export default ImportSplitFile;
