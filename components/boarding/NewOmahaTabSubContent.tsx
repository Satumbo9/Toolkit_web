"use client";
import {
  authCaptureOmahaForm,
  omahaBoardingForm,
  serviceFeesOmahaForm,
} from "@/constants";
import React from "react";
import { Form } from "../ui/form";
import {
  detailsOmahaSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormGeneration,
  NorthFormGeneration,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";

const OmahaDetails = () => {
  const form = useForm<z.infer<typeof detailsOmahaSchema>>({
    resolver: zodResolver(detailsOmahaSchema),
    defaultValues: {
      Zone: "",
      Location: "",
      HowManyEmployees: 0,
      RegisterTerminals: 0,
      ProperLicenseVisible: 0,
      Explanation: "",
      MerchantNameDisplayed: "",
      FloorsOccupiedBy: "",
      MerchantOccupies: "",
      MerchantOccupiesOther: "",
      FloorsLevels: "",
      SquareFootage: "",
      DepositRequired: false,
      DepositPercentage: 0,
      ReturnPolicy: "",
      RefundPolicy: "",
      RefundPolicySpecific: "",
      DaysToRefund: 0,
      AdvCatalog: "",
      AdvBrochure: "",
      AdvDirectMail: "",
      AdvTvRadio: "",
      AdvInternet: "",
      AdvPhone: "",
      AdvNews: "",
      AdvOther: "",
      PreviousProcessor: "",
      ReasonForLeaving: "",
      ReasonForLeavingOther: "",
      MobileApplication: "",
      MobileApplicationList: "",
      MonthlyStatementFee: 0,
      TinTfnInvalid: 0,
      WebsiteUsage: 0,
      DuesAndAssessments: false,
      MastercardQualCredit: 0,
      MastercardQualDebit: 0,
      VisaQualCredit: 0,
      VisaQualDebit: 0,
      DiscoverNetPaypalQualCredit: 0,
      DiscoverNetPaypalQualDebit: 0,
      AmExQualCredit: 0,
      MastercardVisaAuthCaptureFee: 0,
      DiscoverNetPayPalAuthCaptureFee: 0,
      AmexOpBlueAuthCaptureFee: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof detailsOmahaSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* OMAHA BOARDING */}
          <h1 className="mt-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
            OMAHA Boarding
          </h1>
          {/* Location and distribuition */}
          <h1 className="mt-5 flex gap-2 text-2xl font-semibold text-sky-500">
            Location and Distribution
          </h1>
          {/* GENERATION OF THE WHOLE OMAHA FORM */}
          <NorthFormGeneration
            formControl={form.control}
            formFields={omahaBoardingForm}
            gridCols={"3"}
          />
          {/* SERVICE FEES */}
          <div className="my-2 border px-4 py-2">
            <h1 className="my-3 flex gap-2 text-start text-2xl font-semibold text-sky-500">
              Service Fees
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={serviceFeesOmahaForm}
              gridCols={"3"}
            />
          </div>
          {/* AUTHORIZATION AND CAPTURE TRANSACTION */}
          <div className="my-2 border px-4 py-2">
            <h1 className="my-3 flex gap-2 text-start text-2xl font-semibold text-sky-500">
              Authorization & Capture Transaction
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={authCaptureOmahaForm}
              gridCols={"3"}
            />
          </div>

          {/* BUTTON SAVE CHANGES */}
          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-5" btnType="default">
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default function RenderNewOmahaComponents(value?: string) {

  switch (value) {
    case "omahaDetails":
      return <OmahaDetails />;
  }
}
