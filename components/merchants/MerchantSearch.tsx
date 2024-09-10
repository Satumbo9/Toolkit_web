"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { PlusSquare } from "lucide-react";
import React from "react";
import DateRangeBox from "devextreme-react/cjs/date-range-box";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewMerchant from "./NewMerchant";

const MerchantSearch = ({ type }: { type: string }) => {
  return (
    <div className="mt-3 flex">
      <div className="flex w-full items-center justify-between gap-3">
        {type === "MID" && (
          <div>
            <Checkbox /> <span>Include deleted account</span>
          </div>
        )}

        {type === "Agent" && (
          <div className="flex gap-3">
            <div>
              <Checkbox /> <span>Include deleted account</span>
            </div>
            <div>
              <Checkbox /> <span>Master Only</span>
            </div>
          </div>
        )}

        {type === "Processor" && (
          <div className="flex gap-3">
            <div>
              <Checkbox /> <span>Include deleted account</span>
            </div>
            <div>
              <Checkbox /> <span>Show active processors</span>
            </div>
          </div>
        )}

        {type === "Created Date" && (
          <DateRangeBox
            max={new Date()}
            startDateLabel="From"
            endDateLabel="To"
            labelMode="floating"
            displayFormat="EEEE, d MMM"
            showClearButton={true}
            useMaskBehavior={true}
            openOnFieldClick={true}
          />
        )}

        <Dialog>
          <DialogTrigger>
            <div className="flex gap-3 rounded-md bg-gray-300 p-2.5 text-black hover:opacity-60 dark:bg-black dark:text-white">
              <PlusSquare />
              New merchant
            </div>
          </DialogTrigger>
          <DialogContent className="2xl:[1200px] max-lg:max-w-[500px] lg:max-w-[800px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                Merchant Information
              </DialogTitle>
              <NewMerchant />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MerchantSearch;
