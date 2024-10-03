/* eslint-disable @next/next/no-sync-scripts */
"use client";
import {
  amexDcRateFspForm,
  audioFspForm,
  certificatesFspForm,
  deliveryReceiptRequestedFspForm,
  flatRateFspForm,
  grossNetFspForm,
  individualSharedFspForm,
  interchangePlusRatesFspForm,
  isPaymentEncryptedFspForm,
  marketingMethodsFspForm,
  otherPricingInformationFspForm,
  ownProdFspForm,
  ownProdTypeFspForm,
  passDuesAssessmentsFspForm,
  passThroughInterchangeFspForm,
  pciFrequencyFspForm,
  pinDebitFspForm,
  shippedByFspForm,
  swipedNonSwipedFspForm,
  viMcDiscRateFspForm,
  whatPercentSalesFspForm,
  whoEntersCardInfoFspForm,
  whoProcessesFspForm,
  whoShipsFspForm,
} from "@/constants";
import React, { useState } from "react";
import {
  moToQuestionaireFspSchema,
  pricingInformationFspSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
  SwitchForm,
  RadioForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Form } from "../ui/form";


const MoToQuestionaire = () => {
  const form = useForm<z.infer<typeof moToQuestionaireFspSchema>>({
    resolver: zodResolver(moToQuestionaireFspSchema),
    defaultValues: {
      BusinessPercentage: 0,
      IndividualsPercentage: 0,
      MktNewspapersMagazine: false,
      MktOutboundTelemarketing: false,
      MktMail: false,
      MktInternet: false,
      MktTelevisionRadio: false,
      MktOther: false,
      MktOtherDescription: "",
      CardInfoWhoEnters: "",
      CardInfoOtherDescription: "",
      OwnProd: "",
      OwnProdBusinessOther: "",
      OwnProdOtherDescription: "",
      WhoProcesses: "",
      ProcessorOtherDescription: "",
      ShippedBy: "",
      ShippedOtherDescription: "",
      WhoShips: "",
      DaysToShip: "",
      DeliveryReceiptRequested: "",
      IsPaymentEncrypted: "",
      Certificate: "",
      CertificateIssuer: "",
      IndividualShared: "",
    },
  });

  const onSubmit = (value: z.infer<typeof moToQuestionaireFspSchema>) => {
    console.log(value);
  };

  return (
    <section className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="text-start">
          {/* MO/TO QUESTIONAIRE */}
          <h1 className="mt-5 flex gap-2 text-2xl font-bold">
            MO/TO QUESTIONAIRE
            <span className="flex-auto content-end text-sm font-normal text-black dark:text-white">
              {"(required if 'Store Front/Swipe' less than 70%)"}
            </span>
          </h1>
          <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
            What Percent of Sales Are To
            <span className="flex-auto content-end text-sm font-normal text-black dark:text-white">
              {"* Must add up to 100"}
            </span>
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={whatPercentSalesFspForm}
            gridCols={"2"}
          />
          {/* METHODS OF MARKETING */}
          <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
            Methods of Marketing
          </h1>
          <div className="my-2 grid w-3/4 grid-cols-3 gap-2 max-xl:grid-cols-1">
            {marketingMethodsFspForm.map((item) => {
              return (
                <div key={item.title} className="items-center gap-2">
                  <CheckboxForm
                    control={form.control}
                    formName={item.formName}
                    label=""
                    placeholder={item.title}
                  />
                </div>
              );
            })}
          </div>
          {/* PROCESSOR CONFIGURATION */}
          <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
            Processor Configuration
          </h1>
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {/* WHO ENTERS CARD INFORMATION */}
            <div className="col-span-1 content-end">
              <h1 className="mb-10 mt-5 flex gap-2 text-xl font-semibold">
                Who enters Card Information Into the Processing System
              </h1>
              <div className="w-1/2 max-lg:w-full">
                <FormGeneration
                  formControl={form.control}
                  formFields={whoEntersCardInfoFspForm}
                  gridCols={"1"}
                />
              </div>
            </div>
            <div className="col-span-1 content-end">
              <h1 className="my-5 flex gap-2 text-xl font-semibold">
                Do you own your own Product/Inventory (if no, Where is inventory
                stored)
              </h1>
              <div className="grid grid-cols-2 gap-2">
                <FormGeneration
                  formControl={form.control}
                  formFields={ownProdFspForm}
                  gridCols={"1"}
                />
                <FormGeneration
                  formControl={form.control}
                  formFields={ownProdTypeFspForm}
                  gridCols={"1"}
                />
              </div>
              <div className="">
                <InputForm
                  control={form.control}
                  formName="OwnProdOtherDescription"
                  label="Other:"
                  className="w-1/2 max-lg:w-full"
                  placeholder="Other"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {/* WHO PROCESSES THE ORDER */}
            <div className="col-span-1 content-end">
              <h1 className="my-5 flex gap-2 text-xl font-semibold">
                Who Processes the Order
              </h1>
              <div className="w-1/2 max-lg:w-full">
                <FormGeneration
                  formControl={form.control}
                  formFields={whoProcessesFspForm}
                  gridCols={"1"}
                />
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="my-5 flex gap-2 text-xl font-semibold">
                Product Shipped By (Shipped Via)
              </h1>
              <div className="w-1/2 max-lg:w-full">
                <FormGeneration
                  formControl={form.control}
                  formFields={shippedByFspForm}
                  gridCols={"1"}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {/* WHO SHIPS PRODUCT */}
            <div className="col-span-1 content-end">
              <h1 className="my-5 flex gap-2 text-xl font-semibold">
                Who Ships Product
              </h1>
              <div className="w-1/2 max-lg:w-full">
                <FormGeneration
                  formControl={form.control}
                  formFields={whoShipsFspForm}
                  gridCols={"1"}
                />
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="my-5 flex gap-2 text-xl font-semibold">
                Delivery Receipt Request
              </h1>
              <FormGeneration
                formControl={form.control}
                formFields={deliveryReceiptRequestedFspForm}
                gridCols={"2"}
              />
            </div>
          </div>
          {/* IF CARD INFORMATION IS TAKEN */}
          <h1 className="mt-5 flex gap-2 text-xl font-semibold">
            If Card Information is Taken Over The Internet, Is Payment Encrypted
            By SSL or better?
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={isPaymentEncryptedFspForm}
            gridCols={"6"}
          />

          <FormGeneration
            formControl={form.control}
            formFields={certificatesFspForm}
            gridCols={"3"}
          />
          <FormGeneration
            formControl={form.control}
            formFields={individualSharedFspForm}
            gridCols={"6"}
          />

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


const PricingInformation = () => {
  const form = useForm<z.infer<typeof pricingInformationFspSchema>>({
    resolver: zodResolver(pricingInformationFspSchema),
    defaultValues: {
      PassTrueInterchange: "",
      PassDuesAndAssesments: "",
      PricingType: "",
      CreditQual: 0,
      MidCreditQual: 0,
      NonCreditQual: 0,
      NonPinDebitNonQual: 0,
      NonPinDebitMidQual: 0,
      NonPinDebitNonQual2: 0,
      AmexCreditQual: 0,
      AmexMidCreditQual: 0,
      AmexNonCreditQual: 0,
      PayPalDCFee: 0,
      GrossNet: "",
      ViMcDiscRate: 0,
      ViMcdiscNonPinDebitRate: 0,
      AmexDCRate: 0,
      PaypalDCRate: 0,
      DcRate: 0,
      UseDefaultRate: false,
      DefaultRate: 3.3816,
      ViMcDiscFee: 0,
      ViMcDiscNonPinDebitDCRate: 0,
      AmexDcRate2: 0,
      PayPalDcRate2: 0,
      SwipedRate: 0,
      NonSwipedRate: 0,
      PinDebit: false,
      PinDebitDcRate: 0,
      PinDebitAuthRate: 0,
      DailyMonthly: "",
      PciFrequency: "daily",
      Audio: "",
      AuthrizationFee: 0,
      EbtCashItemFee: 0,
      StatementFee: 0,
      MonthlyMinimumFee: 0,
      PciFee: 0,
      AddressVerification: 0,
      EftFoodItemFee: 0,
      CustomerServiceFee: 0,
      TinInvalidFee: 0,
      VoiceAuthorization: 0,
      ReturnedTransaction: 0,
      OnlineReporting: 0,
      AchRejectFee: 0,
      ApplicationFee: 0,
      AudioResponse: 0,
      RegulatoryProductFee: 0,
      ChargebackFee: 0,
      EarlyTerminationFee: 0,
      VoiceAddressVerification: 0,
      WirelessFee: 0,
      RetrievalFee: 0,
      MerchantFee: 0,
      BatchHeaderFee: 0,
      SoftwareFee: 0,
      PciNonComplianceFee: 0,
      SalesTrasactionFee: 0,
      EquipmentFee: 0,
      OtherFeeDescription: "",
      OtherFee: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof pricingInformationFspSchema>) => {
    console.log(value);
  };

  const [dailyMonthly, setDailyMonthly] = useState("");
  const [useDefaultRate, setUseDefaultRate] = useState(false);

  const handleDefaultRate = () => {
    const test = !useDefaultRate
      ? setUseDefaultRate(true)
      : setUseDefaultRate(false);

    console.log("Test const: ", test, "\nDefault const: ", useDefaultRate);

    if (!useDefaultRate) {
      form.setValue("ViMcDiscFee", form.getValues("DefaultRate"));
      form.setValue("ViMcDiscNonPinDebitDCRate", form.getValues("DefaultRate"));
      form.setValue("AmexDcRate2", form.getValues("DefaultRate"));
      form.setValue("PayPalDcRate2", form.getValues("DefaultRate"));
    } else {
      form.setValue("ViMcDiscFee", form.getValues("DcRate"));
      form.setValue("ViMcDiscNonPinDebitDCRate", form.getValues("DcRate"));
      form.setValue("AmexDcRate2", form.getValues("DcRate"));
      form.setValue("PayPalDcRate2", form.getValues("DcRate"));
    }
  };
  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* PRICING INFORMATION */}
          <h1 className="mb-2 mt-5 flex gap-2 text-2xl font-bold text-sky-500">
            Pricing Information
          </h1>
          <div className="grid grid-cols-2 gap-2">
            {/* Pass Through Interchange */}
            <div className="col-auto">
              <p className="content-center">Pass Through Interchange:</p>
              <FormGeneration
                formControl={form.control}
                formFields={passThroughInterchangeFspForm}
                gridCols={"1"}
              />
            </div>
            {/* Pass Dues & Assessments */}
            <div className="col-auto">
              <p className="content-center">Pass Dues & Assessments:</p>
              <FormGeneration
                formControl={form.control}
                formFields={passDuesAssessmentsFspForm}
                gridCols={"1"}
              />
            </div>
          </div>

          {/* TIERED */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <InputForm
                    control={form.control}
                    formName="PricingType"
                    label=""
                    type="radio"
                    placeholder=""
                    className="flex-none"
                  />
                  <h2 className="mt-1 flex-auto content-center text-2xl font-semibold text-sky-500">
                    TIERED
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
                  <div className="my-2 gap-4">
                    <p className="mt-3 text-nowrap text-center max-xl:col-span-2">
                      Vi/MC/Disc D/C Rate:
                    </p>
                    <FormGeneration
                      formControl={form.control}
                      formFields={viMcDiscRateFspForm}
                      gridCols={"3"}
                    />
                  </div>
                  <div className="my-2 gap-4">
                    <p className="mt-5 text-nowrap text-center max-xl:col-span-2">
                      Amex D/C Rate:
                    </p>
                    <FormGeneration
                      formControl={form.control}
                      formFields={amexDcRateFspForm}
                      gridCols={"3"}
                    />
                  </div>
                  <div className="my-2 gap-4">
                    <p className="mt-5 text-nowrap text-center max-xl:col-span-2">
                      PayPal D/C Fee:
                    </p>
                    <InputForm
                      control={form.control}
                      formName="PayPalDCFee"
                      label=""
                      placeholder="%"
                      className="m-auto w-1/3"
                      type="number"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* INTERCHANGE PLUS */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <InputForm
                    control={form.control}
                    formName="PricingType"
                    label=""
                    type="radio"
                    placeholder=""
                    className="flex-none"
                  />
                  <h2 className="mt-1 flex-auto content-center text-2xl font-semibold text-sky-500">
                    INTERCHANGE PLUS
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
                  <div className="space-y-3">
                    <FormGeneration
                      formControl={form.control}
                      formFields={grossNetFspForm}
                      gridCols={"3"}
                    />
                    <FormGeneration
                      formControl={form.control}
                      formFields={interchangePlusRatesFspForm}
                      gridCols={"4"}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FLAT RATE */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <InputForm
                    control={form.control}
                    formName="PricingType"
                    label=""
                    type="radio"
                    placeholder=""
                    className="flex-none"
                  />
                  <h2 className="mt-1 flex-auto content-center text-2xl font-semibold text-sky-500">
                    FLAT RATE
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
                  <div className="my-3 flex items-end justify-center gap-2">
                    <InputForm
                      control={form.control}
                      formName="DcRate"
                      label="D/C Rate (% Converter):"
                      placeholder="#"
                      className="flex-auto"
                    />
                    <SwitchForm
                      control={form.control}
                      formName="UseDefaultRate"
                      label=""
                      id={"test"}
                      className="mb-2"
                      onToggle={() => handleDefaultRate()}
                    />
                    <InputForm
                      control={form.control}
                      formName="DefaultRate"
                      label="Use Default Rate:"
                      placeholder="3.3816"
                      className="flex-auto"
                    />
                  </div>
                  <FormGeneration
                    formControl={form.control}
                    formFields={flatRateFspForm}
                    gridCols={"4"}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* SWIPED / NON-SWIPED */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <InputForm
                    control={form.control}
                    formName="PricingType"
                    label=""
                    type="radio"
                    placeholder=""
                    className="flex-none"
                  />
                  <h2 className="mt-1 flex-auto content-center text-2xl font-semibold text-sky-500">
                    SWIPED / NON-SWIPED (Fiserv Only)
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
                  <FormGeneration
                    formControl={form.control}
                    formFields={swipedNonSwipedFspForm}
                    gridCols={"3"}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* PIN DEBIT CARD */}
          <div className="mt-5 flex gap-2">
            <div className="w-1/2 flex-auto rounded-md border px-4 pb-2">
              <CheckboxForm
                control={form.control}
                formName="PinDebit"
                label=""
                placeholder="PIN DEBIT"
                className="flex-none p-4"
              />
              <FormGeneration
                formControl={form.control}
                formFields={pinDebitFspForm}
                gridCols={"2"}
              />
            </div>
            <div className="w-1/2 flex-auto rounded-md border px-4 pb-2">
              <p className="my-2 text-xl font-semibold">
                DISCOUNT COLLECTED FREQUENCY
              </p>

              <div className="flex gap-2">
                <RadioForm
                  control={form.control}
                  formName="DailyMonthly"
                  label=""
                  options={[
                    {
                      label: "Daily (Default)",
                      value: "daily",
                    },
                    {
                      label: "Monthly",
                      value: "monthly",
                    },
                  ]}
                  state={dailyMonthly}
                  setState={setDailyMonthly}
                  className="size-4"
                />
              </div>
            </div>
          </div>
          {/* OTHER PRICING INFORMATION */}
          <div>
            <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
              Other Pricing Information
              <span className="content-end text-sm font-normal text-red-500">
                * All of these $dollar amounts are required
              </span>
            </h1>
            <div className="flex">
              <div className="my-2 flex-auto">
                <p className="m-0">PCI Frequency: </p>
                <FormGeneration
                  formControl={form.control}
                  formFields={pciFrequencyFspForm}
                  gridCols={"1"}
                />
              </div>
              <div className="my-2 flex-auto">
                <p className="m-0">Audio: </p>
                <FormGeneration
                  formControl={form.control}
                  formFields={audioFspForm}
                  gridCols={"1"}
                />
              </div>
            </div>
            <FormGeneration
              formControl={form.control}
              formFields={otherPricingInformationFspForm}
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

export default function RenderNewFspComponents(value: string) {
  switch (value) {
    case "moToQuestionaire":
      return <MoToQuestionaire />;
    case "pricingInformation":
      return <PricingInformation />;
  }
}
