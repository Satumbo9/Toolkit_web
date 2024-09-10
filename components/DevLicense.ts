"use client";

import config from "devextreme/core/config";

export const DevLicense = () => {
  if (typeof window !== "undefined") {
    config({
      licenseKey: process.env.NEXT_PUBLIC_DEVEXTREME_LICENSE_KEY,
    });
  }
  return null;
};
