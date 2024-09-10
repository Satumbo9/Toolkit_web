import React from "react";
import {
  PlusCircle,
  UserPlus,
  FileText,
  Headset,
  FileDiff,
  FileSearch,
  UsersRound,
  MapPinned,
  Barcode,
  AlignVerticalJustifyEnd,
  File,
} from "lucide-react";
import Tasks from "@/app/(protected)/tasks/page";

const TasksSection = ({ type }: { type: string }) => {
  const renderSupportShortcuts = [
    {
      id: "1",
      title: "Create Order",
      icon: PlusCircle,
    },
    {
      id: "2",
      title: "Create New Merchant",
      icon: UserPlus,
    },
    {
      id: "3",
      title: "Access Report",
      icon: FileText,
    },
    {
      id: "4",
      title: "Access Agent",
      icon: Headset,
    },
  ];

  const renderFinanceShortcuts = [
    {
      id: "1",
      title: "Add Entry",
      icon: FileDiff,
    },
    {
      id: "2",
      title: "Find",
      icon: FileSearch,
    },
    {
      id: "3",
      title: "Vendors",
      icon: UsersRound,
    },
    {
      id: "4",
      title: "Tracking",
      icon: MapPinned,
    },
  ];

  const renderEquipmentShortcuts = [
    {
      id: "1",
      title: "Lookup",
      icon: Barcode,
    },
    {
      id: "2",
      title: "Items",
      icon: AlignVerticalJustifyEnd,
    },
    {
      id: "3",
      title: "Reports",
      icon: File,
    },
    {
      id: "4",
      title: "Tracking",
      icon: MapPinned,
    },
  ];
  return (
    <section className="grid grid-cols-3">
      <div className="col-span-2">
        <Tasks />
      </div>
      <div className="col-span-1 rounded-md border p-5 shadow-md">
        <p className="mb-5 text-center text-4xl text-blue-500">Shortcuts</p>
        <div className="grid grid-cols-2 max-xl:grid-cols-1">
          {type === "support" &&
            renderSupportShortcuts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="my-14 flex flex-col items-center justify-center max-xl:my-7"
                >
                  <div className="flex cursor-pointer flex-col items-center">
                    {React.createElement(item.icon, {
                      className: "size-16 max-xl:size-10",
                    })}
                    <p className="text-xl">{item.title}</p>
                  </div>
                </div>
              );
            })}

          {type === "finance" &&
            renderFinanceShortcuts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="my-14 flex flex-col items-center justify-center max-xl:my-7"
                >
                  <div className="flex cursor-pointer flex-col items-center">
                    {React.createElement(item.icon, {
                      className: "size-16 max-xl:size-10",
                    })}
                    <p className="text-xl">{item.title}</p>
                  </div>
                </div>
              );
            })}

          {type === "equipment" &&
            renderEquipmentShortcuts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="my-14 flex flex-col items-center justify-center max-xl:my-7"
                >
                  <div className="flex cursor-pointer flex-col items-center">
                    {React.createElement(item.icon, {
                      className: "size-16 max-xl:size-10",
                    })}
                    <p className="text-xl">{item.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
