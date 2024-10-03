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
  bankingInformationFspForm,
  billToFspForm,
  cardTypesNotToAcceptFspForm,
  cloverOnlyFspForm,
  connectionTypeFspForm,
  dbaAddressFspForm,
  dbaAddressShipFspForm,
  dbaInformationFspForm,
  dbaLegalInformationFspForm,
  dbaTaxInformationFspForm,
  equipmentInformationFspForm,
  fileBuildInformationFspForm,
  hasBeenTerminatedFspForm,
  hasFiledForBankruptcyFspForm,
  independentServiceFspForm,
  OwnersTable,
  seasonalMonthsFspForm,
  serverFspForm,
  serviceRequestedFspForm,
  shipToFspForm,
  tipLineFspForm,
  usesFulfillHouseFspForm,
  wavitAppOnlyFspForm,
} from "@/constants";
import { DataTypes } from "@/types";
import React, { useState } from "react";
import { Form } from "../ui/form";
import {
  financialInformationFspSchema,
  merchantInformationFspSchema,
  merchantOwnerFspSchema,
  programmingRequestFspSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
  TextAreaForm,
  SwitchForm,
  RadioForm,
  InputButtonForm,
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
import { CirclePlus, Eye, Loader2, MapPin, Save } from "lucide-react";
import { InputMap } from "../ui/inputAddress";
import { MainOwner } from "../Shared/DataTable/CellFormat";

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
      DateOpen: new Date(),
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

  const [einSsn, setEinSsn] = useState("");
  const [mailStatements, setMailStatements] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [merchantType, setMerchantType] = useState("");
  const [areaZoned, setAreaZoned] = useState("");
  const [squareFootage, setSquareFootage] = useState("");

  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [debouncing, setDebouncing] = useState<string>(search);
  const [fetchResult, setFetchResult] = useState<any[]>([]);
  const { setValue } = form;

  React.useEffect(() => {
    try {
      const debouncingTimer = setTimeout(() => {
        setDebouncing(search);
      }, 1500);

      if (!debouncing) return;

      if (debouncingTimer) {
        const fetching = async () => {
          const result = await fetch(`/api/location?q=${debouncing}`);

          if (!result.ok) throw new Error("Something went wrong!");

          const data = await result.json();

          console.log(data.items);

          setFetchResult(data.items || []);

          if (!search) setSearch("");
        };
        fetching();
      }
    } catch (error) {
      console.log(error);
    }
  }, [debouncing, search]);

  const handleAddressSelect = (address: {
    city: string;
    street: string;
    state: string;
    postalCode: string;
  }) => {
    setValue("Street", address.street);
    setValue("City", address.city);
    setValue("State", address.state);
    setValue("PostalCode", address.postalCode);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <section className="text-start">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-[1600px] py-5 max-2xl:max-w-5xl"
        >
          {/* DBA Information Section */}
          <h1 className="mb-5 text-center text-2xl text-sky-500">
            DBA Information
          </h1>
          <div className="mx-auto w-2/3">
            <FormGeneration
              formControl={form.control}
              formFields={dbaInformationFspForm}
              gridCols={"2"}
            />
          </div>
          <hr className="my-10 border-2" />
          {/* DBA Address Section */}
          <h1 className="my-5 text-center text-2xl text-sky-500">
            DBA Address Information
          </h1>
          <div className="relative">
            {/* Testing input */}
            <div className="mx-auto w-2/3">
              <InputMap
                placeholder="Search for your address"
                className="mb-2 flex-auto"
                value={search}
                onChange={(e: any) => {
                  setSearch(e.target.value);
                  if (!isOpen) setIsOpen(true);
                  if (e.target.value === "" && isOpen) {
                    setIsOpen(false);
                  }
                }}
              />
            </div>

            {isOpen && (
              <React.Fragment>
                {!fetchResult ? (
                  <div>
                    <Loader2 className="animate-spin text-2xl text-gray-500" />
                  </div>
                ) : (
                  <div className="mb-5 max-h-60 w-full space-y-2 overflow-y-auto rounded-md border p-4 shadow-md">
                    {fetchResult?.map((item) => (
                      <div
                        className="flex cursor-pointer items-center rounded-sm border bg-background p-2"
                        onClick={() => handleAddressSelect(item.address)}
                        key={item.title}
                      >
                        <MapPin />
                        <p>{item.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
          <div className="mx-auto w-2/3">
            <FormGeneration
              formControl={form.control}
              formFields={dbaAddressFspForm}
              gridCols={"2"}
            />
          </div>
          <hr className="my-10 border-2" />
          {/* LEGAL INFORMATION Section */}
          <h1 className="my-5 flex-auto text-center text-2xl text-sky-500">
            Legal Information
          </h1>
          <div className="mx-auto w-2/3">
            <div className="mb-2 flex justify-center gap-2">
              <Switch className="flex-none" />
              <p className="flex-auto">Use Business Address DBA</p>
            </div>
            <FormGeneration
              formControl={form.control}
              formFields={dbaLegalInformationFspForm}
              gridCols={"2"}
            />
          </div>
          <hr className="my-10 border-2" />
          {/* TAX INFORMATION Section */}
          <h1 className="my-5 flex-auto text-center text-2xl text-sky-500">
            Tax Information
          </h1>
          <div className="mx-auto w-2/3">
            <div className="mb-2 flex gap-2">
              <Switch className="flex-none" />
              <p className="flex-auto">Use Corporate Legal Name</p>
            </div>
            <FormGeneration
              formControl={form.control}
              formFields={dbaTaxInformationFspForm}
              gridCols={"2"}
            />
            <div className="my-4 w-1/4 content-end items-end">
              <RadioForm
                control={form.control}
                formName="EinSsn"
                label=""
                options={[
                  {
                    label: "EIN",
                    value: "ein",
                  },
                  {
                    label: "SSN",
                    value: "ssn",
                  },
                ]}
                className="size-4"
                gridCols="3"
                setState={setEinSsn}
                state={einSsn}
              />
            </div>
          </div>
          <hr className="my-10 border-2" />
          {/* STATEMENTS INFORMATION SECTION */}
          <h1 className="my-5 flex-auto text-center text-2xl text-sky-500">
            Statements Information
          </h1>

          <div className="my-4 items-center px-20">
            <RadioForm
              control={form.control}
              formName="MailStatements"
              label=""
              options={[
                {
                  label: "Mail Statements to DBA Name",
                  value: "statementsToDbaName",
                },
                {
                  label: "Mail Statements to Legal Name",
                  value: "statementsToLegalName",
                },
                {
                  label: "Mail Chargebacks to DBA Name",
                  value: "chagebacksToDbaName",
                },
                {
                  label: "Mail Chargebacks to Legal Name",
                  value: "chagebacksToLegalName",
                },
              ]}
              state={mailStatements}
              setState={setMailStatements}
              className="ml-4 size-4"
              gridCols="4"
            />
          </div>
          <p className="ml-4 text-gray-500">
            NOTE: Statements are {"'Summary'"} for Cash Discount apps &{" "}
            {"'Detailed'"}{" "}
          </p>
          <hr className="my-10 border-2" />
          {/* LOCATION SECTION */}
          <h1 className="my-5 flex-auto text-center text-2xl text-sky-500">
            Location Information
          </h1>
          <div className="m-auto grid max-w-[1000px] grid-cols-4 gap-2 max-lg:grid-cols-2">
            {/* BUILDING TYPE */}
            <div>
              <h2 className="mb-4 text-start text-xl ">
                Building Type
              </h2>
              <div className="my-2 items-center">
                <RadioForm
                  control={form.control}
                  formName="BuildingType"
                  label=""
                  options={[
                    {
                      label: "Shopping Center",
                      value: "shoppingCenter",
                    },
                    {
                      label: "Office Building",
                      value: "officeBuilding",
                    },
                    {
                      label: "Industrial Building",
                      value: "industrialBuilding",
                    },
                    {
                      label: "Residence",
                      value: "residence",
                    },
                  ]}
                  setState={setBuildingType}
                  state={buildingType}
                  className="size-4"
                />
              </div>
            </div>
            {/* MERCHANT */}
            <div>
              <h2 className="mb-4 text-start text-xl">
                Merchant Type
              </h2>
              <div className="flex items-center gap-2">
                <RadioForm
                  control={form.control}
                  formName="MerchantType"
                  label=""
                  options={[
                    {
                      label: "Owns",
                      value: "owns",
                    },
                    {
                      label: "Rent",
                      value: "rent",
                    },
                  ]}
                  state={merchantType}
                  setState={setMerchantType}
                  className="size-4"
                />
              </div>
            </div>
            {/* AREA ZONED */}
            <div>
              <h2 className="mb-4 text-start text-xl font-semibold">
                Area Zoned
              </h2>
              <div className="items-center">
                <RadioForm
                  control={form.control}
                  formName="AreaZoned"
                  label=""
                  options={[
                    {
                      label: "Commercial",
                      value: "commercial",
                    },
                    {
                      label: "Residential",
                      value: "residential",
                    },
                  ]}
                  state={areaZoned}
                  setState={setAreaZoned}
                  className="size-4"
                />
              </div>
            </div>
            {/* SQUARE FOOTAGE */}
            <div>
              <h2 className="mb-4 text-start text-xl font-semibold">
                Square Footage
              </h2>
              <div className="flex items-center gap-2">
                <RadioForm
                  control={form.control}
                  formName="SquereFootage"
                  label=""
                  options={[
                    {
                      label: "0 - 1000",
                      value: "0-1000",
                    },
                    {
                      label: "1000+",
                      value: "1000+",
                    },
                  ]}
                  state={squareFootage}
                  setState={setSquareFootage}
                  className="size-4"
                />
              </div>
            </div>
          </div>
          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-5 gap-2" btnType="default">
              <Save className="size-5" />
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
      AcceptingVisaMcDiscover: "",
      hasBeenTerminated: "",
      Reason: "",
      StoreFrontSwipe: 0,
      Internet: 0,
      ManuallyKeyed: 0,
      VisaMcAvgTransaction: "",
      VisaMcHighestTransaction: "",
      VisaMcGrossMoSales: "",
      DiscoverAvgTransaction: "",
      DiscoverHighestTransaction: "",
      DiscoverGrossMoSales: "",
      AmexOptBlueAvgTransaction: "",
      AmexOptBlueHighestTransaction: "",
      AmexOptBlueGrossMoSales: "",
      AmericaExpressVolume: "",
      AmericanExpressVolumeAccount: "",
      DiscoverAccount: "",
      Visa: false,
      Mastercard: false,
      AmericanExpress: false,
      Discover: false,
      PayPal: false,
      EBT: false,
      CashBenefit: false,
      FnsAccount: 0,
      SeasonalMerchant: "",
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
      IndependentService: "",
      IndependentServiceName: "",
      IndependentServicePhone: "",
      UsesFulfillHouse: "",
      FulfillHouseName: "",
      FulfillHousePhone: "",
      OptOut: false,
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

  const [seasonalMerchant, setSeasonalMerchant] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  return (
    <section className="mx-auto mt-4 max-w-[1600px] text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* BANK INFORMATION */}
          <h1 className="mt-5 text-center text-2xl text-sky-500">
            Bank Information
          </h1>
          <div className="mx-auto w-fit">
            <FormGeneration
              formControl={form.control}
              formFields={bankingInformationFspForm}
              gridCols={"1"}
            />
          </div>
          <div className="mx-auto grid w-2/3 grid-cols-4 items-end gap-2 px-20 max-xl:w-full max-xl:grid-cols-2">
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
              type={showPassword === true ? `` : `password`}
              className="col-auto"
            />
            <div className="col-auto flex items-end gap-2">
              <InputForm
                control={form.control}
                formName="BankAccounting"
                label="Bank Accounting #: *"
                placeholder="#"
                type={showPassword === true ? `` : `password`}
                className="flex-auto"
              />
              <div className="cursor-pointer" onClick={handleShowPassword}>
                {}
                <Eye className="mb-2 flex-none" />
              </div>
            </div>
          </div>
          <hr className="my-10 border-2" />
          {/* SALES INFORMATION */}
          <h1 className="mt-5 text-center text-2xl text-sky-500">Sales</h1>
          <div className="mx-auto flex w-2/3">
            <div className="flex-1">
              <p className="mb-2 mt-5">
                Currently Accepting Visa/mastercard/Discover/AMEX?
              </p>
              <FormGeneration
                formControl={form.control}
                formFields={acceptingVisaMcDiscoverFspForm}
                gridCols={"5"}
              />
            </div>
            <div className="flex-1">
              <p className="mt-5">
                Has merchant/owner/prioncipals ever been terminated from
                accepting payment cards?
              </p>
              <div className="flex">
                <div className="flex-1 content-center">
                  <FormGeneration
                    formControl={form.control}
                    formFields={hasBeenTerminatedFspForm}
                  />
                </div>
                <div className="flex-1">
                  <InputForm
                    control={form.control}
                    formName="Reason"
                    label="Reason:"
                    placeholder="Type your reason."
                    className=""
                    disabled={form.getValues("hasBeenTerminated") !== "Yes"}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10 border-2" />
          {/* SETTINGS INFORMATION */}
          <h1 className="mt-5 text-center text-2xl text-sky-500">Settings</h1>
          <p className="mb-3 text-center">
            Sales Distribution - Fil the sales distribution of each category to
            add up to 100.
          </p>
          <div className="m-auto grid w-2/3 grid-cols-3 items-end gap-2">
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
          <div className="m-auto my-3 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700">
            <Progress value={front + interest + manually}>
              Progress: {front + interest + manually}%
            </Progress>
          </div>
          <hr className="my-10 border-2" />
          {/* SERVICE REQUESTED */}
          <h1 className="mt-5 text-center text-2xl text-sky-500">
            Service Requested
          </h1>
          <div className="mx-auto w-2/3">
            <FormGeneration
              formControl={form.control}
              formFields={serviceRequestedFspForm}
              gridCols={"3"}
            />
          </div>
          <hr className="my-10 border-2" />
          {/* AMERICAN EXPRESS VOLUME */}
          <h1 className="mt-5 text-center text-2xl text-sky-500">
            American Express Volume {">"} $1,000,000 Annually?
          </h1>
          <div className="mx-auto w-fit">
            <FormGeneration
              formControl={form.control}
              formFields={americaExpressVolumeFspForm}
              gridCols={"1"}
            />
          </div>
          <div className="mx-auto w-1/3">
            <InputForm
              control={form.control}
              formName="AmericanExpressVolumeAccount"
              label="Account #: *"
              placeholder="#"
              className="mx-auto"
            />
          </div>
          <hr className="my-10 border-2" />
          {/* DISCOVER RETAINED / CARD TYPES */}
          <div className="mx-auto grid w-2/3 grid-cols-2 gap-4 max-xl:grid-cols-1">
            <div className="col-span-1">
              <h1 className="mb-2 mt-5 text-2xl text-sky-500">
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
              <h1 className="mb-3 mt-5 text-2xl text-sky-500">
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
          <h1 className="mx-auto mb-2 mt-5 w-2/3 text-2xl font-bold text-sky-500">
            --
          </h1>
          <div className="mx-auto flex w-2/3 gap-10">
            <div className="flex-none items-center gap-2">
              <CheckboxForm
                control={form.control}
                formName="EBT"
                label=""
                placeholder="EBT"
              />
            </div>
            <div className="mb-3 flex-auto items-center gap-2">
              <CheckboxForm
                control={form.control}
                formName="CashBenefit"
                label=""
                placeholder="Cash Benefit"
              />
            </div>
          </div>
          <div className="mx-auto w-2/3">
            <InputForm
              control={form.control}
              formName="FnsAccount"
              label="FNS Account #: (if exists, 7 digit required)"
              placeholder="#"
              className="w-1/2"
            />
          </div>
          <hr className="my-10 border-2" />
          {/* SEASONAL MERCHANT  */}
          <div className="mx-auto flex w-2/3 gap-2">
            <div className="flex-1">
              <h1 className="mt-5 text-2xl text-sky-500">Seasonal Merchant</h1>
              <div className="my-4">
                <RadioForm
                  control={form.control}
                  formName={"SeasonalMerchant"}
                  label=""
                  gridCols="4"
                  options={[
                    {
                      label: "Yes",
                      value: "yes",
                    },
                    {
                      label: "No",
                      value: "no",
                    },
                  ]}
                  state={seasonalMerchant}
                  setState={setSeasonalMerchant}
                  className="size-4"
                />
              </div>

              <p className="my-2">If Yes, indicate which months:</p>
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
              <h1 className="mt-5 text-2xl text-sky-500">
                Does merchant use an independent service that stores, maintains
                or transmits cardholder information?
              </h1>
              <FormGeneration
                formControl={form.control}
                formFields={independentServiceFspForm}
                gridCols={"1"}
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
          <hr className="my-10 border-2" />
          {/* DOES MERCHANT USE A FULFILLMENT HOUSE  */}
          <div className="mx-auto flex w-2/3 gap-2">
            <div className="flex-auto">
              <h1 className="mt-5 text-2xl text-sky-500">
                Does Merchant use a fulfillment house to fulfill product?
              </h1>
              <FormGeneration
                formControl={form.control}
                formFields={usesFulfillHouseFspForm}
                gridCols={"6"}
              />
              <InputForm
                control={form.control}
                formName="FulfillHouseName"
                label="Name:"
                placeholder="Enter the name"
                className="w-3/4"
              />
              <InputForm
                control={form.control}
                formName="FulfillHousePhone"
                label="Phone:"
                placeholder="(___) ___-_____"
                className="w-3/4"
              />
            </div>
            {/* GENERAL SETTINGS  */}
            <div className="flex-auto">
              <h1 className="mb-2 mt-5 text-2xl text-sky-500">
                General Settings
              </h1>
              <div className="flex items-center gap-2 max-xl:w-full">
                <CheckboxForm
                  control={form.control}
                  formName="OptOut"
                  label=""
                  placeholder="Opt Out (by checking this box, Merchant will not receive future
                  commercial marketing communications from AmEx)"
                />
              </div>
              {/* RETURN POLICY  */}
              <h1 className="mt-5 text-2xl text-sky-500">Return Policy</h1>
              <div className="">
                <div className="my-4">
                  <RadioForm
                    control={form.control}
                    formName="ReturnPolicy"
                    label=""
                    gridCols="4"
                    options={[
                      {
                        label: "FULL REFUND",
                        value: "fullRefund",
                      },
                      {
                        label: "EXCHANGE ONLY",
                        value: "exchangeOnly",
                      },
                      {
                        label: "NONE",
                        value: "none",
                      },
                      {
                        label: "DESCRIBE",
                        value: "describe",
                      },
                    ]}
                    state={returnPolicy}
                    setState={setReturnPolicy}
                    className="size-4"
                  />
                </div>
                <InputForm
                  control={form.control}
                  formName="PolicyDescription"
                  label=""
                  placeholder="Enter the name"
                  className="w-2/4"
                />
              </div>
            </div>
          </div>
          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-5 gap-2" btnType="default">
              <Save className="size-5" />
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>

      <div className="flex-1"></div>
    </section>
  );
};

const MerchantOwner = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "OwnerName", header: "Owner Name" },
    { accessorKey: "Ownership", header: "Ownership %" },
    {
      accessorKey: "MainOwner",
      header: "Primary Owner",
      cell: (row) => MainOwner(row.getValue()),
    },
    { accessorKey: "CellNumber", header: "Cell Number (used for DocuSign)" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof merchantOwnerFspSchema>>({
    resolver: zodResolver(merchantOwnerFspSchema),
    defaultValues: {
      HasFiledForBankruptcy: "",
      Account: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof merchantOwnerFspSchema>) => {
    console.log(value);
  };

  return (
    <section className="text-start">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          {/* OWNERS */}
          <h1 className="mt-5 gap-2 text-center text-3xl text-sky-500">
            Owners
          </h1>
          <p className="text-center font-normal">
            * All signers must be collectively own at least 25% of the company
            to continue.
          </p>
          {/* MODAL ADD NEW MERCHANT OWNER */}
          <Dialog>
            <DialogTrigger asChild>
              <CustomButtons btnType="default" className="my-5 gap-2">
                <CirclePlus className="size-5" />
                Add New Owner
              </CustomButtons>
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
          <FormGeneration
            formControl={form.control}
            formFields={hasFiledForBankruptcyFspForm}
            gridCols={"1"}
          />
          <InputForm
            control={form.control}
            formName="Account"
            label="Account #:"
            placeholder="#"
            className="max-w-96"
          />
          {/* BUTTON SAVE CHANGES */}
          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-5 gap-2" btnType="default">
              <Save className="size-5" />
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>
    </section>
  );
};

const ProgrammingRequest = () => {
  const form = useForm<z.infer<typeof programmingRequestFspSchema>>({
    resolver: zodResolver(programmingRequestFspSchema),
    defaultValues: {
      SalesRepresentative: "",
      SalesPhoneNumber: "",
      FileBuildVarOnly: false,
      PosProviderName: "",
      Invoicing: false,
      InvoicingNumberRequired: false,
      QrScan: false,
      EthernetInternet: false,
      WirelessSim: false,
      DialUp: false,
      WiFi: false,
      NeedMenuOrInventory: false,
      HowCashDiscountApplied: "",
      BuildType: "",
      Pbx: false,
      Wavit: false,
      PinDebit: false,
      AutoClose: false,
      AutoCloseTime: "",
      TipLine: false,
      TipLineType: "",
      Server: "",
      SuggestedTipPercentages: "",
      SalesTax: 0,
      MessageToTheBoarding: "",
      ShipTo: "",
      ShipName: "",
      ShipPriority: "",
      UseExistingAddress: "",
      UseLegalBusiness: false,
      UseLegalBusinessDba: false,
      UseAgent: false,
      NoAddress: false,
      ShipAddress: "",
      ShipCity: "",
      ShipState: "",
      ShipPostalCode: "",
      ShipPhone: "",
      ShipEmail: "",
      BillTo: "",
    },
  });

  const onSubmit = (value: z.infer<typeof programmingRequestFspSchema>) => {
    // Making sure that the value is gonna be right according to
    // the switches.
    console.log(activeSwitchId);
    console.log(value);
  };

  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "quantity", header: "Quantity" },
    { accessorKey: "manufacturer", header: "Manufacturer" },
    { accessorKey: "model", header: "Model" },
  ];

  const columns = createColumns(columnsConfig);

  const [activeSwitchId, setActiveSwitchId] = useState<string | number>();

  const handleToggle = (id: string | number) => {
    if (id === activeSwitchId) {
      setActiveSwitchId(0);
      form.setValue("UseExistingAddress", `${0}`);
    } else {
      setActiveSwitchId(id);
      form.setValue("UseExistingAddress", `${id}`);
    }
  };

  const [shipPriority, setShipPriority] = useState("2 Days");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-auto max-w-[1600px]"
      >
        <div className="mt-5 text-start">
          {/* ACCOUNT INFORMATION */}
          <h1 className="my-5 flex justify-center gap-2 text-2xl text-sky-500">
            Account Information
          </h1>
          <div className="mx-auto mb-5 justify-center px-44">
            <FormGeneration
              formControl={form.control}
              formFields={accountInformationFspForm}
              gridCols={"2"}
            />
          </div>
          <div className="my-2 grid grid-cols-1 overflow-auto">
            <DataTable
              columns={columns}
              data={equipmentInformationFspForm}
              enableSorting={true}
              enableColumnFilter={false}
              filteredBy=""
              actionsColumn={false}
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
          <hr className="my-10 border-2" />
          <div className="mt-3 flex gap-2 max-xl:flex-wrap">
            {/* WAVIT APP ONLY */}
            <div className="my-2 w-full rounded-md border px-5 py-3 pb-2">
              <h1 className="mt-2 gap-2 text-2xl text-sky-500">
                WAVIT APP ONLY
              </h1>
              <p className="my-1 text-xl">
                NOTE: Works only on PAZ A920 on TSYS or CLOVER without inventory
              </p>
              <p className="my-1">(Check all that apply)</p>
              <FormGeneration
                formControl={form.control}
                formFields={wavitAppOnlyFspForm}
                gridCols={"1"}
              />
            </div>
            {/* CONNECTION TYPE */}
            <div className="my-2 w-full rounded-md border px-5 py-3">
              <h1 className="my-2 gap-2 text-2xl text-sky-500">
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
          <div className="my-2 w-full rounded-md border px-5 py-3">
            <h1 className="my-2 gap-2 text-2xl text-sky-500">(CLOVER ONLY)</h1>
            <CheckboxForm
              control={form.control}
              formName="NeedMenuOrInventory"
              label=""
              placeholder="Check here if the merchant need a menu or inventory"
              className=""
            />
            <p className="mt-5 text-xl text-sky-500">
              How will the cash discount be applied?
            </p>
            <FormGeneration
              formControl={form.control}
              formFields={cloverOnlyFspForm}
              gridCols={"2"}
            />
          </div>
          <hr className="my-10 border-2" />
          <div className="mt-10 flex gap-2 max-2xl:flex-wrap">
            {/* FILE BUILDING INFORMATION */}
            <div className="w-full">
              <h2 className="gap-2 text-xl font-semibold">
                File Build Information
              </h2>
              <FormGeneration
                formControl={form.control}
                formFields={fileBuildInformationFspForm}
                gridCols={"1"}
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
              {/* Tip Line */}
              <div className="flex items-center gap-2">
                <CheckboxForm
                  control={form.control}
                  formName="TipLine"
                  label=""
                  placeholder="Tip Line"
                  className="text-nowrap"
                />
                <p className="text-nowrap px-2 text-sm">
                  If tip line checked, choose one:
                </p>
                <FormGeneration
                  formControl={form.control}
                  formFields={tipLineFspForm}
                  className={"w-full text-sm"}
                  gridCols={""}
                />
              </div>
              {/* SERVER */}
              <div className="flex items-center gap-2">
                <p className="mb-1.5 mr-3">Server:</p>
                <FormGeneration
                  formControl={form.control}
                  formFields={serverFspForm}
                  gridCols={"3"}
                />
              </div>
            </div>
            {/* Suggested Tip Percentages */}
            <div className="m-auto w-[70%]">
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
          <hr className="my-10 border-2" />
          {/* SHIPPING INFORMATION */}
          <h1 className="mb-2 mt-5 gap-2 text-center text-2xl text-sky-500">
            Shipping Information
          </h1>
          <p className="mt-4 text-center">Ship To:</p>
          <div className="mx-auto flex justify-center">
            <FormGeneration
              formControl={form.control}
              formFields={shipToFspForm}
              className={"w-full"}
              gridCols={"1"}
            />
          </div>
          <div className="flex gap-10">
            <div className="flex-auto">
              <InputForm
                control={form.control}
                formName="ShipName"
                label="Name: *"
                placeholder="Name"
                className=""
              />
            </div>
            <div className="flex-auto content-end">
              <div className="grid grid-cols-5 gap-2">
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"Ground"}
                  type="button"
                  value={"Ground"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "Ground"}
                  onChange={() => setShipPriority("Ground")}
                  className={shipPriority === "Ground" ? `text-white` : ``}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"2 Days"}
                  type="button"
                  value={"2 Days"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "2 Days"}
                  onChange={() => setShipPriority("2 Days")}
                  className={shipPriority === "2 Days" ? `text-white` : ``}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"3 Days"}
                  type="button"
                  value={"3 Days"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "3 Days"}
                  onChange={() => setShipPriority("3 Days")}
                  className={shipPriority === "3 Days" ? `text-white` : ``}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"Standard"}
                  type="button"
                  value={"Standard"}
                  setState={setShipPriority}
                  state={shipPriority}
                  isActive={shipPriority === "Standard"}
                  onChange={() => setShipPriority("Standard")}
                  className={shipPriority === "Standard" ? `text-white` : ``}
                />
                <InputButtonForm
                  control={form.control}
                  formName={"ShipPriority"}
                  label={"Priority"}
                  type="button"
                  value={"Priority"}
                  setState={setShipPriority}
                  className={shipPriority === "Priority" ? `text-white` : ``}
                  state={shipPriority}
                  isActive={shipPriority === "Priority"}
                  onChange={() => setShipPriority("Priority")}
                />
              </div>
            </div>
          </div>
          {/* DBA Address Selection */}
          <div className="my-10 flex justify-center gap-6 max-xl:block max-xl:space-y-2">
            <SwitchForm
              control={form.control}
              formName={"UseLegalBusiness"}
              label={"Use Legal Business Address"}
              id={1}
              isActive={activeSwitchId === 1}
              onToggle={handleToggle}
            />
            <SwitchForm
              control={form.control}
              formName={"UseLegalBusinessDba"}
              label={"Use Business Address DBA"}
              id={2}
              isActive={activeSwitchId === 2}
              onToggle={handleToggle}
            />
            <SwitchForm
              control={form.control}
              formName={"UseAgent"}
              label={"Use Agent Address"}
              id={3}
              isActive={activeSwitchId === 3}
              onToggle={handleToggle}
            />
            <SwitchForm
              control={form.control}
              formName={"NoAddress"}
              label={"No Address"}
              id={4}
              isActive={activeSwitchId === 4}
              onToggle={handleToggle}
            />
          </div>

          <div className="my-2 w-1/2">
            <InputMap
              name="Search Address"
              title="Search Address"
              placeholder="Search here to auto-fill your address details"
              className="mb-2"
            />
          </div>
          <div className="mx-auto w-2/3">
            <FormGeneration
              formControl={form.control}
              formFields={dbaAddressShipFspForm}
              gridCols={"2"}
            />
          </div>
        </div>
        <hr className="my-10 border-2" />
        {/* Billing Information */}
        <h1 className="mb-2 mt-5 gap-2 text-center text-2xl text-sky-500">
          Billing Information
        </h1>
        <p className="text-center">Bill To:</p>
        <div className="mx-auto w-fit">
          <FormGeneration
            formControl={form.control}
            formFields={billToFspForm}
            gridCols={"1"}
          />
        </div>
        <hr className="my-10 border-2" />
        <div className="flex justify-center gap-2">
          <Button className="my-5">View Bank ACH</Button>
          <Button className="my-5">View CC ACH</Button>
        </div>
        {/* SAVE CHANGES BUTTON */}
        <div className="m-auto text-center">
          <CustomButtons className="m-auto my-5 gap-2" btnType="default">
            <Save className="size-5" />
            Save Changes
          </CustomButtons>
        </div>
      </form>
    </Form>
  );
};

export default function RenderNewMpaComponents(value: string) {
  switch (value) {
    case "merchantDetail":
      return <MerchantDetail />;
    case "financialInformation":
      return <FinancialInformation />;
    case "merchantOwner":
      return <MerchantOwner />;
    case "programmingRequest":
      return <ProgrammingRequest />;
  }
}
