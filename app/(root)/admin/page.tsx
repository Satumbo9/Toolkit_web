import React from "react";
import RingCentralImport from "@/components/admin/RingCentralImport";
import LoadProcessingData from "@/components/admin/LoadProcessingData";

const Admin = () => {
  return (
    <section className="m-auto flex min-h-[40rem] w-2/4 items-center gap-6 py-4 max-xl:w-3/4 max-lg:flex-wrap">
      <RingCentralImport />
      <LoadProcessingData />
    </section>
  );
};

export default Admin;
