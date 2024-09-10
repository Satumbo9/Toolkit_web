import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MerchantInfoSchema } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import UploadFileBtn from "../ui/UploadButton";
import {
  CheckboxForm,
  InputForm,
  TextAreaForm,
  SelectForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";

const MerchantInformation = () => {
  const form = useForm<z.infer<typeof MerchantInfoSchema>>({
    resolver: zodResolver(MerchantInfoSchema),
    defaultValues: {
      MID: "",
      LegalName: "",
      Contact: "",
      Address: "",
      Apt: "",
      City: "",
      State: "",
      Zip: "",
      Phone1: "",
      Extension1: "",
      Phone2: "",
      Extension2: "",
      Email: "",
      Website: "",
      DBA: "",
      DBAcontact: "",
      DBAaddress: "",
      DBAapt: "",
      DBAcity: "",
      DBAstate: "",
      DBAzip: "",
      Notice: "",
      FrontEndPlatform: "",
      FrontEndMID: "",
      FrontEndTID: "",
      CheckServiceMID: "",
      GatewayMID: "",
      EstAnnualVolume: "",
      Transactions: 0,
      SICcode: "",
      MCCclassification: "",
      Parent: "",
      CloverID: "",
    },
  });

  const FrontEndPlatformData = [
    { id: 1, name: "Buypass", value: "buypass" },
    { id: 2, name: "Nashville", value: "nashville" },
    { id: 3, name: "North", value: "north" },
    { id: 4, name: "None", value: "none" },
  ];

  const onSubmit = (value: z.infer<typeof MerchantInfoSchema>) => {
    console.log(value);
  };

  return (
    <>
      <div className="size-full grow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 max-2xl:grid-cols-1">
              <div className="grid auto-cols-fr grid-cols-2 gap-3 border-r pr-4 max-2xl:grid-cols-1 max-2xl:border-none">
                <h1 className="col-span-2 text-2xl text-sky-500">
                  Merchant Information:
                </h1>
                <InputForm
                  control={form.control}
                  formName="MID"
                  label="MID"
                  placeholder="MID"
                />
                <InputForm
                  control={form.control}
                  formName="LegalName"
                  label="Legal Name"
                  placeholder="Legal Name"
                />
                <InputForm
                  control={form.control}
                  formName="Contact"
                  label="Contact"
                  placeholder="Contact"
                />
                <div></div>
                <InputForm
                  control={form.control}
                  formName="Address"
                  label="Address"
                  placeholder="Address"
                />
                <InputForm
                  control={form.control}
                  formName="Apt"
                  label="Suite/Apartment"
                  placeholder="Suite/Apartment"
                />
                <InputForm
                  control={form.control}
                  formName="City"
                  label="City"
                  placeholder="City"
                />
                <div className="grid grid-cols-3 gap-3">
                  <InputForm
                    control={form.control}
                    formName="State"
                    label="State"
                    placeholder="AZ"
                  />
                  <div className="col-span-2">
                    <InputForm
                      control={form.control}
                      formName="Zip"
                      label="Zip"
                      placeholder="Zip"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <InputForm
                    control={form.control}
                    formName="Phone1"
                    label="Phone 1"
                    placeholder="(___)-___-____"
                  />
                  <InputForm
                    control={form.control}
                    formName="Extension1"
                    label="Extension"
                    placeholder=""
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <InputForm
                    control={form.control}
                    formName="Phone2"
                    label="Phone 2"
                    placeholder="(___)-___-____"
                  />
                  <InputForm
                    control={form.control}
                    formName="Extension2"
                    label="Extension"
                    placeholder=""
                  />
                </div>
                <InputForm
                  control={form.control}
                  formName="Email"
                  label="Email"
                  placeholder="support@micamp.com"
                />
                <InputForm
                  control={form.control}
                  formName="Website"
                  label="Website"
                  placeholder="micamp.com"
                />
                <InputForm
                  control={form.control}
                  formName="DBA"
                  label="DBA Name"
                  placeholder="DBA Name"
                />
                <div></div>
                <div className="col-span-2">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <InputForm
                        control={form.control}
                        formName="DBAcontact"
                        label="DBA Contact"
                        placeholder="Contact"
                      />
                    </div>
                    <div className="ml-4 mt-8 flex">
                      <CheckboxForm
                        control={form.control}
                        formName="SameAsLegal"
                        label=""
                        placeholder=""
                        className=""
                      />
                      <span className="mt-1.5">Same as Legal</span>
                    </div>
                  </div>
                </div>
                <InputForm
                  control={form.control}
                  formName="DBAaddress"
                  label="DBA Address"
                  placeholder="Address"
                />
                <InputForm
                  control={form.control}
                  formName="DBAapt"
                  label="DBA Suite/Apartment"
                  placeholder="Suite/Apartment"
                />
                <InputForm
                  control={form.control}
                  formName="DBAcity"
                  label="DBA City"
                  placeholder="City"
                />
                <div className="grid grid-cols-3 gap-3">
                  <InputForm
                    control={form.control}
                    formName="DBAstate"
                    label="DBA State"
                    placeholder="AZ"
                  />
                  <div className="col-span-2">
                    <InputForm
                      control={form.control}
                      formName="DBAzip"
                      label="DBA Zip"
                      placeholder="Zip"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <InputForm
                    control={form.control}
                    formName="Notice"
                    label="Notice"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="grid w-2/3 grid-cols-1 gap-3 max-xl:w-full">
                <h1 className="text-2xl text-sky-500">
                  Other Merchant Information:
                </h1>
                <h1 className="border-b border-gray-600 text-xl font-semibold">
                  Associated MIDs
                </h1>
                <SelectForm
                  control={form.control}
                  formName="FrontEndPlatform"
                  label="Front End Platform"
                  content={FrontEndPlatformData}
                  placeholder="Select Front End Platform"
                  valueKey="id"
                  displayKey="name"
                  disabled={false}
                  className=""
                />
                <TextAreaForm
                  control={form.control}
                  formName="FrontEndMID"
                  label="Front End MID"
                  placeholder="List here"
                />
                <TextAreaForm
                  control={form.control}
                  formName="FrontEndTID"
                  label="Front End TID"
                  placeholder="List here"
                />
                <div className="grid grid-cols-2 gap-3">
                  <InputForm
                    control={form.control}
                    formName="CheckServiceMID"
                    label="Check Service MID"
                    placeholder="Check Service MID"
                  />
                  <InputForm
                    control={form.control}
                    formName="GatewayMID"
                    label="Gateway MID"
                    placeholder="Gateway MID"
                  />
                </div>
                <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                  Activity Estimates
                </h1>
                <div className="grid grid-cols-2 gap-3">
                  <InputForm
                    control={form.control}
                    formName="EstAnnualVolume"
                    label="Est Annual Volume"
                    placeholder="$0.00"
                  />
                  <InputForm
                    control={form.control}
                    formName="Transactions"
                    label="Transactions"
                    placeholder=""
                  />
                </div>
                <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                  SIC/MCC Classification
                </h1>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <InputForm
                      control={form.control}
                      formName="SICcode"
                      label="SIC Code"
                      placeholder=""
                    />
                  </div>
                  <div className="col-span-2">
                    <InputForm
                      control={form.control}
                      formName="MCCclassification"
                      label="MCC Classification"
                      placeholder=""
                    />
                  </div>
                </div>
                <h1 className="mt-4 border-b border-gray-600 text-xl font-semibold">
                  Parent/Child MID Link
                </h1>
                <div className="grid grid-cols-3 gap-3 border-b border-gray-600 pb-4">
                  <div className="col-span-1">
                    <div className="ml-2 mt-9 flex items-center">
                      <CheckboxForm
                        control={form.control}
                        formName="ChildMID"
                        label=""
                        placeholder=""
                        className=""
                      />
                      <span className="mt-1.5">Child MID</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <InputForm
                      control={form.control}
                      formName="Parent"
                      label="Parent"
                      placeholder=""
                    />
                  </div>
                </div>
                <InputForm
                  control={form.control}
                  formName="CloverID"
                  label="Clover ID"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-8 w-1/2">
              <div className="grid grid-cols-3 gap-3">
                <CustomButtons btnType="default" className="w-full">
                  Save Changes
                </CustomButtons>
                <UploadFileBtn />
                <div className="ml-4 flex items-center gap-2">
                  <CheckboxForm
                    control={form.control}
                    formName="SeeManager"
                    label=""
                    placeholder=""
                    className=""
                  />
                  <span className="mt-1.5 text-nowrap">See Manager</span>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default MerchantInformation;
