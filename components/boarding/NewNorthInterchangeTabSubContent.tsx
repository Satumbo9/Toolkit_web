"use client";
import {
  authAvsFeesInterForm,
  billedMonthlyFeesInterForm,
  buypassAuthorizationInterForm,
  flaxRateInterNorthForm,
  flexRateFeesNorthForm,
  northBoardingForm,
  passThroughInterForm,
  pinDebitInterForm,
  tieredPricingNorthForm,
  wexFullFeesInterForm,
} from "@/constants";
import React from "react";
import { Form } from "../ui/form";
import {
  northBoardingInterSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
  NorthFormGeneration,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";


const NorthInformation = () => {
  const form = useForm<z.infer<typeof northBoardingInterSchema>>({
    resolver: zodResolver(northBoardingInterSchema),
    defaultValues: {
      VisitNotRequired: false,
      Zone: "",
      Location: "",
      LocationOther: "",
      Seasonal: false,
      MonthsInOpertation: 0,
      MonthOpenBegin: 0,
      MonthOpenEnd: 0,
      FloorsLevels: "",
      MerchantOccupies: "",
      MerchantOccupiesOther: "",
      FloorsOccupiedBy: "",
      MerchantNameDisplayed: "",
      TimeZone: "",
      SquareFootage: "",
      HowManyEmployees: 0,
      RegisterTerminals: 0,
      ReturnPolicy: "",
      SpecificReturnPolicy: "",
      SpecificReturnPolicyOther: "",
      DaysToSubmitTransactions: 0,
      ProperLicenseVisible: 0,
      Explanation: "",
      PreviousProcessor: "",
      PreviousMerchant: "",
      ReasonForLeaving: "",
      ReasonForLeavingOther: "",
      PreviousProcessorStatements: "",
      DepositRequired: "",
      DepositRequiredPercentage: 0,
      TimeFrameDeliveryDays: "",
      MobileApplication: "",
      MobileApplicationList: "",
      McQualifiedCreditDiscountFee: 0,
      McQualifiedCreditTransactionFee: 0,
      McQualifiedNonPinDebitDiscountFee: 0,
      McQualifiedNonPinDebitTransactionFee: 0,
      VisaQualCreditDiscountFee: 0,
      VisaQualCreditTransactionFee: 0,
      VisaQualNonPinDebitDiscountFee: 0,
      VisaQualNonPinDebitTransactionFee: 0,
      AmericanExpressQualCreditDiscountFee: 0,
      AmericanExpressQualCreditTransactionFee: 0,
      DiscoverNetQualCreditDiscountFee: 0,
      DiscoverNetQualCreditTransactionFee: 0,
      DiscoverNetQualNonPinDebitDiscountFee: 0,
      DiscoverNetQualNonPinDebitTransactionFee: 0,
      PayPalQualCredityDiscountFee: 0,
      PayPalQualCredityTransactionFee: 0,
      SwipedDiscountFee: 0,
      SwipedTransactionFee: 0,
      NonSwipedDiscountFee: 0,
      NonSwipedTransactionFee: 0,
      PinLessDiscountFee: 0,
      PinLessDebitTransactionFee: 0,
      PinLessDebitDenialTransactionFee: 0,
      Nameless: 0,
      ChargebackProcessing: 0,
      AmexChargebackFee: 0,
      DiscoverChargebackFee: 0,
      RetrievalFee: 0,
      AmexChargebackRetrievalFee: 0,
      DiscoverRetrievalFee: 0,
      VisaMcDiscChargebackRetrievalFee: 0,
      BatchSettlementFee: 0,
      TinTfnBlankInvalidFee: 0,
      McQualCreditDiscountFee: 0,
      McQualCreditTransactionFee: 0,
      McMidQualCreditDiscountFee: 0,
      McMidQualCreditTransactionFee: 0,
      McNonQualCreditDiscountFee: 0,
      McNonQualCreditTransactionFee: 0,
      McQualNonPinDebitDiscountFee: 0,
      McQualNonPinDebitTransactionFee: 0,
      McMidQualNonPinDebitDiscountFee: 0,
      McMidQualNonPinDebitTransactionFee: 0,
      McNonQualNonPinDebitDiscountFee: 0,
      McNonQualNonPinDebitTransactionFee: 0,
      VisaQualCreditDiscountFee2: 0,
      VisaQualCreditTransactionFee2: 0,
      VisaMidQualCreditDiscountFee: 0,
      VisaMidQualCreditTransactionFee: 0,
      VisaNonQualCreditDiscountFee: 0,
      VisaNonQualCreditTransactionFee: 0,
      VisaQualNonPinDebitDiscountFee2: 0,
      VisaQualNonPinDebitTransactionFee2: 0,
      VisaMidQualNonPinDebitDiscountFee: 0,
      VisaMidQualNonPinDebitTransactionFee: 0,
      VisaNonQualiNonPinDebitDiscountFee: 0,
      VisaNonQualiNonPinDebitTransactionFee: 0,
      DiscoverQualCreditDiscountFee2: 0,
      DiscoverQualCreditTransactionFee2: 0,
      DiscoverMidQualCreditDiscountFee: 0,
      DiscoverMidQualCreditTransactionFee: 0,
      DiscoverNonQualCreditDiscountFee: 0,
      DiscoverNonQualCreditTransactionFee: 0,
      DiscoverQualNonPinDebitDiscountFee2: 0,
      DiscoverQualNonPinDebitTransactionFee2: 0,
      DiscoverMidQualNonPinDebitDiscountFee: 0,
      DiscoverMidQualNonPinDebitTransactionFee: 0,
      DiscoverNonQualiNonPinDebitDiscountFee: 0,
      DiscoverNonQualiNonPinDebitTransactionFee: 0,
      PayPalQualCreditDiscountFee: 0,
      PayPalQualCreditTransactionFee: 0,
      AmeExpQualCreditDiscountFee: 0,
      AmeExpQualCreditTransactionFee: 0,
      AmeExpMidQualCreditDiscountFee: 0,
      AmeExpMidQualCreditTransactionFee: 0,
      AmeExpNonQualCreditDiscountFee: 0,
      AmeExpNonQualCreditTransactionFee: 0,
      FeePerTid: 0,
      OfTids: 0,
      Total: 0,
      MonthlyServiceFee: 0,
      AchRejectFee: 0,
      MinimumProcessingFee: 0,
      AnnualMembershipFee: 0,
      Nameless2: 0,
      Voyager: 0,
      WEX: 0,
      FleetCorAuth: 0,
      WexAuthFees: 0,
      WexSaleDiscount: 0,
      WexRefundDiscount: 0,
      WexChargebacksDiscount: 0,
      WexReversalDiscount: 0,
      WexChargebackFee: 0,
      WexChargebacksReversalFee: 0,
      PassMcQualCreditDiscountFee: 0,
      PassVisaQualCreditDiscountFee: 0,
      PassDiscNetCreditDiscountFee: 0,
      PassAmeExpCreditDiscountFee: 0,
      PassMcQualNonPinDebitDiscountFee: 0,
      PassVisaQualNonPinDebitDiscountFee: 0,
      PassDiscQualNonPinDebiDiscountFee: 0,
      PassSaleCreditNonPinTransactionFee: 0,
      PassAmeExpTransactionFee: 0,
      McAuthFee: 0,
      VisaAuthFee: 0,
      DiscoverAuthFee: 0,
      AmericanExpressAuthFee: 0,
      DebitSalesDiscount: 0,
      AtmCardTransactionFee: 0,
      DebitCardAuthorizationFee: 0,
      DebitDeclineInterchangeFee: 0,
      DebitInterchangeFee: 0,
      DebitPreAuth: 0,
      AdjustmentFee: 0,
      PinDebitDeclined: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof northBoardingInterSchema>) => {
    console.log(value);
  };

  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* NORTH BOARDING */}
          <h1 className="mt-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
            North Boarding
          </h1>
          {/* Location and distribuition */}
          <h1 className="mt-5 flex gap-2 text-2xl font-semibold text-sky-500">
            Location and Distribution (Additional Credit Check)
          </h1>
          <div className="my-2 flex gap-10">
            <CheckboxForm
              control={form.control}
              formName="VisitNotRequired"
              label=""
              placeholder="Visit Not Required (Lic. Professional)"
              className=""
            />
          </div>
          {/* GENERATION OF THE WHOLE NORTH FORM */}
          <NorthFormGeneration
            formControl={form.control}
            formFields={northBoardingForm}
            gridCols={"3"}
          />

          <div className="my-2 border p-4">
            {/* FLAT RATE */}
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Flat Rate
            </h1>
            <div className="grid grid-cols-3 items-end gap-2">
              {flaxRateInterNorthForm.map((item) => (
                <div key={item.id}>
                  {item.type ? (
                    <InputForm
                      control={form.control}
                      formName={item.formName}
                      label={item.title}
                      placeholder={item.placeholder}
                    />
                  ) : (
                    <p className="mb-2 pr-4 text-end">{item.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="my-2 border p-4">
            {/* FLAT RATE FEES */}
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Flat Rate Fees
            </h1>
            <div className="grid grid-cols-3 items-end gap-2">
              {flexRateFeesNorthForm.map((item) => (
                <InputForm
                  control={form.control}
                  formName={item.formName}
                  label={item.title}
                  placeholder={item.placeholder}
                  key={item.id}
                />
              ))}
            </div>
          </div>
          <div className="my-2 border p-4">
            {/* TIERED PRICING */}
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Tiered Pricing
            </h1>
            <div className="grid grid-cols-3 items-end gap-2">
              {tieredPricingNorthForm.map((item) => (
                <div key={item.id}>
                  {item.type ? (
                    <InputForm
                      control={form.control}
                      formName={item.formName}
                      label={item.title}
                      placeholder={item.placeholder}
                    />
                  ) : (
                    <p className="mb-2 pr-4 text-end">{item.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* BILLED MONTHLY FEES */}
          <div className="my-2 border p-4">
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Billed Monthly Fees
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={billedMonthlyFeesInterForm}
              gridCols={"3"}
            />
          </div>
          {/* BUYPASS & AUTHORIZATION FEES */}
          <div className="my-2 border p-4">
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Buypass & Authorization Fees
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={buypassAuthorizationInterForm}
              gridCols={"3"}
            />
          </div>
          {/* WEX FULL ACQUIRING FEES */}
          <div className="my-2 border p-4">
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              WEX Full Acquiring Fees
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={wexFullFeesInterForm}
              gridCols={"3"}
            />
          </div>
          {/* PASS THROUGH INTERCHANGE  */}
          <div className="my-2 border p-4">
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Pass Through Interchange
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={passThroughInterForm}
              gridCols={"3"}
            />
          </div>
          {/* AUTHORIZATION AND AVS FEES  */}
          <div className="my-2 border p-4">
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              Authorization and AVS Fees
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={authAvsFeesInterForm}
              gridCols={"4"}
            />
          </div>
          {/* PIN DEBIT  */}
          <div className="my-2 border p-4">
            <h1 className="my-5 flex justify-center gap-2 text-center text-4xl font-semibold text-sky-500">
              PIN Debit
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={pinDebitInterForm}
              gridCols={"4"}
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

export default function RenderNorthInterchangeComponents(value: string) {
  switch (value) {
    case "northDetails":
      return <NorthInformation />;
  }
}
