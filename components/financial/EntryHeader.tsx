import React from "react";
import {
  Save,
  FileDiff,
  XCircle,
  CheckCircle,
  Edit,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";
import CustomButtons from "../Shared/CustomButtons";

const EntryHeader = () => {
  const ACHPortalBtnRender = [
    { id: 1, title: "Save", icon: Save },
    { id: 2, title: "Save & New", icon: FileDiff },
    { id: 3, title: "Delete", icon: XCircle },
    { id: 4, title: "Approve", icon: CheckCircle },
    { id: 5, title: "Unapprove", icon: XCircle },
  ];
  const VendorBtnRender = [
    { id: 1, title: "Generate Scheduled Vendor", icon: CalendarDays },
    { id: 2, title: "Edit", icon: Edit },
  ];
  const AttachmentsBtnRender = [{ id: 1, title: "Add Doc", icon: XCircle }];
  const ServicesBtnRender = [
    { id: 1, title: "Services", icon: CircleDollarSign },
  ];
  return (
    <section className="px-5">
      <h1 className="my-5 text-center text-3xl font-semibold text-sky-500">
        Vendor Edit
      </h1>
      <div className="flex justify-start gap-4 max-2xl:flex-wrap">
        {/* ACH PORTAL TASKS */}
        <div className="flex-1 space-y-2">
          <span className="mb-2">ACH Portal Tasks</span>
          <div className="flex gap-2 max-xl:flex-col">
            {ACHPortalBtnRender.map((btn) => (
              <CustomButtons
                btnType="primary"
                key={btn.id}
                className="flex flex-1 items-center gap-2"
              >
                {React.createElement(btn.icon)}
                {btn.title}
              </CustomButtons>
            ))}
          </div>
        </div>
        {/* VENDOR */}
        <div className="flex-1 space-y-2">
          <span className="mb-2">Vendor</span>
          <div className="flex items-center gap-2">
            {VendorBtnRender.map((btn) => (
              <CustomButtons
                btnType="primary"
                key={btn.id}
                className="flex items-center gap-2"
              >
                {React.createElement(btn.icon)}
                {btn.title}
              </CustomButtons>
            ))}
          </div>
        </div>
        {/* ATTACHMENTS */}
        <div className="flex-1 space-y-2">
          <span className="mb-2">Attachments</span>
          <div className="flex items-center gap-2">
            {AttachmentsBtnRender.map((btn) => (
              <CustomButtons
                btnType="primary"
                key={btn.id}
                className="flex items-center gap-2"
              >
                {React.createElement(btn.icon)}
                {btn.title}
              </CustomButtons>
            ))}
          </div>
        </div>
        {/* SERVICES */}
        <div className="flex-1 space-y-2">
          <span className="mb-2">Services</span>
          <div className="flex items-center gap-2">
            {ServicesBtnRender.map((btn) => (
              <CustomButtons
                btnType="primary"
                key={btn.id}
                className="flex items-center gap-2"
              >
                {React.createElement(btn.icon)}
                {btn.title}
              </CustomButtons>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryHeader;
