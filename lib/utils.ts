import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) => {
  z.object({
    // For sign-in
    email: z.string().email(),
    password: z.string().min(8),

    // For sign up
    firstName:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(15),
    lastName:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(20),
    phone:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(10),
    group: type === "sign-in" ? z.string().optional() : z.string().max(20),
  });
};

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),

  firstName: z.string().min(2).max(15),
  lastName: z.string().min(3).max(20),
  phone: z.string().min(3).max(10),
  group: z.string().max(20),
});

export const newMerchantSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  DBA: z.string(),
  Phone: z.string(),
  Status: z.string(),
  Approval: z.string().date(),
  Filter: z.string(),
  Processor: z.string(),
  Fitler2: z.string(),
  AgentID: z.number(),
  SalesRep: z.string(),
  Split: z.number(),
  SplitName: z.string(),
  SplitID: z.number(),
  LeadSource: z.string(),
  SplitLead: z.number(),
  EstAnnual: z.number(),
  Transactions: z.number(),
  Filter3: z.string(),
  Banks: z.string(),
  WAVItAccount: z.number(),
  MCCCode: z.string(),
  Notice: z.string(),
  ChildMID: z.boolean(),
  WAVitAccount: z.boolean(),
  WAVitApp: z.boolean(),
  NewAccountTasks: z.boolean(),
  BusinessRetail: z.boolean(),
  BusinessEcommerce: z.boolean(),
  BusinessRestaurant: z.boolean(),
  BusinessMoTo: z.boolean(),
  DeployBy: z.string(),
});

export const MerchantInfoSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  DBA: z.string(),
  Phone: z.string(),
  Status: z.string(),
  Approval: z.string().date(),
  Filter: z.string(),
  Processor: z.string(),
  Fitler2: z.string(),
  AgentID: z.number(),
  SalesRep: z.string(),
  Split: z.number(),
  SplitName: z.string(),
  SplitID: z.number(),
  LeadSource: z.string(),
  SplitLead: z.number(),
  EstAnnual: z.number(),
  Transactions: z.number(),
  Filter3: z.string(),
  Banks: z.string(),
  WAVItAccount: z.number(),
  MCCCode: z.string(),
  Notice: z.string(),
  Address: z.string(),
  Contact: z.string(),
  Apt: z.string(),
  City: z.string(),
  State: z.string(),
  Zip: z.string(),
  Phone1: z.string(),
  Extension1: z.string(),
  Phone2: z.string(),
  Extension2: z.string(),
  Email: z.string(),
  Website: z.string(),
  DBAcontact: z.string(),
  DBAaddress: z.string(),
  DBAapt: z.string(),
  DBAcity: z.string(),
  DBAstate: z.string(),
  DBAzip: z.string(),
  FrontEndPlatform: z.string(),
  FrontEndMID: z.string(),
  FrontEndTID: z.string(),
  CheckServiceMID: z.string(),
  GatewayMID: z.string(),
  EstAnnualVolume: z.string(),
  SICcode: z.string(),
  MCCclassification: z.string(),
  Parent: z.string(),
  CloverID: z.string(),
});





export const AgentSetupSchema = z.object({
  findAgent: z.string(),
  excludeClosedAgents: z.boolean(),
  displayName: z.string().nonempty("Display Name is required"),
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  merchantNote: z.string(),
  isChildSubAgent: z.boolean(),
  subAgentOrChild: z.string(),
  selectRelationshipManager: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string(),
  status: z.string().nonempty("Status is required"),
  startDate: z.string(),
  endDate: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  routing: z.string(),
  residualEmail: z.string(),
  zohoEmail: z.string(),
  account: z.string(),
  ssn: z.string(),
  payDay: z.string(),
  entityType: z.string(),
  payGroup: z.string(),
  msoId: z.string(),
  messeging: z.boolean(),
  residual: z.boolean(),
  filePrefix: z.string(),
  tickets: z.boolean(),
  flashes: z.boolean(),
  noBillPay: z.boolean(),
  reportType: z.string(),
  okToPayResid: z.boolean(),
  doNotPay: z.boolean(),
  printPhysicalCheck: z.boolean(),
  payrollId: z.string(),
  agentId: z.string(),
  note: z.string(),
});

export const AgentEquipmentSchema = z.object({
  copyFromContactInfo: z.boolean(),
  noShippingEmails: z.boolean(),
  coCard: z.boolean(),
  markClosed: z.boolean(),
  shipPhone: z.string(),
  shipExt: z.string(),
  shippingEmail: z.string().email("Invalid email address"),
  shippingServiceEmail: z.string().email("Invalid email address"),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  cellPhone: z.string(),
});

export const newLookupSchema = z.object({
  MID: z.string(),
  OrderID: z.string(),
  Serial: z.string(),
  Model: z.string(),
  Condition: z.string(),
  ShelfItems: z.boolean(),
});

export const newItemsSchema = z.object({
  Model: z.string(),
  Id: z.string(),
  Description: z.string(),
  Alias: z.string(),
  ItemType: z.string(),
  Style: z.string(),
  Manufacturer: z.string(),
  ReorderQty: z.number(),
  SerialNumber: z.boolean(),
  TakeInventory: z.boolean(),
  PhysicallyShippable: z.boolean(),
  HwPricing: z.number(),
  DeployFee: z.number(),
  TaxShipping: z.number(),
  Total: z.number(),
  DimensionName: z.string(),
  DimensionWidth: z.string(),
  DimensionHeight: z.string(),
  DimensionLength: z.string(),
  DimensionWeight: z.string(),
});

export const newItemDetailSchema = z.object({
  Condition: z.string(),
  Serial: z.string(),
  SortBy: z.string(),
});

export const newEquipmentOrderSchema = z.object({
  Merchant: z.string(),
  MID: z.string(),
  Status: z.string(),
  Model: z.string(),
  NoSerial: z.boolean(),
  Limit: z.boolean(),
});

export const newUnassignedEquipmentSchema = z.object({
  Model: z.string(),
  Condition: z.string(),
  Serial: z.string(),
});

export const newRecentOrdersSchema = z.object({
  FromDate: z.string(),
  ToDate: z.string(),
});

// ADMIN SCHEMAS
export const newRingCentralUtilitySchema = z.object({
  DataSource: z.string(),
  Status: z.string(),
});

export const newLoadProcessingDataSchema = z.object({
  ProcessingPeriod: z.string(),
  Status: z.string(),
});

export const newThirdPartyProcessorsSchema = z.object({
  Processor: z.string(),
  MID: z.string(),
  ResidualDate: z.string(),
  CalculateAllMonths: z.boolean(),
});

export const newFirstDataOmahaSchema = z.object({
  ResidualDate: z.string(),
  CheckCalculation: z.boolean(),
  NutraChargeBacks: z.boolean(),
  DoNotQueryZeroRecords: z.boolean(),
  CalculateInitialPassOnly: z.boolean(),
  SkipSysPrins: z.boolean(),
  From: z.string(),
  To: z.string(),
  CalculateIndividualMID: z.string(),
  Status: z.string(),
});

export const newAdjustmentCriteriaSchema = z.object({
  ResidualDate: z.string(),
  Agent: z.string(),
  AgentID: z.string(),
  AdjustType: z.string(),
  MID: z.string(),
  DBALegal: z.string(),
  Processor: z.string(),
  Amount: z.string(),
  Notes: z.string(),
});

export const newDisplayResidualsSchema = z.object({
  ResidualDate: z.string(),
  PayDay: z.boolean(),
  PayDaySelection: z.string(),
  ExcludePayDay: z.boolean(),
  PayGroup: z.boolean(),
  PayGroupSelection: z.string(),
  ExcludePayGroup: z.boolean(),
  ShowOkToPay: z.boolean(),
  ExcludeNotOkToPay: z.boolean(),
  ShowNotOkToPay: z.boolean(),
  OnlyWithEmails: z.boolean(),
  OnlyMissingEmails: z.boolean(),
  ResidualsReportsOptIn: z.boolean(),
  OnlyWithBankingInfo: z.boolean(),
  OnlyMissingBankingInfo: z.boolean(),
  OnlyShowPositiveResiduals: z.boolean(),
  OnlyShowZeroNegativeResiduals: z.boolean(),
  OnlyShowPhysicalChecks: z.boolean(),
  EmailReportsToAgent: z.boolean(),
  EmailReportsToUser: z.boolean(),
  EmailReportsToWho: z.boolean(),
  EmailReportsTo: z.string(),
});

export const newAuditDetailSchema = z.object({
  AuditType: z.string(),
  EntryDate: z.string(),
  ToDate: z.string(),
});

export const newAdHocSearchSchema = z.object({
  ReportName: z.string(),
  MID: z.string(),
  FromDate: z.string(),
  ToDate: z.string(),
  YearMonth: z.string(),
  UseAO: z.boolean(),
  SaveToC: z.boolean(),
  MIDS: z.string(),
  User: z.string(),
  Processor: z.string(),
  AuditType: z.string(),
  Agent: z.string(),
  Phrase: z.string(),
});

export const newEditUserSchema = z.object({
  UserId: z.string(),
  Username: z.string(),
  Email: z.string(),
  Extension: z.string(),
  UserStatus: z.string(),
  ShowRingCentral: z.boolean(),
  EnableDarkMode: z.boolean(),
});

export const newAddNewUserSchema = z.object({
  UserId: z.string(),
  Username: z.string(),
  Email: z.string(),
  Extension: z.string(),
  UserStatus: z.string(),
  ShowRingCentral: z.boolean(),
  EnableDarkMode: z.boolean(),
});

// Currency format functions
export const formatCurrency = (
  value: number,
  currency: string = "USD",
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Date and time format functions
export const getJoinedDate = (dateString: string) => {
  const date = new Date(dateString);

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th"; // for 11th, 12th, 13th, etc...

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getUTCFullYear();

  const dayWithSuffix = day + getOrdinalSuffix(day);

  return { day: dayWithSuffix, month, year };
};

const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatTime = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours || 12; // hours of 0 should be 12
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};

export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayWithSuffix = `${day + getOrdinalSuffix(day)}`;

  return `${dayWithSuffix} ${month}, ${year}`;
};

export const formatRelativeDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  // const dayWithSuffix = `${date.getDate() + getOrdinalSuffix(date.getDate())}`;
  // const month = date.toLocaleString("default", { month: "long" });
  // const year = date.getFullYear();
  const time = formatTime(date);

  if (diff < oneDay) {
    return `Today at ${time}`;
  } else if (diff < 2 * oneDay) {
    return `Yesterday at ${time}`;
  } else if (diff < 7 * oneDay) {
    const daysAgo = Math.floor(diff / oneDay);
    return `${daysAgo} days ago at ${time}`;
  } else if (diff < 30 * oneDay) {
    const weeksAgo = Math.floor(diff / (7 * oneDay));
    return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago at ${time}`;
  } else if (diff < 365 * oneDay) {
    const monthsAgo = Math.floor(diff / (30 * oneDay));
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago at ${time}`;
  } else {
    const yearsAgo = Math.floor(diff / (365 * oneDay));
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago at ${time}`;
  }
};
