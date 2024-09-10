import { MerchantSoftwareInstallSchema } from "@/lib/utils";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import {
  SelectForm,
  InputForm,
  CheckboxForm,
  DatePickerForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";

const SoftwareInstall = () => {
  const form = useForm<z.infer<typeof MerchantSoftwareInstallSchema>>({
    resolver: zodResolver(MerchantSoftwareInstallSchema),
    defaultValues: {
      SoftwareAcctNumber: "",
      POCname: "",
      POCphone: "",
      POCemail: "",
      ISOname: "",
      ISOcontact: "",
      ISOphone: "",
      ISOemail: "",
      Dealer: "",
      DealerContact: "",
      DealerPhone: "",
      DealerEmail: "",
      ActiveServiceAgreement: false,
      POSsystem: "",
      NumberStations: 0,
      MiPointClover: false,
      HasTSLlicense: false,
      MiPointCloverQty: 0,
      MiPointIngencio: false,
      HasPMSlicense: false,
      MiPointIngencioQty: 0,
      RemoteServiceAccess: false,
      Environment: "",
      GatewayUsername: "",
      GatewayPassword: "",
      GatewayKey: "",
      SupportProvider: "",
      SupportProgram: "",
      EffectiveDate: new Date(),
      InstallationDevices: 1,
      InstallationDevicesPrice: 0,
      InstallationDevicesTotal: 0,
      MonthlyRecurringDevices: 0,
      MonthlyRecurringDevicesPrice: 0,
      MonthlyRecurringDevicesTotal: 0,
      SupportRecurringDevices: 0,
      SupportRecurringDevicesPrice: 0,
      SupportRecurringDevicesTotal: 0,
    },
  });

  const POSsystemData = [
    { id: 1, name: "Clover", value: "clover" },
    { id: 2, name: "Square", value: "square" },
  ];

  const EnvironmentData = [
    { id: 1, name: "Virtual Server", value: "virtualServer" },
    { id: 2, name: "Physical Server", value: "physicalServer" },
  ];

  const onSubmit = (value: z.infer<typeof MerchantSoftwareInstallSchema>) => {
    console.log(value);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="mb-3 text-2xl text-sky-500">Software Install</h1>

        {/* Merchant Information */}
        <div className="flex-auto rounded-md border p-2">
          <h1 className="flex justify-center text-xl font-semibold text-sky-500">
            Merchant Information
          </h1>
          <div className="block w-1/4 max-2xl:m-auto max-2xl:w-2/4">
            <InputForm
              control={form.control}
              formName="SoftwareAcctNumber"
              label="Software Acct #"
              placeholder=""
            />
            <div className="mt-3 text-end">
              <CustomButtons btnType="primary" className="w-full max-2xl:w-3/4">
                Assign New #
              </CustomButtons>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 max-2xl:m-auto max-2xl:w-full max-2xl:grid-cols-2">
            <div className="block">
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Technical POC
              </h1>
              <InputForm
                control={form.control}
                formName="POCname"
                label="Name"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="POCphone"
                label="Phone"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="POCemail"
                label="Email"
                placeholder=""
              />
            </div>
            <div className="block">
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                ISO Information
              </h1>
              <InputForm
                control={form.control}
                formName="ISOname"
                label="Name"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="ISOcontact"
                label="Contact"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="ISOphone"
                label="Phone"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="ISOemail"
                label="Email"
                placeholder=""
              />
            </div>
            <div className="block">
              <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                Dealer Information
              </h1>
              <InputForm
                control={form.control}
                formName="Dealer"
                label="Dealer"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="DealerContact"
                label="Contact"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="DealerPhone"
                label="Phone"
                placeholder=""
              />
              <InputForm
                control={form.control}
                formName="DealerEmail"
                label="Email"
                placeholder=""
              />
              <CheckboxForm
                control={form.control}
                formName="ActiveServiceAgreement"
                label=""
                placeholder="Merchant has active service agreement?"
                className="mt-4"
              />
            </div>
          </div>
        </div>

        {/* Parent of top right section */}
        <div className="mt-4 grid flex-auto">
          <div className="flex flex-auto flex-col">
            <div className="grid grid-cols-3 gap-3 max-2xl:grid-cols-1">
              {/* Platform Information Div */}
              <div className="col-span-2 rounded-md border p-2">
                <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                  Platform Information
                </h1>
                <div className="flex gap-3">
                  <div className="w-3/4">
                    <SelectForm
                      control={form.control}
                      formName="POSsystem"
                      label="POS System/Version"
                      content={POSsystemData}
                      placeholder="Select POS System/Version"
                      valueKey="id"
                      displayKey="name"
                      disabled={false}
                      className=""
                    />
                  </div>
                  <InputForm
                    control={form.control}
                    formName="NumberStations"
                    label="# Stations"
                    placeholder=""
                  />
                </div>
                <div className="my-2 grid grid-cols-3 gap-3">
                  <div className="col-span-2 flex items-center justify-start gap-8 max-xl:gap-2 max-lg:flex-wrap">
                    <CheckboxForm
                      control={form.control}
                      formName="MiPointClover"
                      label=""
                      placeholder="MiPoint Clover"
                      className=""
                    />
                    <CheckboxForm
                      control={form.control}
                      formName="HasTSLlicense"
                      label=""
                      placeholder="Has TSL License"
                      className=""
                    />
                  </div>
                  <div className="col-span-1 flex content-center items-center gap-3">
                    <p className="mt-2 w-1/3 content-center text-nowrap text-end font-semibold">
                      Qty
                    </p>
                    <div className="w-2/3">
                      <InputForm
                        control={form.control}
                        formName="MiPointCloverQty"
                        label=""
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 flex w-3/4 items-center justify-start gap-4 max-xl:flex-wrap">
                    <CheckboxForm
                      control={form.control}
                      formName="MiPointIngencio"
                      label=""
                      placeholder="MiPoint Ingencio"
                      className=""
                    />
                    <CheckboxForm
                      control={form.control}
                      formName="HasPMSlicense"
                      label=""
                      placeholder="Has PMS License"
                      className=""
                    />
                  </div>
                  <div className="flex content-center items-center gap-3">
                    <p className="mt-2 w-1/3 content-center text-nowrap text-end font-semibold">
                      Qty
                    </p>
                    <div className="w-2/3">
                      <InputForm
                        control={form.control}
                        formName="MiPointIngencioQty"
                        label=""
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <CheckboxForm
                    control={form.control}
                    formName="RemoteServiceAccess"
                    label=""
                    placeholder="Remote Service Access Available"
                    className=""
                  />
                  <SelectForm
                    control={form.control}
                    formName="Environment"
                    label="Environment"
                    content={EnvironmentData}
                    placeholder="Select Environment"
                    valueKey="id"
                    displayKey="name"
                    disabled={false}
                    className="w-full"
                  />
                </div>
                <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                  Gateway Info
                </h1>
                <div className="my-3 grid grid-cols-3 gap-3 max-lg:grid-cols-1">
                  <InputForm
                    control={form.control}
                    formName="GatewayUsername"
                    label="Username"
                    placeholder=""
                  />
                  <InputForm
                    control={form.control}
                    formName="GatewayPassword"
                    label="Password"
                    placeholder=""
                  />
                  <InputForm
                    control={form.control}
                    formName="GatewayKey"
                    label="Key"
                    placeholder=""
                  />
                </div>
              </div>
              {/* Quick Updates Div */}
              <div className="col-auto rounded-md border p-2 text-center">
                <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                  Quick Updates
                </h1>
                <CustomButtons
                  btnType="primary"
                  className="my-3 w-full max-2xl:w-2/4"
                >
                  Update Equipment Status
                </CustomButtons>
                <div className="max-2x:w-2/4 m-auto my-3 grid w-full grid-cols-1 gap-2 max-2xl:grid-cols-2">
                  <CustomButtons btnType="default" className="w-full">
                    Migrate to HOLD Status
                  </CustomButtons>
                  <CustomButtons btnType="default" className="w-full">
                    Migrate to ACTIVE Status
                  </CustomButtons>
                </div>
                <div className="max-2x:w-2/4 m-auto my-6 grid w-full grid-cols-1 gap-2 max-2xl:grid-cols-2">
                  <CustomButtons btnType="default" className="w-full">
                    Update Billing Information
                  </CustomButtons>
                  <CustomButtons btnType="primary" className="w-full">
                    Setup Support Agreement
                  </CustomButtons>
                </div>
              </div>
            </div>
            {/* Parent of bottom right section */}
            <div className="mt-3 grid h-1/3 grid-cols-3 gap-3 max-2xl:grid-cols-1">
              {/* Support & Services Div */}
              <div className="col-span-1 grid rounded-md border p-2">
                <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                  Support & Services
                </h1>
                <SelectForm
                  control={form.control}
                  formName="SupportProvider"
                  label="Support Provider"
                  content={POSsystemData}
                  placeholder="Select Support Provider"
                  valueKey="id"
                  displayKey="name"
                  disabled={false}
                  className=""
                />
                <SelectForm
                  control={form.control}
                  formName="SupportProgram"
                  label="Support Program"
                  content={POSsystemData}
                  placeholder="Select Support Program"
                  valueKey="id"
                  displayKey="name"
                  disabled={false}
                  className=""
                />
                <DatePickerForm
                  control={form.control}
                  formName="EffectiveDate"
                  label="Effective Date"
                  placeholder="Select Effective Date"
                />
              </div>
              {/* Current Billing Details Div */}
              <div className="col-span-2 rounded-md border p-2">
                <h1 className="flex justify-center text-xl font-semibold text-sky-500">
                  Current Billing Details
                </h1>

                <div className="flex content-center gap-3">
                  <p className="mt-8 w-1/3 content-center text-nowrap text-end">
                    Installation Charges
                  </p>
                  <div className="flex w-2/3 gap-3">
                    <InputForm
                      control={form.control}
                      formName="InstallationDevices"
                      label="# Devices"
                      placeholder=""
                    />
                    <InputForm
                      control={form.control}
                      formName="InstallationDevicesPrice"
                      label="$/Each"
                      placeholder=""
                    />
                    <InputForm
                      control={form.control}
                      formName="InstallationDevicesTotal"
                      label="Total Cost"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex content-center gap-3">
                  <p className="mt-2 w-1/3 content-center text-nowrap text-end">
                    Monthly Recurring
                  </p>
                  <div className="flex w-2/3 gap-3">
                    <InputForm
                      control={form.control}
                      formName="MonthlyRecurringDevices"
                      label=""
                      placeholder=""
                    />
                    <InputForm
                      control={form.control}
                      formName="MonthlyRecurringDevicesPrice"
                      label=""
                      placeholder=""
                    />
                    <InputForm
                      control={form.control}
                      formName="MonthlyRecurringDevicesTotal"
                      label=""
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex content-center gap-3">
                  <p className="mt-2 w-1/3 content-center text-nowrap text-end">
                    Support Recurring
                  </p>
                  <div className="flex w-2/3 gap-3">
                    <InputForm
                      control={form.control}
                      formName="SupportRecurringDevices"
                      label=""
                      placeholder=""
                    />
                    <InputForm
                      control={form.control}
                      formName="SupportRecurringDevicesPrice"
                      label=""
                      placeholder=""
                    />
                    <InputForm
                      control={form.control}
                      formName="SupportRecurringDevicesTotal"
                      label=""
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SoftwareInstall;
