"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  acceptingVisaMcDiscoverFspForm,
  accountInformationFspForm,
  americaExpressVolumeFspForm,
  amexDcRateFspForm,
  audioFspForm,
  bankingInformationFspForm,
  cardTypesNotToAcceptFspForm,
  certificatesFspForm,
  connectionTypeFspForm,
  dbaAddressFspForm,
  dbaInformationFspForm,
  dbaLegalInformationFspForm,
  dbaTaxInformationFspForm,
  deliveryReceiptRequestedFspForm,
  equipmentInformationFspForm,
  fileBuildInformationFspForm,
  flatRateFspForm,
  grossNetFspForm,
  hasBeenTerminatedFspForm,
  hasFiledForBankruptcyFspForm,
  independentServiceFspForm,
  individualSharedFspForm,
  interchangePlusRatesFspForm,
  isPaymentEncryptedFspForm,
  marketingMethodsFspForm,
  otherPricingInformationFspForm,
  OwnersTable,
  ownProdFspForm,
  passDuesAssessmentsFspForm,
  passThroughInterchangeFspForm,
  pciFrequencyFspForm,
  pinDebitFspForm,
  returnPolicyFspForm,
  seasonalMerchantFspForm,
  seasonalMonthsFspForm,
  serverFspForm,
  serviceRequestedFspForm,
  shippedByFspForm,
  swipedNonSwipedFspForm,
  tipLineFspForm,
  usesFulfillHouseFspForm,
  viMcDiscRateFspForm,
  wavitAppOnlyFspForm,
  whatPercentSalesFspForm,
  whoEntersCardInfoFspForm,
  whoProcessesFspForm,
  whoShipsFspForm,
} from "@/constants";
import { DataTypes } from "@/types";
import React, { useState } from "react";
import { Form } from "../ui/form";
import {
  financialInformationFspSchema,
  merchantInformationFspSchema,
  merchantOwnerFspSchema,
  moToQuestionaireFspSchema,
  pricingInformationFspSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  FormGenerationRadioGrid,
  InputForm,
  FormGenerationRadio,
  TextAreaForm,
  SwitchForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";
import { Switch } from "../ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import AddNewMerchantOwner from "./AddNewMerchantOwner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MerchantDetail = () => {
  const form = useForm<z.infer<typeof merchantInformationFspSchema>>({
    resolver: zodResolver(merchantInformationFspSchema),
    defaultValues: {
      MerchantName: "",
      EmailStatements: "",
      Phone: "",
      Fax: "",
      ContactName: "",
      ContactPhone: "",
      ContactServicePhone: "",
      BusinessWebsite: "",
      DateOpen: "",
      Street: "",
      AddressSearchBar: "",
      City: "",
      State: "",
      PostalCode: "",
      CorporateLegalName: "",
      Locations: "",
      LegalCity: "",
      LegalState: "",
      LegalPostalCode: "",
      UseCorporateLegalName: "",
      IrsName: "",
      SICMCC: "",
      EIN: "",
      BusinessType: "",
      TypeOfServicesOffered: "",
      EinSsn: "",
      StockSymbol: "",
      MailStatements: "",
      BuildingType: "",
      MerchantType: "",
      AreaZoned: "",
      SquereFootage: "",
    },
  });

  const onSubmit = (value: z.infer<typeof merchantInformationFspSchema>) => {
    console.log(value);
  };

  return (
    <section className="text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* DBA Information Section */}
          <h1 className="my-5 text-2xl font-bold text-sky-500">
            DBA Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={dbaInformationFspForm}
            gridCols={"2"}
          />

          {/* DBA Address Section */}
          <h1 className="my-5 text-2xl font-bold text-sky-500">
            DBA Address Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={dbaAddressFspForm}
            gridCols={"2"}
          />

          {/* LEGAL INFORMATION Section */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Legal Information
          </h1>
          <div className="mb-2 flex gap-2">
            <Switch className="flex-none" />
            <p className="flex-auto">Use Business Address DBA</p>
          </div>
          <FormGeneration
            formControl={form.control}
            formFields={dbaLegalInformationFspForm}
            gridCols={"2"}
          />

          {/* TAX INFORMATION Section */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Tax Information
          </h1>
          <div className="mb-2 flex gap-2">
            <Switch className="flex-none" />
            <p className="flex-auto">Use Corporate Legal Name</p>
          </div>
          <FormGeneration
            formControl={form.control}
            formFields={dbaTaxInformationFspForm}
            gridCols={"2"}
          />
          <div className="flex items-center gap-2">
            <InputForm
              control={form.control}
              formName="EinSsn"
              label=""
              type="radio"
              className="w-fit"
            />
            <label className="mt-2">EIN</label>
            <InputForm
              control={form.control}
              formName="EinSsn"
              label=""
              type="radio"
              className="ml-4 w-fit"
            />
            <label className="mt-2">SSN</label>
          </div>

          {/* STATEMENTS INFORMATION SECTION */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Statements Information
          </h1>
          <div className="grid w-3/6 grid-cols-2 gap-0 max-xl:w-full">
            <div className="flex items-center gap-2">
              <InputForm
                control={form.control}
                formName="MailStatements"
                label=""
                type="radio"
                className="ml-4 w-fit"
              />
              <label className="mt-2">Mail Statements to DBA Name</label>
            </div>
            <div className="flex items-center gap-2">
              <InputForm
                control={form.control}
                formName="MailStatements"
                label=""
                type="radio"
                className="ml-4 w-fit"
              />
              <label className="mt-2">Mail Chargebacks to DBA Name</label>
            </div>
            <div className="flex items-center gap-2">
              <InputForm
                control={form.control}
                formName="MailStatements"
                label=""
                type="radio"
                className="ml-4 w-fit"
              />
              <label className="mt-2">Mail Statements to Legal Name</label>
            </div>
            <div className="flex items-center gap-2">
              <InputForm
                control={form.control}
                formName="MailStatements"
                label=""
                type="radio"
                className="ml-4 w-fit"
              />
              <label className="mt-2">Mail Chargebacks to DBA Name</label>
            </div>
          </div>
          <p className="ml-4 text-gray-500">
            NOTE: Statements are {"'Summary'"} for Cash Discount apps &{" "}
            {"'Detailed'"}{" "}
          </p>

          {/* LOCATION SECTION */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Location Information
          </h1>
          <div className="grid grid-cols-4 gap-2">
            {/* BUILDING TYPE */}
            <div>
              <h2 className="text-center text-xl font-semibold">
                Building Type
              </h2>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="BuildingType"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Shopping Center</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="BuildingType"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Office Building</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="BuildingType"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Industrial Building</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="BuildingType"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Residence</label>
              </div>
            </div>
            {/* MERCHANT */}
            <div>
              <h2 className="text-center text-xl font-semibold">
                Merchant Type
              </h2>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="MerchantType"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Owns</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="MerchantType"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Rent</label>
              </div>
            </div>
            {/* AREA ZONED */}
            <div>
              <h2 className="text-center text-xl font-semibold">Area Zoned</h2>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="AreaZoned"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Commercial</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="AreaZoned"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">Residential</label>
              </div>
            </div>
            {/* SQUARE FOOTAGE */}
            <div>
              <h2 className="text-center text-xl font-semibold">
                Square Footage
              </h2>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="SquereFootage"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">0 - 1000</label>
              </div>
              <div className="flex items-center gap-2">
                <InputForm
                  control={form.control}
                  formName="SquereFootage"
                  label=""
                  type="radio"
                  className="ml-4 w-fit"
                />
                <label className="mt-2">1000+</label>
              </div>
            </div>
          </div>

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

const FinancialInformation = () => {
  const form = useForm<z.infer<typeof financialInformationFspSchema>>({
    resolver: zodResolver(financialInformationFspSchema),
    defaultValues: {
      CheckingSavings: "",
      BankName: "",
      BankRouting: "",
      BankAccounting: "",
      // Sales
      AcceptingVisaMcDiscover: "",
      hasBeenTerminated: "",
      Reason: "",
      // Settings
      StoreFrontSwipe: 0,
      Internet: 0,
      ManuallyKeyed: 0,
      // SERVICE REQUESTED
      VisaMcAvgTransaction: "",
      VisaMcHighestTransaction: "",
      VisaMcGrossMoSales: "",
      DiscoverAvgTransaction: "",
      DiscoverHighestTransaction: "",
      DiscoverGrossMoSales: "",
      AmexOptBlueAvgTransaction: "",
      AmexOptBlueHighestTransaction: "",
      AmexOptBlueGrossMoSales: "",
      // AMERICAN EXPRESS VOLUME ? 1,000,000 ANNUALLY?
      AmericaExpressVolume: "",
      AmericanExpressVolumeAccount: "",
      // DISCOVER RETAINED
      DiscoverAccount: "",
      Visa: false,
      Mastercard: false,
      AmericanExpress: false,
      Discover: false,
      PayPal: false,
      EBT: false,
      CashBenefit: false,
      FnsAccount: 0,
      // SEASONAL MERCHANT
      SeasonalMerchant: false,
      January: false,
      February: false,
      March: false,
      April: false,
      May: false,
      June: false,
      July: false,
      August: false,
      September: false,
      October: false,
      November: false,
      December: false,
      // DOES THE MERCHANT USE AN INDEPENDENT SERVICE THAT
      // STORES, MAINTAINS OR TRANSMITS CARDHOLDER INFO?
      IndependentService: false,
      IndependentServiceName: "",
      IndependentServicePhone: "",
      // DOES MERCHANT USE A FULFILLMENT HOUSE TO FULFILL PRODUCT?
      UsesFulfillHouse: false,
      FulfillHouseName: "",
      FulfillHousePhone: "",
      // GENERAL SETTINGS
      OptOut: false,
      // RETURN POLICY
      ReturnPolicy: "",
      PolicyDescription: "",
    },
  });

  const onSubmit = (value: z.infer<typeof financialInformationFspSchema>) => {
    console.log(value);
  };

  const [front, setFront] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [manually, setManually] = useState<number>(0);
  // eslint-disable-next-line no-unused-vars
  const [lastModify, setlastModify] = useState<
    "front" | "interest" | "manually"
  >("front");

  const adjustValues = (
    currentField: "front" | "interest" | "manually",
    value: number,
  ) => {
    if (currentField === "front") {
      setFront(value);
    } else if (currentField === "interest") {
      setInterest(value);
    } else {
      setManually(value);
    }

    const total =
      (currentField === "front" ? value : front) +
      (currentField === "interest" ? value : interest) +
      (currentField === "manually" ? value : manually);

    if (total > 100) {
      const diff = total - 100;
      const adjustValue = value - diff;

      if (currentField === "front") {
        setFront(adjustValue);
      } else if (currentField === "interest") {
        setInterest(adjustValue);
      } else {
        setManually(adjustValue);
      }
    }

    setlastModify(currentField);
  };

  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* BANK INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Bank Information
          </h1>
          <FormGenerationRadio
            formControl={form.control}
            formFields={bankingInformationFspForm}
          />
          <div className="grid grid-cols-4 items-end gap-2">
            <div className="col-span-2">
              <InputForm
                control={form.control}
                formName="BankName"
                label="Bank Name: *"
                placeholder="Type your bank name"
                className=""
              />
            </div>
            <InputForm
              control={form.control}
              formName="BankRouting"
              label="Bank Routing #: *"
              placeholder="#"
              className="col-auto"
            />
            <InputForm
              control={form.control}
              formName="BankAccounting"
              label="Bank Accounting #: *"
              placeholder="#"
              className="col-auto"
            />
          </div>
          {/* SALES INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Sales</h1>
          <p className="mt-5">
            Currently Accepting Visa/mastercard/Discover/AMEX?
          </p>
          <FormGenerationRadio
            formControl={form.control}
            formFields={acceptingVisaMcDiscoverFspForm}
          />
          <p className="mt-5">
            Has merchant/owner/prioncipals ever been terminated from accepting
            payment cards?
          </p>
          <FormGenerationRadio
            formControl={form.control}
            formFields={hasBeenTerminatedFspForm}
          />

          <InputForm
            control={form.control}
            formName="Reason"
            label="Reason:"
            placeholder="Type your reason."
            className="w-1/2"
          />
          {/* SETTINGS INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Settings</h1>
          <p className="my-3">
            Sales Distribution - Fil the sales distribution of each category to
            add up to 100
          </p>
          <div className="m-auto grid w-3/4 grid-cols-3 items-end gap-2">
            <InputForm
              control={form.control}
              formName="StoreFrontSwipe"
              label="Store Front / Swipe: *"
              type="number"
              placeholder="Type your bank name"
              state={front}
              setState={(value) => adjustValues("front", Number(value))}
            />
            <InputForm
              control={form.control}
              formName="Internet"
              label="Internet: *"
              type="number"
              placeholder="#"
              state={interest}
              setState={(value) => adjustValues("interest", Number(value))}
            />
            <InputForm
              control={form.control}
              formName="ManuallyKeyed"
              label="Manually Keyed: *"
              type="number"
              placeholder="#"
              state={manually}
              setState={(value) => adjustValues("manually", Number(value))}
            />
          </div>
          <div className="m-auto my-3 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700">
            <Progress value={front + interest + manually}>
              Progress: {front + interest + manually}%
            </Progress>
          </div>

          {/* SERVICE REQUESTED */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Service Requested
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={serviceRequestedFspForm}
            gridCols={"3"}
          />

          {/* AMERICAN EXPRESS VOLUME */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            American Express Volume {">"} $1,000,000 Annually?
          </h1>
          <FormGenerationRadio
            formControl={form.control}
            formFields={americaExpressVolumeFspForm}
          />
          <InputForm
            control={form.control}
            formName="AmericanExpressVolumeAccount"
            label="Account #: *"
            placeholder="#"
            className="w-1/2"
          />
          {/* DISCOVER RETAINED / CARD TYPES */}
          <div className="grid grid-cols-2 gap-2 max-xl:grid-cols-1">
            <div className="col-span-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Discover Retained
              </h1>
              <InputForm
                control={form.control}
                formName="DiscoverAccount"
                label="Account #: *"
                placeholder="#"
                className=""
              />
            </div>
            <div className="col-span-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Card Types NOT to Accept
              </h1>
              <div className="grid grid-cols-3 gap-2">
                {cardTypesNotToAcceptFspForm.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex w-full items-center gap-2"
                    >
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
            </div>
          </div>
          {/* EBT / CASH BENEFIT  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">--</h1>
          <div className="flex w-full items-center gap-2">
            <CheckboxForm
              control={form.control}
              formName="EBT"
              label=""
              placeholder="EBT"
            />
          </div>
          <div className="mb-3 flex w-full items-center gap-2">
            <CheckboxForm
              control={form.control}
              formName="CashBenefit"
              label=""
              placeholder="Cash Benefit"
            />
          </div>
          <InputForm
            control={form.control}
            formName="FnsAccount"
            label="FNS Account #: (if exists, 7 digit required)"
            placeholder="#"
            className="w-1/2"
          />
          {/* SEASONAL MERCHANT  */}
          <div className="flex w-full gap-2">
            <div className="flex-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Seasonal Merchant
              </h1>
              <FormGenerationRadio
                formControl={form.control}
                formFields={seasonalMerchantFspForm}
              />
              <p>If Yes, indicate which months:</p>
              <div className="grid grid-flow-col grid-rows-4 gap-2 max-xl:grid-rows-6">
                {seasonalMonthsFspForm.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex w-full items-center gap-2"
                    >
                      <CheckboxForm
                        control={form.control}
                        formName={item.formName}
                        label=""
                        placeholder={item.formName}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="mt-5 text-2xl font-bold text-sky-500">
                Does mercahnt use an independent service that stores, maintains
                or transmits cardholder information?
              </h1>
              <FormGenerationRadio
                formControl={form.control}
                formFields={independentServiceFspForm}
              />
              <InputForm
                control={form.control}
                formName="IndependentServiceName"
                label="Name:"
                placeholder="Enter the name"
                className="w-full"
              />
              <InputForm
                control={form.control}
                formName="IndependentServicePhone"
                label="Phone:"
                placeholder="(___) ___-_____"
                className="w-full"
              />
            </div>
          </div>
          {/* DOES MERCHANT USE A FULFILLMENT HOUSE  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Does Merchant use a fulfillment house to fulfill product?
          </h1>
          <FormGenerationRadio
            formControl={form.control}
            formFields={usesFulfillHouseFspForm}
          />
          <InputForm
            control={form.control}
            formName="FulfillHouseName"
            label="Name:"
            placeholder="Enter the name"
            className="w-1/2"
          />
          <InputForm
            control={form.control}
            formName="FulfillHousePhone"
            label="Phone:"
            placeholder="(___) ___-_____"
            className="w-1/2"
          />
          {/* GENERAL SETTINGS  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            General Settings
          </h1>
          <div className="flex w-1/2 items-center gap-2 max-xl:w-full">
            <CheckboxForm
              control={form.control}
              formName="OptOut"
              label=""
              placeholder="Opt Out (by checking this box, Merchant will not receive future
              commercial marketing communications from AmEx)"
            />
          </div>
          {/* RETURN POLICY  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Return Policy
          </h1>
          <div className="grid w-1/2 grid-cols-3 max-xl:w-full">
            {returnPolicyFspForm.map((item) => {
              return (
                <div key={item.id} className="flex w-full items-center gap-2">
                  <InputForm
                    control={form.control}
                    formName={item.formName}
                    label=""
                    type="radio"
                    className="ml-4 w-fit"
                  />
                  <label className="mt-2">{item.title}</label>
                </div>
              );
            })}
            <InputForm
              control={form.control}
              formName="PolicyDescription"
              label=""
              placeholder="Enter the name"
              className="w-full"
            />
          </div>
          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-5" btnType="default">
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>

      <div className="flex-1"></div>
    </section>
  );
};

const MoToQuestionaire = () => {
  const form = useForm<z.infer<typeof moToQuestionaireFspSchema>>({
    resolver: zodResolver(moToQuestionaireFspSchema),
    defaultValues: {
      BusinessPercentage: 0,
      IndividualsPercentage: 0,
      MktNewspapersMagazine: "",
      MktOutboundTelemarketing: "",
      MktMail: "",
      MktInternet: "",
      MktTelevisionRadio: "",
      MktOther: "",
      MktOtherDescription: "",
      CardInfoWhoEnters: "",
      CardInfoOtherDescription: "",
      OwnProd: false,
      OwnProdBusinessOther: "",
      OwnProdOtherDescription: "",
      WhoProcesses: "",
      ProcessorOtherDescription: "",
      ShippedBy: "",
      ShippedOtherDescription: "",
      WhoShips: "",
      DaysToShip: "",
      DeliveryReceiptRequested: false,
      IsPaymentEncrypted: false,
      Certificate: "",
      CertificateIssuer: "",
      IndividualShared: false,
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
          <div className="grid w-3/4 grid-cols-3 gap-2 max-xl:grid-cols-1">
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
              <h1 className="mt-5 flex gap-2 text-xl font-semibold">
                Who enters Card Information Into the Processing System
              </h1>
              <FormGenerationRadioGrid
                formControl={form.control}
                formFields={whoEntersCardInfoFspForm}
              />
            </div>
            <div className="col-span-1 content-end">
              <h1 className="mt-5 flex gap-2 text-xl font-semibold">
                Do you own your own Product/Inventory (if no, Where is inventory
                stored)
              </h1>
              <FormGenerationRadioGrid
                formControl={form.control}
                formFields={ownProdFspForm}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {/* WHO PROCESSES THE ORDER */}
            <div className="col-span-1 content-end">
              <h1 className="mt-5 flex gap-2 text-xl font-semibold">
                Who Processes the Order
              </h1>
              <FormGenerationRadioGrid
                formControl={form.control}
                formFields={whoProcessesFspForm}
              />
            </div>
            <div className="col-span-1">
              <h1 className="mt-5 flex gap-2 text-xl font-semibold">
                Product Shipped By (Shipped Via)
              </h1>
              <FormGenerationRadioGrid
                formControl={form.control}
                formFields={shippedByFspForm}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {/* WHO SHIPS PRODUCT */}
            <div className="col-span-1 content-end">
              <h1 className="mt-5 flex gap-2 text-xl font-semibold">
                Who Ships Product
              </h1>
              <FormGenerationRadioGrid
                formControl={form.control}
                formFields={whoShipsFspForm}
              />
            </div>
            <div className="col-span-1">
              <h1 className="mt-5 flex gap-2 text-xl font-semibold">
                Delivery Receipt Request
              </h1>
              <FormGenerationRadioGrid
                formControl={form.control}
                formFields={deliveryReceiptRequestedFspForm}
              />
            </div>
          </div>
          {/* IF CARD INFORMATION IS TAKEN */}
          <h1 className="mt-5 flex gap-2 text-xl font-semibold">
            If Card Information is Taken Over The Internet, Is Payment Encrypted
            By SSL or better?
          </h1>
          <FormGenerationRadio
            formControl={form.control}
            formFields={isPaymentEncryptedFspForm}
          />

          <FormGeneration
            formControl={form.control}
            formFields={certificatesFspForm}
            gridCols={"3"}
          />
          <FormGenerationRadio
            formControl={form.control}
            formFields={individualSharedFspForm}
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

const MerchantOwner = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "OwnerName", header: "Owner Name" },
    { accessorKey: "Ownership", header: "Ownership %" },
    { accessorKey: "CellNumber", header: "Cell Number (used for DocuSign)" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof merchantOwnerFspSchema>>({
    resolver: zodResolver(merchantOwnerFspSchema),
    defaultValues: {
      HasFiledForBankruptcy: false,
      Account: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof merchantOwnerFspSchema>) => {
    console.log(value);
  };

  return (
    <>
      <section className="text-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* OWNERS */}
            <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
              Owners
            </h1>
            <p className="font-normal">
              * All signers must be collectively own at least 25% of the company
              to continue.
            </p>
            {/* MODAL ADD NEW MERCHANT OWNER */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className={
                    "my-5 flex-1 bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:opacity-90"
                  }
                >
                  + Add New Owner
                </Button>
              </DialogTrigger>
              <DialogContent className="2xl:[1200px] max-lg:max-w-[500px] lg:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-semibold text-sky-500">
                    Add New Merchant Owner
                  </DialogTitle>
                  <AddNewMerchantOwner />
                </DialogHeader>
                <DialogDescription />
              </DialogContent>
            </Dialog>
            <div className="grid w-full grid-cols-1 overflow-auto text-start">
              <DataTable
                columns={columns}
                data={OwnersTable}
                enableSorting={true}
                enableColumnFilter={false}
                filteredBy=""
              />
            </div>
            {/* HAS MERCHANT EVER FILED FOR BANKRUPTCY? */}
            <h1 className="mt-5 flex gap-2 text-xl font-semibold">
              Has merchant/owner/principals ever filed for bankruptcy?
            </h1>
            <FormGenerationRadio
              formControl={form.control}
              formFields={hasFiledForBankruptcyFspForm}
            />
            <InputForm
              control={form.control}
              formName="Account"
              label="Account #:"
              placeholder="#"
              className="w-1/2"
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
    </>
  );
};

const PricingInformation = () => {
  const form = useForm<z.infer<typeof pricingInformationFspSchema>>({
    resolver: zodResolver(pricingInformationFspSchema),
    defaultValues: {
      PassTrueInterchange: false,
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
      PciFrequency: "",
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

  return (
    <section className="mt-4 text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* PRICING INFORMATION */}
          <h1 className="mt-5 flex gap-2 text-2xl font-bold text-sky-500">
            Pricing Information
          </h1>
          {/* Pass Through Interchange */}
          <div className="mt-2 flex gap-10">
            <p className="mt-1 flex-none content-center">
              Pass Through Interchange:
            </p>
            <FormGenerationRadio
              formControl={form.control}
              formFields={passThroughInterchangeFspForm}
            />
          </div>
          {/* Pass Dues & Assessments */}
          <div className="flex gap-10">
            <p className="mt-1 flex-none content-center">
              Pass Dues & Assessments:
            </p>
            <FormGenerationRadio
              formControl={form.control}
              formFields={passDuesAssessmentsFspForm}
            />
          </div>

          {/* TIERED */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>TIERED</AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
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
              <AccordionTrigger>INTERCHANGE PLUS</AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
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
                  <FormGenerationRadio
                    formControl={form.control}
                    formFields={grossNetFspForm}
                  />
                  <FormGeneration
                    formControl={form.control}
                    formFields={interchangePlusRatesFspForm}
                    gridCols={"4"}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FLAX RATE */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>FLAX RATE</AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
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
                      FLAX RATE
                    </h2>
                  </div>
                  <div className="my-3 flex items-end justify-center gap-2">
                    <InputForm
                      control={form.control}
                      formName="DcRate"
                      label="D/C Rate (% Converter):"
                      placeholder="#"
                      className="flex-auto"
                    />
                    <Switch className="mb-2 flex-none" />
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
              <AccordionTrigger>SWIPED / NON-SWIPED</AccordionTrigger>
              <AccordionContent>
                <div className="my-2 w-full rounded-md border px-4 pb-2">
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
                <InputForm
                  control={form.control}
                  formName="DailyMonthly"
                  label=""
                  type="radio"
                  placeholder=""
                  className="flex-none"
                />
                <h2 className="mt-1 flex-auto content-center">
                  Daily (Default)
                </h2>
              </div>
              <div className="flex gap-2">
                <InputForm
                  control={form.control}
                  formName="DailyMonthly"
                  label=""
                  type="radio"
                  placeholder=""
                  className="flex-none"
                />
                <h2 className="mt-1 flex-auto content-center">Monthly</h2>
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
            <div className="my-2">
              <p className="m-0">PCI Frequency: </p>
              <FormGenerationRadio
                formControl={form.control}
                formFields={pciFrequencyFspForm}
                className={"my-0"}
              />
            </div>
            <div className="my-2">
              <p className="m-0">Audio: </p>
              <FormGenerationRadio
                formControl={form.control}
                formFields={audioFspForm}
                className={"my-0"}
              />
            </div>
            <FormGeneration
              formControl={form.control}
              formFields={otherPricingInformationFspForm}
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

const ProgrammingRequest = () => {
  const form = useForm<z.infer<typeof pricingInformationFspSchema>>({
    resolver: zodResolver(pricingInformationFspSchema),
    defaultValues: {},
  });

  const onSubmit = (value: z.infer<typeof pricingInformationFspSchema>) => {
    console.log(value);
  };

  const Price = (row: any) => {
    const amount = parseFloat(row.getValue("price"));
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

    return <div className="text-right font-medium">{formatted}</div>;
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "brand", header: "Brand" },
    { accessorKey: "model", header: "Model" },
    { accessorKey: "purchaseDate", header: "Purchase" },
    { accessorKey: "warrantyExpiration", header: "Warranty Expiration" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "location", header: "Location" },
    { accessorKey: "assignedTo", header: "Assigned" },
    { accessorKey: "price", header: "Price", cell: Price },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="mt-5 text-start">
          {/* ACCOUNT INFORMATION */}
          <h1 className="my-5 flex gap-2 text-2xl font-bold text-sky-500">
            Account Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={accountInformationFspForm}
            gridCols={"3"}
          />
          <div className="my-2 grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={equipmentInformationFspForm}
              enableSorting={true}
              enableColumnFilter={false}
              filteredBy=""
            />
          </div>
          <div className="mb-3 mt-10">
            <CheckboxForm
              control={form.control}
              formName="FileBuildVarOnly"
              label=""
              placeholder="File Build / VAR Only (Agent Provides Equipment, Nothing Ships)"
              className=""
            />
          </div>
          <InputForm
            control={form.control}
            formName="PosProviderName"
            label="POS Provider Name"
            placeholder=""
            className="my-3 w-1/3"
          />
          <div className="mt-3 flex gap-2 max-xl:flex-wrap">
            {/* WAVIT APP ONLY */}
            <div className="my-2 w-full rounded-md border px-4 pb-2">
              <h1 className="mt-2 gap-2 text-2xl font-bold text-sky-500">
                WAVIT APP ONLY
              </h1>
              <p className="text-xl text-sky-500">
                NOTE: Works only on PAZ A920 on TSYS or CLOVER without inventory
              </p>
              <p>(Check all that apply)</p>
              <FormGeneration
                formControl={form.control}
                formFields={wavitAppOnlyFspForm}
                gridCols={"1"}
              />
            </div>
            {/* CONNECTION TYPE */}
            <div className="my-2 w-full rounded-md border px-4 pb-2">
              <h1 className="my-2 gap-2 text-2xl font-bold text-sky-500">
                CONNECTION TYPE
              </h1>
              <FormGeneration
                formControl={form.control}
                formFields={connectionTypeFspForm}
                gridCols={"1"}
              />
            </div>
          </div>
          {/* CLOVER ONLY */}
          <div className="my-2 w-full rounded-md border px-4 pb-2">
            <h1 className="my-2 gap-2 text-2xl font-bold text-sky-500">
              (CLOVER ONLY)
            </h1>
            <FormGeneration
              formControl={form.control}
              formFields={connectionTypeFspForm}
              gridCols={"1"}
            />
          </div>

          <div className="mt-10 flex gap-2 max-2xl:flex-wrap">
            {/* FILE BUILDING INFORMATION */}
            <div className="w-full">
              <h2 className="gap-2 text-xl font-semibold">
                File Build Information
              </h2>
              <FormGenerationRadio
                formControl={form.control}
                formFields={fileBuildInformationFspForm}
                className={"w-full"}
              />
              <CheckboxForm
                control={form.control}
                formName="Pbx"
                label=""
                placeholder="PBX"
                className=""
              />
              <CheckboxForm
                control={form.control}
                formName="Wavit"
                label=""
                placeholder="WAVit"
                className=""
              />
              <CheckboxForm
                control={form.control}
                formName="PinDebit"
                label=""
                placeholder="Pin Debit"
                className=""
              />
              {/* Auto Close */}
              <div className="flex items-center gap-2">
                <CheckboxForm
                  control={form.control}
                  formName="AutoClose"
                  label=""
                  placeholder="Auto Close"
                  className=""
                />
                <p className="mt-3 px-2 text-sm">
                  If Auto Close checked, What Time?
                </p>
                <InputForm
                  control={form.control}
                  formName="AutoCloseTime"
                  label=""
                  placeholder="Time"
                  className=""
                />
              </div>
              {/* Auto Close */}
              <div className="flex items-center gap-2">
                <CheckboxForm
                  control={form.control}
                  formName="TipLine"
                  label=""
                  placeholder="Tip Line"
                  className="text-nowrap"
                />
                <p className="mt-3 text-nowrap px-2 text-sm">
                  If tip line checked, choose one:
                </p>
                <FormGenerationRadio
                  formControl={form.control}
                  formFields={tipLineFspForm}
                  className={"w-full"}
                />
              </div>
              {/* SERVER */}
              <div className="flex items-center gap-2">
                <p className="mt-3 px-7">Server:</p>
                <FormGenerationRadio
                  formControl={form.control}
                  formFields={serverFspForm}
                  className={"w-full"}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-2">
                <div className="flex-auto">
                  <InputForm
                    control={form.control}
                    formName="SuggestedTipPercentages"
                    label="Suggested tip percentages:"
                    placeholder="#"
                    className="flex-1"
                  />
                </div>
                <div className="flex-auto">
                  <InputForm
                    control={form.control}
                    formName="SalesTax"
                    label="Sales Tax %:"
                    placeholder="#"
                    className=""
                  />
                </div>
              </div>
              <TextAreaForm
                control={form.control}
                formName="MessageToTheBoarding"
                label="Message to the Boarding / file build team (155 characters max): *"
                placeholder="Type your message..."
              />
            </div>
          </div>

          <SwitchForm
            control={form.control}
            formName="ShipPriority"
            label="Use DBA Address"
          />
        </div>
      </form>
    </Form>
  );
};

export default function RenderNewFspComponents(value: string) {
  switch (value) {
    case "merchantDetail":
      return <MerchantDetail />;
    case "financialInformation":
      return <FinancialInformation />;
    case "moToQuestionaire":
      return <MoToQuestionaire />;
    case "merchantOwner":
      return <MerchantOwner />;
    case "pricingInformation":
      return <PricingInformation />;
    case "programmingRequest":
      return <ProgrammingRequest />;
  }
}
