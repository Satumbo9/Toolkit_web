"use client";

import React, { useState } from "react";
import RenderNewOmahaComponents from "./NewOmahaTabSubContent";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { newOmahaApplicationTabs } from "@/constants";

const NewOmahaTabContent = () => {
  // const formTabs = [
  //   {
  //     id: 1,
  //     title: "Merchant Detail",
  //     route: "merchantDetail",
  //   },
  //   {
  //     id: 2,
  //     title: "Financial Information",
  //     route: "financialInformation",
  //   },
  //   {
  //     id: 3,
  //     title: "Merchant Owner",
  //     route: "merchantOwner",
  //   },
  //   {
  //     id: 4,
  //     title: "Programming Request",
  //     route: "programmingRequest",
  //   },
  //   {
  //     id: 5,
  //     title: "OMAHA Details",
  //     route: "omahaDetails",
  //   },
  // ];

  // const [link, setLink] = useState("merchantDetail");
  // const [tabIndex, setTabIndex] = useState(1);

  // Create a handler to the value next and previous
  // const handleClickNext = (value: string) => {
  //   if (link === "merchantDetail") setLink("financialInformation");
  //   if (link === "financialInformation") setLink("merchantOwner");
  //   if (link === "merchantOwner") setLink("programmingRequest");
  //   if (link === "programmingRequest") setLink("omahaDetails");
  //   setTabIndex(tabIndex + 1);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Optional: Adds a smooth scrolling effect
  //   });
  //   // console.log(link);
  // };
  // const handleClickPrevious = (value: string) => {
  //   if (link === "financialInformation") setLink("merchantDetail");
  //   if (link === "merchantOwner") setLink("financialInformation");
  //   if (link === "programmingRequest") setLink("merchantOwner");
  //   if (link === "omahaDetails") setLink("programmingRequest");
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Optional: Adds a smooth scrolling effect
  //   });
  //   setTabIndex(tabIndex - 1);
  //   // console.log(link);
  // };

  const [activeItem, setActiveItem] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveItem(value);
  };
  return (
    <div>
      {/* <div className="relative mt-5 flex justify-center">
        
        <div className="relative flex items-center">
          <div
            className="absolute top-1/3 z-0 bg-[#E4E4E7] dark:bg-[#27272A]"
            style={{
              height: "2px",
              width: "calc(100% - 4rem)",
              transform: "translateX(2rem)",
            }}
          ></div>


          <div className="z-20 flex items-center gap-10">
            {formTabs.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center">
                  <div
                    className={`flex size-8 items-center justify-center rounded-full border ${item.id === tabIndex ? "border-sky-500" : ""} ${item.id < tabIndex ? "bg-sky-500" : "bg-white dark:bg-black"} `}
                  >
                    {item.id}
                  </div>
                  <p className="mt-2 text-center text-xs">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {RenderNewOmahaComponents(link)}
      <div
        className={`my-3 flex ${tabIndex === 1 ? "justify-end" : "justify-between"}`}
      >
        {link !== "merchantDetail" && (
          <Button onClick={() => handleClickPrevious(link)}>Previous</Button>
        )}
        {link !== "omahaDetails" && (
          <Button onClick={() => handleClickNext(link)}>Next</Button>
        )}
      </div> */}

      {/* THIS IS THE STANDARD CODE TO THE CONVENTIONAL TABS - KEEP IT FOR NOW (HC) */}

      <Tabs
        defaultValue="omahaDetails"
        className="w-full rounded-md p-4 text-center"
      >
        <TabsList className="">
          {newOmahaApplicationTabs.map((tab) => (
            <TabsTrigger
              onClick={() => handleClick(tab.value)}
              key={tab.id}
              value={tab.value}
              title={tab.title}
            >
              <p className="hidden max-xl:block">
                {React.createElement(tab.icon)}
              </p>
              <p className="max-xl:hidden">{tab.title}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {RenderNewOmahaComponents(activeItem || "omahaDetails")}
      </Tabs>
    </div>
  );
};

export default NewOmahaTabContent;
