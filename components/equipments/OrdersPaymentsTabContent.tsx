"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ordersPaymentsTabs } from "@/constants";
import RenderOrdersPaymentsComponents from "./OrdersPaymentsContent";


const OrdersPaymentsTabContent = () => {

  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <>
      <div className="">
        <Tabs defaultValue="fillOrders" className="w-full text-center rounded-md p-4 space-y-4">
          <TabsList className="">
            {ordersPaymentsTabs.map((tab) => (
              <TabsTrigger onClick={() => handleClick(tab.value)} key={tab.id} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {RenderOrdersPaymentsComponents(activeItem || "fillOrders")}
        </Tabs>
      </div>
    </>
  );
};

export default OrdersPaymentsTabContent;
