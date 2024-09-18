import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import qs from 'query-string';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const requiredString = z.string().trim().min(1, "Required!");
const requiredNumber = z.number().min(1, "Required!");

export const ProfileSchema = z.object({
  id: requiredString,
  email: requiredString.email(),
  password: z.string(),
  username: requiredString.max(25, "Max at 25 characters!"),
  phone: requiredString.min(3).max(10),
});

export type ProfileValues = z.infer<typeof ProfileSchema>;

export const newMerchantSchema = z.object({
  MID: requiredString,
  LegalName: requiredString,
  DBA: requiredString,
  Phone: requiredString,
  Status: requiredString,
  Approval: requiredString,
  Filter: requiredString,
  Processor: requiredString,
  Fitler2: requiredString,
  AgentID: requiredNumber,
  SalesRep: requiredString,
  Split: requiredNumber,
  SplitName: requiredString,
  SplitID: requiredNumber,
  LeadSource: requiredString,
  SplitLead: requiredNumber,
  EstAnnual: requiredNumber,
  Transactions: requiredNumber,
  Filter3: requiredString,
  Banks: requiredString,
  WAVItAccount: requiredNumber,
  MCCCode: requiredString,
  Notice: requiredString,
  ChildMID: z.boolean(),
  WAVitAccount: z.boolean(),
  WAVitApp: z.boolean(),
  NewAccountTasks: z.boolean(),
  BusinessRetail: z.boolean(),
  BusinessEcommerce: z.boolean(),
  BusinessRestaurant: z.boolean(),
  BusinessMoTo: z.boolean(),
  DeployBy: requiredString,
});

export type newMerchantValues = z.infer<typeof ProfileSchema>;

export const MerchantInfoSchema = z.object({
  MID: requiredString,
  LegalName: requiredString,
  DBA: requiredString,
  Phone: requiredString,
  Status: requiredString,
  Approval: requiredString.date(),
  Filter: requiredString,
  Processor: requiredString,
  Fitler2: requiredString,
  AgentID: requiredNumber,
  SalesRep: requiredString,
  Split: requiredNumber,
  SplitName: requiredString,
  SplitID: requiredNumber,
  LeadSource: requiredString,
  SplitLead: requiredNumber,
  EstAnnual: requiredNumber,
  Transactions: requiredNumber,
  Filter3: requiredString,
  Banks: requiredString,
  WAVItAccount: requiredNumber,
  MCCCode: requiredString,
  Notice: requiredString,
  Address: requiredString,
  Contact: requiredString,
  Apt: requiredString,
  City: requiredString,
  State: requiredString,
  Zip: requiredString,
  Phone1: requiredString,
  Extension1: requiredString,
  Phone2: requiredString,
  Extension2: requiredString,
  Email: requiredString,
  Website: requiredString,
  DBAcontact: requiredString,
  DBAaddress: requiredString,
  DBAapt: requiredString,
  DBAcity: requiredString,
  DBAstate: requiredString,
  DBAzip: requiredString,
  FrontEndPlatform: requiredString,
  FrontEndMID: requiredString,
  FrontEndTID: requiredString,
  CheckServiceMID: requiredString,
  GatewayMID: requiredString,
  EstAnnualVolume: requiredString,
  SICcode: requiredString,
  MCCclassification: requiredString,
  Parent: requiredString,
  CloverID: requiredString,
  SameAsLegal: z.boolean(),
});

export type MerchantInfoValues = z.infer<typeof MerchantInfoSchema>;

export const merchantFeesProcSchema = z.object({
  // Processor Information
  Processor: requiredString,
  IsMicampMasterIso: z.boolean(),
  IsWavitAccount: z.boolean(),
  IsWavitEquipReplacement: z.boolean(),
  IsNutraAccount: z.boolean(),
  WavitApp: z.boolean(),
  IsFreePosProgram: z.boolean(),
  // Fee Information
  MerchantAnnual: z.boolean(),
  AmountAnnual: z.string(),
  BillingMonthAnnual: z.string(),
  StatusNonBillingAnnual: z.string(),
  PciAnnual: z.boolean(),
  PciAmountAnnual: z.string(),
  PciBillingMonthAnnual: z.string(),
  PciStatusNonBillingAnnual: z.string(),
  PciMonthly: z.boolean(),
  PciAmountMonthly: z.string(),
  PciStatusNonBillingMonthly: z.string(),
  RateIncreases: z.boolean(),
  RateStatusNonBilling: z.string(),
  // MiCamp Processing Data
  LastProcessDate: z.date()
});

export const MerchantSoftwareInstallSchema = z.object({
  SoftwareAcctNumber: requiredString,
  POCname: requiredString,
  POCphone: requiredString,
  POCemail: requiredString,
  ISOname: requiredString,
  ISOcontact: requiredString,
  ISOphone: requiredString,
  ISOemail: requiredString,
  Dealer: requiredString,
  DealerContact: requiredString,
  DealerPhone: requiredString,
  DealerEmail: requiredString,
  ActiveServiceAgreement: z.boolean(),
  POSsystem: requiredString,
  NumberStations: requiredNumber,
  MiPointClover: z.boolean(),
  HasTSLlicense: z.boolean(),
  MiPointCloverQty: requiredNumber,
  MiPointIngencio: z.boolean(),
  HasPMSlicense: z.boolean(),
  MiPointIngencioQty: requiredNumber,
  RemoteServiceAccess: z.boolean(),
  Environment: requiredString,
  GatewayUsername: requiredString,
  GatewayPassword: requiredString,
  GatewayKey: requiredString,
  SupportProvider: requiredString,
  SupportProgram: requiredString,
  EffectiveDate: z.date(),
  InstallationDevices: requiredNumber,
  InstallationDevicesPrice: requiredNumber,
  InstallationDevicesTotal: requiredNumber,
  MonthlyRecurringDevices: requiredNumber,
  MonthlyRecurringDevicesPrice: requiredNumber,
  MonthlyRecurringDevicesTotal: requiredNumber,
  SupportRecurringDevices: requiredNumber,
  SupportRecurringDevicesPrice: requiredNumber,
  SupportRecurringDevicesTotal: requiredNumber,
});

export type MerchantSoftwareInstallValues = z.infer<
  typeof MerchantSoftwareInstallSchema
>;

export const MerchantAgentLeadSourceSchema = z.object({
  LeadSource: requiredString,
  SalesVertical: requiredString,
  Agent: requiredString,
  SplitPercentage: requiredNumber,
  CalcAfterMasterSplit: z.boolean(),
  CalcAfterAgentPay: z.boolean(),
  CalcPartOfMaster: z.boolean(),
  CalcPartOfSubMaster: z.boolean(),
  AgentIsMaster: z.boolean(),
  RebateAccount: z.boolean(),
  ForceNotifMasterAgent: z.boolean(),
  TotalEffectiveSplit: requiredNumber,
  SubAgent: requiredString,
  Filter: requiredString,
  DefaultSplits: requiredString,
  Agent2: requiredString,
});

export const AccountStatusSchema = z.object({
  Activity: z.string(),
  // OVERALL EMV COMPLIANCE
  EmvStatus: z.string(),
  Method: z.string(),
  ComplianceDate: z.date(),
  ClickVerified: z.date(),
  // SOLID PORTFOLIO INFO 
  ChildMid: z.boolean(),
  ComplianceSolidDate: z.date(),
  // SELECT OVERALL STATUS
  OverallStatus: z.string(),
  ReceivedDate: z.date(),
  WithdrawnDate: z.date(),
  SubmittedDate: z.date(),
  ClosedDate: z.date(),
  ApprovalDate: z.date(),
  ReopenDate: z.date(),
  DeclineDate: z.date(),
  Item1: z.string(),
  Item2: z.string(),
  Item3: z.string(),
});

export const EquipmentSchema = z.object({
  ReturnEquipment: z.string(),
  ShowHistory: z.boolean(),
  ReturnToInventory: z.boolean(),
});

export type MerchantAgentLeadSourceValues = z.infer<
  typeof MerchantAgentLeadSourceSchema
>;

export const MerchEnterAdjustmentSchema = z.object({
  Agent: requiredString,
  DataDate: requiredString,
  DisplayDate: requiredString,
  AdjustType: requiredString,
  Notes: requiredString,
  AdjustAmount: requiredString,
  Split: requiredNumber,
});

export type MerchEnterAdjustmentValues = z.infer<
  typeof MerchEnterAdjustmentSchema
>;

export const wavitTransactionsSchema = z.object({
  FromDate: z.date(),
  ToDate: z.date(),
  LookForTrouble: z.boolean(),
  LookDebitBusiness: z.boolean(),
  SaveToC: z.boolean(),
});

export const bankOfTheWestSchema = z.object({
  AgentRepName: z.string(),
  AgentRepCode: z.string(),
  BranchName: z.string(),
  BranchCode: z.string(),
  AbaRouting: z.string(),
  DdaCheckingAct: z.string(),
  FederalTaxId: z.string(),
  Banker: z.string(),
  BankerEmployeeId: z.string(),
  DivisionName: z.string(),
  DivisonLob: z.string(),
  RegionName: z.string(),
  Region: z.string(),
  SegmentName: z.string(),
  ReferralLead: z.string(),
  Entity: z.string(),
  ClientGroup: z.string(),
});


export const AgentSetupSchema = z.object({
  findAgent: requiredString,
  excludeClosedAgents: z.boolean(),
  displayName: requiredString.nonempty("Display Name is required"),
  firstName: requiredString.nonempty("First Name is required"),
  lastName: requiredString.nonempty("Last Name is required"),
  merchantNote: requiredString,
  isChildSubAgent: z.boolean(),
  subAgentOrChild: requiredString,
  selectRelationshipManager: requiredString,
  email: requiredString.email("Invalid email address"),
  phone: requiredString,
  status: requiredString.nonempty("Status is required"),
  startDate: requiredString,
  endDate: requiredString,
  address1: requiredString,
  address2: requiredString,
  city: requiredString,
  state: requiredString,
  zip: requiredString,
  routing: requiredString,
  residualEmail: requiredString,
  zohoEmail: requiredString,
  account: requiredString,
  ssn: requiredString,
  payDay: requiredString,
  entityType: requiredString,
  payGroup: requiredString,
  msoId: requiredString,
  messeging: z.boolean(),
  residual: z.boolean(),
  filePrefix: requiredString,
  tickets: z.boolean(),
  flashes: z.boolean(),
  noBillPay: z.boolean(),
  reportType: requiredString,
  okToPayResid: z.boolean(),
  doNotPay: z.boolean(),
  printPhysicalCheck: z.boolean(),
  payrollId: requiredString,
  agentId: requiredString,
  note: requiredString,
});

export type AgentSetupValues = z.infer<typeof AgentSetupSchema>;

export const AgentEquipmentSchema = z.object({
  copyFromContactInfo: z.boolean(),
  noShippingEmails: z.boolean(),
  coCard: z.boolean(),
  markClosed: z.boolean(),
  shipPhone: requiredString,
  shipExt: requiredString,
  shippingEmail: requiredString.email("Invalid email address"),
  shippingServiceEmail: requiredString.email("Invalid email address"),
  address1: requiredString,
  address2: requiredString,
  city: requiredString,
  state: requiredString,
  zip: requiredString,
  cellPhone: requiredString,
});

export type AgentEquipmentValues = z.infer<typeof AgentEquipmentSchema>;

export const newLookupSchema = z.object({
  MID: requiredString,
  OrderID: requiredString,
  Serial: requiredString,
  Model: requiredString,
  Condition: requiredString,
  ShelfItems: z.boolean(),
});

export type newLookupValues = z.infer<typeof newLookupSchema>;

export const newItemsSchema = z.object({
  Model: requiredString,
  Id: requiredString,
  Description: requiredString,
  Alias: requiredString,
  ItemType: requiredString,
  Style: requiredString,
  Manufacturer: requiredString,
  ReorderQty: requiredNumber,
  SerialNumber: z.boolean(),
  TakeInventory: z.boolean(),
  PhysicallyShippable: z.boolean(),
  HwPricing: requiredNumber,
  DeployFee: requiredNumber,
  TaxShipping: requiredNumber,
  Total: requiredNumber,
  DimensionName: requiredString,
  DimensionWidth: requiredString,
  DimensionHeight: requiredString,
  DimensionLength: requiredString,
  DimensionWeight: requiredString,
});

export type newItemsValues = z.infer<typeof newItemsSchema>;

export const newItemDetailSchema = z.object({
  Condition: requiredString,
  Serial: requiredString,
  SortBy: requiredString,
});

export type newItemDetailValues = z.infer<typeof newItemDetailSchema>;

export const newEquipmentOrderSchema = z.object({
  Merchant: requiredString,
  MID: requiredString,
  Status: requiredString,
  Model: requiredString,
  NoSerial: z.boolean(),
  Limit: z.boolean(),
});

export const newUnassignedEquipmentSchema = z.object({
  Model: requiredString,
  Condition: requiredString,
  Serial: requiredString,
});

export const newRecentOrdersSchema = z.object({
  FromDate: requiredString,
  ToDate: requiredString,
});

export const ImportDataSchema = z.object({
  AchCredit: z.boolean(),
  AchDebit: z.boolean(),
  AchRejects: z.boolean(),
  AchCreditOther: z.boolean(),
});

export const financialSchema = z.object({
  vendor: z.string(),
  routing: z.string(),
  account: z.string(),
  type: z.string(),
  date: z.string(),
  refNo: z.string(),
  description: z.string(),
  amount: z.number(),
  notes: z.string(),
  ACHId: z.string(),
});

// ADMIN SCHEMAS
export const newRingCentralUtilitySchema = z.object({
  DataSource: requiredString,
  Status: requiredString,
});

export const newLoadProcessingDataSchema = z.object({
  ProcessingPeriod: requiredString,
  Status: requiredString,
});

export const newThirdPartyProcessorsSchema = z.object({
  Processor: requiredString,
  MID: requiredString,
  ResidualDate: requiredString,
  CalculateAllMonths: z.boolean(),
});

export const newFirstDataOmahaSchema = z.object({
  ResidualDate: requiredString,
  CheckCalculation: z.boolean(),
  NutraChargeBacks: z.boolean(),
  DoNotQueryZeroRecords: z.boolean(),
  CalculateInitialPassOnly: z.boolean(),
  SkipSysPrins: z.boolean(),
  From: requiredString,
  To: requiredString,
  CalculateIndividualMID: requiredString,
  Status: requiredString,
});

export const newAdjustmentCriteriaSchema = z.object({
  ResidualDate: requiredString,
  Agent: requiredString,
  AgentID: requiredString,
  AdjustType: requiredString,
  MID: requiredString,
  DBALegal: requiredString,
  Processor: requiredString,
  Amount: requiredString,
  Notes: requiredString,
});

export const newDisplayResidualsSchema = z.object({
  ResidualDate: requiredString,
  PayDay: z.boolean(),
  PayDaySelection: requiredString,
  ExcludePayDay: z.boolean(),
  PayGroup: z.boolean(),
  PayGroupSelection: requiredString,
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
  EmailReportsTo: requiredString,
});

export const newAuditDetailSchema = z.object({
  AuditType: requiredString,
  EntryDate: requiredString,
  ToDate: requiredString,
});

export const newAdHocSearchSchema = z.object({
  ReportName: requiredString,
  MID: requiredString,
  FromDate: requiredString,
  ToDate: requiredString,
  YearMonth: requiredString,
  UseAO: z.boolean(),
  SaveToC: z.boolean(),
  MIDS: requiredString,
  User: requiredString,
  Processor: requiredString,
  AuditType: requiredString,
  Agent: requiredString,
  Phrase: requiredString,
});

export const newEditUserSchema = z.object({
  UserId: requiredString,
  Username: requiredString,
  Email: requiredString,
  CellPhone: requiredNumber,
  Extension: requiredString,
  Agent: z.string(),
  UserStatus: requiredString,
  InProduction: requiredString,
  Manager: z.boolean(),
  RoleId: requiredString,
  Lock: requiredString,
  PermissionCreate: z.boolean(),
  PermissionEdit: z.boolean(),
  PermissionDelete: z.boolean(),
  PermissionSave: z.boolean(),
  EnableDarkMode: z.boolean(),
});

export const newAddNewUserSchema = z.object({
  UserId: requiredString,
  Username: requiredString,
  Email: requiredString,
  CellPhone: z.number(),
  Extension: requiredString,
  Agent: z.string(),
  Password: requiredString,
  ConfirmPassword: requiredString,
  UserStatus: requiredString,
  InProduction: requiredString,
  Role: requiredString,
  Department: requiredString,
  Manager: z.boolean(),
  Lock: requiredString,
  PermissionCreate: z.boolean(),
  PermissionEdit: z.boolean(),
  PermissionDelete: z.boolean(),
  PermissionSave: z.boolean(),
  PermissionResiduals: z.boolean(),
  Boarding: z.boolean(),
  Toolkit: z.boolean(),
});

export const newRoleSchema = z.object({
  Id: z.string(),
  Role: requiredString,
  Description: requiredString,
  Permission: requiredString,
});

export const newDepartmentSchema = z.object({
  Id: z.string(),
  Department: requiredString,
  Description: requiredString,
  Permission: requiredString,
});

// BOARDING TOOL SCHEMAS

export const searchMerchantSchema = z.object({
  MerchantName: requiredString,
  Agent: requiredString,
});
// BOARDING AGENT DETAILS FORM
export const boardingAgentDetailsSchema = z.object({
  AgentCompanyName: requiredString,
  DisplayName: requiredString,
  FirstName: requiredString,
  LastName: requiredString,
  RelationshipManager: requiredString,
  Address: requiredString,
  SteApt: requiredString,
  City: requiredString,
  State: requiredString,
  Zip: requiredString,
  Email: requiredString,
  RoutingNumber: requiredString,
  Account: requiredString,
  NoShippingEmails: z.boolean(),
  ShippingAddress: requiredString,
  ShippingAddress2: requiredString,
  ShippingCity: requiredString,
  ShippingState: requiredString,
  ShippingZip: requiredString,
  ShippingEmails: requiredString,
});

export const boardingAgentSettingsSchema = z.object({
  // Common to All (North / Omaha / WAVit Interchange / FSP)
  EarlyTerminationFee: requiredNumber,
  MonthlyFee: requiredNumber,
  HideEquipmentPrice: z.boolean(),
  // FSP Only
  VoiceAuthorization: requiredNumber,
  AudioResponse: requiredNumber,
  VoiceAddressVerification: requiredNumber,
  TinInvalidFee: requiredNumber,
  AchRejectFee: requiredNumber,
  ChargebackFee: requiredNumber,
  MonthlyStatementFee: requiredNumber,
  // Common to North / Omaha
  NorthOmahaMonthlyFee: requiredNumber,
  NorthOmahaAchRejectFee: requiredNumber,
  // Cash Discount Flat Rate (WAVit Only)
  WavitCashDiscountRate: requiredNumber,
  WavitDiscount: requiredNumber,
  // Omaha Interchange Only
  VisaMcChagebackFee: requiredNumber,
  VisaMcRetrievalFee: requiredNumber,
  // North WAVit and Interchange Only
  AmexChargebackFee: requiredNumber,
  DiscoverChargebackFee: requiredNumber,
  RetrievalFee: requiredNumber,
  AmexChargebackRetrievalFee: requiredNumber,
  DiscoverRetrievalFee: requiredNumber,
  VisaMcDiscoverChargebackRetrievalFee: requiredNumber,
  NorthInterMonthlyStatementFee: requiredNumber,
})



export const newSupportTicketSchema = z.object({
  Subject: requiredString,
  Support: z.boolean(),
  Sales: z.boolean(),
  Description: requiredString,
});

export const newNorthBlindLeadSchema = z.object({
  Email: requiredString,
  Name: requiredString,
});

export const newFspLeadSchema = z.object({
  Email: requiredString,
  Name: requiredString,
});

// MERCHANT EDIT SECTION
// Merchant Information
export const boardingMerchantInfoSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  ContactName: z.string(),
  Address: z.string(),
  SteApt: z.string(),
  City: z.string(),
  State: z.string(),
  Zip: z.string(),
  phone1: z.string(),
  Ext1: z.string(),
  Phone2: z.string(),
  Ext2: z.string(),
  Email: z.string(),
  Website: z.string(),
  DbaLegalName: z.string(),
  DbaContactName: z.string(),
  DbaAddress: z.string(),
  DbaSteApt: z.string(),
  DbaCity: z.string(),
  DbaState: z.string(),
  DbaZip: z.string(),
});

export const newMerchantReport = z.object({
  BoolAgent: z.boolean(),
  BoolAgentDate: z.boolean(),
  BoolApprovalDate: z.boolean(),
  BoolProcessor: z.boolean(),
  BoolMerchant: z.boolean(),

  SelectedAgent: z.string(),
  DateFrom: z.string(),
  DateTo: z.string(),
  
});

// Order New Equipment
export const newOrderInfoSchema = z.object({
  ModelType: requiredString,
  Quantity: requiredNumber,
  AgentCompanyName: z.string(),
  Warrantly: z.boolean(),
  WillPayByACH: z.boolean(),
  Billing: z.boolean(),
  ShippingMethod: z.boolean(),
  UseLegalDbaInfo: z.boolean(),
  ContactName: z.string(),
  Address: z.string(),
  Address2: z.string(),
  City: z.string(),
  State: z.string(),
  PostalCode: z.string(),
  ContactPhone: z.string(),
  ContactEmail: z.string(),
  UploadAchForm: z.any(),
  UploadProgRequest: z.any(),
});

// --------------------------------
// This is for the FSP MPA Application
// Merchant Detail TAB form
export const merchantInformationFspSchema = z.object({
  // DBA Information Section
  MerchantName: z.string(),
  EmailStatements: z.string(),
  Phone: z.string(),
  Fax: z.string(),
  ContactName: z.string(),
  ContactPhone: z.string(),
  ContactServicePhone: z.string(),
  BusinessWebsite: z.string(),
  DateOpen: z.string(),
  // DBA Address Section
  Street: z.string(),
  AddressSearchBar: z.string(),
  City: z.string(),
  State: z.string(),
  PostalCode: z.string(),
  // LEGAL INFORMATION
  CorporateLegalName: z.string(),
  Locations: z.string(),
  LegalCity: z.string(),
  LegalState: z.string(),
  LegalPostalCode: z.string(),
  // TAX INFORMATION
  UseCorporateLegalName: z.string(),
  IrsName: z.string(),
  SICMCC: z.string(),
  EIN: z.string(),
  BusinessType: z.string(),
  TypeOfServicesOffered: z.string(),
  EinSsn: z.string(),
  StockSymbol: z.string(),
  // STATEMENTS INFORMATION
  MailStatements: z.string(),
  // LOCATION
  // Building Type
  BuildingType: z.string(),
  // Merchant Type
  MerchantType: z.string(),
  // Area Zoned
  AreaZoned: z.string(),
  // Squere Footage
  SquereFootage: z.string(),
});

// FINANCIAL INFORMATION TAB FORM
export const financialInformationFspSchema = z.object({
  // Bank Information
  CheckingSavings: z.string(),
  BankName: z.string(),
  BankRouting: z.string(),
  BankAccounting: z.string(),
  // Sales
  AcceptingVisaMcDiscover: z.string(),
  hasBeenTerminated: z.string(),
  Reason: z.string(),
  // Settings
  StoreFrontSwipe: z.number(),
  Internet: z.number(),
  ManuallyKeyed: z.number(),
  // SERVICE REQUESTED
  VisaMcAvgTransaction: z.string(),
  VisaMcHighestTransaction: z.string(),
  VisaMcGrossMoSales: z.string(),
  DiscoverAvgTransaction: z.string(),
  DiscoverHighestTransaction: z.string(),
  DiscoverGrossMoSales: z.string(),
  AmexOptBlueAvgTransaction: z.string(),
  AmexOptBlueHighestTransaction: z.string(),
  AmexOptBlueGrossMoSales: z.string(),
  // AMERICAN EXPRESS VOLUME ? 1,000,000 ANNUALLY?
  AmericaExpressVolume: z.string(),
  AmericanExpressVolumeAccount: z.string(),
  // DISCOVER RETAINED
  DiscoverAccount: z.string(),
  Visa: z.boolean(),
  Mastercard: z.boolean(),
  AmericanExpress: z.boolean(),
  Discover: z.boolean(),
  PayPal: z.boolean(),
  EBT: z.boolean(),
  CashBenefit: z.boolean(),
  FnsAccount: z.number(),
  // SEASONAL MERCHANT
  SeasonalMerchant: z.boolean(),
  January: z.boolean(),
  February: z.boolean(),
  March: z.boolean(),
  April: z.boolean(),
  May: z.boolean(),
  June: z.boolean(),
  July: z.boolean(),
  August: z.boolean(),
  September: z.boolean(),
  October: z.boolean(),
  November: z.boolean(),
  December: z.boolean(),
  // DOES THE MERCHANT USE AN INDEPENDENT SERVICE THAT
  // STORES, MAINTAINS OR TRANSMITS CARDHOLDER INFO?
  IndependentService: z.boolean(),
  IndependentServiceName: z.string(),
  IndependentServicePhone: z.string(),
  // DOES MERCHANT USE A FULFILLMENT HOUSE TO FULFILL PRODUCT?
  UsesFulfillHouse: z.boolean(),
  FulfillHouseName: z.string(),
  FulfillHousePhone: z.string(),
  // GENERAL SETTINGS
  OptOut: z.boolean(),
  // RETURN POLICY
  ReturnPolicy: z.string(),
  PolicyDescription: z.string(),
});

// MO/TO QUESTIONAIRE TAB FORM
export const moToQuestionaireFspSchema = z.object({
  // What percent of sales are to
  BusinessPercentage: z.number(),
  IndividualsPercentage: z.number(),
  // Methods of Marketing
  MktNewspapersMagazine: z.string(),
  MktOutboundTelemarketing: z.string(),
  MktMail: z.string(),
  MktInternet: z.string(),
  MktTelevisionRadio: z.string(),
  MktOther: z.string(),
  MktOtherDescription: z.string(),
  // Who enters Card Information Into the Processing System
  CardInfoWhoEnters: z.string(),
  CardInfoOtherDescription: z.string(),
  // Do you own your own Product/Inventory (if no, wehere is inventory stored)
  OwnProd: z.boolean(),
  OwnProdBusinessOther: z.string(),
  OwnProdOtherDescription: z.string(),
  // Who processes the order
  WhoProcesses: z.string(),
  ProcessorOtherDescription: z.string(),
  // Product Shipped By (Shipped Via)
  ShippedBy: z.string(),
  ShippedOtherDescription: z.string(),
  // Who ships product
  WhoShips: z.string(),
  DaysToShip: z.string(),
  // Delivery Receipt Requested
  DeliveryReceiptRequested: z.boolean(),
  // Is the payment Encrypted By SSL or Better?
  IsPaymentEncrypted: z.boolean(),
  Certificate: z.string(),
  CertificateIssuer: z.string(),
  ExpirationDate: z.date(),
  IndividualShared: z.boolean(),
});

// MERCHANT OWNER
export const merchantOwnerFspSchema = z.object({
  // Has merchant/owner/principals ever filed for bankruptcy
  HasFiledForBankruptcy: z.boolean(),
  Account: z.number(),
});

// ADD NEW MERCHANT OWNER FORM
export const addMerchantOwnerFspSchema = z.object({
  // Has merchant/owner/principals ever filed for bankruptcy
  PrimaryOwner: z.boolean(),
  FirstName: z.string(),
  MiddleName: z.string(),
  LastName: z.string(),
  DateOfBirth: z.date(),
  Ownership: z.number(),
  CellNumber: z.number(),
  SSN: z.number(),
  MerchantAgreesSms: z.boolean(),
  TitleDocuSign: z.string(),
  EmailDocuSign: z.string(),
  // Address Information
  Address: z.string(),
  City: z.string(),
  State: z.string(),
  PostalCode: z.number(),
  DriverLicense: z.number(),
  DriverLicenseState: z.string(),
});

// ADD NEW MERCHANT OWNER FORM
export const pricingInformationFspSchema = z.object({
  // Has merchant/owner/principals ever filed for bankruptcy
  PassTrueInterchange: z.boolean(),
  PassDuesAndAssesments: z.string(),
  PricingType: z.string(),
  // TIERED
  CreditQual: z.number(),
  MidCreditQual: z.number(),
  NonCreditQual: z.number(),
  NonPinDebitNonQual: z.number(),
  NonPinDebitMidQual: z.number(),
  NonPinDebitNonQual2: z.number(),
  AmexCreditQual: z.number(),
  AmexMidCreditQual: z.number(),
  AmexNonCreditQual: z.number(),
  PayPalDCFee: z.number(),
  // INTERCHANGE PLUS
  GrossNet: z.string(),
  ViMcDiscRate: z.number(),
  ViMcdiscNonPinDebitRate: z.number(),
  AmexDCRate: z.number(),
  PaypalDCRate: z.number(),
  // FLAT RATE
  DcRate: z.number(),
  UseDefaultRate: z.boolean(),
  DefaultRate: z.number(),
  ViMcDiscFee: z.number(),
  ViMcDiscNonPinDebitDCRate: z.number(),
  AmexDcRate2: z.number(),
  PayPalDcRate2: z.number(),
  // SWIPED / NON-SWIPED (Fiserv only)
  SwipedRate: z.number(),
  NonSwipedRate: z.number(),
  // --
  PinDebit: z.boolean(),
  PinDebitDcRate: z.number(),
  PinDebitAuthRate: z.number(),
  // DISCOUNT COLLECTED FREQUENCY
  DailyMonthly: z.string(),
  // OTHER PRICING INFORMATION
  PciFrequency: z.string(),
  Audio: z.string(),
  AuthrizationFee: z.number(),
  EbtCashItemFee: z.number(),
  StatementFee: z.number(),
  MonthlyMinimumFee: z.number(),
  PciFee: z.number(),
  AddressVerification: z.number(),
  EftFoodItemFee: z.number(),
  CustomerServiceFee: z.number(),
  TinInvalidFee: z.number(),
  VoiceAuthorization: z.number(),
  ReturnedTransaction: z.number(),
  OnlineReporting: z.number(),
  AchRejectFee: z.number(),
  ApplicationFee: z.number(),
  AudioResponse: z.number(),
  RegulatoryProductFee: z.number(),
  ChargebackFee: z.number(),
  EarlyTerminationFee: z.number(),
  VoiceAddressVerification: z.number(),
  WirelessFee: z.number(),
  RetrievalFee: z.number(),
  MerchantFee: z.number(),
  BatchHeaderFee: z.number(),
  SoftwareFee: z.number(),
  PciNonComplianceFee: z.number(),
  SalesTrasactionFee: z.number(),
  EquipmentFee: z.number(),
  OtherFeeDescription: z.string(),
  OtherFee: z.number(),
});

// PROGRAMMING REQUEST FORM
export const programmingRequestFspSchema = z.object({
  // Account Information
  SalesRepresentative: z.string(),
  SalesPhoneNumber: z.string(),
  // POS Provider Name
  FileBuildVarOnly: z.boolean(),
  PosProviderName: z.string(),
  // WAVIit App Only
  Invoicing: z.boolean(),
  InvoicingNumberRequired: z.boolean(),
  QrScan: z.boolean(),
  // Connection Type
  EthernetInternet: z.boolean(),
  WirelessSim: z.boolean(),
  DialUp: z.boolean(),
  WiFi: z.boolean(),
  // Clover Only
  NeedMenuOrInventory: z.boolean(),
  HowCashDiscountApplied: z.string(),
  // File build Information
  BuildType: z.string(),
  Pbx: z.boolean(),
  Wavit: z.boolean(),
  PinDebit: z.boolean(),
  AutoClose: z.boolean(),
  AutoCloseTime: z.string(),
  TipLine: z.boolean(),
  TipLineType: z.string(),
  Server: z.boolean(),
  SuggestedTipPercentages: z.string(),
  SalesTax: z.number(),
  MessageToTheBoarding: z.string(),
  // Shipping Information
  ShipTo: z.string(),
  ShipName: z.string(),
  ShipPriority: z.string(),
  UseExistingAddress: z.string(),
  ShipAddress: z.string(),
  ShipCity: z.string(),
  ShipState: z.string(),
  ShipPostalCode: z.string(),
  ShipPhone: z.string(),
  ShipEmail: z.string(),
  // Billing Information
  BillTo: z.string(),
});

// ----------------
// This is for the NORTH INTERCHANGE 2502 Application

// Merchant Detail TAB form
export const merchantInformationInterSchema = z.object({
  // DBA Information Section
  ClientsBusinessName: requiredString,
  Phone: requiredString,
  CustomerServicePhone: z.string(),
  Fax: z.string(),
  EmailStatements: requiredString,
  CustomerServiceEmail: z.string(),
  AlsoPrintAndMailStatements: z.boolean(),
  // DBA Address Section
  Street: requiredString,
  AddressSearchBar: requiredString,
  City: requiredString,
  State: requiredString,
  PostalCode: requiredString,
  // LEGAL CONTACT INFORMATION
  UseBusinessAddressDBA: z.boolean(),
  LegalContactName: requiredString,
  LegalContactFax: z.string(),
  LegalContactPhone: requiredString,
  LegalContactEmail: requiredString,
  // LEGAL INFORMATION
  LegalBusinessName: requiredString,
  LegalStartDate: z.date(),
  LegalBusinessWebsite: z.string(),
  LegalAddress: requiredString,
  LegalCity: requiredString,
  LegalState: requiredString,
  LegalPostalCode: requiredString,
});

// FINANCIAL INFORMATION TAB FORM
export const financialInformationInterSchema = z.object({
  // Bank Information
  BankName: requiredString,
  BankRouting: requiredNumber,
  BankAccounting: requiredNumber,
  // Tax Information
  EinSsn: z.string(),
  SICMCC: z.string(),
  TypeOfGoods: requiredString,
  BusinessType: z.string(),
  // Sales
  HighTicket: requiredNumber,
  AverageTicketsSales: requiredNumber,
  AnnualVisaMc: requiredNumber,
  AnnualAmex: requiredNumber,
  AnnualDiscover: requiredNumber,
  AnnualTotalSales: requiredNumber,
  // Settings
  EarlyTerminationFee: requiredNumber,
  CashDiscount: z.number(),
  Discount: z.number(),
  MonthlyStatementFee: requiredNumber,
  // Sales Dustribution
  StoreFrontSwipe: requiredNumber,
  Internet: requiredNumber,
  MailOrder: requiredNumber,
  Telephone: requiredNumber,
});

// MERCHANT OWNER
export const merchantOwnerInterSchema = z.object({
  // Has merchant/owner/principals ever filed for bankruptcy
  HasFiledForBankruptcy: z.boolean(),
  Account: z.number(),
});

// PROGRAMMING REQUEST FORM
export const programmingRequestInterSchema = z.object({
  // Account Information
  SalesRepresentative: z.string(),
  SalesPhoneNumber: z.string(),
  // POS Provider Name
  FileBuildVarOnly: z.boolean(),
  PosProviderName: z.string(),
  // WAVIit App Only
  Invoicing: z.boolean(),
  InvoicingNumberRequired: z.boolean(),
  QrScan: z.boolean(),
  // Connection Type
  EthernetInternet: z.boolean(),
  WirelessSim: z.boolean(),
  // Clover Only
  NeedMenuOrInventory: z.boolean(),
  HowCashDiscountApplied: z.string(),
  // File build Information
  BuildType: z.string(),
  Pbx: z.boolean(),
  Wavit: z.boolean(),
  PinDebit: z.boolean(),
  AutoClose: z.boolean(),
  AutoCloseTime: z.string(),
  TipLine: z.boolean(),
  TipLineType: z.string(),
  Server: z.boolean(),
  SuggestedTipPercentages: z.string(),
  SalesTax: z.number(),
  // Shipping Information
  ShipTo: z.string(),
  ShipName: z.string(),
  ShipPriority: z.string(),
  UseExistingAddress: z.string(),
  ShipAddress: z.string(),
  ShipCity: z.string(),
  ShipState: z.string(),
  ShipPostalCode: z.string(),
  ShipPhone: z.string(),
  ShipEmail: z.string(),
  // Billing Information
  BillTo: z.string(),
});

// NORTH BOARDING FORM
export const northBoardingInterSchema = z.object({
  // Location and Distribution - Additional credit check
  VisitNotRequired: z.boolean(),
  Zone: z.string(),
  Location: z.string(),
  LocationOther: z.string(),
  Seasonal: z.boolean(),
  MonthsInOpertation: z.number(),
  MonthOpenBegin: z.number(),
  MonthOpenEnd: z.number(),
  FloorsLevels: z.string(),
  MerchantOccupies: z.string(),
  MerchantOccupiesOther: z.string(),
  FloorsOccupiedBy: z.string(),
  MerchantNameDisplayed: z.string(),
  TimeZone: z.string(),
  SquareFootage: z.string(),
  HowManyEmployees: z.number(),
  RegisterTerminals: z.number(),
  ReturnPolicy: z.string(),
  SpecificReturnPolicy: z.string(),
  SpecificReturnPolicyOther: z.string(),
  // Information
  DaysToSubmitTransactions: z.number(),
  ProperLicenseVisible: z.number(),
  Explanation: z.string(),
  PreviousProcessor: z.string(),
  PreviousMerchant: z.string(),
  ReasonForLeaving: z.string(),
  ReasonForLeavingOther: z.string(),
  PreviousProcessorStatements: z.string(),
  DepositRequired: z.string(),
  DepositRequiredPercentage: z.number(),
  TimeFrameDeliveryDays: z.string(),
  MobileApplication: z.string(),
  MobileApplicationList: z.string(),
  // Flax Rate
  McQualifiedCreditDiscountFee: z.number(),
  McQualifiedCreditTransactionFee: z.number(),
  McQualifiedNonPinDebitDiscountFee: z.number(),
  McQualifiedNonPinDebitTransactionFee: z.number(),
  VisaQualCreditDiscountFee: z.number(),
  VisaQualCreditTransactionFee: z.number(),
  VisaQualNonPinDebitDiscountFee: z.number(),
  VisaQualNonPinDebitTransactionFee: z.number(),
  AmericanExpressQualCreditDiscountFee: z.number(),
  AmericanExpressQualCreditTransactionFee: z.number(),
  DiscoverNetQualCreditDiscountFee: z.number(),
  DiscoverNetQualCreditTransactionFee: z.number(),
  DiscoverNetQualNonPinDebitDiscountFee: z.number(),
  DiscoverNetQualNonPinDebitTransactionFee: z.number(),
  PayPalQualCredityDiscountFee: z.number(),
  PayPalQualCredityTransactionFee: z.number(),
  SwipedDiscountFee: z.number(),
  SwipedTransactionFee: z.number(),
  NonSwipedDiscountFee: z.number(),
  NonSwipedTransactionFee: z.number(),
  PinLessDiscountFee: z.number(),
  PinLessDebitTransactionFee: z.number(),
  PinLessDebitDenialTransactionFee: z.number(),
  // Flat Rate Fees
  Nameless: z.number(),
  ChargebackProcessing: z.number(),
  AmexChargebackFee: z.number(),
  DiscoverChargebackFee: z.number(),
  RetrievalFee: z.number(),
  AmexChargebackRetrievalFee: z.number(),
  DiscoverRetrievalFee: z.number(),
  VisaMcDiscChargebackRetrievalFee: z.number(),
  BatchSettlementFee: z.number(),
  TinTfnBlankInvalidFee: z.number(),
  // Tiered Pricing
  McQualCreditDiscountFee: z.number(),
  McQualCreditTransactionFee: z.number(),
  McMidQualCreditDiscountFee: z.number(),
  McMidQualCreditTransactionFee: z.number(),
  McNonQualCreditDiscountFee: z.number(),
  McNonQualCreditTransactionFee: z.number(),
  McQualNonPinDebitDiscountFee: z.number(),
  McQualNonPinDebitTransactionFee: z.number(),
  McMidQualNonPinDebitDiscountFee: z.number(),
  McMidQualNonPinDebitTransactionFee: z.number(),
  McNonQualNonPinDebitDiscountFee: z.number(),
  McNonQualNonPinDebitTransactionFee: z.number(),
  VisaQualCreditDiscountFee2: z.number(),
  VisaQualCreditTransactionFee2: z.number(),
  VisaMidQualCreditDiscountFee: z.number(),
  VisaMidQualCreditTransactionFee: z.number(),
  VisaNonQualCreditDiscountFee: z.number(),
  VisaNonQualCreditTransactionFee: z.number(),
  VisaQualNonPinDebitDiscountFee2: z.number(),
  VisaQualNonPinDebitTransactionFee2: z.number(),
  VisaMidQualNonPinDebitDiscountFee: z.number(),
  VisaMidQualNonPinDebitTransactionFee: z.number(),
  VisaNonQualiNonPinDebitDiscountFee: z.number(),
  VisaNonQualiNonPinDebitTransactionFee: z.number(),
  DiscoverQualCreditDiscountFee2: z.number(),
  DiscoverQualCreditTransactionFee2: z.number(),
  DiscoverMidQualCreditDiscountFee: z.number(),
  DiscoverMidQualCreditTransactionFee: z.number(),
  DiscoverNonQualCreditDiscountFee: z.number(),
  DiscoverNonQualCreditTransactionFee: z.number(),
  DiscoverQualNonPinDebitDiscountFee2: z.number(),
  DiscoverQualNonPinDebitTransactionFee2: z.number(),
  DiscoverMidQualNonPinDebitDiscountFee: z.number(),
  DiscoverMidQualNonPinDebitTransactionFee: z.number(),
  DiscoverNonQualiNonPinDebitDiscountFee: z.number(),
  DiscoverNonQualiNonPinDebitTransactionFee: z.number(),
  PayPalQualCreditDiscountFee: z.number(),
  PayPalQualCreditTransactionFee: z.number(),
  AmeExpQualCreditDiscountFee: z.number(),
  AmeExpQualCreditTransactionFee: z.number(),
  AmeExpMidQualCreditDiscountFee: z.number(),
  AmeExpMidQualCreditTransactionFee: z.number(),
  AmeExpNonQualCreditDiscountFee: z.number(),
  AmeExpNonQualCreditTransactionFee: z.number(),
  // Billed Monthly Fees
  FeePerTid: z.number(),
  OfTids: z.number(),
  Total: z.number(),
  MonthlyServiceFee: z.number(),
  AchRejectFee: z.number(),
  MinimumProcessingFee: z.number(),
  AnnualMembershipFee: z.number(),
  Nameless2: z.number(),
  // Buypass And Authorization Fees
  Voyager: z.number(),
  WEX: z.number(),
  FleetCorAuth: z.number(),
  // Wex Full Acquiring Fees
  WexAuthFees: z.number(),
  WexSaleDiscount: z.number(),
  WexRefundDiscount: z.number(),
  WexChargebacksDiscount: z.number(),
  WexReversalDiscount: z.number(),
  WexChargebackFee: z.number(),
  WexChargebacksReversalFee: z.number(),
  // Pass Through Interchange
  PassMcQualCreditDiscountFee: z.number(),
  PassVisaQualCreditDiscountFee: z.number(),
  PassDiscNetCreditDiscountFee: z.number(),
  PassAmeExpCreditDiscountFee: z.number(),
  PassMcQualNonPinDebitDiscountFee: z.number(),
  PassVisaQualNonPinDebitDiscountFee: z.number(),
  PassDiscQualNonPinDebiDiscountFee: z.number(),
  PassSaleCreditNonPinTransactionFee: z.number(),
  PassAmeExpTransactionFee: z.number(),
  // Authorization and AVS Fees
  McAuthFee: z.number(),
  VisaAuthFee: z.number(),
  DiscoverAuthFee: z.number(),
  AmericanExpressAuthFee: z.number(),
  // Pin Debit
  DebitSalesDiscount: z.number(),
  AtmCardTransactionFee: z.number(),
  DebitCardAuthorizationFee: z.number(),
  DebitDeclineInterchangeFee: z.number(),
  DebitInterchangeFee: z.number(),
  DebitPreAuth: z.number(),
  AdjustmentFee: z.number(),
  PinDebitDeclined: z.number(),
});


// ----------------
// This is for the NORTH WAViit 2502 Application
// Merchant Detail TAB form
export const merchantInformationWavitSchema = z.object({
  // DBA Information Section
  ClientsBusinessName: requiredString,
  Phone: requiredString,
  CustomerServicePhone: z.string(),
  Fax: z.string(),
  EmailStatements: requiredString,
  CustomerServiceEmail: z.string(),
  AlsoPrintAndMailStatements: z.boolean(),
  // DBA Address Section
  Street: requiredString,
  AddressSearchBar: requiredString,
  City: requiredString,
  State: requiredString,
  PostalCode: requiredString,
  // LEGAL CONTACT INFORMATION
  UseBusinessAddressDBA: z.boolean(),
  LegalContactName: requiredString,
  LegalContactFax: z.string(),
  LegalContactPhone: requiredString,
  LegalContactEmail: requiredString,
  // LEGAL INFORMATION
  LegalBusinessName: requiredString,
  LegalStartDate: z.date(),
  LegalBusinessWebsite: z.string(),
  LegalAddress: requiredString,
  LegalCity: requiredString,
  LegalState: requiredString,
  LegalPostalCode: requiredString,
});

// FINANCIAL INFORMATION TAB FORM
export const financialInformationWavitSchema = z.object({
  // Bank Information
  BankName: requiredString,
  BankRouting: requiredNumber,
  BankAccounting: requiredNumber,
  // Tax Information
  EinSsn: z.string(),
  SICMCC: z.string(),
  TypeOfGoods: requiredString,
  BusinessType: z.string(),
  // Sales
  HighTicket: requiredNumber,
  AverageTicketsSales: requiredNumber,
  AnnualVisaMc: requiredNumber,
  AnnualAmex: requiredNumber,
  AnnualDiscover: requiredNumber,
  AnnualTotalSales: requiredNumber,
  // Settings
  EarlyTerminationFee: requiredNumber,
  CashDiscount: z.number(),
  Discount: z.number(),
  MonthlyStatementFee: requiredNumber,
  // Sales Dustribution
  StoreFrontSwipe: requiredNumber,
  Internet: requiredNumber,
  MailOrder: requiredNumber,
  Telephone: requiredNumber,
});

// MERCHANT OWNER
export const merchantOwnerWavitSchema = z.object({
  // Has merchant/owner/principals ever filed for bankruptcy
  HasFiledForBankruptcy: z.boolean(),
  Account: z.number(),
});

// PROGRAMMING REQUEST FORM
export const programmingRequestWavitSchema = z.object({
  // Account Information
  SalesRepresentative: z.string(),
  SalesPhoneNumber: z.string(),
  // POS Provider Name
  FileBuildVarOnly: z.boolean(),
  PosProviderName: z.string(),
  // WAVIit App Only
  Invoicing: z.boolean(),
  InvoicingNumberRequired: z.boolean(),
  QrScan: z.boolean(),
  // Connection Type
  EthernetInternet: z.boolean(),
  WirelessSim: z.boolean(),
  // Clover Only
  NeedMenuOrInventory: z.boolean(),
  HowCashDiscountApplied: z.string(),
  // File build Information
  BuildType: z.string(),
  Pbx: z.boolean(),
  Wavit: z.boolean(),
  PinDebit: z.boolean(),
  AutoClose: z.boolean(),
  AutoCloseTime: z.string(),
  TipLine: z.boolean(),
  TipLineType: z.string(),
  Server: z.boolean(),
  SuggestedTipPercentages: z.string(),
  SalesTax: z.number(),
  // Shipping Information
  ShipTo: z.string(),
  ShipName: z.string(),
  ShipPriority: z.string(),
  UseExistingAddress: z.string(),
  ShipAddress: z.string(),
  ShipCity: z.string(),
  ShipState: z.string(),
  ShipPostalCode: z.string(),
  ShipPhone: z.string(),
  ShipEmail: z.string(),
  // Billing Information
  BillTo: z.string(),
});

// NORTH BOARDING FORM
export const northBoardingWavitSchema = z.object({
  // Location and Distribution - Additional credit check
  VisitNotRequired: z.boolean(),
  Zone: z.string(),
  Location: z.string(),
  LocationOther: z.string(),
  Seasonal: z.boolean(),
  MonthsInOpertation: z.number(),
  MonthOpenBegin: z.number(),
  MonthOpenEnd: z.number(),
  FloorsLevels: z.string(),
  MerchantOccupies: z.string(),
  MerchantOccupiesOther: z.string(),
  FloorsOccupiedBy: z.string(),
  MerchantNameDisplayed: z.string(),
  TimeZone: z.string(),
  SquareFootage: z.string(),
  HowManyEmployees: z.number(),
  RegisterTerminals: z.number(),
  ReturnPolicy: z.string(),
  SpecificReturnPolicy: z.string(),
  SpecificReturnPolicyOther: z.string(),
  // Information
  DaysToSubmitTransactions: z.number(),
  ProperLicenseVisible: z.number(),
  Explanation: z.string(),
  PreviousProcessor: z.string(),
  PreviousMerchant: z.string(),
  ReasonForLeaving: z.string(),
  ReasonForLeavingOther: z.string(),
  PreviousProcessorStatements: z.string(),
  DepositRequired: z.string(),
  DepositRequiredPercentage: z.number(),
  TimeFrameDeliveryDays: z.string(),
  MobileApplication: z.string(),
  MobileApplicationList: z.string(),
  // Flax Rate
  McQualifiedCreditDiscountFee: z.number(),
  McQualifiedCreditTransactionFee: z.number(),
  McQualifiedNonPinDebitDiscountFee: z.number(),
  McQualifiedNonPinDebitTransactionFee: z.number(),
  VisaQualCreditDiscountFee: z.number(),
  VisaQualCreditTransactionFee: z.number(),
  VisaQualNonPinDebitDiscountFee: z.number(),
  VisaQualNonPinDebitTransactionFee: z.number(),
  AmericanExpressQualCreditDiscountFee: z.number(),
  AmericanExpressQualCreditTransactionFee: z.number(),
  DiscoverNetQualCreditDiscountFee: z.number(),
  DiscoverNetQualCreditTransactionFee: z.number(),
  DiscoverNetQualNonPinDebitDiscountFee: z.number(),
  DiscoverNetQualNonPinDebitTransactionFee: z.number(),
  PayPalQualCredityDiscountFee: z.number(),
  PayPalQualCredityTransactionFee: z.number(),
  SwipedDiscountFee: z.number(),
  SwipedTransactionFee: z.number(),
  NonSwipedDiscountFee: z.number(),
  NonSwipedTransactionFee: z.number(),
  PinLessDiscountFee: z.number(),
  PinLessDebitTransactionFee: z.number(),
  PinLessDebitDenialTransactionFee: z.number(),
  // Flat Rate Fees
  Nameless: z.number(),
  ChargebackProcessing: z.number(),
  AmexChargebackFee: z.number(),
  DiscoverChargebackFee: z.number(),
  RetrievalFee: z.number(),
  AmexChargebackRetrievalFee: z.number(),
  DiscoverRetrievalFee: z.number(),
  VisaMcDiscChargebackRetrievalFee: z.number(),
  BatchSettlementFee: z.number(),
  TinTfnBlankInvalidFee: z.number(),
  // Billed Monthly Fees
  FeePerTid: z.number(),
  OfTids: z.number(),
  Total: z.number(),
  MonthlyServiceFee: z.number(),
  AchRejectFee: z.number(),
  MinimumProcessingFee: z.number(),
  AnnualMembershipFee: z.number(),
  Nameless2: z.number(),
  // Authorization and AVS Fees
  McAuthFee: z.number(),
  VisaAuthFee: z.number(),
  DiscoverAuthFee: z.number(),
  AmericanExpressAuthFee: z.number(),
});


// ----------------
// This is for the OMAHA PROCESSING APPLICATION
// Merchant Detail TAB form
export const merchantInformationOmahaSchema = z.object({
  // DBA Information Section
  UseInterchangeWavit: z.boolean(),
  ClientsBusinessName: requiredString,
  Phone: requiredString,
  CustomerServicePhone: z.string(),
  Fax: z.string(),
  EmailStatements: requiredString,
  CustomerServiceEmail: z.string(),
  AlsoPrintAndMailStatements: z.boolean(),
  // DBA Address Section
  Street: requiredString,
  AddressSearchBar: requiredString,
  City: requiredString,
  State: requiredString,
  PostalCode: requiredString,
  // LEGAL CONTACT INFORMATION
  UseBusinessAddressDBA: z.boolean(),
  LegalContactName: requiredString,
  LegalContactFax: z.string(),
  LegalContactPhone: requiredString,
  LegalContactEmail: requiredString,
  // LEGAL INFORMATION
  LegalBusinessName: requiredString,
  LegalStartDate: z.date(),
  LegalBusinessWebsite: z.string(),
  LegalAddress: requiredString,
  LegalCity: requiredString,
  LegalState: requiredString,
  LegalPostalCode: requiredString,
});

// FINANCIAL INFORMATION TAB FORM
export const financialInformationOmahaSchema = z.object({
  // Bank Information
  BankName: requiredString,
  BankRouting: requiredNumber,
  BankAccounting: requiredNumber,
  // Tax Information
  EinSsn: z.string(),
  SICMCC: z.string(),
  TypeOfGoods: requiredString,
  BusinessType: z.string(),
  // Sales
  HighTicket: requiredNumber,
  AverageTicketsSales: requiredNumber,
  AnnualVisaMc: requiredNumber,
  AnnualAmex: requiredNumber,
  AnnualDiscover: requiredNumber,
  AnnualTotalSales: requiredNumber,
  // Settings
  EarlyTerminationFee: requiredNumber,
  CashDiscount: z.number(),
  Discount: z.number(),
  MonthlyStatementFee: requiredNumber,
  // Sales Dustribution
  StoreFrontSwipe: requiredNumber,
  Internet: requiredNumber,
  MailOrder: requiredNumber,
  Telephone: requiredNumber,
});

// MERCHANT OWNER
export const merchantOwnerOmahaSchema = z.object({
  // Has merchant/owner/principals ever filed for bankruptcy
  HasFiledForBankruptcy: z.boolean(),
  Account: z.number(),
});

// PROGRAMMING REQUEST FORM
export const programmingRequestOmahaSchema = z.object({
  // Account Information
  SalesRepresentative: z.string(),
  SalesPhoneNumber: z.string(),
  // POS Provider Name
  FileBuildVarOnly: z.boolean(),
  PosProviderName: z.string(),
  // WAVIit App Only
  Invoicing: z.boolean(),
  InvoicingNumberRequired: z.boolean(),
  QrScan: z.boolean(),
  // Connection Type
  EthernetInternet: z.boolean(),
  WirelessSim: z.boolean(),
  // Clover Only
  NeedMenuOrInventory: z.boolean(),
  HowCashDiscountApplied: z.string(),
  // File build Information
  BuildType: z.string(),
  Pbx: z.boolean(),
  Wavit: z.boolean(),
  PinDebit: z.boolean(),
  AutoClose: z.boolean(),
  AutoCloseTime: z.string(),
  TipLine: z.boolean(),
  TipLineType: z.string(),
  Server: z.boolean(),
  SuggestedTipPercentages: z.string(),
  SalesTax: z.number(),
  // Shipping Information
  ShipTo: z.string(),
  ShipName: z.string(),
  ShipPriority: z.string(),
  UseExistingAddress: z.string(),
  ShipAddress: z.string(),
  ShipCity: z.string(),
  ShipState: z.string(),
  ShipPostalCode: z.string(),
  ShipPhone: z.string(),
  ShipEmail: z.string(),
  // Billing Information
  BillTo: z.string(),
});

// OMAHA DETAILS FORM
export const detailsOmahaSchema = z.object({
  // Location and Distribution - Additional credit check
  Zone: z.string(),
  Location: z.string(),
  HowManyEmployees: z.number(),
  RegisterTerminals: z.number(),
  ProperLicenseVisible: z.number(),
  Explanation: z.string(),
  MerchantNameDisplayed: z.string(),
  FloorsOccupiedBy: z.string(),
  MerchantOccupies: z.string(),
  MerchantOccupiesOther: z.string(),
  FloorsLevels: z.string(),
  SquareFootage: z.string(),
  DepositRequired: z.boolean(),
  DepositPercentage: z.number(), 
  // Information
  ReturnPolicy: z.string(),
  RefundPolicy: z.string(),
  RefundPolicySpecific: z.string(),
  DaysToRefund: z.number(),
  AdvCatalog: z.string(),
  AdvBrochure: z.string(),
  AdvDirectMail: z.string(),
  AdvTvRadio: z.string(),
  AdvInternet: z.string(),
  AdvPhone: z.string(),
  AdvNews: z.string(),
  AdvOther: z.string(),
  PreviousProcessor: z.string(),
  ReasonForLeaving: z.string(),
  ReasonForLeavingOther: z.string(),
  MobileApplication: z.string(),
  MobileApplicationList: z.string(),
  // Miscellaneous Fees
  MonthlyStatementFee: z.number(),
  // TIN/TFN & Regulatory Product Fees
  TinTfnInvalid: z.number(),
  WebsiteUsage: z.number(),
  // Service Fee
  DuesAndAssessments: z.boolean(),
  MastercardQualCredit: z.number(),
  MastercardQualDebit: z.number(),
  VisaQualCredit: z.number(),
  VisaQualDebit: z.number(),
  DiscoverNetPaypalQualCredit: z.number(),
  DiscoverNetPaypalQualDebit: z.number(),
  AmExQualCredit: z.number(),
  // Authorization & Capture Transaction Fees
  MastercardVisaAuthCaptureFee: z.number(),
  DiscoverNetPayPalAuthCaptureFee: z.number(),
  AmexOpBlueAuthCaptureFee: z.number(),
});

// -----------------------------------
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

export const urlKeyRemovalParams = ({params, keysToRemove}: {params: string, keysToRemove: string[]}) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname, query: currentUrl
    },
    {
      skipNull: true
    }
  )
}

export const marketingListSchema = z.object({
  Table: z.string(),
});