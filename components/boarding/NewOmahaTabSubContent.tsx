"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import {
  accountInformationFspForm,
  authCaptureOmahaForm,
  billToFspForm,
  cardSalesInterForm,
  cloverOnlyInterForm,
  connectionTypeInterForm,
  dbaAddressInterForm,
  dbaAddressShipFspForm,
  dbaInformationInterForm,
  dbaLegalInfoInterForm,
  dbaSelectionFspForm,
  equipmentInformationFspForm,
  fileBuildInformationFspForm,
  LegalAddressInfoInterForm,
  LegalInfoInterForm,
  omahaBoardingForm,
  OwnersTable,
  salesInterForm,
  serverFspForm,
  serviceFeesOmahaForm,
  settingsInterForm,
  shipPriorityFspForm,
  shipToFspForm,
  taxInformationInterForm,
  tipLineFspForm,
  wavitAppOnlyFspForm,
} from "@/constants";
import { DataTypes } from "@/types";
import React, { useState } from "react";
import { Form } from "../ui/form";
import {
  detailsOmahaSchema,
  financialInformationOmahaSchema,
  merchantInformationOmahaSchema,
  merchantOwnerOmahaSchema,
  programmingRequestOmahaSchema,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckboxForm,
  FormGeneration,
  InputForm,
  SwitchForm,
  NorthFormGeneration,
  InputButtonForm,
} from "../Shared/InstantForm";
import CustomButtons from "../Shared/CustomButtons";
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
import { Input } from "../ui/input";

const MerchantDetail = () => {
  const form = useForm<z.infer<typeof merchantInformationOmahaSchema>>({
    resolver: zodResolver(merchantInformationOmahaSchema),
    defaultValues: {
      UseInterchangeWavit: true,
      ClientsBusinessName: "",
      Phone: "",
      CustomerServicePhone: "",
      Fax: "",
      EmailStatements: "",
      CustomerServiceEmail: "",
      AlsoPrintAndMailStatements: false,
      Street: "",
      AddressSearchBar: "",
      City: "",
      State: "",
      PostalCode: "",
      UseBusinessAddressDBA: false,
      LegalContactName: "",
      LegalContactFax: "",
      LegalContactPhone: "",
      LegalContactEmail: "",
      LegalBusinessName: "",
      LegalStartDate: new Date() || null || undefined,
      LegalBusinessWebsite: "",
      LegalAddress: "",
      LegalCity: "",
      LegalState: "",
      LegalPostalCode: "",
    },
  });

  const onSubmit = (value: z.infer<typeof merchantInformationOmahaSchema>) => {
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
          <SwitchForm
            control={form.control}
            formName="UseInterchangeWavit"
            label="Use WAVit Flat Rate"
          />
          <br />
          <FormGeneration
            formControl={form.control}
            formFields={dbaInformationInterForm}
            gridCols={"2"}
          />
          <p className="my-2">
            {
              "NOTE: Statements are 'Summary' for Cash Discount Apps & 'Detailed' for Others."
            }
          </p>
          {/* DBA Address Section */}
          <h1 className="my-5 text-2xl font-bold text-sky-500">
            DBA Address Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={dbaAddressInterForm}
            gridCols={"2"}
          />
          {/* LEGAL CONTACT INFORMATION */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Legal Contact Information
          </h1>
          {/* UseBusinessAddressDBA  */}
          <SwitchForm
            control={form.control}
            formName="UseBusinessAddressDBA"
            label="Use Business Address DBA"
            className="mb-4"
          />
          <FormGeneration
            formControl={form.control}
            formFields={dbaLegalInfoInterForm}
            gridCols={"4"}
          />
          {/* LEGAL INFORMATION SECTION */}
          <h1 className="my-5 flex-auto text-2xl font-bold text-sky-500">
            Legal Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={LegalInfoInterForm}
            gridCols={"2"}
          />
          <Input
            placeholder="Search here to auto-fill your address details"
            className="my-7 w-1/2"
          />
          <InputForm
            control={form.control}
            formName="LegalAddress"
            label="Legal Business Address: "
            className=""
          />
          <FormGeneration
            formControl={form.control}
            formFields={LegalAddressInfoInterForm}
            gridCols={"3"}
          />

          <div className="m-auto text-center">
            <CustomButtons
              onClick={() => RenderNewOmahaComponents("finantialInformation")}
              className="m-auto my-5"
              btnType="default"
            >
              Save Changes
            </CustomButtons>
          </div>
        </form>
      </Form>
    </section>
  );
};

const FinancialInformation = () => {
  const form = useForm<z.infer<typeof financialInformationOmahaSchema>>({
    resolver: zodResolver(financialInformationOmahaSchema),
    defaultValues: {
      BankName: "",
      BankRouting: 0,
      BankAccounting: 0,
      EinSsn: "",
      SICMCC: "",
      TypeOfGoods: "",
      BusinessType: "",
      HighTicket: 0,
      AverageTicketsSales: 0,
      AnnualVisaMc: 0,
      AnnualAmex: 0,
      AnnualDiscover: 0,
      AnnualTotalSales: 0,
      EarlyTerminationFee: 0,
      CashDiscount: 0,
      Discount: 0,
      MonthlyStatementFee: 0,
      StoreFrontSwipe: 0,
      Internet: 0,
      MailOrder: 0,
      Telephone: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof financialInformationOmahaSchema>) => {
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
          {/* TAX INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Tax Information
          </h1>
          <FormGeneration
            formControl={form.control}
            formFields={taxInformationInterForm}
            gridCols={"2"}
          />

          {/* SALES  */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Sales</h1>
          <div className="w-1/2">
            <FormGeneration
              formControl={form.control}
              formFields={salesInterForm}
              gridCols={"2"}
            />
          </div>
          <p className="mt-5 text-xl font-semibold">Card Sales</p>
          <FormGeneration
            formControl={form.control}
            formFields={cardSalesInterForm}
            gridCols={"4"}
          />

          {/* SETTINGS INFORMATION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">Settings</h1>
          <div className="w-3/4">
            <FormGeneration
              formControl={form.control}
              formFields={settingsInterForm}
              gridCols={"4"}
            />
          </div>

          {/* SALES DISTRIBUTION */}
          <h1 className="mt-5 text-2xl font-bold text-sky-500">
            Sales Distribution
          </h1>
          <div className="m-auto mt-2 grid w-3/4 grid-cols-3 items-end gap-2">
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

          <div className="m-auto text-center">
            <CustomButtons className="m-auto my-3" btnType="default">
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
    { accessorKey: "CellNumber", header: "Cell Number (used for DocuSign)" },
    { accessorKey: "Notes", header: "Notes" },
  ];

  const columns = createColumns(columnsConfig);

  const form = useForm<z.infer<typeof merchantOwnerOmahaSchema>>({
    resolver: zodResolver(merchantOwnerOmahaSchema),
    defaultValues: {
      HasFiledForBankruptcy: false,
      Account: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof merchantOwnerOmahaSchema>) => {
    console.log(value);
  };

  return (
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
  const form = useForm<z.infer<typeof programmingRequestOmahaSchema>>({
    resolver: zodResolver(programmingRequestOmahaSchema),
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
      Server: false,
      SuggestedTipPercentages: "",
      SalesTax: 0,
      ShipTo: "",
      ShipName: "",
      ShipPriority: "",
      UseExistingAddress: "",
      ShipAddress: "",
      ShipCity: "",
      ShipState: "",
      ShipPostalCode: "",
      ShipPhone: "",
      ShipEmail: "",
      BillTo: "",
    },
  });

  const onSubmit = (value: z.infer<typeof programmingRequestOmahaSchema>) => {
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
                formFields={connectionTypeInterForm}
                gridCols={"1"}
              />
            </div>
          </div>
          {/* CLOVER ONLY */}
          <div className="my-2 w-full rounded-md border px-4 pb-2">
            <h1 className="my-2 gap-2 text-2xl font-bold text-sky-500">
              (CLOVER ONLY)
            </h1>
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
              formFields={cloverOnlyInterForm}
              gridCols={"2"}
            />
          </div>

          <div className="mt-10 flex gap-2 max-2xl:flex-wrap">
            {/* FILE BUILDING INFORMATION */}
            <div className="w-full">
              <h2 className="gap-2 text-xl font-semibold">
                File Build Information
              </h2>
              <FormGeneration
                formControl={form.control}
                formFields={fileBuildInformationFspForm}
                className={"w-full"}
                gridCols={"4"}
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
                <p className="mt-3 text-nowrap px-2 text-sm">
                  If tip line checked, choose one:
                </p>
                <FormGeneration
                  formControl={form.control}
                  formFields={tipLineFspForm}
                  className={"w-full"}
                  gridCols={"2"}
                />
              </div>
              {/* SERVER */}
              <div className="flex gap-2">
                <p className="mt-3.5 px-7">Server:</p>
                <FormGeneration
                  formControl={form.control}
                  formFields={serverFspForm}
                  gridCols={"2"}
                />
              </div>
            </div>
            {/* Suggested Tip Percentages */}
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
            </div>
          </div>
          {/* SHIPPING INFORMATION */}
          <h1 className="mb-2 mt-5 gap-2 text-2xl font-bold text-sky-500">
            Shipping Information
          </h1>
          <p className="mt-4">Ship To:</p>
          <FormGeneration
            formControl={form.control}
            formFields={shipToFspForm}
            gridCols={"5"}
          />
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
            <div className="grid flex-auto grid-cols-5 items-end gap-2">
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
              />
              <InputButtonForm
                control={form.control}
                formName={"ShipPriority"}
                label={"Priority"}
                type="button"
                value={"Priority"}
                setState={setShipPriority}
                state={shipPriority}
                isActive={shipPriority === "Priority"}
                onChange={() => setShipPriority("Priority")}
              />
            </div>
            <div className="hidden flex-auto content-end">
              <FormGeneration
                formControl={form.control}
                formFields={shipPriorityFspForm}
                gridCols={"6"}
              />
            </div>
          </div>
          {/* DBA Address Selection */}
          <div className="my-5 flex justify-center gap-6 max-xl:block max-xl:space-y-2">
            {dbaSelectionFspForm.map((item) => (
              <SwitchForm
                key={item.id}
                control={form.control}
                formName={item.formName}
                label={item.title}
                id={item.id}
                isActive={activeSwitchId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
          <Input
            name="Search Address"
            title="Search Address"
            placeholder="Search here to auto-fill your address details"
            className="my-2 w-1/2"
          />
          <FormGeneration
            formControl={form.control}
            formFields={dbaAddressShipFspForm}
            gridCols={"2"}
          />
        </div>
        {/* Billing Information */}
        <h1 className="mb-2 mt-5 gap-2 text-start text-2xl font-bold text-sky-500">
          Billing Information
        </h1>
        <p className="text-start">Bill To:</p>
        <FormGeneration
          formControl={form.control}
          formFields={billToFspForm}
          gridCols={"1"}
        />
        <div className="flex justify-start gap-2">
          <Button className="my-5">View Bank ACH</Button>
          <Button className="my-5">View CC ACH</Button>
        </div>
        {/* SAVE CHANGES BUTTON */}
        <div className="m-auto text-center">
          <CustomButtons className="m-auto my-5" btnType="default">
            Save Changes
          </CustomButtons>
        </div>
      </form>
    </Form>
  );
};

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
  // console.log(value);
  switch (value) {
    case "merchantDetail":
      return <MerchantDetail />;
    case "financialInformation":
      return <FinancialInformation />;
    case "merchantOwner":
      return <MerchantOwner />;
    case "programmingRequest":
      return <ProgrammingRequest />;
    case "omahaDetails":
      return <OmahaDetails />;
    default:
      return <MerchantDetail />;
  }
}
