import { DataTypes, SidebarLink } from "@/types";
import {
  Store,
  FileDown,
  UserCog,
  User,
  Barcode,
  CpuIcon,
  BadgeDollarSign,
  Calendar,
  FileText,
  Drill,
  Headset,
  HandPlatter,
  Home,
  GlobeLock,
  User2,
  CircleDollarSign,
  KeyRound,
  Laptop,
  ArrowUp,
  Info,
  DollarSign,
  Receipt,
  MoveRight,
  MonitorSmartphone,
  PackagePlus,
  ClipboardMinus,
  HandCoins,
  Upload,
  Files,
  MessageSquareWarning,
  Search,
  BellPlus,
  CheckCheck,
  User2Icon,
  UsersRound,
  TableProperties,
  Calculator,
  ClipboardPenLine,
  File,
  MonitorDot,
  BookUser,
  UserRoundCog,
  Tags,
  SquareCheckBig,
  SquareActivity,
  FilesIcon,
  TrendingUp,
  FileCog,
  CreditCard,
  ArrowRightLeft,
  Settings,
  MapPin,
  HandHelping ,
  FilePenLine,
} from "lucide-react";
import { z } from "zod";
import { FormData } from "@/types/types";

export const themes = [
  { value: "light", label: "Light", icon: "icon/sun.svg" },
  { value: "dark", label: "Dark", icon: "icon/moon.svg" },
  { value: "system", label: "System", icon: "icon/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    icon: Home,
    route: "/",
    desc: "Home page",
    label: "Home",
    name: "home",
    options: [],
  },
  {
    icon: Store,
    route: "/merchant",
    desc: "Find MID, Agent, and Processor.",
    label: "Merchant",
    name: "merchant",
    options: ["MID", "Agent", "Processor"],
  },
  {
    icon: Drill,
    route: "/equipment",
    desc: "Equipments",
    label: "Equipment",
    name: "equipment",
    options: [], 
  },
  {
    icon: Headset,
    route: "/agent",
    desc: "Agents",
    label: "Agent",
    name: "agent/",
    options: [],
  },
  {
    icon: BadgeDollarSign,
    route: "/financial",
    desc: "Financial",
    label: "Financial",
    name: "financial",
    options: [],
  },
  {
    icon: HandPlatter,
    route: "/services",
    desc: "Services",
    label: "Services",
    name: "services",
    options: [],
  },
  {
    icon: FileDown,
    route: "/fsp",
    desc: "Report the FSP",
    label: "FSP",
    name: "fsp",
    options: ["FSP"],
  },
  {
    icon: UserCog,
    route: "/admin",
    desc: "Admin panel",
    label: "Admin",
    name: "admin",
    options: ["Admin"],
  },

  {
    icon: GlobeLock,
    route: "/boarding",
    desc: "Boarding Tool",
    label: "Boarding",
    name: "boarding",
    options: ["Admin"],
  },
  {
    icon: HandHelping,
    route: "/supportTickets",
    desc: "Support Ticket",
    label: "Support Ticket",
    name: "supportTickets",
    options: ["Admin"],
  },
 

];

export const profileLinks = [
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Tasks",
    url: "/tasks",
  },
  {
    title: "Agent",
    url: "/agentDetails",
  },
  {
    title: "Logout",
    url: "/logout",
  },
];

export const merchantTabs = [
  {
    icons: Barcode,
    title: "MID",
    value: "mid",
  },
  {
    icons: User,
    title: "Agent",
    value: "agent",
  },
  {
    icons: CpuIcon,
    title: "Processor",
    value: "processor",
  },
  {
    icons: Calendar,
    title: "Created Date",
    value: "created_at",
  },
  {
    icons: FileText,
    title: "Reports",
    value: "reports",
  },
];

export const merchantMainTabs = [
  {
    title: "Find",
    value: "find",
    route: "/merchant",
  },
  {
    title: "Summary",
    value: "summary",
    route: "/merchant/summary",
  },
  {
    title: "Information",
    value: "information",
    route: "/merchant/information/info",
  },
  {
    title: "Reports",
    value: "reports",
    route: "/merchant/reports",
  },
];

export const serviceMainTabs = [
  {
    id: 1,
    title: "Funders",
    value: "funders",
    path: "/services",
  },
  {
    id: 2,
    title: "Merchant",
    value: "merchant",
    path: "/services/merchant",
  },
  {
    id: 3,
    title: "Splits",
    value: "splits",
    path: "/services/splits",
  },
  {
    id: 4,
    title: "Remittances",
    value: "remittances",
    path: "/services/remittances",
  },
  {
    id: 5,
    title: "Reports",
    value: "reports",
    path: "/services/reports",
  },
];

export const financialMainTabs = [
  {
    id: 1,
    title: "Find",
    value: "find",
    path: "/financial",
  },
  {
    id: 2,
    title: "Add Entry",
    value: "addEntry",
    path: "/financial/addEntry",
  },
  {
    id: 3,
    title: "Portal Recon",
    value: "find",
    path: "/financial/portalRecon",
  },
  {
    id: 4,
    title: "Import Data",
    value: "importData",
    path: "/financial/importData",
  },
  {
    id: 5,
    title: "Vendors",
    value: "vendors",
    path: "/financial/vendors",
  },
];

export const tabItems = [
  {
    id: "1",
    title: "Information",
    value: "information",
    route: "/merchant/information/info",
    icon: "/infoTabs/info-item.svg",
  },
  {
    id: "2",
    title: "Access One API",
    value: "accessoneapi",
    route: "/merchant/information/accessoneapi",
    icon: "/infoTabs/api-item.svg",
  },
  {
    id: "3",
    title: "Agent / Lead Source",
    value: "agentleadsource",
    route: "/merchant/information/agentleadsource",
    icon: "/infoTabs/agent-item.svg",
  },
  {
    id: "4",
    title: "Account Status",
    value: "accountstatus",
    route: "/merchant/information/accountstatus",
    icon: "/infoTabs/account-item.svg",
  },
  {
    id: "5",
    title: "Call Log / Tasks",
    value: "calllog",
    route: "/merchant/information/calllog",
    icon: "/infoTabs/call-item.svg",
  },
  {
    id: "6",
    title: "ZenDesk(1)",
    value: "zendesk",
    route: "/merchant/information/zendesk",
    icon: "/infoTabs/desk-item.svg",
  },
  {
    id: "7",
    title: "Leasing",
    value: "leasing",
    route: "/merchant/information/leasing",
    icon: "/infoTabs/info-item.svg",
  },
  {
    id: "8",
    title: "Equipment",
    value: "equipment",
    route: "/merchant/information/equipment",
    icon: "/infoTabs/equipment-item.svg",
  },
  {
    id: "9",
    title: "Onboard Checklist",
    value: "onboardchecklist",
    route: "/merchant/information/onboardchecklist",
    icon: "/infoTabs/onboarding-item.svg",
  },
  {
    id: "10",
    title: "Documents",
    value: "documents",
    route: "/merchant/information/documents",
    icon: "/infoTabs/doc-item.svg",
  },
  {
    id: "11",
    title: "Merch Fees / Proc",
    value: "merchfees",
    route: "/merchant/information/merchfees",
    icon: "/infoTabs/fees-item.svg",
  },
  {
    id: "12",
    title: "Software Install",
    value: "softwareinstall",
    route: "/merchant/information/softwareinstall",
    icon: "/infoTabs/software-item.svg",
  },
  {
    id: "13",
    title: "Reject / Collections",
    value: "rejectcollections",
    route: "/merchant/information/rejectcollections",
    icon: "/infoTabs/reject-item.svg",
  },
  {
    id: "14",
    title: "Residuals",
    value: "residuals",
    route: "/merchant/information/residuals",
    icon: "/infoTabs/residuals-item.svg",
  },
  {
    id: "15",
    title: "WAVit Info",
    value: "wavitInfo",
    route: "/merchant/information/wavitinfo",
    icon: "/infoTabs/info-item.svg",
  },
  {
    id: "16",
    title: "BOTWest",
    value: "botWest",
    route: "/merchant/information/botwest",
    icon: "/infoTabs/bank-item.svg",
  },
];
export const onboardCheckListTable = [
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
  {
    checkbox: "",
    ID: "123654789",
    Description: "WAVit Document",
    ID2: "12356",
    Documents: "file.pdf",
  },
];

/**
 * This employees data is for mock-up data only!
 */
export const employees: DataTypes[] = [
  {
    EmployeeID: 1,
    FullName: "Nancy Davolio",
    Address: "507 - 20th Ave. E.\r\nApt. 2A",
    City: "Seattle",
    Region: "WA",
    PostalCode: "98122",
    Country: "USA",
    HomePhone: "(206) 555-9857",
    Position: "Sales Representative",
    BirthDate: new Date("1968-12-08T00:00:00.000Z"),
  },
  {
    EmployeeID: 2,
    FullName: "Andrew Fuller",
    Address: "908 W. Capital Way",
    City: "Tacoma",
    Region: "WA",
    PostalCode: "98401",
    Country: "USA",
    HomePhone: "(206) 555-9482",
    Position: "Vice President, Sales",
    BirthDate: new Date("1972-02-19T00:00:00.000Z"),
  },
  {
    EmployeeID: 3,
    FullName: "Janet Leverling",
    Address: "722 Moss Bay Blvd.",
    City: "Kirkland",
    Region: "WA",
    PostalCode: "98033",
    Country: "USA",
    HomePhone: "(206) 555-3412",
    Position: "Sales Representative",
    BirthDate: new Date("1983-08-30T00:00:00.000Z"),
  },
  {
    EmployeeID: 4,
    FullName: "Margaret Peacock",
    Address: "4110 Old Redmond Rd.",
    City: "Redmond",
    Region: "WA",
    PostalCode: "98052",
    Country: "USA",
    HomePhone: "(206) 555-8122",
    Position: "Sales Representative",
    BirthDate: new Date("1980-09-19T00:00:00.000Z"),
  },
  {
    EmployeeID: 5,
    FullName: "Steven Buchanan",
    Address: "14 Garrett Hill",
    City: "London",
    Region: "",
    PostalCode: "SW1 8JR",
    Country: "UK",
    HomePhone: "(71) 555-4848",
    Position: "Sales Manager",
    BirthDate: new Date("1966-03-04T00:00:00.000Z"),
  },
  {
    EmployeeID: 6,
    FullName: "Michael Suyama",
    Address: "Coventry House\r\nMiner Rd.",
    City: "London",
    Region: "",
    PostalCode: "EC2 7JR",
    Country: "UK",
    HomePhone: "(71) 555-7773",
    Position: "Sales Representative",
    BirthDate: new Date("1963-07-02T00:00:00.000Z"),
  },
  {
    EmployeeID: 7,
    FullName: "Robert King",
    Address: "Edgeham Hollow\r\nWinchester Way",
    City: "London",
    Region: "",
    PostalCode: "RG1 9SP",
    Country: "UK",
    HomePhone: "(71) 555-5598",
    Position: "Sales Representative",
    BirthDate: new Date("1984-05-29T00:00:00.000Z"),
  },
  {
    EmployeeID: 8,
    FullName: "Laura Callahan",
    Address: "4726 - 11th Ave. N.E.",
    City: "Seattle",
    Region: "WA",
    PostalCode: "98105",
    Country: "USA",
    HomePhone: "(206) 555-1189",
    Position: "Inside Sales Coordinator",
    BirthDate: new Date("1988-01-09T00:00:00.000Z"),
  },
  {
    EmployeeID: 9,
    FullName: "Anne Dodsworth",
    Address: "7 Houndstooth Rd.",
    City: "London",
    Region: "",
    PostalCode: "WG2 7LT",
    Country: "UK",
    HomePhone: "(71) 555-4444",
    Position: "Sales Representative",
    BirthDate: new Date("1974-01-27T00:00:00.000Z"),
  },
  {
    EmployeeID: 10,
    FullName: "Tim Lee",
    Address: "123 Maple St.",
    City: "Dallas",
    Region: "TX",
    PostalCode: "75201",
    Country: "USA",
    HomePhone: "(214) 555-7890",
    Position: "Sales Manager",
    BirthDate: new Date("1976-11-10T00:00:00.000Z"),
  },
];

export const equipmentList1 = [
  {
    id: 1,
    title: "New",
    value: "closed",
  },
  {
    id: 2,
    title: "Returned/Used",
    value: "returnedUsed",
  },
  {
    id: 3,
    title: "Returned/Junk",
    value: "returnedJunk",
  },
  {
    id: 4,
    title: "Returned to Manufactor",
    value: "returnedToManufactor",
  },
];

export const funderList: DataTypes[] = [
  {
    funderId: 1,
    funderName: "Funder One",
    contactName: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
  },
  {
    funderId: 2,
    funderName: "Funder Two",
    contactName: "Jane Smith",
    phone: "987-654-3210",
    email: "jane.smith@example.com",
  },
  {
    funderId: 3,
    funderName: "Funder Three",
    contactName: "Bob Johnson",
    phone: "555-123-4567",
    email: "bob.johnson@example.com",
  },
  {
    funderId: 4,
    funderName: "Funder Four",
    contactName: "Alice Brown",
    phone: "111-222-3333",
    email: "alice.brown@example.com",
  },
  {
    funderId: 5,
    funderName: "Funder Five",
    contactName: "Mike Davis",
    phone: "444-555-6666",
    email: "mike.davis@example.com",
  },
  {
    funderId: 6,
    funderName: "Funder Six",
    contactName: "Emily Taylor",
    phone: "777-888-9999",
    email: "emily.taylor@example.com",
  },
  {
    funderId: 7,
    funderName: "Funder Seven",
    contactName: "Kevin White",
    phone: "222-333-4444",
    email: "kevin.white@example.com",
  },
  {
    funderId: 8,
    funderName: "Funder Eight",
    contactName: "Sarah Lee",
    phone: "666-777-8888",
    email: "sarah.lee@example.com",
  },
  {
    funderId: 9,
    funderName: "Funder Nine",
    contactName: "David Hall",
    phone: "999-000-1111",
    email: "david.hall@example.com",
  },
  {
    funderId: 10,
    funderName: "Funder Ten",
    contactName: "Lisa Nguyen",
    phone: "333-444-5555",
    email: "lisa.nguyen@example.com",
  },
];

export const entryData: DataTypes[] = [
  {
    "P Vendor": "Vendor A",
    "Eff. Date": new Date("05-19-2024"),
    "Added By": "John Doe",
    "Added Date": new Date("05-19-2024"),
    Reference: "Ref-123",
    Description: "Purchase of office supplies",
    Amount: 150.5,
    "Routing#": "123456789",
    "Account #": "9876543210",
    "Date Approved": new Date("05-20-2024"),
    "Approved by": "Jane Smith",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor B",
    "Eff. Date": new Date("02-03-2024"),
    "Added By": "Alice Johnson",
    "Added Date": new Date("02-03-2024"),
    Reference: "Ref-456",
    Description: "Payment for marketing services",
    Amount: 5000.0,
    "Routing#": "987654321",
    "Account #": "1234567890",
    "Date Approved": new Date("02-05-2024"),
    "Approved by": "Bob Williams",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor C",
    "Eff. Date": new Date("11-28-2023"),
    "Added By": "Emily Davis",
    "Added Date": new Date("11-28-2023"),
    Reference: "Ref-789",
    Description: "Software license renewal",
    Amount: 1200.0,
    "Routing#": "567891234",
    "Account #": "9012345678",
    "Date Approved": new Date("12-01-2023"),
    "Approved by": "Michael Brown",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor D",
    "Eff. Date": new Date("08-15-2024"),
    "Added By": "Olivia Wilson",
    "Added Date": new Date("08-15-2024"),
    Reference: "Ref-101",
    Description: "Hardware purchase",
    Amount: 3500.75,
    "Routing#": "234567891",
    "Account #": "8901234567",
    "Date Approved": new Date("08-17-2024"),
    "Approved by": "Daniel Taylor",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor E",
    "Eff. Date": new Date("04-10-2024"),
    "Added By": "Sophia Anderson",
    "Added Date": new Date("04-10-2024"),
    Reference: "Ref-202",
    Description: "Travel expenses reimbursement",
    Amount: 850.2,
    "Routing#": "345678912",
    "Account #": "7890123456",
    "Date Approved": new Date("04-12-2024"),
    "Approved by": "James Martinez",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor F",
    "Eff. Date": new Date("09-03-2023"),
    "Added By": "Ava Thomas",
    "Added Date": new Date("09-03-2023"),
    Reference: "Ref-303",
    Description: "Office rent payment",
    Amount: 10000.0,
    "Routing#": "456789123",
    "Account #": "6789012345",
    "Date Approved": new Date("09-05-2023"),
    "Approved by": "William Hernandez",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor G",
    "Eff. Date": new Date("01-25-2024"),
    "Added By": "Isabella Jackson",
    "Added Date": new Date("01-25-2024"),
    Reference: "Ref-404",
    Description: "Utilities bill payment",
    Amount: 450.8,
    "Routing#": "567891234",
    "Account #": "5678901234",
    "Date Approved": new Date("01-27-2024"),
    "Approved by": "Ethan Garcia",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor H",
    "Eff. Date": new Date("07-12-2024"),
    "Added By": "Mia Lopez",
    "Added Date": new Date("07-12-2024"),
    Reference: "Ref-505",
    Description: "Consulting fees",
    Amount: 2500.0,
    "Routing#": "678912345",
    "Account #": "4567890123",
    "Date Approved": new Date("07-15-2024"),
    "Approved by": "Alexander Lee",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor I",
    "Eff. Date": new Date("03-18-2024"),
    "Added By": "Liam White",
    "Added Date": new Date("03-18-2024"),
    Reference: "Ref-606",
    Description: "Advertising campaign payment",
    Amount: 8000.5,
    "Routing#": "789123456",
    "Account #": "3456789012",
    "Date Approved": new Date("03-20-2024"),
    "Approved by": "Charlotte Harris",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor J",
    "Eff. Date": new Date("12-05-2023"),
    "Added By": "Noah Clark",
    "Added Date": new Date("12-05-2023"),
    Reference: "Ref-707",
    Description: "Legal services payment",
    Amount: 1500.0,
    "Routing#": "891234567",
    "Account #": "2345678901",
    "Date Approved": new Date("12-07-2023"),
    "Approved by": "Amelia Walker",
    "Proc. By": "System",
  },
  {
    "P Vendor": "Vendor K",
    "Eff. Date": new Date("06-22-2024"),
    "Added By": "Elijah Hall",
    "Added Date": new Date("06-22-2024"),
    Reference: "Ref-808",
    Description: "Maintenance services payment",
    Amount: 600.3,
    "Routing#": "912345678",
    "Account #": "1234567890",
    "Date Approved": new Date("06-25-2024"),
    "Approved by": "Harper Young",
    "Proc. By": "System",
  },
];

export const callLogsTasks = [
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
  {
    Id: 1235,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "General Notes",
    TaskDescription: "Note",
    Status: "Active",
    Notes: "Note about this event. Note about this event.",
  },
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
  {
    Id: 1235,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "General Notes",
    TaskDescription: "Note",
    Status: "Active",
    Notes: "Note about this event. Note about this event.",
  },
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
  {
    Id: 1235,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "General Notes",
    TaskDescription: "Note",
    Status: "Active",
    Notes: "Note about this event. Note about this event.",
  },
  {
    Id: 1234,
    CreatedDate: "MiCamp LLC",
    Username: "hsouza",
    Category: "Supplies Order",
    TaskDescription: "Note",
    Status: "Completed",
    Notes: "Note about this event.",
  },
];


export const supportTicketList = [
  {
    id: "1",
    title: "Merchant",
    value: "merchant",
  },
  {
    id: "2",
    title: "Merchant",
    value: "merchant",
  },
  {
    id: "3",
    title: "Merchant",
    value: "merchant",
  },
]


export const activityRecordList = [
  {
    id: 1,
    title: "Mark as Closed",
    value: "closed",
  },
  {
    id: 2,
    title: "Mark as Declined",
    value: "declined",
  },
  {
    id: 3,
    title: "Mark as Pending",
    value: "pending",
  },
  {
    id: 4,
    title: "Mark as Application Received",
    value: "applicationReceived",
  },
  {
    id: 5,
    title: "Mark as Withdrawn",
    value: "withdrawn",
  },
  {
    id: 6,
    title: "Application Submitted",
    value: "applicationSubmitted",
  },
  {
    id: 7,
    title: "Duplicate MID",
    value: "duplicateMID",
  },
  {
    id: 8,
    title: "Risk Related",
    value: "riskRelated",
  },
];

export const merchantProcessorList = [
  { id: 1, name: "First National Bank", value: "firstNationalBank" },
  { id: 2, name: "Global Trust Bank", value: "globalTrustBank" },
  { id: 3, name: "United Savings Bank", value: "unitedSavingsBank" },
  { id: 4, name: "Prime Financial Group", value: "primeFinancialGroup" },
  { id: 5, name: "Evergreen Bank", value: "evergreenBank" },
  { id: 6, name: "Central Credit Union", value: "centralCreditUnion" },
  { id: 7, name: "Liberty Bank", value: "libertyBank" },
  { id: 8, name: "Oakwood Financial", value: "oakwoodFinancial" },
  { id: 9, name: "Summit Bank", value: "summitBank" },
  { id: 10, name: "Pinnacle Bank", value: "pinnacleBank" },
];

export const rejectCollectionsTable1 = [
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.0,
    CreditAmount: 100.0,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.0,
    CreditAmount: 100.0,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.0,
    CreditAmount: 100.0,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
  {
    SuspenseDate: "07/26/2024",
    CreateDate: "07/23/2024",
    DebitAmount: 100.0,
    CreditAmount: 100.0,
    RejectCode: "RC654",
    FollowupDate: "07/27/2024",
    ResponseDescription: "Rejection based on the card.",
  },
];

export const rejectCollectionsTable2 = [
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Waiting",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Paid",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Cancelled",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
  {
    Type: "Example",
    RefDate: "07/26/2024",
    InitDate: "07/26/2024",
    ToCollect: "",
    Payments: "",
    Status: "Paid",
    NextDate: "07/29/2024",
    NextTask: "Note",
  },
];

export const accountStatusTable = [
  {
    Id: 1,
    Date: "04/12/2024",
    UserID: "hsouza",
    SQL: "Approved",
  },
  {
    Id: 2,
    Date: "04/05/2024",
    UserID: "hsouza",
    SQL: "Pending",
  },
  {
    Id: 3,
    Date: "04/05/2024",
    UserID: "hsouza",
    SQL: "Merchant Record created!",
  },
];

export const zenDeskTable = [
  {
    createdDate: "mm/dd/yyyy",
    from: "support@micamp.com",
    name: "Tony Stark",
    subject: "Some subject about it",
  },
  {
    createdDate: "mm/dd/yyyy",
    from: "support@micamp.com",
    name: "George Harrison",
    subject: "Some subject about it",
  },
  {
    createdDate: "mm/dd/yyyy",
    from: "support@micamp.com",
    name: "Jimmy Page",
    subject: "Some subject about it",
  },
];

export const leasingTable1: DataTypes[] = [
  {
    LeaseNumber: "",
    FundedDate: "",
    Funded$: "",
    TSR: "",
    BuybackDate: "",
    Buyback$: "",
    Score: "",
    Grade: "",
    TSR$: "",
    Term: "",
    Factor: "",
  },
];

export const leasingTable2: DataTypes[] = [
  {
    Order: "",
    OrderDate: "",
    Status: "",
  },
];

export const leasingTable3: DataTypes[] = [
  {
    MakeModel: "",
    Serial: "",
    Status: "",
  },
];

export const equipmentTable1 = [
  {
    StartDate: "07/26/2024",
    Status: "5 - Complete",
    $Cost: 235.0,
    $Pay: 235.0,
  },
  {
    StartDate: "07/26/2024",
    Status: "5 - Complete",
    $Cost: 235.0,
    $Pay: 235.0,
  },
  {
    StartDate: "07/26/2024",
    Status: "3 - In Progress",
    $Cost: 235.0,
    $Pay: 235.0,
  },
];
export const equipmentTable2 = [
  {
    Model: "Clover Flex LTE",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 235.0,
    $Sale: 235.0,
  },
  {
    Model: "Shipping Expedited Fee",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 30.0,
    $Sale: 30.0,
  },
  {
    Model: "Clover Flex LTE",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 235.0,
    $Sale: 235.0,
  },
  {
    Model: "Shipping Expedited Fee",
    SerialNumber: "C0450254TT320165184",
    Condition: "New",
    $Orig: 30.0,
    $Sale: 30.0,
  },
];
export const equipmentTable3 = [
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.0,
    AmountPaid: 235.0,
    Split: 235.0,
    Note: "Approved By myself",
  },
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.0,
    AmountPaid: 235.0,
    Split: 235.0,
    Note: "Approved By myself",
  },
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.0,
    AmountPaid: 235.0,
    Split: 235.0,
    Note: "Approved By myself",
  },
  {
    Method: "MiCamp--",
    InitialDate: "07/26/2024",
    AmountDue: 235.0,
    AmountPaid: 235.0,
    Split: 235.0,
    Note: "Approved By myself",
  },
];

export const equipmentData: DataTypes[] = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    model: "XPS 15",
    purchaseDate: new Date("2021-01-15"),
    warrantyExpiration: new Date("2023-01-15"),
    status: "Operational",
    location: "Office A",
    assignedTo: "John Doe",
    price: 1500,
    serialNumber: "SN12345678",
  },
  {
    id: 2,
    name: "Monitor",
    brand: "Samsung",
    model: "Odyssey G9",
    purchaseDate: new Date("2020-12-05"),
    warrantyExpiration: new Date("2022-12-05"),
    status: "Operational",
    location: "Office B",
    assignedTo: "Jane Smith",
    price: 1200,
    serialNumber: "SN87654321",
  },
  {
    id: 3,
    name: "Printer",
    brand: "HP",
    model: "LaserJet Pro",
    purchaseDate: new Date("2019-08-20"),
    warrantyExpiration: new Date("2021-08-20"),
    status: "Operational",
    location: "Office C",
    assignedTo: "Bob Johnson",
    price: 300,
    serialNumber: "SN11223344",
  },
  {
    id: 4,
    name: "Router",
    brand: "Cisco",
    model: "RV340",
    purchaseDate: new Date("2018-05-10"),
    warrantyExpiration: new Date("2021-05-10"),
    status: "Operational",
    location: "Server Room",
    assignedTo: "IT Dept",
    price: 600,
    serialNumber: "SN55667788",
  },
  {
    id: 5,
    name: "Server",
    brand: "IBM",
    model: "X3650 M5",
    purchaseDate: new Date("2017-02-14"),
    warrantyExpiration: new Date("2020-02-14"),
    status: "Operational",
    location: "Data Center",
    assignedTo: "IT Dept",
    price: 5000,
    serialNumber: "SN99887766",
  },
  {
    id: 6,
    name: "Keyboard",
    brand: "Logitech",
    model: "MX Keys",
    purchaseDate: new Date("2020-09-30"),
    warrantyExpiration: new Date("2021-09-30"),
    status: "Operational",
    location: "Office A",
    assignedTo: "John Doe",
    price: 100,
    serialNumber: "SN33221144",
  },
  {
    id: 7,
    name: "Mouse",
    brand: "Logitech",
    model: "MX Master 3",
    purchaseDate: new Date("2020-09-30"),
    warrantyExpiration: new Date("2021-09-30"),
    status: "Operational",
    location: "Office B",
    assignedTo: "Jane Smith",
    price: 100,
    serialNumber: "SN44332211",
  },
  {
    id: 8,
    name: "Tablet",
    brand: "Apple",
    model: "iPad Pro",
    purchaseDate: new Date("2019-11-20"),
    warrantyExpiration: new Date("2021-11-20"),
    status: "Operational",
    location: "Office D",
    assignedTo: "Alice Green",
    price: 900,
    serialNumber: "SN55443322",
  },
  {
    id: 9,
    name: "Projector",
    brand: "Epson",
    model: "EB-X05",
    purchaseDate: new Date("2018-07-25"),
    warrantyExpiration: new Date("2021-07-25"),
    status: "Operational",
    location: "Conference Room",
    assignedTo: "IT Dept",
    price: 400,
    serialNumber: "SN66554433",
  },
  {
    id: 10,
    name: "Camera",
    brand: "Canon",
    model: "EOS 80D",
    purchaseDate: new Date("2017-10-15"),
    warrantyExpiration: new Date("2019-10-15"),
    status: "Operational",
    location: "Office E",
    assignedTo: "David White",
    price: 1000,
    serialNumber: "SN77665544",
  },
  {
    id: 11,
    name: "Laptop",
    brand: "Apple",
    model: "MacBook Pro",
    purchaseDate: new Date("2021-02-10"),
    warrantyExpiration: new Date("2023-02-10"),
    status: "Operational",
    location: "Office F",
    assignedTo: "Eve Brown",
    price: 2000,
    serialNumber: "SN88776655",
  },
  {
    id: 12,
    name: "Smartphone",
    brand: "Samsung",
    model: "Galaxy S21",
    purchaseDate: new Date("2021-04-01"),
    warrantyExpiration: new Date("2022-04-01"),
    status: "Operational",
    location: "Office G",
    assignedTo: "Charlie Black",
    price: 800,
    serialNumber: "SN99887744",
  },
  {
    id: 13,
    name: "Switch",
    brand: "Netgear",
    model: "GS308",
    purchaseDate: new Date("2020-06-15"),
    warrantyExpiration: new Date("2021-06-15"),
    status: "Operational",
    location: "Server Room",
    assignedTo: "IT Dept",
    price: 50,
    serialNumber: "SN11224433",
  },
  {
    id: 14,
    name: "Docking Station",
    brand: "Dell",
    model: "WD19",
    purchaseDate: new Date("2019-03-30"),
    warrantyExpiration: new Date("2021-03-30"),
    status: "Operational",
    location: "Office H",
    assignedTo: "Ivy Blue",
    price: 200,
    serialNumber: "SN22334455",
  },
  {
    id: 15,
    name: "Speakers",
    brand: "Bose",
    model: "Companion 2",
    purchaseDate: new Date("2018-11-05"),
    warrantyExpiration: new Date("2020-11-05"),
    status: "Operational",
    location: "Office I",
    assignedTo: "Jack Orange",
    price: 150,
    serialNumber: "SN33445566",
  },
  {
    id: 16,
    name: "Laptop",
    brand: "Lenovo",
    model: "ThinkPad X1",
    purchaseDate: new Date("2021-08-19"),
    warrantyExpiration: new Date("2023-08-19"),
    status: "Operational",
    location: "Office J",
    assignedTo: "Grace Violet",
    price: 1700,
    serialNumber: "SN44556677",
  },
  {
    id: 17,
    name: "Headphones",
    brand: "Sony",
    model: "WH-1000XM4",
    purchaseDate: new Date("2020-12-15"),
    warrantyExpiration: new Date("2021-12-15"),
    status: "Operational",
    location: "Office K",
    assignedTo: "Ken Gold",
    price: 300,
    serialNumber: "SN55667788",
  },
  {
    id: 18,
    name: "Scanner",
    brand: "Brother",
    model: "ADS-2700W",
    purchaseDate: new Date("2019-05-25"),
    warrantyExpiration: new Date("2021-05-25"),
    status: "Operational",
    location: "Office L",
    assignedTo: "Helen Cyan",
    price: 400,
    serialNumber: "SN66778899",
  },
  {
    id: 19,
    name: "External HDD",
    brand: "Seagate",
    model: "Backup Plus",
    purchaseDate: new Date("2020-02-28"),
    warrantyExpiration: new Date("2021-02-28"),
    status: "Operational",
    location: "Server Room",
    assignedTo: "IT Dept",
    price: 100,
    serialNumber: "SN77889900",
  },
  {
    id: 20,
    name: "Projector",
    brand: "BenQ",
    model: "TK850",
    purchaseDate: new Date("2019-09-10"),
    warrantyExpiration: new Date("2021-09-10"),
    status: "Operational",
    location: "Conference Room",
    assignedTo: "IT Dept",
    price: 1200,
    serialNumber: "SN88990011",
  },
];

export const agentData: DataTypes[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-1234",
    department: "Sales",
    status: "Active",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1-555-5678",
    department: "Support",
    status: "Active",
    location: "Los Angeles",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+1-555-8765",
    department: "Marketing",
    status: "Inactive",
    location: "Chicago",
  },
  {
    id: 4,
    name: "Alice Green",
    email: "alice.green@example.com",
    phone: "+1-555-4321",
    department: "Development",
    status: "Active",
    location: "San Francisco",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "+1-555-6789",
    department: "HR",
    status: "Inactive",
    location: "Houston",
  },
  {
    id: 6,
    name: "Eve Black",
    email: "eve.black@example.com",
    phone: "+1-555-9876",
    department: "Sales",
    status: "Active",
    location: "Phoenix",
  },
  {
    id: 7,
    name: "David White",
    email: "david.white@example.com",
    phone: "+1-555-5432",
    department: "Support",
    status: "Inactive",
    location: "Philadelphia",
  },
  {
    id: 8,
    name: "Helen Blue",
    email: "helen.blue@example.com",
    phone: "+1-555-6543",
    department: "Marketing",
    status: "Active",
    location: "San Antonio",
  },
  {
    id: 9,
    name: "Ken Yellow",
    email: "ken.yellow@example.com",
    phone: "+1-555-3456",
    department: "Development",
    status: "Active",
    location: "Dallas",
  },
  {
    id: 10,
    name: "Grace Red",
    email: "grace.red@example.com",
    phone: "+1-555-2345",
    department: "HR",
    status: "Inactive",
    location: "San Diego",
  },
];

export const Orders: DataTypes[] = [
  {
    id: 1,
    customer: "Liam Johnson",
    email: "liam@example.com",
    type: "Sale",
    status: "Fulfilled",
    date: "2023-06-23",
    amount: "$250.00",
  },
  {
    id: 2,
    customer: "Emma Wilson",
    email: "emma@example.com",
    type: "Purchase",
    status: "Pending",
    date: "2023-06-24",
    amount: "$150.00",
  },
  {
    id: 3,
    customer: "Noah Brown",
    email: "noah@example.com",
    type: "Sale",
    status: "Shipped",
    date: "2023-06-25",
    amount: "$300.00",
  },
  {
    id: 4,
    customer: "Olivia Davis",
    email: "olivia@example.com",
    type: "Return",
    status: "Processed",
    date: "2023-06-26",
    amount: "$50.00",
  },
  {
    id: 5,
    customer: "James Miller",
    email: "james@example.com",
    type: "Purchase",
    status: "Cancelled",
    date: "2023-06-27",
    amount: "$200.00",
  },
  {
    id: 6,
    customer: "Sophia Martinez",
    email: "sophia@example.com",
    type: "Sale",
    status: "Denied",
    date: "2023-06-28",
    amount: "$400.00",
  },
  {
    id: 7,
    customer: "Benjamin Anderson",
    email: "benjamin@example.com",
    type: "Return",
    status: "Pending",
    date: "2023-06-29",
    amount: "$75.00",
  },
  {
    id: 8,
    customer: "Isabella Hernandez",
    email: "isabella@example.com",
    type: "Purchase",
    status: "Pending",
    date: "2023-06-30",
    amount: "$500.00",
  },
  {
    id: 9,
    customer: "Lucas Moore",
    email: "lucas@example.com",
    type: "Sale",
    status: "Success",
    date: "2023-07-01",
    amount: "$350.00",
  },
  {
    id: 10,
    customer: "Mia Taylor",
    email: "mia@example.com",
    type: "Purchase",
    status: "Success",
    date: "2023-07-02",
    amount: "$100.00",
  },
];

//
//
// formField for dynamic fields
export const AgentSetupFields = [
  {
    name: "exludeClosedAgents",
    label: "Exclude Closed Agents",
    type: "checkbox",
    defaultValue: "",
    validation: z.string().nonempty("Display Name is required"),
  },
  {
    name: "findAgent",
    label: "Find Agent",
    type: "select",
    options: ["Agent 1", "Agent 2", "Agent 3"],
    defaultValue: "",
    validation: z.string().nonempty("Display Name is required"),
  },
  {
    name: "displayName",
    label: "Display Name",
    type: "text",
    defaultValue: "",
    validation: z.string().nonempty("Display Name is required"),
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    defaultValue: "",
    validation: z.string().nonempty("First Name is required"),
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    defaultValue: "",
    validation: z.string().nonempty("Last Name is required"),
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    defaultValue: "",
    validation: z.string().email("Invalid email address"),
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["Active", "Inactive"],
    defaultValue: "",
    validation: z.string().nonempty("Status is required"),
  },
  {
    name: "startDate",
    label: "Start Date",
    type: "date",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "endDate",
    label: "End Date",
    type: "date",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "address1",
    label: "Address 1",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "address2",
    label: "Address 2",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "city",
    label: "City",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "state",
    label: "State",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "zip",
    label: "Zip",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "routing",
    label: "Routing #",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "account",
    label: "Account #",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "ssn",
    label: "SSN / EIN",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "payDay",
    label: "Pay Day",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "payGroup",
    label: "Pay Group",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "msoId",
    label: "MSO ID",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "reportType",
    label: "Report Type",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "payrollId",
    label: "Payroll ID",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "agentId",
    label: "Agent ID",
    type: "text",
    defaultValue: "",
    validation: z.string().optional(),
  },
  {
    name: "note",
    label: "Note",
    type: "textarea",
    defaultValue: "",
    validation: z.string().optional(),
  },
];

export const agentLeadSourceDataTable = [
  {
    SalesRep: "Liam Johnson",
    "Split %": "100%",
    Master: "XX",
    "A/M": "",
    "F/M": "",
    "A/A": "",
    R: "",
    "F/SM": "",
  },
  {
    SalesRep: "Eric Smith",
    "Split %": "4%",
    Master: "XX",
    "A/M": "",
    "F/M": "",
    "A/A": "",
    R: "",
    "F/SM": "",
  },
];

export const AgentSetupTabs = [
  {
    id: "1",
    title: "Residuals",
    value: "residuals",
  },
  {
    id: "2",
    title: "Customer Finance",
    value: "customerFinance",
  },
  {
    id: "3",
    title: "Equipment",
    value: "equipment",
  },
  {
    id: "4",
    title: "Documentation",
    value: "documentation",
  },
  {
    id: "6",
    title: "Email Lists",
    value: "emailLists",
  },
  {
    id: "7",
    title: "Adjustments",
    value: "adjustments",
  },
];

export const FindAgent = [
  { id: 1, name: "Average Joe", value: "avgJoe" },
  { id: 2, name: "Martin Joe", value: "marJoe" },
];

export const SubAgentOrChild = [
  { id: 1, name: "Testing1", value: "test1" },
  { id: 2, name: "Testing2", value: "test2" },
  { id: 3, name: "Testing3", value: "test3" },
];

export const summaryItems = [
  {
    title: "MID",
    value: "518991561321",
  },
  {
    title: "Legal Name",
    value: "MiCamp Solutions",
  },
  {
    title: "DBA",
    value: "Tony Stark",
  },
  {
    title: "Agent",
    value: "007 Somewhere Rd",
  },
  {
    title: "Processor",
    value: "First Data Omaha",
  },
  {
    title: "Costumer Service Email",
    value: "support@micamp.com",
  },
  {
    title: "Current Status",
    value: "Approved",
  },
  {
    title: "Notices",
    value: "No notices yet",
  },
  {
    title: "Product",
    value: "Some product",
  },
  {
    title: "ID",
    value: "3952",
  },
  {
    title: "WAVit Account",
    value: "PIN: 9847",
  },
];

// Merchant data

export const merchantStatusList = [
  { id: 1, name: "ACH Reject", value: "achReject" },
  { id: 2, name: "Agent Request", value: "agentRequest" },
  { id: 3, name: "Approved", value: "approved" },
  { id: 4, name: "Closed", value: "closed" },
  { id: 5, name: "Closed Location", value: "closedLocation" },
  { id: 6, name: "Corporate Change (new MID)", value: "corporateChangeNewMid" },
  { id: 7, name: "Cost of EMV equipment", value: "costOfEmvEquipment" },
  {
    id: 8,
    name: "Customer service related issue",
    value: "customerServiceRelatedIssue",
  },
  { id: 9, name: "Decline", value: "decline" },
  { id: 10, name: "Deleted", value: "deleted" },
  {
    id: 11,
    name: "Did not agree to terms during verbal",
    value: "didNotAgreeToTermsDuringVerbal",
  },
  { id: 12, name: "Duplicate MID", value: "duplicateMid" },
  { id: 13, name: "Equipment issues", value: "equipmentIssues" },
  {
    id: 14,
    name: "Equipment not compatible / Does not integrate",
    value: "equipmentNotCompatibleDoesNotIntegrate",
  },
  { id: 15, name: "Fees not disclosed by rep", value: "feesNotDisclosedByRep" },
  { id: 16, name: "Fees / Rates", value: "feesRates" },
  { id: 17, name: "Fulfilled contract", value: "fulfilledContract" },
  {
    id: 18,
    name: "Has not used services in months",
    value: "hasNotUsedServicesInMonths",
  },
  { id: 19, name: "Keying error/re-keyed", value: "keyingErrorReKeyed" },
  { id: 20, name: "Lease buyback", value: "leaseBuyback" },
  { id: 21, name: "Moved to North", value: "movedToNorth" },
  {
    id: 22,
    name: "Multiple MIDS - Only needs single",
    value: "multipleMidsOnlyNeedsSingle",
  },
  {
    id: 23,
    name: "Nacha Rejects (FD Closing)",
    value: "nachaRejectsFdClosing",
  },
  {
    id: 24,
    name: "Never authorized/never accepted credit cards",
    value: "neverAuthorizedNeverAcceptedCreditCards",
  },
  { id: 25, name: "New POS", value: "newPos" },
  {
    id: 26,
    name: "Not accepting credit cards",
    value: "notAcceptingCreditCards",
  },
  {
    id: 27,
    name: "Not approved for cash advance",
    value: "notApprovedForCashAdvance",
  },
  { id: 28, name: "Not Approved for Lease", value: "notApprovedForLease" },
  { id: 29, name: "Not using services", value: "notUsingServices" },
  { id: 30, name: "Other - Refer to Notes", value: "otherReferToNotes" },
  { id: 31, name: "Out of business", value: "outOfBusiness" },
  { id: 32, name: "Pending", value: "pending" },
  { id: 33, name: "Per Data One Request", value: "perDataOneRequest" },
  { id: 34, name: "Per Mandi", value: "perMandi" },
  { id: 35, name: "Per Micah Request", value: "perMicahRequest" },
  { id: 36, name: "Per NPA", value: "perNpa" },
  { id: 37, name: "Per Russ Request", value: "perRussRequest" },
  { id: 38, name: "Per Tiffany Request", value: "perTiffanyRequest" },
  { id: 39, name: "Per UPA", value: "perUpa" },
  { id: 40, name: "Received", value: "received" },
  { id: 41, name: "Risk Related Issue", value: "riskRelatedIssue" },
  { id: 42, name: "Seasonal business", value: "seasonalBusiness" },
  { id: 43, name: "Sold business", value: "soldBusiness" },
  { id: 44, name: "Submitted", value: "submitted" },
  { id: 45, name: "Switched ISO", value: "switchedIso" },
  { id: 46, name: "Withdrawn", value: "withdrawn" },
  { id: 47, name: "Withdran App", value: "withdranApp" },
];

export const salesRepList = [
  { id: 1, name: "John Smith", value: "johnSmith" },
  { id: 2, name: "Emily Johnson", value: "emilyJohnson" },
  { id: 3, name: "Michael Brown", value: "michaelBrown" },
  { id: 4, name: "Jessica Davis", value: "jessicaDavis" },
  { id: 5, name: "David Wilson", value: "davidWilson" },
  { id: 6, name: "Sarah Martinez", value: "sarahMartinez" },
  { id: 7, name: "James Taylor", value: "jamesTaylor" },
  { id: 8, name: "Laura Anderson", value: "lauraAnderson" },
  { id: 9, name: "Robert Thomas", value: "robertThomas" },
  { id: 10, name: "Sophia Lee", value: "sophiaLee" },
];

export const bankList = [
  { id: 1, name: "Bradesco", value: "bradesco" },
  { id: 2, name: "Chase Bank", value: "chase" },
  { id: 3, name: "Discover", value: "discover" },
  { id: 4, name: "American Express", value: "amex" },
];

export const leadSourceList = [
  { id: 1, name: "Innovatech Solutions", value: "innovatechSolutions" },
  { id: 2, name: "Blue Horizon Enterprises", value: "blueHorizonEnterprises" },
  { id: 3, name: "Quantum Dynamics", value: "quantumDynamics" },
  { id: 4, name: "Pinnacle Innovations", value: "pinnacleInnovations" },
  { id: 5, name: "Vertex Global", value: "vertexGlobal" },
  { id: 6, name: "Synergy Networks", value: "synergyNetworks" },
  { id: 7, name: "Apex Ventures", value: "apexVentures" },
  { id: 8, name: "NexGen Technologies", value: "nexGenTechnologies" },
  { id: 9, name: "Summit Strategies", value: "summitStrategies" },
  { id: 10, name: "Eclipse Enterprises", value: "eclipseEnterprises" },
];

export const splitNameList = [
  { id: 1, name: "Innovatech Solutions", value: "innovatechSolutions" },
  { id: 2, name: "Blue Horizon Enterprises", value: "blueHorizonEnterprises" },
];

export const deployByList = [
  { id: 1, name: "MiCamp Solutions", value: "micamp" },
  { id: 2, name: "Agent", value: "Agent" },
];

export const mccCode = [
  { id: 1, name: "American Airlines", value: "americanAirlines" },
  { id: 2, name: "Delta Air Lines", value: "deltaAirLines" },
  { id: 3, name: "United Airlines", value: "unitedAirlines" },
  { id: 4, name: "Southwest Airlines", value: "southwestAirlines" },
  { id: 5, name: "Alaska Airlines", value: "alaskaAirlines" },
  { id: 6, name: "JetBlue Airways", value: "jetBlueAirways" },
  { id: 7, name: "Frontier Airlines", value: "frontierAirlines" },
  { id: 8, name: "Spirit Airlines", value: "spiritAirlines" },
  { id: 9, name: "Allegiant Air", value: "allegiantAir" },
  { id: 10, name: "Hawaiian Airlines", value: "hawaiianAirlines" },
];

export const documentsTable: DataTypes[] = [
  {
    DocType: "Bank Statement",
    Historic: "Historic Field",
    DocName: "Statement.pdf",
    FileSize: "500 mb",
    UploadDateTime: new Date("03/11/2015 11:22 AM"),
  },
  {
    DocType: "Identification",
    Historic: "Historic Field",
    DocName: "ID.pdf",
    FileSize: "40 mb",
    UploadDateTime: new Date("08/12/2019 11:22 AM"),
  },
  {
    DocType: "Certification",
    Historic: "Historic Field",
    DocName: "Certification.pdf",
    FileSize: "751 mb",
    UploadDateTime: new Date("09/14/2017 11:22 AM"),
  },
  {
    DocType: "Leasing",
    Historic: "Historic Field",
    DocName: "Leasing.pdf",
    FileSize: "500 mb",
    UploadDateTime: new Date("01/01/2022 11:22 AM"),
  },
];

export const productFeeForm = [
  {
    id: 1,
    formName: "MerchantAnnual",
    title: "Merchant Annual",
    placeholder: "",
    type: "checkbox",
    value: "",
  },
  {
    id: 2,
    formName: "PciAnnual",
    title: "PCI Annual",
    placeholder: "",
    type: "checkbox",
    value: "",
  },
  {
    id: 3,
    formName: "PciMonthly",
    title: "PCI Monthly",
    placeholder: "",
    type: "checkbox",
    value: "",
  },
  {
    id: 4,
    formName: "RateIncreases",
    title: "Rate Increase",
    placeholder: "",
    type: "checkbox",
    value: "",
  },
];

export const amountForm = [
  {
    id: 1,
    formName: "AmountAnnual",
    title: "",
    placeholder: "",
    type: "input",
    value: "",
  },
  {
    id: 2,
    formName: "PciAmountAnnual",
    title: "",
    placeholder: "",
    type: "input",
    value: "",
  },
  {
    id: 3,
    formName: "PciAmountMonthly",
    title: "",
    placeholder: "",
    type: "input",
    value: "",
  },
];

export const billingMonthForm = [
  {
    id: 1,
    formName: "BillingMonthAnnual",
    title: "",
    placeholder: "",
    type: "selectbox",
    value: "",
  },
  {
    id: 2,
    formName: "PciBillingMonthAnnual",
    title: "",
    placeholder: "",
    type: "selectbox",
    value: "",
  },
];

export const statusNonBillingForm = [
  {
    id: 1,
    formName: "StatusNonBillingAnnual",
    title: "",
    placeholder: "",
    type: "selectbox",
    value: "",
  },
  {
    id: 2,
    formName: "PciStatusNonBillingAnnual",
    title: "",
    placeholder: "",
    type: "selectbox",
    value: "",
  },
  {
    id: 3,
    formName: "PciStatusNonBillingMonthly",
    title: "",
    placeholder: "",
    type: "selectbox",
    value: "",
  },
  {
    id: 4,
    formName: "RateStatusNonBilling",
    title: "",
    placeholder: "",
    type: "selectbox",
    value: "",
  },
];

export const merchResidualsTabs = [
  {
    id: "1",
    title: "Raw Data",
    value: "rawData",
    icon: FilesIcon,
  }, 
  {
    id: "2",
    title: "Raw Refunds",
    value: "rawRefunds",
    icon: HandCoins,
  },
  {
    id: "3",
    title: "Residual Payments",
    value: "residualPayments",
    icon: CreditCard,
  },
  {
    id: "4",
    title: "Account Analysis",
    value: "accountAnalysis",
    icon: TrendingUp,
  },
  {
    id: "5",
    title: "Enter Adjustments",
    value: "enterAdjustments",
    icon: FileCog,
  },
  {
    id: "6",
    title: "Calculate Residuals",
    value: "calculateResiduals",
    icon: Calculator,
  },
];

export const merchResidualPaymentsTable = [
  {
    DataMonth: "2024-08-12",
    PayMonth: "2024-08-12",
    Vol: 22.97,
    Trans: "0",
    Rev: 393.2,
    Exp: 0.0,
    NetInc: 393.2,
    Split: "22.00%",
    Adj: "0",
    Notes: " ",
  },
  {
    DataMonth: "2024-08-12",
    PayMonth: "2024-08-12",
    Vol: 22.97,
    Trans: "0",
    Rev: 393.2,
    Exp: 0.0,
    NetInc: 393.2,
    Split: "22.00%",
    Adj: "0",
    Notes: " ",
  },
  {
    DataMonth: "2024-08-12",
    PayMonth: "2024-08-12",
    Vol: 22.97,
    Trans: "0",
    Rev: 393.2,
    Exp: 0.0,
    NetInc: 393.2,
    Split: "22.00%",
    Adj: "0",
    Notes: " ",
  },
  {
    DataMonth: "2024-08-12",
    PayMonth: "2024-08-12",
    Vol: 22.97,
    Trans: "0",
    Rev: 393.2,
    Exp: 0.0,
    NetInc: 393.2,
    Split: "22.00%",
    Adj: "0",
    Notes: " ",
  },
  {
    DataMonth: "2024-08-12",
    PayMonth: "2024-08-12",
    Vol: 22.97,
    Trans: "0",
    Rev: 393.2,
    Exp: 0.0,
    NetInc: 393.2,
    Split: "22.00%",
    Adj: "0",
    Notes: " ",
  },
];
export const wavitInfoTabs = [
  {
    id: "1",
    title: "Transactions",
    value: "transactions",
    route: "/merchant/information/wavitinfo",
    icon:ArrowRightLeft,
  },
  {
    id: "2",
    title: "Settings",
    value: "settings",
    route: "/merchant/information/wavitinfo/settings",
    icon:Settings,
  },
];

export const wavitTransactionsTable = [
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Cash",
    Invoice: "101",
    Amount: 42.5,
    WAVit: 0.0,
    Total: 42.5,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.0,
    Tax2: 0.0,
    Porcentage: 0,
  },
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Cash",
    Invoice: "101",
    Amount: 42.5,
    WAVit: 0.0,
    Total: 42.5,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.0,
    Tax2: 0.0,
    Porcentage: 0,
  },
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Debit Card",
    Invoice: "101",
    Amount: 422.5,
    WAVit: 15.0,
    Total: 437.5,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.0,
    Tax2: 0.0,
    Porcentage: 0,
  },
  {
    DateTime: "07/29/2024 09:00AM",
    Type: "Credit Card",
    Invoice: "101",
    Amount: 31.55,
    WAVit: 1.4,
    Total: 42.5,
    CC: "Visa",
    Last4: "1234",
    NameOnCard: "No Name",
    AuthCode: "424242",
    Tax: 0.0,
    Tax2: 0.0,
    Porcentage: 0,
  },
];

export const wavitSettingsTable = [
  {
    Description: "Integrated",
    Value: "false",
  },
  {
    Description: "ByPass Integration",
    Value: "null",
  },
  {
    Description: "Bypass PIN",
    Value: "null",
  },
  {
    Description: "Integration Type",
    Value: "null",
  },
  {
    Description: "Subscription ID",
    Value: "null",
  },
  {
    Description: "Department Code",
    Value: "null",
  },
  {
    Description: "Enterprise Code",
    Value: "null",
  },
  {
    Description: "Company Number",
    Value: "null",
  },
  {
    Description: "Server Name",
    Value: "null",
  },
  {
    Description: "Transaction Type",
    Value: "Pre-Auth",
  },
  {
    Description: "Force Terms Acceptance",
    Value: "false",
  },
  {
    Description: "Terms and Conditions Address",
    Value: "null",
  },
  {
    Description: "Ask Manager Refund Override",
    Value: "true",
  },
  {
    Description: "Decline Partial Payments",
    Value: "false",
  },
];

export const newMerchantInfoForm = [
  {
    id: 1,
    title: "MID:",
    type: "input",
    placeholder: "",
    formName: "MID",
    value: "",
  },
  {
    id: 2,
    title: "Legal Name:",
    type: "input",
    placeholder: "",
    formName: "LegalName",
    value: "",
  },
  {
    id: 3,
    title: "DBA:",
    type: "input",
    placeholder: "",
    formName: "DBA",
    value: "",
  },
  {
    id: 4,
    title: "Phone:",
    type: "input",
    placeholder: "(___) ___-____",
    formName: "Phone",
    value: "",
  },
  {
    id: 5,
    title: "Status:",
    type: "input",
    placeholder: "Select a Status",
    formName: "Status",
    value: "",
    content: bankList,
  },
  {
    id: 6,
    title: "Approval:",
    type: "datePicker",
    placeholder: "Select a Date",
    formName: "Approval",
    value: "",
  },
  {
    id: 7,
    title: "Filter:",
    type: "input",
    placeholder: "",
    formName: "Filter",
    value: "",
  },
  {
    id: 8,
    title: "Processor:",
    type: "selectBox",
    placeholder: "",
    formName: "Processor",
    value: "",
    content: merchantProcessorList,
  },
  {
    id: 9,
    title: "Filter2:",
    type: "input",
    placeholder: "",
    formName: "Filter2",
    value: "",
  },
  {
    id: 10,
    title: "Agent ID:",
    type: "number",
    placeholder: "",
    formName: "AgentID",
    value: "",
  },
  {
    id: 11,
    title: "Sales Rep:",
    type: "selectbox",
    placeholder: "",
    formName: "SalesRep",
    value: "",
    content: salesRepList,
  },
  {
    id: 12,
    title: "Split:",
    type: "number",
    placeholder: "",
    formName: "Split",
    value: "",
  },
  {
    id: 13,
    title: "Split Name:",
    type: "selectbox",
    placeholder: "",
    formName: "SplitName",
    value: "",
    content: splitNameList,
  },
  {
    id: 14,
    title: "Split ID:",
    type: "number",
    placeholder: "",
    formName: "SplitID",
    value: "",
  },
  {
    id: 15,
    title: "Lead Source:",
    type: "selectbox",
    placeholder: "",
    formName: "LeadSource",
    value: "",
    content: leadSourceList,
  },
  {
    id: 16,
    title: "Split Lead:",
    type: "number",
    placeholder: "",
    formName: "SplitLead",
    value: "",
  },
  {
    id: 17,
    title: "Estimated Annual:",
    type: "number",
    placeholder: "",
    formName: "EstAnnual",
    value: "",
  },
  {
    id: 18,
    title: "Transactions:",
    type: "number",
    placeholder: "",
    formName: "Transactions",
    value: "",
  },
];

// AGENT DATA

export const agentMainTabs = [
  {
    title: "List",
    value: "list",
    route: "/agent",
  },
  {
    title: "Setup",
    value: "setup",
    route: "/agent/setup",
  },
  {
    title: "Reports",
    value: "reports",
    route: "/agent/reports",
  },
];

export const agentAdjustments = [
  {
    Date: "07/30/2024",
    MID: "",
    DBA: "",
    Type: "Residual Adjustment",
    Amount: 300.0,
    Notes: "Some notes about it.",
  },
  {
    Date: "07/30/2024",
    MID: "",
    DBA: "",
    Type: "Other",
    Amount: 1300.0,
    Notes: "Some notes about it.",
  },
  {
    Date: "07/30/2024",
    MID: "",
    DBA: "",
    Type: "Equipment",
    Amount: 13290.0,
    Notes: "Some notes about it.",
  },
  {
    Date: "07/30/2024",
    MID: "",
    DBA: "",
    Type: "Bonus",
    Amount: 42.0,
    Notes: "Some notes about it.",
  },
  {
    Date: "07/30/2024",
    MID: "",
    DBA: "",
    Type: "Residual Adjustment",
    Amount: 300.0,
    Notes: "Some notes about it.",
  },
];

export const agentEmailList = [
  {
    Name: "leovinci@gmail.com",
    Email: "Leonardo da Vinci",
  },
  {
    Name: "tony@stark.com",
    Email: "Tony Stark",
  },
  {
    Name: "support@micamp.com",
    Email: "Micamp Support",
  },
  {
    Name: "Joe@gmail.com",
    Email: "Martin Joe",
  },
];

export const reportList1 = [
  {
    id: 1,
    title: "1018/8900",
    value: "1018/8900",
  },
  {
    id: 2,
    title: "1288/7300",
    value: "1288/7300",
  },
  {
    id: 3,
    title: "1511/8800",
    value: "1511/8800",
  },
  {
    id: 4,
    title: "1559/4000",
    value: "1559/4000",
  },
  {
    id: 5,
    title: "1559/4100",
    value: "1559/4100",
  },
  {
    id: 6,
    title: "8563/9800",
    value: "8563/9800",
  },
  {
    id: 7,
    title: "8563/9900",
    value: "8563/9900",
  },
  {
    id: 8,
    title: "8600/0300",
    value: "8600/0300",
  },
  {
    id: 9,
    title: "8600/9700",
    value: "8600/9700",
  },
];

// EQUIPMENT DATA

export const equipmentMainTabs = [
  {
    title: "Equipment",
    value: "equipments",
    route: "/equipment",
  },
  {
    title: "Orders / Payments",
    value: "ordersPayments",
    route: "/equipment/ordersPayments",
  },
];

export const EquipmentTabs = [
  {
    id: "1",
    title: "Lookup",
    value: "lookup",
    icon:Search,
    
    
  },
  {
    id: "2",
    title: "Items",
    value: "items",
    icon:Files,
  },
  {
    id: "3",
    title: "Reports",
    value: "reports",
    icon:MessageSquareWarning,
  },
];

export const ModelSelectList = [
  {
    id: 1,
    title: "Clover Flex LTE (Gen 2)",
    value: "cloverFlexLteGen2",
  },
  {
    id: 2,
    title: "Clover Flex LTE (Gen 3)",
    value: "cloverFlexLteGen3",
  },
  {
    id: 3,
    title: "Clover Flex",
    value: "cloverFlex",
  },
  {
    id: 4,
    title: "Dejavoo Gen 1",
    value: "dejavooGen1",
  },
];
export const ConditionSelectList = [
  {
    id: 1,
    title: "New",
    value: "new",
  },
  {
    id: 2,
    title: "Used",
    value: "used",
  },
  {
    id: 3,
    title: "Refurbished",
    value: "refurbished",
  },
];

export const lookupForm = [
  {
    id: 1,
    title: "MID",
    type: "input",
    placeholder: "MID",
    formName: "MID",
    value: "",
  },
  {
    id: 2,
    title: "Order ID",
    type: "input",
    placeholder: "Order ID",
    formName: "OrderID",
    value: "",
  },
  {
    id: 3,
    title: "Serial #",
    type: "input",
    placeholder: "Serial #",
    formName: "Serial",
    value: "",
  },
  {
    id: 4,
    title: "Model",
    type: "selectBox",
    placeholder: "Select an option...",
    formName: "Model",
    value: "",
    content: ModelSelectList,
  },
  {
    id: 5,
    title: "Condition",
    type: "selectBox",
    placeholder: "Select a condition...",
    formName: "Condition",
    value: "",
    content: ConditionSelectList,
  },
  {
    id: 6,
    title: "Show Shelf Items",
    type: "checkbox",
    placeholder: "",
    formName: "ShelfItems",
    value: "",
  },
];

export const LookupTable: DataTypes[] = [
  {
    Model: "Clover Mobile with WiFi & 3G",
    Condition: "New",
    Serial: "SN12345678",
    MID: "1234567890",
    DBA: "MiCamp Solutions",
    Status: "4 - Shipped",
    Del: "N",
    Date: "08/02/2024",
  },
  {
    Model: "Clover Mobile with WiFi & 3G",
    Condition: "New",
    Serial: "SN12345678",
    MID: "1234567890",
    DBA: "MiCamp Solutions",
    Status: "4 - Shipped",
    Del: "N",
    Date: "08/02/2024",
  },
  {
    Model: "Clover Mobile with WiFi & 3G",
    Condition: "New",
    Serial: "SN12345678",
    MID: "1234567890",
    DBA: "MiCamp Solutions",
    Status: "4 - Shipped",
    Del: "N",
    Date: "08/02/2024",
  },
  {
    Model: "Clover Lite LTE (Gen 2)",
    Condition: "New",
    Serial: "SN12345678",
    MID: "1234567890",
    DBA: "MiCamp Solutions",
    Status: "4 - Shipped",
    Del: "N",
    Date: "08/02/2024",
  },
];

export const itemsForm = [
  {
    id: 1,
    title: "Model",
    type: "selectBox",
    placeholder: "Select a model...",
    formName: "Model",
    value: "",
    content: ModelSelectList,
  },
  {
    id: 2,
    title: "ID",
    type: "input",
    placeholder: "ID",
    formName: "Id",
    value: "",
  },
  {
    id: 3,
    title: "Description",
    type: "input",
    placeholder: "Description",
    formName: "Description",
    value: "",
  },
  {
    id: 4,
    title: "Alias",
    type: "input",
    placeholder: "Alias",
    formName: "Alias",
    value: "",
  },
  {
    id: 5,
    title: "Item Type",
    type: "selectBox",
    placeholder: "Select a type...",
    formName: "ItemType",
    value: "",
    content: ConditionSelectList,
  },
  {
    id: 6,
    title: "Style",
    type: "selectBox",
    placeholder: "Select a style...",
    formName: "Style",
    value: "",
    content: ConditionSelectList,
  },
  {
    id: 7,
    title: "Manufacturer",
    type: "selectBox",
    placeholder: "Select an Item...",
    formName: "Manufacturer",
    value: "",
    content: ConditionSelectList,
  },
  {
    id: 8,
    title: "ReorderQty",
    type: "input",
    placeholder: "Select an Item...",
    formName: "ReorderQty",
    value: "",
  },
  {
    id: 9,
    title: "Does item have a serial number?",
    type: "checkbox",
    placeholder: "",
    formName: "SerialNumber",
    value: "",
  },
  {
    id: 10,
    title: "Take Inventory of this Item",
    type: "checkbox",
    placeholder: "Select an Item...",
    formName: "TakeInventory",
    value: "",
  },
  {
    id: 11,
    title: "Physically Shippable",
    type: "checkbox",
    placeholder: "",
    formName: "PhysicallyShippable",
    value: "",
  },
];

export const serialList = [
  {
    id: 1,
    title: "SN123456782",
    value: "SN123456782",
  },
  {
    id: 2,
    title: "SN12345678",
    value: "SN12345678",
  },
  {
    id: 3,
    title: "SN123456",
    value: "SN123456",
  },
  {
    id: 4,
    title: "SN123456251",
    value: "SN123456251",
  },
];

export const sortByList = [
  {
    id: 1,
    title: "Condition",
    value: "condition",
  },
  {
    id: 2,
    title: "Date Added",
    value: "dateAdded",
  },
  {
    id: 3,
    title: "Serial #",
    value: "serial",
  },
];

export const ordersPaymentsTabs = [
  {
    id: "1",
    title: "Fill Orders",
    value: "fillOrders",
    icon: CheckCheck, 
  },
  {
    id: "2",
    title: "Recent Orders",
    value: "recentOrders",
    icon: BellPlus, 
  },
  {
    id: "3",
    title: "Reports",
    value: "reports",
    icon: MessageSquareWarning, 
  },
];

export const RecentOrderTable = [
  {
    DBA: "COFFEE SIP",
    Date: "08/05/2024",
    Status: "1 - In Process",
    MID: "321654987456",
    Order: "446851",
    Agent: "The Merchant Hub LLC",
    Tracking: "277561984651321",
  },
  {
    DBA: "SAMS SERVICE STATION",
    Date: "08/05/2024",
    Status: "5 - Completed",
    MID: "321654987456",
    Order: "446852",
    Agent: "Elevated Payments, LLC",
    Tracking: "3215649123184651",
  },
  {
    DBA: "COFFEE SIP",
    Date: "08/05/2024",
    Status: "1 - In Process",
    MID: "321654987456",
    Order: "446851",
    Agent: "The Merchant Hub LLC",
    Tracking: "277561984651321",
  },
  {
    DBA: "SAMS SERVICE STATION",
    Date: "08/05/2024",
    Status: "5 - Completed",
    MID: "321654987456",
    Order: "446852",
    Agent: "Elevated Payments, LLC",
    Tracking: "3215649123184651",
  },
  {
    DBA: "COFFEE SIP",
    Date: "08/05/2024",
    Status: "1 - In Process",
    MID: "321654987456",
    Order: "446851",
    Agent: "The Merchant Hub LLC",
    Tracking: "277561984651321",
  },
  {
    DBA: "SAMS SERVICE STATION",
    Date: "08/05/2024",
    Status: "5 - Completed",
    MID: "321654987456",
    Order: "446852",
    Agent: "Elevated Payments, LLC",
    Tracking: "3215649123184651",
  },
  {
    DBA: "COFFEE SIP",
    Date: "08/05/2024",
    Status: "1 - In Process",
    MID: "321654987456",
    Order: "446851",
    Agent: "The Merchant Hub LLC",
    Tracking: "277561984651321",
  },
  {
    DBA: "SAMS SERVICE STATION",
    Date: "08/05/2024",
    Status: "5 - Completed",
    MID: "321654987456",
    Order: "446852",
    Agent: "Elevated Payments, LLC",
    Tracking: "3215649123184651",
  },
];

// FSP DATA
export const FspCategoryList = [
  {
    id: 1,
    title: "Accounting",
    value: "accounting",
  },
  {
    id: 2,
    title: "Customer Service",
    value: "customerService",
  },
  {
    id: 3,
    title: "Risk Management",
    value: "RiskManagement",
  },
];

export const FspReportNameList = [
  {
    id: 1,
    title: "MerchRep",
    value: "merchRep",
  },
  {
    id: 2,
    title: "NoBatch7Days",
    value: "noBatch7Days",
  },
  {
    id: 3,
    title: "ZeroAuth",
    value: "ZeroAuth",
  },
];

export const fspForm = [
  {
    id: 1,
    title: "Category",
    type: "selectbox",
    placeholder: "Select a category",
    formName: "limitReportsToSpecificDate",
    value: "",
    content: "",
  },
  {
    id: 2,
    title: "Report Name",
    type: "selectbox",
    placeholder: "Select a name",
    formName: "ReportName",
    value: "",
    content: "",
  },
  {
    id: 3,
    title: "Use ",
    type: "selectbox",
    placeholder: "Select a name",
    formName: "ReportName",
    value: "",
    content: "",
  },
];
// ADMIN DATA

export const adminMainTabs = [
  {
    title: "Data Imports",
    value: "dataImports",
    route: "/admin",
  },
  {
    title: "Residuals",
    value: "residuals",
    route: "/admin/residuals",
  },
  {
    title: "Database",
    value: "database",
    route: "/admin/database",
  },
  {
    title: "Ad Hoc",
    value: "adHoc",
    route: "/admin/adHoc",
  },
  {
    title: "DB Operations",
    value: "dbOperations",
    route: "/admin/dbOperations",
  },
  {
    title: "User Admin",
    value: "userAdmin",
    route: "/admin/userAdmin",
  },
];

export const adminResidualsTabs = [
  {
    id: "1",
    title: "Calculate",
    value: "calculate",
    icon: Calculator,
  },
  {
    id: "2",
    title: "Adjustments",
    value: "adjustments",
    icon: ClipboardPenLine,
  },
  {
    id: "3",
    title: "Reports",
    value: "reports",
    icon: File,
  },
  {
    id: "4",
    title: "Display Residuals",
    value: "displayResiduals",
    icon: MonitorDot,
  },
];

export const thirdPartyForm = [
  {
    id: 1,
    title: "Processor",
    type: "selectBox",
    placeholder: "Select Processor",
    formName: "Processor",
    value: "",
    content: ModelSelectList,
  },
  {
    id: 2,
    title: "Calculate for individual MID",
    type: "input",
    placeholder: "Enter MID",
    formName: "MID",
    value: "",
  },
  {
    id: 3,
    title: "Residual Date",
    type: "date",
    placeholder: "",
    formName: "ResidualDate",
    value: "",
  },
  {
    id: 4,
    title: "Model",
    type: "checkbox",
    placeholder: "Calculate for all months after stated date",
    formName: "CalculateAllMonths",
    value: "",
  },
];

export const RolesListTable = [
  {
    id: 1234,
    role: "Admin",
    description: "System Admin",
    permission: 99,
  },
  {
    id: 1235,
    role: "User",
    description: "General Users",
    permission: 10,
  },
  {
    id: 1236,
    role: "Super User",
    description: "Development Team",
    permission: 100,
  },
];

export const DepartmentListTable = [
  {
    id: 4321,
    department: "Finance",
    description: "Finance Team",
    permission: 99,
  },
  {
    id: 4322,
    department: "Sales",
    description: "Sales Dept.",
    permission: 10,
  },
  {
    id: 4323,
    department: "Support",
    description: "Support Team",
    permission: 100,
  },
  {
    id: 4324,
    department: "Equipment",
    description: "Equipment/Shipping Team",
    permission: 100,
  },
  {
    id: 4325,
    department: "Development",
    description: "Dev Team",
    permission: 100,
  },
];

export const firstDataOmahaForm = [
  {
    id: 1,
    title: "Residual Date",
    type: "date",
    placeholder: "",
    formName: "ResidualDate",
    value: "",
  },
  {
    id: 2,
    title: "",
    type: "checkbox",
    placeholder: "Check if calculation already exists and pass over if it does",
    formName: "CheckCalculation",
    value: "",
  },
  {
    id: 3,
    title: "",
    type: "checkbox",
    placeholder: "Pass through Nutra chargebacks",
    formName: "NutraChargeBacks",
    value: "",
  },
  {
    id: 4,
    title: "",
    type: "checkbox",
    placeholder: "Do not query zero records",
    formName: "DoNotQueryZeroRecords",
    value: "",
  },
  {
    id: 5,
    title: "",
    type: "checkbox",
    placeholder: "Calculate Initial Pass Only",
    formName: "CalculateInitialPassOnly",
    value: "",
  },
  {
    id: 6,
    title: "",
    type: "checkbox",
    placeholder: "Skip Certain Sys/Prins",
    formName: "SkipSysPrins",
    value: "",
  },
  {
    id: 7,
    title: "From",
    type: "input",
    placeholder: "1",
    formName: "From",
    value: "",
  },
  {
    id: 8,
    title: "To",
    type: "input",
    placeholder: "99999",
    formName: "To",
    value: "",
  },
  {
    id: 9,
    title: "Calculate for Individual MID",
    type: "input",
    placeholder: "Submit MID in the 16 (trailing digit) format",
    formName: "CalculateIndividualMID",
    value: "",
  },
  {
    id: 10,
    title: "Status",
    type: "input",
    placeholder: "Enter the status",
    formName: "Status",
    value: "",
  },
];

export const adjustmentTable = [
  {
    Date: "08/05/2024",
    MID: "8763921873",
    DBA: "Example DBA",
    Agent: "Zero Fee Processing",
    Type: "Type 1",
    Amount: "$1.000,0",
    Notes: "Redirection",
  },
  {
    Date: "08/05/2024",
    MID: "8763921873",
    DBA: "Example DBA",
    Agent: "2G Financial LLC",
    Type: "Residual Adjustment",
    Amount: "$1.740,0",
    Notes: "Redirection",
  },
  {
    Date: "08/05/2024",
    MID: "8763921873",
    DBA: "Example DBA",
    Agent: "Zero Fee Processing",
    Type: "Residual Adjustment",
    Amount: "$2.501,0",
    Notes: "Redirection",
  },
  {
    Date: "08/05/2024",
    MID: "8763921873",
    DBA: "Example DBA",
    Agent: "Woody Enterp.",
    Type: "Type 1",
    Amount: "$2.240.0",
    Notes: "Redirection",
  },
];

export const displayResidualsTable = [
  {
    Id: 112,
    AgentName: "MiCamp Solutions 21st",
    YesPay: "1",
    Send: "0",
    Day: "21",
    Phys: "0",
    Group: "",
    RoutingNo: "654654645",
    AccountNo: "561123561651",
    Amount: "$ 1.250,00",
    RptType: "EXCEL",
    EmailList: "micamp@support.com",
  },
  {
    Id: 112,
    AgentName: "MiCamp Solutions 21st",
    YesPay: "1",
    Send: "0",
    Day: "21",
    Phys: "0",
    Group: "",
    RoutingNo: "654654645",
    AccountNo: "561123561651",
    Amount: "$ 1.250,00",
    RptType: "EXCEL",
    EmailList: "micamp@support.com",
  },
  {
    Id: 112,
    AgentName: "MiCamp Solutions 21st",
    YesPay: "1",
    Send: "0",
    Day: "21",
    Phys: "0",
    Group: "",
    RoutingNo: "654654645",
    AccountNo: "561123561651",
    Amount: "$ 1.250,00",
    RptType: "EXCEL",
    EmailList: "micamp@support.com",
  },
];

export const adminDatabaseTabs = [
  {
    id: "1",
    title: "Users",
    value: "users",
    icon: UsersRound,
  },
  {
    id: "2",
    title: "Audit",
    value: "audit",
    icon: SquareActivity,
  },
];

export const userAdminTabs = [
  {
    id: "1",
    title: "Users",
    value: "users",
    icon: User2Icon,
  },
  {
    id: "2",
    title: "Roles",
    value: "roles",
    icon: TableProperties,
  },
  {
    id: "3",
    title: "Departments",
    value: "departments",
    icon: UsersRound,
  },
];

export const usersTable = [
  {
    Id: 1,
    Name: "Alice W.",
    Email: "alice.w@example.com",
    Roles: "User",
    Group: "Maintenance",
    Confirmed: "Yes",
    Status: "No",
    LockUnlock: "Unlocked",
  },
  {
    Id: 2,
    Name: "Brian T.",
    Email: "brian.t@example.com",
    Roles: "Manager",
    Group: "Inventory",
    Confirmed: "No",
    Status: "Yes",
    LockUnlock: "Locked",
  },
  {
    Id: 3,
    Name: "Catherine L.",
    Email: "catherine.l@example.com",
    Roles: "Admin",
    Group: "Equipment",
    Confirmed: "Yes",
    Status: "Yes",
    LockUnlock: "Unlocked",
  },
  {
    Id: 4,
    Name: "David M.",
    Email: "david.m@example.com",
    Roles: "User",
    Group: "Logistics",
    Confirmed: "Yes",
    Status: "No",
    LockUnlock: "Locked",
  },
  {
    Id: 5,
    Name: "Eva J.",
    Email: "eva.j@example.com",
    Roles: "Manager",
    Group: "Sales",
    Confirmed: "No",
    Status: "Yes",
    LockUnlock: "Unlocked",
  },
  {
    Id: 6,
    Name: "Frank R.",
    Email: "frank.r@example.com",
    Roles: "Admin",
    Group: "Security",
    Confirmed: "Yes",
    Status: "Yes",
    LockUnlock: "Locked",
  },
  {
    Id: 7,
    Name: "Grace S.",
    Email: "grace.s@example.com",
    Roles: "User",
    Group: "Finance",
    Confirmed: "No",
    Status: "No",
    LockUnlock: "Unlocked",
  },
  {
    Id: 8,
    Name: "Henry D.",
    Email: "henry.d@example.com",
    Roles: "Manager",
    Group: "Support",
    Confirmed: "Yes",
    Status: "Yes",
    LockUnlock: "Locked",
  },
  {
    Id: 9,
    Name: "Isabella N.",
    Email: "isabella.n@example.com",
    Roles: "Admin",
    Group: "Training",
    Confirmed: "Yes",
    Status: "No",
    LockUnlock: "Unlocked",
  },
  {
    Id: 10,
    Name: "Jack P.",
    Email: "jack.p@example.com",
    Roles: "User",
    Group: "Research",
    Confirmed: "No",
    Status: "Yes",
    LockUnlock: "Locked",
  },
];

export const auditTypeSelectList = [
  {
    id: 1,
    title: "ACH Reject",
    value: "achReject",
  },
  {
    id: 2,
    title: "Agent",
    value: "agent",
  },
  {
    id: 3,
    title: "CF ACH Payment",
    value: "cfAchPayment",
  },
  {
    id: 4,
    title: "CF ACH Receipt",
    value: "cfAchReceipt",
  },
  {
    id: 5,
    title: "CF Bank Entry",
    value: "cfBankEntry",
  },
  {
    id: 6,
    title: "CF Vendor",
    value: "cfVendor",
  },
  {
    id: 7,
    title: "Equipment Detail",
    value: "equipmentDetail",
  },
  {
    id: 8,
    title: "Equipment Invoice",
    value: "equipmentInvoice",
  },
  {
    id: 9,
    title: "Equipment Model",
    value: "equipmentModel",
  },
  {
    id: 10,
    title: "Equipment Order",
    value: "equipmentOrder",
  },
  {
    id: 11,
    title: "Equipment Pay",
    value: "equipmentPay",
  },
  {
    id: 12,
    title: "Jarvis Document",
    value: "jarvisDocument",
  },
  {
    id: 13,
    title: "Merchant",
    value: "merchant",
  },
  {
    id: 14,
    title: "Merchant BOTW",
    value: "merchantbotw",
  },
  {
    id: 15,
    title: "Pay Detail",
    value: "payDetail",
  },
  {
    id: 16,
    title: "Print Shipping Label",
    value: "printShippingLabel",
  },
  {
    id: 17,
    title: "Reject Detail",
    value: "rejectDetail",
  },
  {
    id: 18,
    title: "Shipping Detail",
    value: "shippingDetail",
  },
  {
    id: 19,
    title: "Task Detail",
    value: "taskDetail",
  },
  {
    id: 20,
    title: "User Login",
    value: "userLogin",
  },
];

export const auditDetailsTable = [
  {
    AuditId: "1254",
    auditTypeSelectList: "",
    ItemId: "12",
    Date: "08/06/2024",
    UserName: "hcosta",
    TextAuditDescription: "text audit desc text audit desc text audit desc ",
  },
  {
    AuditId: "1254",
    auditTypeSelectList: "",
    ItemId: "12",
    Date: "08/06/2024",
    UserName: "hcosta",
    TextAuditDescription: "text audit desc text audit desc text audit desc ",
  },
  {
    AuditId: "1254",
    auditTypeSelectList: "",
    ItemId: "12",
    Date: "08/06/2024",
    UserName: "hcosta",
    TextAuditDescription: "text audit desc text audit desc text audit desc ",
  },
  {
    AuditId: "1254",
    auditTypeSelectList: "",
    ItemId: "12",
    Date: "08/06/2024",
    UserName: "hcosta",
    TextAuditDescription: "text audit desc text audit desc text audit desc ",
  },
];

// BOARDING TOOL DATA
export const boardingMainTabs = [
  {
    title: "Home Page",
    value: "homePage",
    route: "/boarding",
  },
  {
    title: "Merch. Boarding",
    value: "mBoarding",
    route: "/boarding/mBoarding",
  },
  {
    title: "Merchant",
    value: "merch",
    route: "/boarding/merch",
  },
  // {
  //   title: "Agent Details",
  //   value: "agentDetails",
  //   route: "/boarding/agentDetails",
  // },
  {
    title: "Leads",
    value: "leads",
    route: "/boarding/leads",
  },

  {
    title: "Doc. Library",
    value: "docLibrary",
    route: "/boarding/docLibrary",
  },
];

export const leadsTabs = [
  {
    id: "1",
    title: "MiCamp Leads",
    value: "miCampLeads",
    icon:MapPin,
  },
  {
    id: "2",
    title: "North Leads",
    value: "northLeads",
    icon: TrendingUp,
  },
  {
    id: "3",
    title: "FSP Leads",
    value: "fspLeads",
    icon: TrendingUp,
  },
];

export const supportTicketsTabs = [
  {
    id: "1",
    title: "My Tickets",
    value: "myTickets",
    icon: Tags,
  },
  {
    id: "2",
    title: "Solved",
    value: "solved",
    icon: SquareCheckBig,
  },
];
// Merchant Test
export const merchantTest = [
  {
    id: "1",
    title: "Agent Details",
    value: "agentDetails",
  },
  {
    id: "2",
    title: "Agent Settings",
    value: "agentSettings",
  },
];

export const merchantBoardingListTable = [
  {
    BusinessName: "Nexora Technologies",
    LastUpdate: "09/09/2024",
    City: "Scottsdale",
    Status: "Approved",
    NextStep: "Send for Signature",
  },
  {
    BusinessName: "Quantum Dynamics Inc.",
    LastUpdate: "09/01/2024",
    City: "Scottsdale",
    Status: "Approved",
    NextStep: "In-Person Signature",
  },
  {
    BusinessName: "Vertex Innovations",
    LastUpdate: "08/14/2024",
    City: "Scottsdale",
    Status: "Approved",
    NextStep: "Preview Form",
  },
  {
    BusinessName: "Eclipse Solutions Ltd.",
    LastUpdate: "08/10/2024",
    City: "Scottsdale",
    Status: "Approved",
    NextStep: "Send Lead",
  },
  {
    BusinessName: "Aether Industries",
    LastUpdate: "08/01/2024",
    City: "Scottsdale",
    Status: "Approved",
    NextStep: "Preview Addendum",
  },
];

export const agentCompanyNameSelectList = [
  {
    id: 1,
    title: "MiCamp House",
    value: "miCampHouse",
  },
  {
    id: 2,
    title: "Other Agent",
    value: "otherAgent",
  },
];

export const merchantForAgentTable = [
  {
    Id: 1,
    MID: "820192847",
    DBA: "CACTUS CLEANERS",
    Status: "Approved",
    OpenDate: "2024-08-09 12:00",
    ClosedDate: "",
    Processor: "FSP-TSYS",
  },
  {
    Id: 2,
    MID: "8201925347",
    DBA: "FIGHTING COLORS",
    Status: "Closed",
    OpenDate: "2024-08-03 12:00",
    ClosedDate: "",
    Processor: "FSP-Fiserv",
  },
  {
    Id: 3,
    MID: "820192847",
    DBA: "PUERTO DE LA LIBERTAD",
    Status: "In Progress",
    OpenDate: "2024-08-01 15:00",
    ClosedDate: "",
    Processor: "First Data Omaha",
  },
  {
    Id: 4,
    MID: "83011237",
    DBA: "THE ORIGINAL DEL NORTE",
    Status: "Cancelled",
    OpenDate: "2023-02-15 12:00",
    ClosedDate: "",
    Processor: "360 Payments",
  },
  {
    Id: 5,
    MID: "820192123",
    DBA: "SUGAR MAKERY INC",
    Status: "Waiting",
    OpenDate: "2022-04-29 12:00",
    ClosedDate: "",
    Processor: "First Data Omaha",
  },
  {
    Id: 6,
    MID: "55002871456",
    DBA: "LUDWICK EYE",
    Status: "Approved",
    OpenDate: "2021-05-09 12:00",
    ClosedDate: "",
    Processor: "First Data Omaha",
  },
];

export const LeadTypesList = [
  {
    id: 1,
    title: "MiCamp Leads",
    value: "micampLead",
  },
  {
    id: 2,
    title: "North Leads",
    value: "northLeads",
  },
  {
    id: 3,
    title: "FSP Leads",
    value: "fspLeads",
  },
];

export const myTicketsTable = [
  {
    Id: 1,
    Status: "Opened",
    Subject: "Clover Light (Gen 2)",
    UpdatedAt: "08/14/2024",
    Assignee: "Hellyton Costa",
  },
  {
    Id: 2,
    Status: "In Progress",
    Subject: "Toolkit Web",
    UpdatedAt: "08/14/2024",
    Assignee: "Hellyton Costa",
  },
  {
    Id: 3,
    Status: "Finished",
    Subject: "Design Toolkit Web",
    UpdatedAt: "08/14/2024",
    Assignee: "Hellyton Costa",
  },
];

export const mySolvedTicketsTable = [
  {
    Id: 1,
    Status: "Finished",
    Subject: "Design Toolkit Web",
    UpdatedAt: "08/14/2024",
    Assignee: "Hellyton Costa",
  },
];

export const LeadsTable = [
  {
    Id: 1,
    Email: "tony@stark.com",
    Name: "Tony Stark",
    Date: "09/25/2024",
    Type: "FSP Lead",
    Status: "Sent",
  },
  {
    Id: 2,
    Email: "frusciante@rhcp.com",
    Name: "John Frusciante",
    Date: "09/01/2024",
    Type: "North Lead",
    Status: "Sent",
  },
];

export const fspLeadsTable = [];

export const boardingMerchantTabs = [
  {
    id: "1",
    title: "Merchant Information",
    value: "merchantInformation",
    icon: User,
  },
  {
    id: "2",
    title: "Equipment Orders",
    value: "equipmentOrders",
    icon: MonitorSmartphone,
  },
  {
    id: "3",
    title: "Order New Equipment",
    value: "orderNewEquipment",
    icon: PackagePlus,
  },
  {
    id: "4",
    title: "Upload Documents",
    value: "uploadDocuments",
    icon: FileText,
  },
];

export const documentLibraryTabs = [
  {
    id: "1",
    title: "Blank MPAs & Addendums",
    value: "blankMpaAndAddendums",
    icon: ClipboardMinus,
  },
  {
    id: "2",
    title: "Change Forms",
    value: "changeForms",
    icon: FilePenLine,
  },
  {
    id: "3",
    title: "Equipment Pricing",
    value: "equipmentPricing",
    icon: HandCoins,
  },
  {
    id: "4",
    title: "Upload & Send Docs",
    value: "uploadAndSendDocs",
    icon: Upload,
  },
];

export const blankMPAsAndAddendumsTable = [
  {
    Id: 1,
    FileName: "MiCamp FSP MPA_ With PR Form.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 2,
    FileName: "Credit Card Auth Form.pdf",
    Size: "14172",
    LastUpdate: "1/5/2024 3:29:01 PM",
  },
  {
    Id: 3,
    FileName: "ACH Authorization Form.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 4,
    FileName: "Program Request From.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 5,
    FileName: "Clover Reprovisioning.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 6,
    FileName: "Omaha Clover Addendum.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 7,
    FileName: "Prevet Form.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 8,
    FileName: "Paya Services ACH Check Merchant Agreement.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 9,
    FileName: "Paya Additional Beneficial Owner Form.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 10,
    FileName: "North Only Multiple Locations Form v2502.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
];

export const changeFormsTable = [
  {
    Id: 1,
    FileName: "North - Banking Account Update..pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 2,
    FileName: "FSP Pricing and Entitlements.pdf",
    Size: "14172",
    LastUpdate: "1/5/2024 3:29:01 PM",
  },
  {
    Id: 3,
    FileName: "Cancellation Doc.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 4,
    FileName: "North - Miscellaneous Update.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 5,
    FileName: "North - Legal Information Update.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 6,
    FileName: "North - EBT.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 7,
    FileName: "North - Debit.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 8,
    FileName: "	FSP Merchant Account Change Form.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 9,
    FileName: "FSP Bank Change.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
];

export const equipmentPricingTable = [
  {
    Id: 1,
    FileName: "Clover Overview & Saas Fees.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 2,
    FileName: "Credit Card Auth Form.pdf",
    Size: "14172",
    LastUpdate: "1/5/2024 3:29:01 PM",
  },
  {
    Id: 3,
    FileName: "ACH Authorization Form.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 4,
    FileName: "Clover Service Plans.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
  {
    Id: 5,
    FileName: "Price List - Eff 2023-09-26.pdf",
    Size: "617835",
    LastUpdate: "5/20/2024 4:59:01 PM",
  },
];

export const newFspApplicationTabs = [
  {
    id: "1",
    title: "MO/TO Questionarie",
    value: "moToQuestionaire",
    abbreviation: "MQ",
    icon: FileText,
  },
  {
    id: "2",
    title: "Pricing Information",
    value: "pricingInformation",
    abbreviation: "PI",
    icon: Receipt,
  },
];

export const newMpaApplicationTabs = [
  {
    id: "1",
    title: "Merchant Detail",
    value: "merchantDetail",
    abbreviation: "MD",
    icon: Info,
  },
  {
    id: "2",
    title: "Financial Information",
    value: "financialInformation",
    abbreviation: "FI",
    icon: DollarSign,
  },
  {
    id: "3",
    title: "Merchant Owner",
    value: "merchantOwner",
    abbreviation: "MO",
    icon: KeyRound,
  },
  {
    id: "4",
    title: "Programming Request",
    value: "programmingRequest",
    abbreviation: "PR",
    icon: Laptop,
  },
];

// This is for the FSP MPA Application
// Merchant Detail TAB form

export const BusinessTypeSelectList = [
  {
    id: 1,
    title: "Individual/Sole Proprietorship",
    value: "individualSoleProprietorship",
  },
  {
    id: 2,
    title: "Partnership",
    value: "partnership",
  },
  {
    id: 3,
    title: "Non Profit/Tax Exempt",
    value: "nonProfitTaxExempt",
  },
  {
    id: 4,
    title: "Public Corp.",
    value: "publicCorp",
  },
  {
    id: 5,
    title: "Private Corp.",
    value: "privateCorp",
  },
  {
    id: 6,
    title: "LLC",
    value: "llc",
  },
  {
    id: 7,
    title: "Government",
    value: "government",
  },
  {
    id: 8,
    title: "Government2",
    value: "government2",
  },
  {
    id: 9,
    title: "Government3",
    value: "government3",
  },
];

export const dbaInformationFspForm = [
  {
    id: 1,
    title: "Merchant Name (DBA or Trade Name): *",
    type: "input",
    placeholder: "12345",
    formName: "MerchantName",
    value: "",
  },
  {
    id: 2,
    title: "Email Statemments To:",
    type: "input",
    placeholder: "Enter a valid Email",
    formName: "EmailStatements",
    value: "",
  },
  {
    id: 3,
    title: "Phone:",
    type: "input",
    placeholder: "(___) ___-____",
    formName: "Phone",
    value: "",
  },
  {
    id: 4,
    title: "Fax:",
    type: "input",
    placeholder: "(___) ___-____",
    formName: "Fax",
    value: "",
    // content: ModelSelectList,
  },
  {
    id: 5,
    title: "Contact Name:",
    type: "input",
    placeholder: "Contact Name",
    formName: "ContactName",
    value: "",
    // content: ConditionSelectList,
  },
  {
    id: 6,
    title: "Contact Phone:",
    type: "input",
    placeholder: "Contact Phone",
    formName: "ContactPhone",
    value: "",
  },
  {
    id: 7,
    title: "Contact Service Phone:",
    type: "input",
    placeholder: "Contact Service Phone",
    formName: "ContactServicePhone",
    value: "",
  },
  {
    id: 8,
    title: "Business website:",
    type: "input",
    placeholder: "example.com",
    formName: "BusinessWebsite",
    value: "",
  },
  {
    id: 9,
    title: "Date Open:",
    type: "datePicker",
    placeholder: "Select the Date Open",
    formName: "DateOpen",
    value: "",
  },
];

export const dbaAddressFspForm = [
  {
    id: 1,
    title: "Street: *",
    type: "input",
    placeholder: "Enter a valid address",
    formName: "Street",
    value: "",
  },
  {
    id: 2,
    title: "City:",
    type: "input",
    placeholder: "City",
    formName: "City",
    value: "",
  },
  {
    id: 3,
    title: "State:",
    type: "input",
    placeholder: "AZ",
    formName: "State",
    value: "",
  },
  {
    id: 4,
    title: "Postal Code:",
    type: "input",
    placeholder: "Zip",
    formName: "PostalCode",
    value: "",
  },
];

export const dbaLegalInformationFspForm = [
  {
    id: 1,
    title: "Corporate Legal Name:",
    type: "input",
    placeholder: "Name",
    formName: "CorporateLegalName",
    value: "",
  },
  {
    id: 2,
    title: "# of Locations:",
    type: "input",
    placeholder: "Enter a value",
    formName: "Locations",
    value: "",
  },
  {
    id: 3,
    title: "Street:",
    type: "input",
    placeholder: "123 North Somewhere",
    formName: "LegalCity",
    value: "",
  },
  {
    id: 4,
    title: "State:",
    type: "input",
    placeholder: "AZ",
    formName: "LegalState",
    value: "",
  },
  {
    id: 5,
    title: "Postal Code:",
    type: "input",
    placeholder: "Zip",
    formName: "LegalPostalCode",
    value: "",
  },
];

export const dbaTaxInformationFspForm = [
  {
    id: 1,
    title: "IRS Name (As appears on tax return): *",
    type: "input",
    placeholder: "Name",
    formName: "IrsName",
    value: "",
  },
  {
    id: 2,
    title: "SICMCC:",
    type: "input",
    placeholder: "Enter a value",
    formName: "SICMCC",
    value: "",
  },
  {
    id: 3,
    title: "Ein (Fed Tax ID #) or SS#: *",
    type: "input",
    placeholder: "...",
    formName: "EIN",
    value: "",
  },
  {
    id: 4,
    title: "Business Type:",
    type: "input",
    placeholder: "Select a business type",
    formName: "BusinessType",
    value: "",
    content: BusinessTypeSelectList,
  },
  {
    id: 5,
    title: "Type of Service Offered: *",
    type: "input",
    placeholder: "Zip",
    formName: "TypeOfServicesOffered",
    value: "",
  },
  {
    id: 6,
    title: "Stock Symbol:",
    type: "input",
    placeholder: "Type a symbola",
    formName: "StockSymbol",
    value: "",
  },
];

export const serviceRequestedFspForm = [
  {
    id: 1,
    title: "Visa/MC Avg. Transaction: *",
    type: "input",
    placeholder: "0.00",
    formName: "VisaMcAvgTransaction",
    value: "",
  },
  {
    id: 2,
    title: "Visa/MC Highest Transaction:",
    type: "input",
    placeholder: "0.00",
    formName: "VisaMcHighestTransaction",
    value: "",
  },
  {
    id: 3,
    title: "Visa/MC Gross Mo. Sales: *",
    type: "input",
    placeholder: "0.00",
    formName: "VisaMcGrossMoSales",
    value: "",
  },
  {
    id: 4,
    title: "Discover Avg. Transaction: *",
    type: "input",
    placeholder: "0.00",
    formName: "DiscoverAvgTransaction",
    value: "",
  },
  {
    id: 5,
    title: "Discover Highest Transaction:",
    type: "input",
    placeholder: "0.00",
    formName: "DiscoverHighestTransaction",
    value: "",
  },
  {
    id: 6,
    title: "Discover Gross Mo. Sales: *",
    type: "input",
    placeholder: "0.00",
    formName: "DiscoverGrossMoSales",
    value: "",
  },
  {
    id: 7,
    title: "Amex Opt. Blue Avg. Transaction: *",
    type: "input",
    placeholder: "0.00",
    formName: "AmexOptBlueAvgTransaction",
    value: "",
  },
  {
    id: 8,
    title: "Amex Opt. Blue Highest Transaction:",
    type: "input",
    placeholder: "0.00",
    formName: "AmexOptBlueHighestTransaction",
    value: "",
  },
  {
    id: 9,
    title: "Amex Opt. Blue Gross Mo. Sales: *",
    type: "input",
    placeholder: "0.00",
    formName: "AmexOptBlueGrossMoSales",
    value: "",
  },
];

export const cardTypesNotToAcceptFspForm = [
  {
    id: 1,
    title: "Visa",
    type: "ratio",
    formName: "Visa",
    value: "",
  },
  {
    id: 2,
    title: "MasterCard",
    type: "ratio",
    formName: "Mastercard",
    value: "",
  },
  {
    id: 3,
    title: "American Express",
    type: "ratio",
    formName: "AmericanExpress",
    value: "",
  },
  {
    id: 4,
    title: "Discover",
    type: "ratio",
    formName: "Discover",
    value: "",
  },
  {
    id: 5,
    title: "PayPal",
    type: "ratio",
    formName: "PayPal",
    value: "",
  },
];

export const seasonalMonthsFspForm = [
  {
    id: 1,
    formName: "January",
  },
  {
    id: 2,
    formName: "February",
  },
  {
    id: 3,
    formName: "March",
  },
  {
    id: 4,
    formName: "April",
  },
  {
    id: 5,
    formName: "May",
  },
  {
    id: 6,
    formName: "June",
  },
  {
    id: 7,
    formName: "July",
  },
  {
    id: 8,
    formName: "August",
  },
  {
    id: 9,
    formName: "September",
  },
  {
    id: 10,
    formName: "October",
  },
  {
    id: 11,
    formName: "November",
  },
  {
    id: 12,
    formName: "December",
  },
];

export const returnPolicyFspForm = [
  {
    id: 1,
    formName: "ReturnPolicy",
    title: "FULL REFUND",
  },
  {
    id: 2,
    formName: "ReturnPolicy",
    title: "EXCHANGE ONLY",
  },
  {
    id: 3,
    formName: "ReturnPolicy",
    title: "NONE",
  },
  {
    id: 4,
    formName: "ReturnPolicy",
    title: "DESCRIBE",
  },
];

export const bankingInformationFspForm = [
  {
    id: 1,
    formName: "CheckingSavings",
    title: "Checking",
    placeholder: "Checking",
    type: "radio",
    gridCols: "2",
    options: [
      {
        label: "Checking",
        value: "checking",
      },
      {
        label: "Savings",
        value: "savings",
      },
    ],
  },
];

export const acceptingVisaMcDiscoverFspForm = [
  {
    id: 1,
    formName: "AcceptingVisaMcDiscover",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    gridCols: "2",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const hasBeenTerminatedFspForm = [
  {
    id: 1,
    formName: "hasBeenTerminated",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    gridCols: "2",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const americaExpressVolumeFspForm = [
  {
    id: 1,
    formName: "AmericaExpressVolume",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    gridCols: "2",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const seasonalMerchantFspForm = [
  {
    id: 1,
    formName: "SeasonalMerchant",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const independentServiceFspForm = [
  {
    id: 1,
    formName: "IndependentService",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const usesFulfillHouseFspForm = [
  {
    id: 1,
    formName: "UsesFulfillHouse",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

// MO/TO QUESTIONAIRE
export const whatPercentSalesFspForm = [
  {
    id: 1,
    formName: "BusinessPercentage",
    title: "Businesses: *",
  },
  {
    id: 2,
    formName: "IndividualsPercentage",
    title: "Individuals: *",
  },
];

export const marketingMethodsFspForm = [
  {
    id: 1,
    formName: "MktNewspapersMagazine",
    title: "Newspapers/Magazine",
  },
  {
    id: 2,
    formName: "MktMail",
    title: "Mail",
  },
  {
    id: 3,
    formName: "MktTelevisionRadio",
    title: "Television/Radio",
  },
  {
    id: 4,
    formName: "MktOutboundTelemarketing",
    title: "Outbound Telemarketing Sales",
  },
  {
    id: 5,
    formName: "MktInternet",
    title: "Internet",
  },
  {
    id: 6,
    formName: "MktOther",
    title: "Other",
  },
];

export const whoEntersCardInfoFspForm = [
  {
    id: 1,
    formName: "CardInfoWhoEnters",
    title: "Merchant",
    placeholder: "Merchant",
    value: "",
    options: [
      {
        label: "Merchant",
        value: "merchant",
      },
      {
        label: "Fullfilmment Center",
        value: "fullfilmentCenter",
      },
      {
        label: "Consumer",
        value: "consumer",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
  },
  {
    id: 5,
    formName: "CardInfoOtherDescription",
    title: "",
    type: "input",
    placeholder: "Other",
    value: "",
  },
];

export const ownProdFspForm = [
  {
    id: 1,
    formName: "OwnProd",
    title: "Yes",
    type: "radio",
    placeholder: "Yes",
    value: "",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const ownProdTypeFspForm = [
  {
    id: 1,
    formName: "OwnProdBusinessOther",
    title: "Business",
    type: "radio",
    placeholder: "Business",
    value: "",
    options: [
      {
        label: "Business",
        value: "Business",
      },
      {
        label: "Other",
        value: "Other",
      },
    ],
  },
];

export const whoProcessesFspForm = [
  {
    id: 1,
    formName: "WhoProcesses",
    title: "Merchant",
    type: "radio",
    placeholder: "Merchant",
    value: "",
    options: [
      {
        label: "Merchant",
        value: "merchant",
      },
      {
        label: "Fullfilment Center",
        value: "fullfilmentCenter",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
  },
  {
    id: 2,
    formName: "ProcessorOtherDescription",
    title: "Other:",
    type: "input",
    placeholder: "Other",
    value: "",
  },
];

export const shippedByFspForm = [
  {
    id: 1,
    formName: "ShippedBy",
    title: "US Mail",
    type: "radio",
    placeholder: "US Mail",
    value: "",
    options: [
      {
        label: "US Mail",
        value: "usMail",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
  },
  {
    id: 2,
    formName: "ShippedOtherDescription",
    title: "Other:",
    type: "input",
    placeholder: "Other",
    value: "",
  },
];

export const whoShipsFspForm = [
  {
    id: 1,
    formName: "WhoShips",
    title: "Merchant",
    type: "radio",
    placeholder: "Merchant",
    value: "",
    options: [
      {
        label: "Merchant",
        value: "merchant",
      },
      {
        label: "Fullfilment Center",
        value: "fullfilmentCenter",
      },
    ],
  },
  {
    id: 2,
    formName: "DaysToShip",
    title: "After Auth, Days to Ship",
    type: "input",
    placeholder: "Days to Ship",
    value: "",
  },
];

export const deliveryReceiptRequestedFspForm = [
  {
    id: 1,
    formName: "DeliveryReceiptRequested",
    title: "Yes",
    type: "radio",
    placeholder: "Yes",
    value: "",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const isPaymentEncryptedFspForm = [
  {
    id: 1,
    formName: "IsPaymentEncrypted",
    type: "radio",
    placeholder: "Yes",
    title: "Yes",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "No",
      },
    ],
  },
];

export const individualSharedFspForm = [
  {
    id: 1,
    formName: "IndividualShared",
    title: "Individual",
    type: "radio",
    placeholder: "Individual",
    options: [
      {
        label: "Individual",
        value: "individual",
      },
      {
        label: "Shared",
        value: "shared",
      },
    ],
  },
];

export const certificatesFspForm = [
  {
    id: 1,
    formName: "Certificate",
    title: "Certificate #:",
    type: "input",
    placeholder: "#",
    value: "",
  },
  {
    id: 2,
    formName: "CertificateIssuer",
    title: "Certificate Issuer:",
    type: "input",
    placeholder: "Certificate Issuer",
    value: "",
  },
  {
    id: 3,
    formName: "ExpirationDate",
    title: "Exp Date:",
    type: "datePicker",
    placeholder: "Select a date",
    value: "",
  },
];

// Merchant Owner TAB
export const hasFiledForBankruptcyFspForm = [
  {
    id: 1,
    formName: "HasFiledForBankruptcy",
    title: "Yes",
    placeholder: "Yes",
    type: "radio",
    gridCols: "2",
    options: [
      {
        label: "Yes",
        value: "Yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
  },
];

export const OwnersTable: DataTypes[] = [
  {
    OwnerName: "Jimmy Page",
    Ownership: "55%",
    MainOwner: "true",
    CellNumber: "12345678",
    Notes: "This is the main owner",
  },
  {
    OwnerName: "Ringo Star",
    Ownership: "30%",
    MainOwner: "false",
    CellNumber: "12345678",
    Notes: "This is the secondary owner",
  },
];

export const addNewMerchantOwnerBasicFspForm = [
  {
    id: 1,
    formName: "FirstName",
    title: "First Name: *",
    type: "input",
    placeholder: "First Name",
    value: "",
  },
  {
    id: 2,
    formName: "MiddleName",
    title: "Middle Name: *",
    type: "input",
    placeholder: "Middle Name",
    value: "",
  },
  {
    id: 3,
    formName: "LastName",
    title: "Last Name: *",
    type: "input",
    placeholder: "Last Name",
    value: "",
  },
  {
    id: 4,
    formName: "DateOfBirth",
    title: "Date Of Birth #: *",
    type: "datePicker",
    placeholder: "#",
    value: "",
  },
  {
    id: 5,
    formName: "Ownership",
    title: "Ownership %: *",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 6,
    formName: "CellNumber",
    title: "Cell Number: (used for DocuSign)*",
    type: "input",
    placeholder: "(___) ____-_____",
    value: "",
  },
  {
    id: 7,
    formName: "SSN",
    title: "SSN: *",
    type: "input",
    placeholder: "*",
    value: "",
  },
];

export const addNewMerchantOwnerAddressFspForm = [
  {
    id: 1,
    formName: "Address",
    title: "Address: *",
    type: "input",
    placeholder: "123 North Somewhere",
    value: "",
  },
  {
    id: 2,
    formName: "City",
    title: "City: *",
    type: "input",
    placeholder: "Scottsdale",
    value: "",
  },
  {
    id: 3,
    formName: "State",
    title: "State: *",
    type: "input",
    placeholder: "Arizona",
    value: "",
  },
  {
    id: 4,
    formName: "PostalCode",
    title: "Postal Code: *",
    type: "input",
    placeholder: "ZipCode",
    value: "",
  },
  {
    id: 5,
    formName: "DriverLicense",
    title: "Driver's License #: *",
    type: "input",
    placeholder: "License Number ",
    value: "",
  },
  {
    id: 6,
    formName: "DriverLicenseState",
    title: "Driver's License State: *",
    type: "input",
    placeholder: "Arizona",
    value: "",
  },
];

// PRICING INFORMATION TAB
export const passThroughInterchangeFspForm = [
  {
    id: 1,
    formName: "PassTrueInterchange",
    title: "Yes",
    placeholder: "Yes",
    type: "radio",
    options: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
  },
];

export const passDuesAssessmentsFspForm = [
  {
    id: 1,
    formName: "PassDuesAndAssesments",
    title: "Yes",
    placeholder: "Yes",
    type: "radio",
    options: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
  },
];

export const viMcDiscRateFspForm = [
  {
    id: 1,
    formName: "CreditQual",
    title: "Credit Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 2,
    formName: "MidCreditQual",
    title: "Mid Credit Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 3,
    formName: "NonCreditQual",
    title: "Non Credit Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 4,
    formName: "NonPinDebitNonQual",
    title: "Non PIN Debit Non Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 5,
    formName: "NonPinDebitMidQual",
    title: "Non PIN Debit Mid Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 6,
    formName: "NonPinDebitNonQual2",
    title: "Non PIN Debit Non Qual ",
    type: "number",
    placeholder: "%",
    value: "",
  },
];

export const amexDcRateFspForm = [
  {
    id: 1,
    formName: "AmexCreditQual",
    title: "Credit Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 2,
    formName: "AmexMidCreditQual",
    title: "Mid Credit Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 3,
    formName: "AmexNonCreditQual",
    title: "Non Credit Qual",
    type: "number",
    placeholder: "%",
    value: "",
  },
];

export const grossNetFspForm = [
  {
    id: 1,
    formName: "GrossNet",
    title: "GROSS",
    placeholder: "GROSS",
    type: "radio",
  },
  {
    id: 2,
    formName: "GrossNet",
    title: "NET",
    placeholder: "NET",
    type: "radio",
  },
];

export const interchangePlusRatesFspForm = [
  {
    id: 1,
    formName: "ViMcDiscRate",
    title: "Vi/MC/Disc D/C Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 2,
    formName: "ViMcdiscNonPinDebitRate",
    title: "Vi/MC/Disc Non-Pin Debit D/C Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 3,
    formName: "AmexDCRate",
    title: "AMEX D/C Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 4,
    formName: "PaypalDCRate",
    title: "PayPal D/C Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
];

export const flatRateFspForm = [
  {
    id: 1,
    formName: "ViMcDiscFee",
    title: "Vi/MC/Disc D/C Fee",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 2,
    formName: "ViMcDiscNonPinDebitDCRate",
    title: "Vi/MC/Disc Non-Pin Debit D/C Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 3,
    formName: "AmexDcRate2",
    title: "AMEX D/C Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 4,
    formName: "PayPalDcRate2",
    title: "PayPal D/C Rate 2",
    type: "number",
    placeholder: "%",
    value: "",
  },
];

export const swipedNonSwipedFspForm = [
  {
    id: 1,
    formName: "SwipedRate",
    title: "Swiped Rate:",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 2,
    formName: "NonSwipedRate",
    title: "Non-Swiped Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
];

export const pinDebitFspForm = [
  {
    id: 1,
    formName: "PinDebitDcRate",
    title: "PIN Debit D/C Rate:",
    type: "number",
    placeholder: "%",
    value: "",
  },
  {
    id: 2,
    formName: "PinDebitAuthRate",
    title: "PIN Debit Auth Rate",
    type: "number",
    placeholder: "%",
    value: "",
  },
];

export const otherPricingInformationFspForm = [
  {
    id: 3,
    formName: "AuthrizationFee",
    title: "Authorization Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 4,
    formName: "EbtCashItemFee",
    title: "EBT Cash Item Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 5,
    formName: "StatementFee",
    title: "Statement Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 6,
    formName: "MonthlyMinimumFee",
    title: "Monthly Minimum Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 7,
    formName: "PciFee",
    title: "PCI Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 8,
    formName: "AddressVerification",
    title: "Address Verification:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 9,
    formName: "EftFoodItemFee",
    title: "EFT Food Item Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 10,
    formName: "CustomerServiceFee",
    title: "Customer Service Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 11,
    formName: "TinInvalidFee",
    title: "TIN Invalid Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 12,
    formName: "VoiceAuthorization",
    title: "Voice Authorization:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 13,
    formName: "ReturnedTransaction",
    title: "Returned Transaction:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 14,
    formName: "OnlineReporting",
    title: "Online Reporting:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 15,
    formName: "AchRejectFee",
    title: "ACH Reject Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 16,
    formName: "ApplicationFee",
    title: "Application Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 17,
    formName: "AudioResponse",
    title: "Audio Response:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 18,
    formName: "RegulatoryProductFee",
    title: "Regulatory Product Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 19,
    formName: "ChargebackFee",
    title: "Chargeback Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 20,
    formName: "EarlyTerminationFee",
    title: "Early Termination Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 21,
    formName: "VoiceAddressVerification",
    title: "Voice Address Verification:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 22,
    formName: "WirelessFee",
    title: "Wireless Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 23,
    formName: "RetrievalFee",
    title: "Retrieval Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 24,
    formName: "MerchantFee",
    title: "Merchant Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 25,
    formName: "BatchHeaderFee",
    title: "Batch Header Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 26,
    formName: "SoftwareFee",
    title: "Software Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 27,
    formName: "PciNonComplianceFee",
    title: "PCI Non-Compliance Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 28,
    formName: "SalesTrasactionFee",
    title: "Sales Transaction Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 29,
    formName: "EquipmentFee",
    title: "Equipment Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
  {
    id: 30,
    formName: "OtherFeeDescription",
    title: "Other Fee Description:",
    type: "string",
    placeholder: "",
    value: "",
  },
  {
    id: 31,
    formName: "OtherFee",
    title: "Other Fee:",
    type: "number",
    placeholder: "$0.00",
    value: "",
  },
];

export const pciFrequencyFspForm = [
  {
    id: 1,
    formName: "PciFrequency",
    title: "Daily (default)",
    placeholder: "",
    type: "radio",
    options: [
      {
        label: "Daily (default)",
        value: "daily",
      },
      {
        label: "Monthly",
        value: "monthly",
      },
    ],
  },
];

export const audioFspForm = [
  {
    id: 1,
    formName: "Audio",
    title: "Monthly Merchant Fee",
    placeholder: "Monthly Merchant Fee",
    type: "radio",
    options: [
      {
        label: "Monthly Merchant Fee",
        value: "monthlyMerchantFee",
      },
      {
        label: "Annual Merchant Fee",
        value: "annualMerchantFee",
      },
    ],
  },
];

// PROGRAMMING REQUEST FORM TAB

export const equipmentInformationFspForm: DataTypes[] = [
  {
    id: 1,
    quantity: "2",
    manufacturer: "Clover",
    model: "XPS 15",
  },
  {
    id: 2,
    quantity: "1",
    manufacturer: "Dejavoo",
    model: "DJx - 01",
  },
  {
    id: 3,
    quantity: "1",
    manufacturer: "Clover",
    model: "XPS 15 - Gen 1",
  },
];

export const accountInformationFspForm = [
  {
    id: 1,
    title: "Sales Representative",
    type: "selectBox",
    placeholder: "Select a Representative",
    formName: "SalesRepresentative",
    value: "",
    content: ModelSelectList,
  },
  {
    id: 2,
    title: "Sales Phone Number",
    type: "input",
    placeholder: "(___) ____-_____",
    formName: "SalesPhoneNumber",
    value: "",
  },
];

export const wavitAppOnlyFspForm = [
  {
    id: 1,
    formName: "Invoicing",
    title: "Invoicing",
    type: "checkbox",
    placeholder: "Invoicing",
    value: "",
  },
  {
    id: 2,
    formName: "InvoicingNumberRequired",
    title: "Invoice Number Field Required",
    type: "checkbox",
    placeholder: "Invoice Number Field Required",
    value: "",
  },
  {
    id: 3,
    formName: "QrScan",
    title: "QR Scan",
    type: "checkbox",
    placeholder: "QR Scan",
    value: "",
  },
];

export const connectionTypeFspForm = [
  {
    id: 1,
    formName: "EthernetInternet",
    title: "Ethernet / Internet (IP)",
    type: "checkbox",
    placeholder: "Ethernet / Internet (IP)",
    value: "",
  },
  {
    id: 2,
    formName: "WirelessSim",
    title: "Wireless / Sim (Cellular)",
    type: "checkbox",
    placeholder: "Wireless / Sim (Cellular)",
    value: "",
  },
  {
    id: 3,
    formName: "DialUp",
    title: "Dial Up",
    type: "checkbox",
    placeholder: "Dial Up",
    value: "",
  },
  {
    id: 4,
    formName: "WiFi",
    title: "Wi-Fi",
    type: "checkbox",
    placeholder: "Wi-Fi",
    value: "",
  },
];

export const cloverOnlyFspForm = [
  {
    id: 1,
    formName: "HowCashDiscountApplied",
    title: "WAVit APP",
    type: "radio",
    placeholder: "WAVit APP (Merchant does NOT need menu or inventory)",
    value: "",
    options: [
      {
        label: "WAVit APP (Merchant does NOT need menu or inventory)",
        value: "wavitApp",
      },
      {
        label: "Dual Pricing APP",
        value: "dualPricingApp",
      },
      {
        label: "Additional Charge",
        value: "additionalCharge",
      },
      {
        label: "None of the Above",
        value: "None",
      },
    ],
  },
];

export const fileBuildInformationFspForm = [
  {
    id: 1,
    formName: "BuildType",
    title: "Retail",
    type: "radio",
    gridCols: "4",
    placeholder: "Retail",
    value: "",
    options: [
      {
        label: "Retail",
        value: "retail",
      },
      {
        label: "Restaurant",
        value: "restaurant",
      },
      {
        label: "MO/TO",
        value: "moTo",
      },
      {
        label: "eCommerce",
        value: "eCommerce",
      },
    ],
  },
];

export const tipLineFspForm = [
  {
    id: 1,
    formName: "TipLineType",
    title: "Tip at time of sale",
    type: "radio",
    placeholder: "Tip at time of sale",
    value: "",
    gridCols: "2",
    options: [
      {
        label: "Tip at time of sale",
        value: "tipAtTimeSale",
      },
      {
        label: "Tip on receipt",
        value: "tipOnReceipt",
      },
    ],
  },
];

export const serverFspForm = [
  {
    id: 1,
    formName: "Server",
    title: "Yes",
    type: "radio",
    placeholder: "Yes",
    value: "",
    gridCols: "2",
    options: [
      {
        label: "Yes",
        value: "yes",
      },
      {
        label: "No",
        value: "no",
      },
    ],
  },
];

export const shipToFspForm = [
  {
    id: 1,
    formName: "ShipTo",
    title: "Rep",
    type: "radio",
    placeholder: "Rep",
    value: "",
    gridCols: "2",
    options: [
      {
        label: "Rep",
        value: "rep",
      },
      {
        label: "Business",
        value: "business",
      },
    ],
  },
];

export const shipPriorityFspForm = [
  {
    id: 1,
    formName: "ShipPriority",
    title: "Ground",
    type: "button",
    placeholder: "Ground",
    value: "Ground",
  },
  {
    id: 2,
    formName: "ShipPriority",
    title: "2 Day",
    type: "button",
    placeholder: "2 Day",
    value: "2 Day",
  },
  {
    id: 3,
    formName: "ShipPriority",
    title: "3 Day",
    type: "button",
    placeholder: "3 Day",
    value: "3 Day",
  },
  {
    id: 4,
    formName: "ShipPriority",
    title: "Standard",
    type: "button",
    placeholder: "Standard",
    value: "Standard",
  },
  {
    id: 5,
    formName: "ShipPriority",
    title: "Priority",
    type: "button",
    placeholder: "Priority",
    value: "Priority",
  },
];

export const dbaSelectionFspForm = [
  {
    id: 1,
    formName: "UseLegalBusiness",
    title: "Use Legal Business Address",
    placeholder: "Use Business Address",
    value: "",
  },
  {
    id: 2,
    formName: "UseLegalBusinessDba",
    title: "Use Business Address DBA",
    placeholder: "Use Business Address DBA",
    value: "",
  },
  {
    id: 3,
    formName: "UseAgent",
    title: "Use Agent Address",
    placeholder: "Use Agent Address",
    value: "",
  },
  {
    id: 4,
    formName: "NoAddress",
    title: "No Address",
    placeholder: "No Address",
    value: "",
  },
];

export const dbaAddressShipFspForm = [
  {
    id: 1,
    formName: "ShipAddress",
    title: "Street: *",
    type: "input",
    placeholder: "123 North Somewhere",
    value: "",
  },
  {
    id: 2,
    formName: "ShipCity",
    title: "City: *",
    type: "input",
    placeholder: "Scottsdale",
    value: "",
  },
  {
    id: 3,
    formName: "ShipState",
    title: "State: *",
    type: "input",
    placeholder: "AZ",
    value: "",
  },
  {
    id: 4,
    formName: "ShipPostalCode",
    title: "Postal Code: *",
    type: "input",
    placeholder: "ZipCode",
    value: "",
  },
  {
    id: 5,
    formName: "ShipPhone",
    title: "Contact Name: *",
    type: "input",
    placeholder: "Contact Name",
    value: "",
  },
  {
    id: 6,
    formName: "ShipEmail",
    title: "Contact Phone: *",
    type: "input",
    placeholder: "(___) ___-____",
    value: "",
  },
];

export const billToFspForm = [
  {
    id: 1,
    formName: "BillTo",
    title: "Rep",
    placeholder: "Rep",
    type: "radio",
    gridCols: "2",
    options: [
      {
        label: "Rep",
        value: "rep",
      },
      {
        label: "Merchant (must include signed forms)",
        value: "merchant",
      },
    ],
  },
];

// New First Data NORTH Interchange 2502-2 APPLICATION DATA

export const newInterchangeApplicationTabs = [
  {
    id: "1",
    title: "North Details",
    value: "northDetails",
    abbreviation: "ND",
    icon: ArrowUp,
  },
];

export const dbaInformationInterForm = [
  {
    id: 1,
    title: "Clients Business Name DBA: *",
    type: "input",
    placeholder: "",
    formName: "ClientsBusinessName",
    value: "",
  },
  {
    id: 2,
    title: "Phone:",
    type: "number",
    placeholder: "Enter a valid Email",
    formName: "Phone",
    value: "",
  },
  {
    id: 3,
    title: "Customer Service Phone:",
    type: "number",
    placeholder: "(___) ___-____",
    formName: "CustomerServicePhone",
    value: "",
  },
  {
    id: 4,
    title: "Fax:",
    type: "number",
    placeholder: "(___) ___-____",
    formName: "Fax",
    value: "",
    // content: ModelSelectList,
  },
  {
    id: 5,
    title: "Email Statements To:",
    type: "input",
    placeholder: "example@email.com",
    formName: "EmailStatements",
    value: "",
    // content: ConditionSelectList,
  },
  {
    id: 6,
    title: "Customer Service Email:",
    type: "input",
    placeholder: "example@email.com",
    formName: "CustomerServiceEmail",
    value: "",
  },
  {
    id: 7,
    title: "Also Print and Mail Statements.",
    type: "checkbox",
    placeholder: "Also Print and Mail Statements.",
    formName: "AlsoPrintAndMailStatements",
    value: "",
  },
];

export const dbaAddressInterForm = [
  {
    id: 1,
    title: "Street: *",
    type: "input",
    placeholder: "Enter a valid address",
    formName: "Street",
    value: "",
  },
  {
    id: 2,
    title: "City:",
    type: "input",
    placeholder: "City",
    formName: "City",
    value: "",
  },
  {
    id: 3,
    title: "State:",
    type: "input",
    placeholder: "AZ",
    formName: "State",
    value: "",
  },
  {
    id: 4,
    title: "Postal Code:",
    type: "input",
    placeholder: "Zip",
    formName: "PostalCode",
    value: "",
  },
];

export const dbaLegalInfoInterForm = [
  {
    id: 1,
    title: "Contact Name:",
    type: "input",
    placeholder: "Name",
    formName: "LegalContactName",
    value: "",
  },
  {
    id: 2,
    title: "Fax:",
    type: "number",
    placeholder: "",
    formName: "LegalContactFax",
    value: "",
  },
  {
    id: 3,
    title: "Contact Phone:",
    type: "input",
    placeholder: "(___) ___-_____",
    formName: "LegalContactPhone",
    value: "",
  },
  {
    id: 4,
    title: "Contact Email:",
    type: "input",
    placeholder: "example@email.com",
    formName: "LegalContactEmail",
    value: "",
  },
];

export const LegalInfoInterForm = [
  {
    id: 1,
    title: "Business Name: (IRS Name)",
    type: "input",
    placeholder: "Name",
    formName: "LegalBusinessName",
    value: "",
  },
  {
    id: 2,
    title: "Legal Start Date:",
    type: "datePicker",
    placeholder: "Select a date",
    formName: "LegalStartDate",
    value: "",
  },
  {
    id: 3,
    title: "Business Website:",
    type: "input",
    placeholder: "myweb.com",
    formName: "LegalBusinessWebsite",
    value: "",
  },
];

export const LegalAddressInfoInterForm = [
  {
    id: 1,
    title: "City: ",
    type: "input",
    placeholder: "Scottsdale",
    formName: "LegalCity",
    value: "",
  },
  {
    id: 2,
    title: "State:",
    type: "input",
    placeholder: "AZ",
    formName: "LegalState",
    value: "",
  },
  {
    id: 3,
    title: "Business Website:",
    type: "input",
    placeholder: "ZipCode",
    formName: "LegalPostalCode",
    value: "",
  },
];

export const taxInformationInterForm = [
  {
    id: 1,
    title: "Ein (Fed Tax ID #) or SS#: ",
    type: "input",
    placeholder: "",
    formName: "EinSsn",
    value: "",
  },
  {
    id: 2,
    title: "SICMCC:",
    type: "input",
    placeholder: "",
    formName: "SICMCC",
    value: "",
  },
  {
    id: 3,
    title: "Type of Goods:",
    type: "input",
    placeholder: "",
    formName: "TypeOfGoods",
    value: "",
  },
  {
    id: 4,
    title: "Business Type:",
    type: "selecbox",
    placeholder: "Select a Business Type",
    formName: "BusinessType",
    value: "",
    content: BusinessTypeSelectList,
  },
];

export const salesInterForm = [
  {
    id: 1,
    title: "High Ticket: ",
    type: "number",
    placeholder: "",
    formName: "HighTicket",
    value: "",
  },
  {
    id: 2,
    title: "Average Ticket Sales:",
    type: "number",
    placeholder: "",
    formName: "AverageTicketsSales",
    value: "",
  },
];

export const cardSalesInterForm = [
  {
    id: 1,
    title: "Annual Visa MC $: ",
    type: "number",
    placeholder: "$",
    formName: "AnnualVisaMc",
    value: "",
  },
  {
    id: 2,
    title: "Annual AMEX $:",
    type: "number",
    placeholder: "$",
    formName: "AnnualAmex",
    value: "",
  },
  {
    id: 3,
    title: "Annual Discover $: ",
    type: "number",
    placeholder: "$",
    formName: "AnnualDiscover",
    value: "",
  },
  {
    id: 4,
    title: "Annual Total Sales $:",
    type: "number",
    placeholder: "$",
    formName: "AnnualTotalSales",
    value: "",
  },
];

export const settingsInterForm = [
  {
    id: 1,
    title: "Early Termination Fee: ",
    type: "number",
    placeholder: "$",
    formName: "EarlyTerminationFee",
    value: "",
  },
  {
    id: 2,
    title: "Cash Discount %:",
    type: "number",
    placeholder: "$",
    formName: "CashDiscount",
    value: "",
  },
  {
    id: 3,
    title: "Discount %: ",
    type: "number",
    placeholder: "$",
    formName: "Discount",
    value: "",
  },
  {
    id: 4,
    title: "Monthly Statement Fee (NORTH) $:",
    type: "number",
    placeholder: "$",
    formName: "MonthlyStatementFee",
    value: "",
  },
];

export const connectionTypeInterForm = [
  {
    id: 1,
    formName: "EthernetInternet",
    title: "Internet (IP)",
    type: "checkbox",
    placeholder: "Ethernet / Internet (IP)",
    value: "",
  },
  {
    id: 2,
    formName: "WirelessSim",
    title: "Wireless",
    type: "checkbox",
    placeholder: "Wireless",
    value: "",
  },
];

export const cloverOnlyInterForm = [
  {
    id: 1,
    formName: "HowCashDiscountApplied",
    title: "WAVit APP",
    type: "radio",
    placeholder: "",
    value: "",
    options: [
      {
        label: "WAVit APP (Merchant does NOT need menu or inventory)",
        value: "wavitApp",
      },
      {
        label: "Dual Pricing APP",
        value: "dualPricing",
      },
      {
        label: "Additional charge (manually)",
        value: "additionalCharge",
      },
      {
        label: "None of the Above",
        value: "none",
      },
    ],
  },
];

export const zoneNorthBoardingForm = [
  {
    id: 1,
    formName: "Zone",
    title: "Business District",
    type: "radio",
    placeholder: "Business District",
    value: "",
  },
  {
    id: 2,
    formName: "Zone",
    title: "Residencial",
    type: "radio",
    placeholder: "Residencial",
    value: "",
  },
  {
    id: 3,
    formName: "Zone",
    title: "Industrial",
    type: "radio",
    placeholder: "Industrial",
    value: "",
  },
];

export const locationNorthBoardingForm = [
  {
    id: 1,
    formName: "Location",
    title: "Mall",
    type: "radio",
    placeholder: "Mall",
    value: "",
  },
  {
    id: 2,
    formName: "Location",
    title: "Isolated",
    type: "radio",
    placeholder: "Isolated",
    value: "",
  },
  {
    id: 3,
    formName: "Location",
    title: "Apartment",
    type: "radio",
    placeholder: "Apartment",
    value: "",
  },
  {
    id: 4,
    formName: "Location",
    title: "Home",
    type: "radio",
    placeholder: "Home",
    value: "",
  },
  {
    id: 5,
    formName: "Location",
    title: "Shopping Area",
    type: "radio",
    placeholder: "Shopping Area",
    value: "",
  },
  {
    id: 6,
    formName: "Location",
    title: "Office",
    type: "radio",
    placeholder: "Office",
    value: "",
  },
  {
    id: 7,
    formName: "Location",
    title: "Other",
    type: "radio",
    placeholder: "Other",
    value: "",
  },
  {
    id: 8,
    formName: "LocationOther",
    title: "OtherDescription",
    type: "input",
    placeholder: "",
    value: "",
  },
];

export const seasonalNorthBoardingForm = [
  {
    id: 1,
    formName: "Seasonal",
    title: "Yes",
    type: "radio",
    placeholder: "Yes",
    value: "",
  },
  {
    id: 2,
    formName: "Seasonal",
    title: "No",
    type: "radio",
    placeholder: "No",
    value: "",
  },
  {
    id: 3,
    formName: "MonthsInOpertation",
    title: "Months in Operation",
    type: "number",
    placeholder: "",
    value: "",
  },
  {
    id: 4,
    formName: "MonthOpenBegin",
    title: "Month Open Begin",
    type: "input",
    placeholder: "e.g. May",
    value: "",
  },
  {
    id: 5,
    formName: "MonthOpenEnd",
    title: "Month Open End",
    type: "input",
    placeholder: "e.g. November",
    value: "",
  },
];

export const floorsNorthBoardingForm = [
  {
    id: 1,
    formName: "FloorsLevels",
    title: "1",
    type: "radio",
    placeholder: "1",
    value: "",
  },
  {
    id: 2,
    formName: "FloorsLevels",
    title: "2-4",
    type: "radio",
    placeholder: "2-4",
    value: "",
  },
  {
    id: 3,
    formName: "FloorsLevels",
    title: "5-10",
    type: "radio",
    placeholder: "5-10",
    value: "",
  },
  {
    id: 4,
    formName: "FloorsLevels",
    title: "11+",
    type: "radio",
    placeholder: "11+",
    value: "",
  },
];

export const merchantOccupiesNorthBoardingForm = [
  {
    id: 1,
    formName: "MerchantOccupies",
    title: "Ground Floor",
    type: "radio",
    placeholder: "Ground Floor",
    value: "",
  },
  {
    id: 2,
    formName: "MerchantOccupies",
    title: "Other",
    type: "radio",
    placeholder: "Other",
    value: "",
  },
  {
    id: 3,
    formName: "MerchantOccupiesOther",
    title: "OtherDescription",
    type: "input",
    placeholder: "Other",
    value: "",
  },
];

export const floorsOccupiedNorthBoardingForm = [
  {
    id: 1,
    formName: "FloorsOccupiedBy",
    title: "Residential",
    type: "radio",
    placeholder: "Residential",
    value: "",
  },
  {
    id: 2,
    formName: "FloorsOccupiedBy",
    title: "Commercial",
    type: "radio",
    placeholder: "Commercial",
    value: "",
  },
  {
    id: 3,
    formName: "FloorsOccupiedBy",
    title: "Both",
    type: "radio",
    placeholder: "Both",
    value: "",
  },
  {
    id: 4,
    formName: "FloorsOccupiedBy",
    title: "None",
    type: "radio",
    placeholder: "None",
    value: "",
  },
];

export const nameDisplayedNorthBoardingForm = [
  {
    id: 1,
    formName: "MerchantNameDisplayed",
    title: "Window",
    type: "radio",
    placeholder: "Window",
    value: "",
  },
  {
    id: 2,
    formName: "MerchantNameDisplayed",
    title: "Door",
    type: "radio",
    placeholder: "Door",
    value: "",
  },
  {
    id: 3,
    formName: "MerchantNameDisplayed",
    title: "Store Front",
    type: "radio",
    placeholder: "Store Front",
    value: "",
  },
];

export const timeZoneNorthBoardingForm = [
  {
    id: 1,
    formName: "TimeZone",
    title: "Time Zone",
    type: "input",
    placeholder: "",
    value: "",
  },
];

export const squareFootageNorthBoardingForm = [
  {
    id: 1,
    formName: "SquareFootage",
    title: "0-250",
    type: "radio",
    placeholder: "0-250",
    value: "",
  },
  {
    id: 2,
    formName: "SquareFootage",
    title: "251-500",
    type: "radio",
    placeholder: "251-500",
    value: "",
  },
  {
    id: 3,
    formName: "SquareFootage",
    title: "501-2000",
    type: "radio",
    placeholder: "501-2000",
    value: "",
  },
  {
    id: 4,
    formName: "SquareFootage",
    title: "2001+",
    type: "radio",
    placeholder: "2001+",
    value: "",
  },
];

export const employeesNorthBoardingForm = [
  {
    id: 1,
    formName: "HowManyEmployees",
    title: "How Many Employees:",
    type: "number",
    placeholder: "",
    value: "",
  },
];

export const terminalsNorthBoardingForm = [
  {
    id: 1,
    formName: "RegisterTerminals",
    title: "How Many Registers/Terminals:",
    type: "number",
    placeholder: "",
    value: "",
  },
];

export const returnPolicyNorthBoardingForm = [
  {
    id: 1,
    formName: "ReturnPolicy",
    title: "Full Refund",
    type: "radio",
    placeholder: "Full Refund",
    value: "",
  },
  {
    id: 2,
    formName: "ReturnPolicy",
    title: "Exchange Only",
    type: "radio",
    placeholder: "Exchange Only",
    value: "",
  },
  {
    id: 3,
    formName: "ReturnPolicy",
    title: "None",
    type: "radio",
    placeholder: "None",
    value: "",
  },
];

export const specificPolicyNorthBoardingForm = [
  {
    id: 1,
    formName: "SpecificReturnPolicy",
    title: "Yes",
    type: "radio",
    placeholder: "Yes",
    value: "",
  },
  {
    id: 2,
    formName: "SpecificReturnPolicy",
    title: "No",
    type: "radio",
    placeholder: "No",
    value: "",
  },
];

export const specificPolicyOtherNorthBoardingForm = [
  {
    id: 1,
    formName: "SpecificReturnPolicyOther",
    title: "Exchange",
    type: "radio",
    placeholder: "Exchange",
    value: "",
  },
  {
    id: 2,
    formName: "SpecificReturnPolicyOther",
    title: "Store Credit",
    type: "radio",
    placeholder: "Store Credit",
    value: "",
  },
  {
    id: 3,
    formName: "SpecificReturnPolicyOther",
    title: "Refund Cardholder",
    type: "radio",
    placeholder: "Refund Cardholder",
    value: "",
  },
];

export const submitTransactionsNorthBoardingForm = [
  {
    id: 1,
    formName: "DaysToSubmitTransactions",
    title: "0-3",
    type: "radio",
    placeholder: "0-3",
    value: "",
  },
  {
    id: 2,
    formName: "DaysToSubmitTransactions",
    title: "4-7",
    type: "radio",
    placeholder: "4-7",
    value: "",
  },
  {
    id: 3,
    formName: "DaysToSubmitTransactions",
    title: "8-14",
    type: "radio",
    placeholder: "8-14",
    value: "",
  },
  {
    id: 4,
    formName: "DaysToSubmitTransactions",
    title: "12-14",
    type: "radio",
    placeholder: "12-14",
    value: "",
  },
];

export const licenseVisibleNorthBoardingForm = [
  {
    id: 1,
    formName: "ProperLicenseVisible",
    title: "Yes",
    type: "radio",
    placeholder: "Yes",
    value: "",
  },
  {
    id: 2,
    formName: "ProperLicenseVisible",
    title: "No, Explain:",
    type: "radio",
    placeholder: "No, Explain:",
    value: "",
  },
  {
    id: 3,
    formName: "Explanation",
    title: "Explain here:",
    type: "input",
    placeholder: "Explain",
    value: "",
  },
];
export const prevPocessorNorthBoardingForm = [
  {
    id: 1,
    formName: "PreviousProcessor",
    title: "Previous Processor",
    type: "input",
    placeholder: "",
    value: "",
  },
];

export const northBoardingForm = {
  formTitle: "North Boarding",
  description: "",
  section: [
    // LOCATION AND DISTRIBUTION SECTION
    {
      sectionName: "",
      cards: [
        // 1.ZONE CARD
        {
          title: "1. Zone",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "TimeZone",
              title: "Time Zone",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 2. LOCATION
        {
          title: "2. Location",
          colQty: "2",
          fields: [
            {
              id: 1,
              formName: "Location",
              title: "Mall",
              type: "radio",
              placeholder: "Mall",
              value: "",
              options: [
                {
                  label: "Mall",
                  value: "mall",
                },
                {
                  label: "Isolated",
                  value: "isolated",
                },
                {
                  label: "Apartment",
                  value: "apartment",
                },
                {
                  label: "Home",
                  value: "home",
                },
                {
                  label: "Shopping Area",
                  value: "shoppingArea",
                },
                {
                  label: "Office",
                  value: "office",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ],
            },
            {
              id: 8,
              formName: "LocationOther",
              title: "Other Description:",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 3. SEASONAL
        {
          title: "3. Seasonal",
          colQty: "2",
          fields: [
            {
              id: 1,
              formName: "Seasonal",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
            {
              id: 3,
              formName: "MonthsInOpertation",
              title: "Months in Operation",
              type: "number",
              placeholder: "",
              value: "",
            },
            {
              id: 4,
              formName: "MonthOpenBegin",
              title: "Month Open Begin",
              type: "input",
              placeholder: "e.g. May",
              value: "",
            },
            {
              id: 5,
              formName: "MonthOpenEnd",
              title: "Month Open End",
              type: "input",
              placeholder: "e.g. November",
              value: "",
            },
          ],
        },
        // 4. FLOORS / LEVELS
        {
          title: "4. Floors / Levels",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "FloorsLevels",
              title: "1",
              type: "radio",
              placeholder: "1",
              value: "",
              options: [
                {
                  label: "1",
                  value: "1",
                },
                {
                  label: "2-4",
                  value: "2-4",
                },
                {
                  label: "5-10",
                  value: "5-10",
                },
                {
                  label: "11+",
                  value: "11+",
                },
              ],
            },
          ],
        },
        // 5. MERCHANT OCCUPIES
        {
          title: "5. Merchant Occupies",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MerchantOccupies",
              title: "Ground Floor",
              type: "radio",
              placeholder: "Ground Floor",
              value: "",
              options: [
                {
                  label: "Ground Floor",
                  value: "Ground Floor",
                },
                {
                  label: "Other",
                  value: "Other",
                },
              ],
            },
            {
              id: 2,
              formName: "MerchantOccupiesOther",
              title: "OtherDescription",
              type: "input",
              placeholder: "Other",
              value: "",
            },
          ],
        },
        // 6. FLOORS OCCUPIED BY
        {
          title: "6. Floors Occupied By?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "FloorsOccupiedBy",
              title: "Residential",
              type: "radio",
              placeholder: "Residential",
              value: "",
              options: [
                {
                  label: "Residential",
                  value: "residential",
                },
                {
                  label: "Commercial",
                  value: "commercial",
                },
                {
                  label: "Both",
                  value: "both",
                },
                {
                  label: "None",
                  value: "none",
                },
              ],
            },
          ],
        },
        // 7. MERCHANT NAME DISPLAYED AT
        {
          title: "7. Merchant Name Displayed At",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MerchantNameDisplayed",
              title: "Window",
              type: "radio",
              placeholder: "Window",
              value: "",
              options: [
                {
                  label: "Window",
                  value: "window",
                },
                {
                  label: "Door",
                  value: "door",
                },
                {
                  label: "Store Front",
                  value: "storeFront",
                },
              ],
            },
          ],
        },
        // 8. TIME ZONE
        {
          title: "8. Time Zone",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "TimeZone",
              title: "Time Zone",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 9. APPROXIMATE SQUARE FOOTAGE
        {
          title: "9. Approximate Square Footage",
          colQty: "2",
          fields: [
            {
              id: 1,
              formName: "SquareFootage",
              title: "0-250",
              type: "radio",
              placeholder: "0-250",
              value: "",
              options: [
                {
                  label: "0-250",
                  value: "0-250",
                },
                {
                  label: "251-500",
                  value: "251-500",
                },
                {
                  label: "501-2000",
                  value: "501-2000",
                },
                {
                  label: "2001+",
                  value: "2001+",
                },
              ],
            },
          ],
        },
        // 10. EMPLOYEES
        {
          title: "10. Employees",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "HowManyEmployees",
              title: "How Many Employees:",
              type: "number",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 11. REGISTERS TERMINALS
        {
          title: "11. Registers Terminals",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "RegisterTerminals",
              title: "How Many Registers/Terminals:",
              type: "number",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 12. RETURN POLICY
        {
          title: "12. Return Policy",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "ReturnPolicy",
              title: "Full Refund",
              type: "radio",
              placeholder: "Full Refund",
              value: "",
              options: [
                {
                  label: "Full Refund",
                  value: "fullRefund",
                },
                {
                  label: "Exchange Only",
                  value: "exchangeOnly",
                },
                {
                  label: "None",
                  value: "none",
                },
              ],
            },
          ],
        },
        // 13. DO YOU HAVE REFUND POLICY
        {
          title:
            "13. Do you have a refund policy for your MC/VISA/DISCOVER NETWORK - PAYPAL/AMERICAN EXPRESS OPTBLUE Sales?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "SpecificReturnPolicy",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
          ],
          title2: "If yes, check one:",
          fields2: [
            {
              id: 1,
              formName: "SpecificReturnPolicyOther",
              title: "Exchange",
              type: "radio",
              placeholder: "Exchange",
              value: "",
              options: [
                {
                  label: "Exchange",
                  value: "exchange",
                },
                {
                  label: "Store Credit",
                  value: "storeCredit",
                },
                {
                  label: "Refund Cardholder",
                  value: "refundCardholder",
                },
              ],
            },
          ],
        },
      ],
    },
    // INFORMATION SECTION
    {
      sectionName: "Information",
      cards: [
        // -. HOW MANY DAYS DO YOU SUBMIT CREDIT CARD TRANSACTIONS
        {
          title:
            "If MC / VISA / DISCOVER / PAYPAL / AMERICAN EXPRESS OPTBLUE Credit, How many days do you submit Credit Card transactions?",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "DaysToSubmitTransactions",
              title: "0-3",
              type: "radio",
              placeholder: "0-3",
              value: "",
              options: [
                {
                  label: "0-3",
                  value: "0-3",
                },
                {
                  label: "4-7",
                  value: "4-7",
                },
                {
                  label: "8-14",
                  value: "8-14",
                },
                {
                  label: "12-14",
                  value: "12-14",
                },
              ],
            },
          ],
        },
        // 14. IS PROPER LICENSE VISIBLE (Liquor, Tax ID, etc.):
        {
          title: "14. Is proper license visible (Liquor, Tax ID, etc.):",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "ProperLicenseVisible",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
            {
              id: 2,
              formName: "Explanation",
              title: "Explain here:",
              type: "input",
              placeholder: "Explain",
              value: "",
            },
          ],
        },
        // 15. PREVIOUS PROCESSOR
        {
          title: "15. Previous Processor",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "PreviousProcessor",
              title: "Previous Processor",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 16. YOUR PREVIOUS MERCHANT #
        {
          title: "16. Your Previous Merchant #",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "PreviousMerchant",
              title: "Previous merchant:",
              type: "input",
              placeholder: "#",
              value: "",
            },
          ],
        },
        // 17. CHECK REASON FOR LEAVING
        {
          title: "17. Check reason for Leaving",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "ReasonForLeaving",
              title: "Rate",
              type: "radio",
              placeholder: "Rate",
              value: "",
              options: [
                {
                  label: "Rate",
                  value: "rate",
                },
                {
                  label: "Service",
                  value: "service",
                },
                {
                  label: "Terminated",
                  value: "terminated",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ],
            },
            {
              id: 2,
              formName: "ReasonForLeavingOther",
              title: "Other Description",
              type: "input",
              placeholder: "Other",
              value: "",
            },
          ],
        },
        // 18. PREVIOUS PROCESSOR STATEMENTS?
        {
          title:
            "18. Do You Have Previous Processor MC/Visa/ Discover/American Express OptBlue® Statements?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "PreviousProcessorStatements",
              title: "YesPrevious",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
          ],
        },
        // 19. ARE CUSTOMERS REQUIRED TO LEAVE A DEPOSIT?
        {
          title: "19. Are customers required to leave a Deposit?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "DepositRequired",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
          ],
          title2: "If Yes, % of deposit required:",
          fields2: [
            {
              id: 1,
              formName: "DepositRequiredPercentage",
              title: "Percentage",
              type: "number",
              placeholder: "%",
              value: "",
            },
          ],
        },
        // -- TIME FRAME FOR DELIVERY DAYS
        {
          title: "Time Frame for Delivery Days",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "TimeFrameDeliveryDays",
              title: "",
              type: "number",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 20. MOBILE APPLICATION
        {
          title:
            "20. Does your business offer products and/or services to customers through a mobile application:",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MobileApplication",
              title: "",
              type: "radio",
              placeholder: "",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
          ],
          title2: "",
          fields2: [
            {
              id: 1,
              formName: "MobileApplicationList",
              title: "List name of mobile application:",
              type: "input",
              placeholder: "Separate names with ','",
              value: "",
            },
          ],
        },
      ],
    },
  ],
};

export const flaxRateInterNorthForm = [
  {
    id: 1,
    title: "MC Qualified Credit",
  },
  {
    id: 2,
    formName: "McQualifiedCreditDiscountFee",
    title: "Discount Fee",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 3,
    formName: "McQualifiedCreditTransactionFee",
    title: "Transaction Fee",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 4,
    title: "MC Qualified Non-Pin Debit",
  },
  {
    id: 5,
    formName: "McQualifiedNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 6,
    formName: "McQualifiedNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 7,
    title: "Visa Qual Credit",
  },
  {
    id: 8,
    formName: "VisaQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 9,
    formName: "VisaQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 10,
    title: "Visa Qual Non-Pin Debit",
  },
  {
    id: 11,
    formName: "VisaQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 12,
    formName: "VisaQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 13,
    title: "American Express Qual Credit",
  },
  {
    id: 14,
    formName: "AmericanExpressQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 15,
    formName: "AmericanExpressQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 16,
    title: "DiscoverNet Qual Credit",
  },
  {
    id: 17,
    formName: "DiscoverNetQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 18,
    formName: "DiscoverNetQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 19,
    title: "DiscoverNet Qual Non-Pin Debit",
  },
  {
    id: 20,
    formName: "DiscoverNetQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 21,
    formName: "DiscoverNetQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 22,
    title: "PayPal Qual Credit",
  },
  {
    id: 23,
    formName: "PayPalQualCredityDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 24,
    formName: "PayPalQualCredityTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 25,
    title: "Swiped",
  },
  {
    id: 26,
    formName: "SwipedDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 27,
    formName: "SwipedTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 28,
    title: "Non-Swiped",
  },
  {
    id: 29,
    formName: "NonSwipedDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 30,
    formName: "NonSwipedTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 31,
    title: "Pin Less",
  },
  {
    id: 32,
    formName: "PinLessDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 33,
    title: "",
  },
  {
    id: 34,
    title: "PINless Debit Transaction Fee",
  },
  {
    id: 35,
    title: "",
  },
  {
    id: 36,
    formName: "PinLessDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 37,
    title: "PINless Debit Denial Fee",
  },
  {
    id: 38,
    title: "",
  },
  {
    id: 39,
    formName: "PinLessDebitDenialTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
];

export const flexRateFeesNorthForm = [
  {
    id: 1,
    formName: "Nameless",
    title: "-",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 2,
    formName: "ChargebackProcessing",
    title: "Chargeback Processing",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 3,
    formName: "AmexChargebackFee",
    title: "Amex Chargeback Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 4,
    formName: "DiscoverChargebackFee",
    title: "Discover Chargeback Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 5,
    formName: "RetrievalFee",
    title: "Retrieval Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 6,
    formName: "AmexChargebackRetrievalFee",
    title: "Amex Chargeback Retrieval Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 7,
    formName: "DiscoverRetrievalFee",
    title: "Discover Retrieval Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 8,
    formName: "VisaMcDiscChargebackRetrievalFee",
    title: "Visa Mc Disc Chargeback Retrieval Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 9,
    formName: "BatchSettlementFee",
    title: "Batch Settlement Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
  {
    id: 10,
    formName: "TinTfnBlankInvalidFee",
    title: "Tin Tfn Blank Invalid Fee",
    type: "input",
    placeholder: "",
    value: "",
  },
];

export const tieredPricingNorthForm = [
  {
    id: 1,
    title: "Mc Qual Credit",
  },
  {
    id: 2,
    formName: "McQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 3,
    formName: "McQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 4,
    title: "Mc Mid Qual Credit",
  },
  {
    id: 5,
    formName: "McMidQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 6,
    formName: "McMidQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 7,
    title: "Mc Non Qual Credit",
  },
  {
    id: 8,
    formName: "McNonQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 9,
    formName: "McNonQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 10,
    title: "Mc Qual Non Pin Debit",
  },
  {
    id: 11,
    formName: "McQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 12,
    formName: "McQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 13,
    title: "Mc Mid Qual Non Pin Debit",
  },
  {
    id: 14,
    formName: "McMidQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 15,
    formName: "McMidQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 16,
    title: "Mc Non Qual Non Pin Debit",
  },
  {
    id: 17,
    formName: "McNonQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 18,
    formName: "McNonQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 19,
    title: "Visa Qual Credit",
  },
  {
    id: 20,
    formName: "VisaQualCreditDiscountFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 21,
    formName: "VisaQualCreditTransactionFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 22,
    title: "Visa Mid Qual Credit",
  },
  {
    id: 23,
    formName: "VisaMidQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 24,
    formName: "VisaMidQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 25,
    title: "Visa Non Qual Credit",
  },
  {
    id: 26,
    formName: "VisaNonQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 27,
    formName: "VisaNonQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 28,
    title: "Visa Qual Non Pin Debit",
  },
  {
    id: 29,
    formName: "VisaQualNonPinDebitDiscountFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 30,
    formName: "VisaQualNonPinDebitTransactionFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 31,
    title: "Visa Mid Qual Non Pin Debit",
  },
  {
    id: 32,
    formName: "VisaMidQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 33,
    formName: "VisaMidQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 34,
    title: "Visa Non Qual Non Pin Debit",
  },
  {
    id: 35,
    formName: "VisaNonQualiNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 36,
    formName: "VisaNonQualiNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 37,
    title: "Discover Qual Credit",
  },
  {
    id: 38,
    formName: "DiscoverQualCreditDiscountFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 39,
    formName: "DiscoverQualCreditTransactionFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 40,
    title: "Discover Mid Qual Credit",
  },
  {
    id: 41,
    formName: "DiscoverMidQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 42,
    formName: "DiscoverMidQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 43,
    title: "Discover Non Qual Credit",
  },
  {
    id: 44,
    formName: "DiscoverNonQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 45,
    formName: "DiscoverNonQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 46,
    title: "Discover Qual Non Pin Debit",
  },
  {
    id: 47,
    formName: "DiscoverQualNonPinDebitDiscountFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 48,
    formName: "DiscoverQualNonPinDebitTransactionFee2",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 49,
    title: "Discover Mid Qual Non Pin Debit",
  },
  {
    id: 50,
    formName: "DiscoverMidQualNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 51,
    formName: "DiscoverMidQualNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 52,
    title: "Discover Non Qual Non Pin Debit",
  },
  {
    id: 53,
    formName: "DiscoverNonQualiNonPinDebitDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 54,
    formName: "DiscoverNonQualiNonPinDebitTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 55,
    title: "PayPal Qual Credit",
  },
  {
    id: 56,
    formName: "PayPalQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 57,
    formName: "PayPalQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 58,
    title: "Ame Exp Qual Credit",
  },
  {
    id: 59,
    formName: "AmeExpQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 60,
    formName: "AmeExpQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 61,
    title: "Ame Exp Mid Qual Credit",
  },
  {
    id: 62,
    formName: "AmeExpMidQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 63,
    formName: "AmeExpMidQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 64,
    title: "Ame Exp Non Qual Credit",
  },
  {
    id: 65,
    formName: "AmeExpNonQualCreditDiscountFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
  {
    id: 66,
    formName: "AmeExpNonQualCreditTransactionFee",
    title: "",
    type: "input",
    placeholder: "%",
    value: "",
  },
];

export const billedMonthlyFeesInterForm = [
  {
    id: 1,
    title: "Fee Per TID:",
    type: "number",
    placeholder: "$",
    formName: "FeePerTid",
    value: "",
  },
  {
    id: 2,
    title: "# Of TIDs:",
    type: "number",
    placeholder: "#",
    formName: "OfTids",
    value: "",
  },
  {
    id: 3,
    title: "Total:",
    type: "number",
    placeholder: "$",
    formName: "Total",
    value: "",
  },
  {
    id: 4,
    title: "Monthly Service Fee:",
    type: "number",
    placeholder: "$",
    formName: "MonthlyServiceFee",
    value: "",
  },
  {
    id: 5,
    title: "ACH Reject Fee:",
    type: "number",
    placeholder: "$",
    formName: "AchRejectFee",
    value: "",
  },
  {
    id: 6,
    title: "Minimum Processing Fee:",
    type: "number",
    placeholder: "",
    formName: "MinimumProcessingFee",
    value: "",
  },
  {
    id: 7,
    title: "Annual Membership Fee:",
    type: "number",
    placeholder: "$",
    formName: "AnnualMembershipFee",
    value: "",
  },
];

export const buypassAuthorizationInterForm = [
  {
    id: 1,
    title: "Voyager:",
    type: "number",
    placeholder: "$",
    formName: "Voyager",
    value: "",
  },
  {
    id: 2,
    title: "WEX:",
    type: "number",
    placeholder: "$",
    formName: "WEX",
    value: "",
  },
  {
    id: 3,
    title: "FleetCor Authorization:",
    type: "number",
    placeholder: "$",
    formName: "FleetCorAuth",
    value: "",
  },
];

export const wexFullFeesInterForm = [
  {
    id: 1,
    title: "WEX Auth Fees:",
    type: "number",
    placeholder: "$",
    formName: "WexAuthFees",
    value: "",
  },
  {
    id: 2,
    title: "WEX Sale Discount:",
    type: "number",
    placeholder: "%",
    formName: "WexSaleDiscount",
    value: "",
  },
  {
    id: 3,
    title: "WEX Refund Discount:",
    type: "number",
    placeholder: "%",
    formName: "WexRefundDiscount",
    value: "",
  },
  {
    id: 4,
    title: "WEX Chargebacks Discount:",
    type: "number",
    placeholder: "%",
    formName: "WexChargebacksDiscount",
    value: "",
  },
  {
    id: 5,
    title: "WEX Chargebacks Reversal Discount:",
    type: "number",
    placeholder: "%",
    formName: "WexReversalDiscount",
    value: "",
  },
  {
    id: 6,
    title: "WEX Chargeback Fee:",
    type: "number",
    placeholder: "$",
    formName: "WexChargebackFee",
    value: "",
  },
  {
    id: 7,
    title: "WEX Chageback Reversal Fee:",
    type: "number",
    placeholder: "$",
    formName: "WexChargebacksReversalFee",
    value: "",
  },
];

export const passThroughInterForm = [
  {
    id: 1,
    title: "MC Qual Credit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassMcQualCreditDiscountFee",
    value: "",
  },
  {
    id: 2,
    title: "Visa Qual Credit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassVisaQualCreditDiscountFee",
    value: "",
  },
  {
    id: 3,
    title: "Discover Net Credit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassDiscNetCreditDiscountFee",
    value: "",
  },
  {
    id: 4,
    title: "Amex Credit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassAmeExpCreditDiscountFee",
    value: "",
  },
  {
    id: 5,
    title: "MC Qual Non Pin Debit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassMcQualNonPinDebitDiscountFee",
    value: "",
  },
  {
    id: 6,
    title: "Visa Qual Non Pin Debit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassVisaQualNonPinDebitDiscountFee",
    value: "",
  },
  {
    id: 7,
    title: "Discover Qual Non Pin Debit Discount Fee:",
    type: "number",
    placeholder: "%",
    formName: "PassDiscQualNonPinDebiDiscountFee",
    value: "",
  },
  {
    id: 8,
    title: "Sale Credit Non Pin Transaction Fee:",
    type: "number",
    placeholder: "$",
    formName: "PassSaleCreditNonPinTransactionFee",
    value: "",
  },
  {
    id: 9,
    title: "Amex Transaction Fee:",
    type: "number",
    placeholder: "$",
    formName: "PassAmeExpTransactionFee",
    value: "",
  },
];

export const authAvsFeesInterForm = [
  {
    id: 1,
    title: "Mc Auth Fee:",
    type: "number",
    placeholder: "$",
    formName: "McAuthFee",
    value: "",
  },
  {
    id: 2,
    title: "Visa Auth Fee:",
    type: "number",
    placeholder: "$",
    formName: "VisaAuthFee",
    value: "",
  },
  {
    id: 3,
    title: "Discover Auth Fee:",
    type: "number",
    placeholder: "$",
    formName: "DiscoverAuthFee",
    value: "",
  },
  {
    id: 4,
    title: "American Express Auth Fee:",
    type: "number",
    placeholder: "$",
    formName: "AmericanExpressAuthFee",
    value: "",
  },
];

export const pinDebitInterForm = [
  {
    id: 1,
    title: "Debit Sales Discount:",
    type: "number",
    placeholder: "$",
    formName: "DebitSalesDiscount",
    value: "",
  },
  {
    id: 2,
    title: "ATM Card Transaction Fee:",
    type: "number",
    placeholder: "$",
    formName: "AtmCardTransactionFee",
    value: "",
  },
  {
    id: 3,
    title: "Debit Card Authorization Fee:",
    type: "number",
    placeholder: "$",
    formName: "DebitCardAuthorizationFee",
    value: "",
  },
  {
    id: 4,
    title: "Debit Decline Interchange Fee:",
    type: "number",
    placeholder: "$",
    formName: "DebitDeclineInterchangeFee",
    value: "",
  },
  {
    id: 5,
    title: "Debit Interchange Fee:",
    type: "number",
    placeholder: "$",
    formName: "DebitInterchangeFee",
    value: "",
  },
  {
    id: 6,
    title: "Debit Pre Auth:",
    type: "number",
    placeholder: "$",
    formName: "DebitPreAuth",
    value: "",
  },
  {
    id: 7,
    title: "Adjustment Fee:",
    type: "number",
    placeholder: "$",
    formName: "AdjustmentFee",
    value: "",
  },
  {
    id: 8,
    title: "Pin Debit Declined:",
    type: "number",
    placeholder: "$",
    formName: "PinDebitDeclined",
    value: "",
  },
];

// FSP APPLICATIONS - MANUAL ENTRIES
export const fspManualEntryForm = [
  {
    id: 1,
    title: "Client Business Name DBA",
    type: "input",
    placeholder: "",
    formName: "DebitSalesDiscount",
    value: ""
  },
  {
    id: 2,
    title: "Client Phone:",
    type: "number",
    placeholder: "(___) ___-____",
    formName: "DebitSalesDiscount",
    value: ""
  },
  {
    id: 3,
    title: "Email Statements to:",
    type: "input",
    placeholder: "name@email.com",
    formName: "DebitSalesDiscount",
    value: ""
  },
  {
    id: 4,
    title: "Fax:",
    type: "number",
    placeholder: "(___) ___-____",
    formName: "DebitSalesDiscount",
    value: ""
  },
]
export const fspManualLocationEntryForm = [
  {
    id: 1,
    title: "Street",
    type: "input",
    placeholder: "123 North Road",
    formName: "DebitSalesDiscount",
    value: ""
  },
  {
    id: 2,
    title: "City:",
    type: "input",
    placeholder: "",
    formName: "DebitSalesDiscount",
    value: ""
  },
  {
    id: 3,
    title: "State:",
    type: "input",
    placeholder: "Arizona",
    formName: "DebitSalesDiscount",
    value: ""
  },
  {
    id: 4,
    title: "Postal Code:",
    type: "number",
    placeholder: "ZipCode",
    formName: "DebitSalesDiscount",
    value: ""
  },
]

// New First Data NORTH WAVit 2502-2 APPLICATION DATA

export const newWavitApplicationTabs = [
  {
    id: "1",
    title: "Merchant Detail",
    value: "merchantDetail",
    abbreviation: "MD",
    icon: User2,
  },
  {
    id: "2",
    title: "Financial Information",
    value: "financialInformation",
    abbreviation: "FI",
    icon: CircleDollarSign,
  },
  {
    id: "3",
    title: "Merchant Owner",
    value: "merchantOwner",
    abbreviation: "MO",
    icon: KeyRound,
  },
  {
    id: "4",
    title: "Programming Request",
    value: "programmingRequest",
    abbreviation: "PR",
    icon: Laptop,
  },
  {
    id: "5",
    title: "North Details",
    value: "northDetails",
    abbreviation: "ND",
    icon: ArrowUp,
  },
];

// New OMAHA APPLICATION AND AGREEMENT DATA
export const newOmahaApplicationTabs = [
  {
    id: "1",
    title: "OMAHA Details",
    value: "omahaDetails",
    abbreviation: "OD",
    icon: MoveRight,
  },
];

export const omahaBoardingForm = {
  formTitle: "OMAHA Boarding",
  description: "",
  section: [
    // LOCATION AND DISTRIBUTION SECTION
    {
      sectionName: "",
      cards: [
        // 1.ZONE CARD
        {
          title: "1. Zone",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "Zone",
              title: "Business District",
              type: "radio",
              placeholder: "Business District",
              value: "",
              options: [
                {
                  label: "Business District",
                  value: "businessDistrict",
                },
                {
                  label: "Residential",
                  value: "residential",
                },
                {
                  label: "Industrial",
                  value: "industrial",
                },
              ],
            },
          ],
        },
        // 2. LOCATION
        {
          title: "2. Location",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "Location",
              title: "",
              type: "radio",
              placeholder: "",
              value: "",
              options: [
                {
                  label: "Home",
                  value: "Home",
                },
                {
                  label: "Apartment",
                  value: "Apartment",
                },
                {
                  label: "Office",
                  value: "Office",
                },
                {
                  label: "Shopping Area",
                  value: "ShoppingArea",
                },
                {
                  label: "Flea Market",
                  value: "Flea Market",
                },
                {
                  label: "Isolated",
                  value: "Isolated",
                },
                {
                  label: "Door To Door",
                  value: "DoorToDoor",
                },
                {
                  label: "Mall",
                  value: "Mall",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ],
            },
          ],
        },
        // 3. HOW MANY EMPLOYEES
        {
          title: "3. Employees",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "HowManyEmployees",
              title: "How many employess?",
              type: "input",
              placeholder: "0",
              value: "",
            },
          ],
        },
        // 4. REGISTER TERMINALS
        {
          title: "4. Register Terminals",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "RegisterTerminals",
              title: "How many registers/Terminals:",
              type: "input",
              placeholder: "0",
              value: "",
            },
          ],
        },
        // 5. IS PROPER LICENSE VISIBLE
        {
          title: "5. Is Proper License Visible",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "ProperLicenseVisible",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "Yes",
                },
                {
                  label: "No",
                  value: "No",
                },
              ],
            },
            {
              id: 2,
              formName: "Explanation",
              title: "Explanation",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 6. MERCHANT NAME DISPLAYED AT?
        {
          title: "6. Merchant Name Displayed At?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MerchantNameDisplayed",
              title: "Window",
              type: "radio",
              placeholder: "Window",
              value: "",
              options: [
                {
                  label: "Window",
                  value: "window",
                },
                {
                  label: "Door",
                  value: "Door",
                },
                {
                  label: "Store Front",
                  value: "StoreFront",
                },
              ],
            },
          ],
        },
        // 7. FLOORS OCCUPIED BY
        {
          title: "7. Floors Occupied by?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "FloorsOccupiedBy",
              title: "Residential",
              type: "radio",
              placeholder: "Residential",
              value: "",
              options: [
                {
                  label: "Residential",
                  value: "Residential",
                },
                {
                  label: "Commercial",
                  value: "Commercial",
                },
                {
                  label: "Both",
                  value: "Both",
                },
                {
                  label: "None",
                  value: "None",
                },
              ],
            },
          ],
        },
        // 8. MERCHANT OCCUPIES
        {
          title: "8. Merchant Occupies",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MerchantOccupies",
              title: "Ground Floor",
              type: "radio",
              placeholder: "Ground Floor",
              value: "",
              options: [
                {
                  label: "Ground Floor",
                  value: "GroundFloor",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ],
            },
            {
              id: 2,
              formName: "MerchantOccupiesOther",
              title: "",
              type: "input",
              placeholder: "Other",
              value: "",
            },
          ],
        },
        // 9. FLOORS / LEVELS
        {
          title: "9. Floors / Levels",
          colQty: "2",
          fields: [
            {
              id: 1,
              formName: "FloorsLevels",
              title: "1-2",
              type: "radio",
              placeholder: "1-2",
              value: "",
              options: [
                {
                  label: "1-2",
                  value: "1-2",
                },
                {
                  label: "3-4",
                  value: "3-4",
                },
                {
                  label: "5-10",
                  value: "5-10",
                },
                {
                  label: "11+",
                  value: "11+",
                },
              ],
            },
          ],
        },
        // 10. APPROXIMATE SQUARE FOOTAGE
        {
          title: "10. Approximate Square Footage",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "SquareFootage",
              title: "0-250",
              type: "ratio",
              placeholder: "0-250",
              value: "",
              options: [
                {
                  label: "0-250",
                  value: "0-250",
                },
                {
                  label: "251-500",
                  value: "251-500",
                },
                {
                  label: "501-2000",
                  value: "501-2000",
                },
                {
                  label: "2001+",
                  value: "2001+",
                },
              ],
            },
          ],
        },
        // 11. DEPOSIT
        {
          title: "11. Deposit",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "DepositRequired",
              title: "No",
              type: "radio",
              placeholder: "No",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "Yes",
                },
                {
                  label: "No",
                  value: "No",
                },
              ],
            },
            {
              id: 2,
              formName: "DepositPercentage",
              title: "If Yes, % of deposit required:",
              type: "input",
              placeholder: "%",
              value: "",
            },
          ],
        },
      ],
    },
    // INFORMATION SECTION
    {
      sectionName: "Information",
      cards: [
        // 12. RETURN POLICY
        {
          title: "12. Return Policy",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "ReturnPolicy",
              title: "Full Refund",
              type: "radio",
              placeholder: "Full Refund",
              value: "",
              options: [
                {
                  label: "Full Refund",
                  value: "FullRefund",
                },
                {
                  label: "Exchange Only",
                  value: "ExchangeOnly",
                },
                {
                  label: "None",
                  value: "None",
                },
              ],
            },
          ],
        },
        // 13. DO YOU HAVE REFUND POLICY
        {
          title:
            "13. Do you have a refund policy for Mastercard / Visa / Discover / PayPal?",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "RefundPolicy",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "yes",
                },
                {
                  label: "No",
                  value: "no",
                },
              ],
            },
          ],
          title2: "If yes, check one:",
          fields2: [
            {
              id: 1,
              formName: "RefundPolicySpecific",
              title: "Exchange",
              type: "radio",
              placeholder: "Exchange",
              value: "",
              options: [
                {
                  label: "Exchange",
                  value: "Exchange",
                },
                {
                  label: "Store Credit",
                  value: "StoreCredit",
                },
                {
                  label:
                    "Mastercard/Visa/Dicover Network-PayPal/American Express",
                  value: "RefundCardholder",
                },
              ],
            },
          ],
        },
        // -. HOW MANY DAYS DO YOU SUBMIT CREDIT CARD TRANSACTIONS
        {
          title: "How many days?",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "DaysToRefund",
              title: "0-3",
              type: "radio",
              placeholder: "0-3",
              value: "",
              options: [
                {
                  label: "0-3",
                  value: "0-3",
                },
                {
                  label: "4-7",
                  value: "4-7",
                },
                {
                  label: "8-14",
                  value: "8-14",
                },
                {
                  label: "Over 14",
                  value: "14+",
                },
              ],
            },
          ],
        },
        // 14. ADVERTISING METHOD
        {
          title: "14. Advertising Method",
          colQty: "2",
          fields: [
            {
              id: 1,
              formName: "AdvCatalog",
              title: "Catalog",
              type: "checkbox",
              placeholder: "Catalog",
              value: "",
            },
            {
              id: 2,
              formName: "AdvBrochure",
              title: "Brochure",
              type: "checkbox",
              placeholder: "Brochure",
              value: "",
            },
            {
              id: 3,
              formName: "AdvDirectMail",
              title: "Direct Mail",
              type: "checkbox",
              placeholder: "Direct Mail",
              value: "",
            },
            {
              id: 4,
              formName: "AdvTvRadio",
              title: "TV/Radio",
              type: "checkbox",
              placeholder: "TV/Radio",
              value: "",
            },
            {
              id: 5,
              formName: "AdvInternet",
              title: "Internet",
              type: "checkbox",
              placeholder: "Internet",
              value: "",
            },
            {
              id: 6,
              formName: "AdvPhone",
              title: "Phone",
              type: "checkbox",
              placeholder: "Phone",
              value: "",
            },
            {
              id: 7,
              formName: "AdvNews",
              title: "Newspaper/Journals",
              type: "checkbox",
              placeholder: "Newspaper / Journals",
              value: "",
            },
            {
              id: 8,
              formName: "AdvOther",
              title: "Other",
              type: "checkbox",
              placeholder: "Other",
              value: "",
            },
          ],
        },
        // 15. PREVIOUS PROCESSOR
        {
          title: "15. Previous Processor",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "PreviousProcessor",
              title: "Previous Processor",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
        // 16. CHECK REASON FOR LEAVING
        {
          title: "16. Check reason for Leaving",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "ReasonForLeaving",
              title: "Rate",
              type: "radio",
              placeholder: "Rate",
              value: "",
              options: [
                {
                  label: "Rate",
                  value: "Rate",
                },
                {
                  label: "Service",
                  value: "Service",
                },
                {
                  label: "Terminated",
                  value: "Terminated",
                },
                {
                  label: "Other Reason",
                  value: "OtherReason",
                },
              ],
            },
            {
              id: 2,
              formName: "ReasonForLeavingOther",
              title: "Other Description",
              type: "input",
              placeholder: "Other",
              value: "",
            },
          ],
        },
        // 17. MOBILE APPLICATION
        {
          title:
            "17. Does your business offer products and/or services to customers through a mobile application:",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MobileApplication",
              title: "Yes",
              type: "radio",
              placeholder: "Yes",
              value: "",
              options: [
                {
                  label: "Yes",
                  value: "Yes",
                },
                {
                  label: "No",
                  value: "No",
                },
              ],
            },
          ],
          title2: "",
          fields2: [
            {
              id: 1,
              formName: "MobileApplicationList",
              title: "List name of mobile application:",
              type: "input",
              placeholder: "",
              value: "",
            },
          ],
        },
      ],
    },
    // MISCELLANEOUS SECTION
    {
      sectionName: "Miscellaneous Fees / TIN/TFN & Regulatory Product Fees",
      cards: [
        // Monthly Statement Fee
        {
          title: "Monthly Statement Fee",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "MonthlyStatementFee",
              title: "Monthly Statement Fee",
              type: "number",
              placeholder: "$",
              value: "",
            },
          ],
        },
        {
          title: "TIN/TFN & Regulatory Product Fees",
          colQty: "1",
          fields: [
            {
              id: 1,
              formName: "TinTfnInvalid",
              title: "TIN/TFN Invalid",
              type: "number",
              placeholder: "%",
              value: "",
            },
            {
              id: 2,
              formName: "WebsiteUsage",
              title: "Website Usage",
              type: "number",
              placeholder: "%",
              value: "",
            },
          ],
        },
      ],
    },
  ],
};

export const serviceFeesOmahaForm = [
  {
    id: 1,
    title: "Dues and Assessments:",
    type: "checkbox",
    placeholder: "",
    formName: "DuesAndAssessments",
    value: "",
  },
  {
    id: 2,
    title: "Mastercard Qual Credit:",
    type: "number",
    placeholder: "$",
    formName: "MastercardQualCredit",
    value: "",
  },
  {
    id: 3,
    title: "Mastercard Qual Debit:",
    type: "number",
    placeholder: "$",
    formName: "MastercardQualDebit",
    value: "",
  },
  {
    id: 4,
    title: "Visa Qual Credit:",
    type: "number",
    placeholder: "$",
    formName: "VisaQualCredit",
    value: "",
  },
  {
    id: 5,
    title: "Visa Qual Debit:",
    type: "number",
    placeholder: "$",
    formName: "VisaQualDebit",
    value: "",
  },
  {
    id: 6,
    title: "Discover Net PayPal Qual Credit:",
    type: "number",
    placeholder: "$",
    formName: "DiscoverNetPaypalQualCredit",
    value: "",
  },
  {
    id: 7,
    title: "Discover Net PayPal Qual Debit:",
    type: "number",
    placeholder: "$",
    formName: "DiscoverNetPaypalQualDebit",
    value: "",
  },
  {
    id: 8,
    title: "AmEx Qual Credit:",
    type: "number",
    placeholder: "$",
    formName: "AmExQualCredit",
    value: "",
  },
];

export const authCaptureOmahaForm = [
  {
    id: 1,
    title: "Mastercard Visa Auth Capture Fee:",
    type: "number",
    placeholder: "$",
    formName: "MastercardVisaAuthCaptureFee",
    value: "",
  },
  {
    id: 2,
    title: "Discover Net PayPal Auth Capture Fee:",
    type: "number",
    placeholder: "$",
    formName: "DiscoverNetPayPalAuthCaptureFee",
    value: "",
  },
  {
    id: 3,
    title: "Amex Op Blue Auth Capture Fee:",
    type: "number",
    placeholder: "$",
    formName: "AmexOpBlueAuthCaptureFee",
    value: "",
  },
];

// EDIT MERCHANT -
// Merchant Information
export const merchantInfoEditForm = [
  {
    id: 1,
    title: "MID:",
    type: "string",
    placeholder: "811237",
    formName: "MID",
    value: "",
  },
  {
    id: 2,
    title: "Legal Name:",
    type: "string",
    placeholder: "Legal Name",
    formName: "LegalName",
    value: "",
  },
  {
    id: 3,
    title: "Contact Name:",
    type: "string",
    placeholder: "Contact Name",
    formName: "ContactName",
    value: "",
  },
  {
    id: 4,
    title: "Address:",
    type: "string",
    placeholder: "Insert the Address",
    formName: "Address",
    value: "",
  },
  {
    id: 5,
    title: "Ste/Apt:",
    type: "string",
    placeholder: "",
    formName: "SteApt",
    value: "",
  },
  {
    id: 6,
    title: "City:",
    type: "string",
    placeholder: "Scottsdale",
    formName: "City",
    value: "",
  },
  {
    id: 7,
    title: "State:",
    type: "string",
    placeholder: "AZ",
    formName: "State",
    value: "",
  },
  {
    id: 8,
    title: "Zip:",
    type: "string",
    placeholder: "Zipcode",
    formName: "Zip",
    value: "",
  },
  {
    id: 9,
    title: "Phone 1:",
    type: "string",
    placeholder: "",
    formName: "phone1",
    value: "",
  },
  {
    id: 10,
    title: "Ext 1:",
    type: "string",
    placeholder: "",
    formName: "Ext1",
    value: "",
  },
  {
    id: 11,
    title: "Phone 2:",
    type: "string",
    placeholder: "",
    formName: "Phone2",
    value: "",
  },
  {
    id: 12,
    title: "Ext 2:",
    type: "string",
    placeholder: "",
    formName: "Ext2",
    value: "",
  },
  {
    id: 13,
    title: "Email:",
    type: "string",
    placeholder: "example@email.com",
    formName: "Email",
    value: "",
  },
  {
    id: 14,
    title: "Website:",
    type: "string",
    placeholder: "www.mysite.com",
    formName: "Website",
    value: "",
  },
];

export const dbaInfoForm = [
  {
    id: 1,
    title: "DBA Legal Name:",
    type: "string",
    placeholder: "",
    formName: "DbaLegalName",
    value: "",
  },
  {
    id: 2,
    title: "DBA Contact Name:",
    type: "string",
    placeholder: "",
    formName: "DbaContactName",
    value: "",
  },
  {
    id: 3,
    title: "DBA Address:",
    type: "string",
    placeholder: "",
    formName: "DbaAddress",
    value: "",
  },
  {
    id: 4,
    title: "DBA Ste/Apt:",
    type: "string",
    placeholder: "",
    formName: "DbaSteApt",
    value: "",
  },
  {
    id: 5,
    title: "DBA City:",
    type: "string",
    placeholder: "",
    formName: "DbaCity",
    value: "",
  },
  {
    id: 6,
    title: "DBA State:",
    type: "string",
    placeholder: "",
    formName: "DbaState",
    value: "",
  },
  {
    id: 7,
    title: "DBA Zip:",
    type: "string",
    placeholder: "",
    formName: "DbaZip",
    value: "",
  },
];

export const merchantEquipmentOrderTable = [
  {
    Id: 1,
    Date: "2/2/2023",
    Description: "ChargeAnywhere Bluetooth Swiper BT3X",
    Serial: "",
    Tracking: "",
    Price: 124.0,
    Status: "1 - In Process",
    Edit: "",
    Delete: "",
  },
  {
    Id: 2,
    Date: "1/5/2024",
    Description: "Dejavoo DJ-02",
    Serial: "SR90283",
    Tracking: "",
    Price: 654.0,
    Status: "3 - Shipped",
    Edit: "",
    Delete: "",
  },
];

export const merchantEquipmentTrackingTable = [
  {
    Id: 1,
    ContactName: "Tony Stark",
    CompanyName: "Stark",
    Addres: "75 North Street",
    CityStZip: "Scottsdale / AZ / 85001",
    DimW: "12",
    Service: "",
    Date: "",
    Tracking: "T22891273",
    Details: "",
  },
  {
    Id: 1,
    ContactName: "Tony Stark",
    CompanyName: "Stark",
    Addres: "75 North Street",
    CityStZip: "Scottsdale / AZ / 85001",
    DimW: "12",
    Service: "",
    Date: "",
    Tracking: "T22891273",
    Details: "",
  },
];

export const merchantOptionsForm = [
  {
    id: 1,
    formName: "Warrantly",
    title: "Warrantly",
    type: "checkbox",
    placeholder: "Warrantly",
    value: "",
  },
  {
    id: 2,
    formName: "WillPayByACH",
    title: "Will Pay by ACH or Invoice",
    type: "checkbox",
    placeholder: "Will Pay by ACH or Invoice",
    value: "",
  },
];

export const merchantBillingForm = [
  {
    id: 1,
    formName: "Billing",
    title: "Agent",
    type: "radio",
    placeholder: "Agent",
    value: "",
    options: [
      {
        label: "Agent",
        value: "Agent",
      },
      {
        label: "Merchant",
        value: "Merchant",
      },
      {
        label: "Other",
        value: "Other",
      },
    ],
  },
];

export const shipMethodMerchantForm = [
  {
    id: 1,
    formName: "ShipPriority",
    title: "Ground",
    type: "radio",
    placeholder: "Ground",
    value: "",
  },
  {
    id: 2,
    formName: "ShipPriority",
    title: "2 Day",
    type: "radio",
    placeholder: "2 Day",
    value: "",
  },
  {
    id: 3,
    formName: "ShipPriority",
    title: "3 Day",
    type: "radio",
    placeholder: "3 Day",
    value: "",
  },
  {
    id: 4,
    formName: "ShipPriority",
    title: "Standard",
    type: "radio",
    placeholder: "Standard",
    value: "",
  },
  {
    id: 4,
    formName: "ShipPriority",
    title: "Priority",
    type: "radio",
    placeholder: "Priority",
    value: "",
  },
];

export const dbaSelectionMerchantForm = [
  {
    id: 1,
    formName: "UseLegalDbaInfo",
    title: "Use Legal Business Address",
    placeholder: "Use Business Address",
    value: "",
  },
  {
    id: 2,
    formName: "UseLegalDbaInfo",
    title: "Use DBA Address",
    placeholder: "Use DBA Address",
    value: "",
  },
  {
    id: 3,
    formName: "UseLegalDbaInfo",
    title: "Use Last Shipping Address",
    placeholder: "Use Last Shipping Address",
    value: "",
  },
];

export const contactInfoMerchantForm = [
  {
    id: 1,
    title: "Contact Name:",
    type: "string",
    placeholder: "",
    formName: "ContactName",
    value: "",
  },
  {
    id: 2,
    title: "Address:",
    type: "string",
    placeholder: "",
    formName: "Address",
    value: "",
  },
  {
    id: 3,
    title: "Address 2:",
    type: "string",
    placeholder: "",
    formName: "Address2",
    value: "",
  },
  {
    id: 4,
    title: "City:",
    type: "string",
    placeholder: "",
    formName: "City",
    value: "",
  },
  {
    id: 5,
    title: "State:",
    type: "string",
    placeholder: "",
    formName: "State",
    value: "",
  },
  {
    id: 6,
    title: "Postal Code:",
    type: "string",
    placeholder: "",
    formName: "PostalCode",
    value: "",
  },
  {
    id: 7,
    title: "Contact Phone:",
    type: "string",
    placeholder: "",
    formName: "ContactPhone",
    value: "",
  },
  {
    id: 8,
    title: "Contact Email:",
    type: "string",
    placeholder: "",
    formName: "ContactEmail",
    value: "",
  },
];

// AGENT SETTINGS FORM

export const boardingAgentsTabs = [
  {
    id: "1",
    title: "Agent Details",
    value: "agentDetails",
    icon: BookUser,
  },
  {
    id: "2",
    title: "Agent Settings",
    value: "agentSettings",
    icon: UserRoundCog,
  },
];

export const boardingAgentSettingsForm = {
  formTitle: "Agent Settings",
  description: "",
  section: [
    //
    {
      sectionName: "",
      cards: [
        // Common To ALL (North / Omaha / WAVit Interchange / FSP)
        {
          title: "Common To ALL (North / Omaha / WAVit Interchange / FSP)",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "EarlyTerminationFee",
              title: "Early Termination Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 2,
              formName: "MonthlyFee",
              title: "Monthly Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 3,
              formName: "Zone",
              title: "Hide Equipment Price",
              type: "checkbox",
              placeholder: "Hide Equipment Price",
              value: "",
            },
          ],
        },
        // FSP Only
        {
          title: "FSP Only",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "VoiceAuthorization",
              title: "Voice Authorization $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 2,
              formName: "AudioResponse",
              title: "Audio Response (ARU) $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 3,
              formName: "VoiceAddressVerification",
              title: "Voice Address Verification #:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 4,
              formName: "TinInvalidFee",
              title: "TIN Invalid Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 5,
              formName: "AchRejectFee",
              title: "ACH Reject Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 6,
              formName: "ChargebackFee",
              title: "Chargeback Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 7,
              formName: "MonthlyStatementFee",
              title: "Monthly Statement Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
          ],
        },
        // Common To North / Omaha
        {
          title: "Common To North / Omaha",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "NorthOmahaMonthlyFee",
              title: "Monthly Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 2,
              formName: "NorthOmahaAchRejectFee",
              title: "ACH Reject Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
          ],
        },
        // Cash Discount Flat Rate (WAVit Only)
        {
          title: "Cash Discount Flat Rate (WAVit Only)",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "WavitCashDiscountRate",
              title: "Cash Discount Rate %:",
              type: "number",
              placeholder: "%",
              value: "",
            },
            {
              id: 2,
              formName: "WavitDiscount",
              title: "Discount %:",
              type: "number",
              placeholder: "%",
              value: "",
            },
          ],
        },
        // Omaha Interchange Only
        {
          title: "Omaha Interchange Only",
          colQty: "4",
          fields: [
            {
              id: 1,
              formName: "VisaMcChagebackFee",
              title: "Visa/MC Chargeback Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 2,
              formName: "VisaMcRetrievalFee",
              title: "Visa/MC Retrieval Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
          ],
        },
        // North WAVit and Interchange Only
        {
          title: "North WAVit and Interchange Only",
          colQty: "3",
          fields: [
            {
              id: 1,
              formName: "AmexChargebackFee",
              title: "Amex Chargeback Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 2,
              formName: "DiscoverChargebackFee",
              title: "Discover Chargeback Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 3,
              formName: "RetrievalFee",
              title: "Retrieval Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 4,
              formName: "AmexChargebackRetrievalFee",
              title: "Amex Chargeback Retrieval Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 5,
              formName: "DiscoverRetrievalFee",
              title: "Discover Retrieval Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 6,
              formName: "VisaMcDiscoverChargebackRetrievalFee",
              title: "Visa/MC/Discover Chargeback Retrieval Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
            {
              id: 7,
              formName: "NorthInterMonthlyStatementFee",
              title: "Monthly Statement Fee $:",
              type: "number",
              placeholder: "$",
              value: "",
            },
          ],
        },
      ],
    },
  ],
};

export const marketingDocumentsTable: DataTypes[] = [
  {
    id: 1,
    DocName: "Statement.pdf",
    FileSize: "500 mb",
    UploadDateTime: new Date("03/11/2015 11:22 AM"),
  },
  {
    id: 2,
    DocName: "ID.pdf",
    FileSize: "40 mb",
    UploadDateTime: new Date("08/12/2019 11:22 AM"),
  },
  {
    id: 3,
    DocName: "Certification.pdf",
    FileSize: "751 mb",
    UploadDateTime: new Date("09/14/2017 11:22 AM"),
  },
  {
    id: 4,
    DocName: "Leasing.pdf",
    FileSize: "500 mb",
    UploadDateTime: new Date("01/01/2022 11:22 AM"),
  },
];

export const marketingSelectList = [
  {
    id: 1,
    title: "Logos and Brand Standards",
    value: "logosBrandsStandards",
  },
  {
    id: 2,
    title: "WAVit",
    value: "wavit",
  },
  {
    id: 3,
    title: "Private Equity",
    value: "privateEquity",
  },
  {
    id: 4,
    title: "High Risk",
    value: "highRisk",
  },
  {
    id: 5,
    title: "MiPOS",
    value: "mipos",
  },
  {
    id: 6,
    title: "Case Studies",
    value: "caseStudies",
  },
  {
    id: 7,
    title: "MiCamp Corporate",
    value: "micampCorporate",
  },
  {
    id: 8,
    title: "MiPayment Choice",
    value: "mipaymentChoice",
  },
  {
    id: 9,
    title: "FSP",
    value: "fsp",
  },
  {
    id: 10,
    title: "MiCamp Sports",
    value: "micampSports",
  },
  {
    id: 11,
    title: "MiCamp Booster Club",
    value: "micampBoosterClub",
  },
  {
    id: 12,
    title: "MiCamp Church",
    value: "micampChurch",
  },
  {
    id: 13,
    title: "View All",
    value: "viewAll",
  },
];

// ADMIN PANEL DATA
export const YesNoList = [
  { id: 1, name: "Yes", value: "Yes" },
  { id: 2, name: "No", value: "No" },
];

export const UserRoleList = [
  { id: 1, name: "User", value: "User" },
  { id: 2, name: "Admin", value: "Admin" },
  { id: 3, name: "Guest", value: "Guest" },
  { id: 4, name: "Support Speacialist", value: "SupportSpecialist" },
  { id: 5, name: "General", value: "General" },
  { id: 6, name: "Developer", value: "Developer" },
  { id: 7, name: "Superuser", value: "Super User" },
];

export const DepartmentList = [
  { id: 1, name: "Customer", value: "Customer" },
  { id: 2, name: "IT", value: "IT" },
  { id: 3, name: "Equipment", value: "Equipment" },
  { id: 4, name: "Support", value: "Support" },
  { id: 5, name: "Sales", value: "Sales" },
  { id: 6, name: "Agent", value: "Agent" },
  { id: 7, name: "External Agent", value: "ExternalAgent" },
  { id: 8, name: "Finance", value: "Finance" },
];

export const addNewUserForm = [
  {
    id: 1,
    title: "User Name:",
    type: "input",
    placeholder: "Insert a new user name",
    formName: "Username",
    value: "",
  },
  {
    id: 2,
    title: "Email:",
    type: "input",
    placeholder: "email@example.com",
    formName: "Email",
    value: "",
  },
  {
    id: 3,
    title: "Cell Phone:",
    type: "input",
    placeholder: "(___) ___-____",
    formName: "CellPhone",
    value: "",
  },
  {
    id: 4,
    title: "Extension:",
    type: "input",
    placeholder: "001",
    formName: "Extension",
    value: "",
  },
  {
    id: 5,
    title: "Agent:",
    type: "input",
    placeholder: "Select an Agent",
    formName: "Agent",
    value: "",
    content: merchantStatusList,
  },
  {
    id: 6,
    title: "User Status:",
    type: "input",
    placeholder: "Select a Status",
    formName: "UserStatus",
    value: "",
    content: merchantStatusList,
  },
  {
    id: 7,
    title: "In Production:",
    type: "input",
    placeholder: "Select an option",
    formName: "InProduction",
    value: "",
    content: YesNoList,
  },
  {
    id: 8,
    title: "User Role:",
    type: "input",
    placeholder: "Select User Role",
    formName: "RoleId",
    value: "",
    content: UserRoleList,
  },
  {
    id: 9,
    title: "Department:",
    type: "input",
    placeholder: "Select a Department",
    formName: "RoleId",
    value: "",
    content: DepartmentList,
  },
  {
    id: 10,
    title: "Lock / Unlock",
    type: "switch",
    placeholder: "",
    formName: "Lock",
    value: "",
  },
];

export const addNewUserPasswordForm = [
  {
    id: 11,
    title: "Password:",
    type: "password",
    placeholder: "",
    formName: "Password",
    value: "",
  },
  {
    id: 12,
    title: "Confirm Password:",
    type: "password",
    placeholder: "",
    formName: "ConfirmPassword",
    value: "",
  },
];

export const addNewUserTypeForm = [
  {
    id: 18,
    title: "Toolkit",
    type: "checkbox",
    placeholder: "",
    formName: "Toolkit",
    value: false,
  },
  {
    id: 19,
    title: "Boarding",
    type: "checkbox",
    placeholder: "",
    formName: "Boarding",
    value: false,
  },
];

export const testForm = [
  {
    id: 18,
    title: "Boarding",
    type: "checkbox",
    placeholder: "",
    formName: "Boarding",
    value: false,
  },
  {
    id: 21,
    title: "Toolkit",
    type: "checkbox",
    placeholder: "",
    formName: "Toolkit",
    value: false,
  },
];

export const testingForm: FormData = {
  formTitle: "Testing form",
  description: "",
  tabs: [
    // TAB 1 - CONTACT
    {
      id: 1,
      tabName: "Contact",
      value: "contact",
      section: [
        // FIRST SECTION
        {
          sectionName: "Contact Information",
          cards: [
            // 1. FIRST CARD
            {
              title: "1. Zone",
              colQty: "1",
              fields: [
                {
                  id: 1,
                  formName: "TimeZone",
                  title: "Time Zone",
                  type: "input",
                  placeholder: "",
                  value: "",
                },
              ],
            },
            // 2. TEST CARD
            {
              title: "2. Test",
              colQty: "1",
              fields: [
                {
                  id: 1,
                  formName: "TimeZone",
                  title: "Time Zone",
                  type: "input",
                  placeholder: "",
                  value: "",
                },
              ],
              title2: "2.1 testing a lot",
              fields2: [
                {
                  id: 1,
                  formName: "TimeNow",
                  title: "Time Now:",
                  type: "input",
                  placeholder: "12:00:00 AM UTC-8",
                  value: "",
                },
                {
                  id: 2,
                  formName: "TimeNow2",
                  title: "Time Tomorrow:",
                  type: "input",
                  placeholder: "12:00:00 AM UTC-8",
                  value: "",
                },
              ],
            },
          ],
          fields: [
            {
              id: 1,
              formName: "test1",
              title: "First Name:",
              type: "input",
              placeholder: "Name",
              value: "",
            },
            {
              id: 2,
              formName: "CustomerSurname",
              title: "Last Name:",
              type: "input",
              placeholder: "Name",
              value: "",
            },
            {
              id: 3,
              formName: "CustomerEmail",
              title: "Email:",
              type: "input",
              placeholder: "example@email.com",
              value: "",
            },
            {
              id: 4,
              formName: "CustomerCitizenship",
              title: "Citizenship:",
              type: "input",
              placeholder: "e.g. American",
              value: "",
            },
            {
              id: 5,
              formName: "CustomerNumber",
              title: "Phone Number:",
              type: "input",
              placeholder: "(___) ___-____",
              value: "",
            },
            {
              id: 6,
              formName: "CustomerNumberConfirmation",
              title: "Is it your current number?",
              type: "checkbox",
              placeholder: "Is it your current number?",
              value: "",
            },
          ],
        },
        // SECOND SECTION
        {
          sectionName: "Address Information",
          fields: [
            {
              id: 1,
              formName: "AddressStreet",
              title: "Street Name",
              type: "input",
              placeholder: "123 North Road",
              value: "",
            },
            {
              id: 2,
              formName: "AddressDetails",
              title: "Address Details",
              type: "input",
              placeholder: "e.g. Unit / Suite ",
              value: "",
            },
            {
              id: 3,
              type: "multiple",
              formName: "",
              title: "",
              placeholder: "",
              value: "",
              multipleFields: [
                {
                  id: 1,
                  formName: "AddressStreet",
                  title: "City",
                  type: "input",
                  placeholder: "Florianopolis",
                  value: "",
                },
                {
                  id: 2,
                  formName: "AddressDetails",
                  title: "State",
                  type: "input",
                  placeholder: "AZ",
                  value: "",
                },
                {
                  id: 3,
                  formName: "AddressDetails",
                  title: "Zipcode",
                  type: "input",
                  placeholder: "85257",
                  value: "",
                },
              ],
            },
          ],
          cards: [
            // -
            {
              title: "Testing second one card",
              colQty: "4",
              fields: [
                {
                  id: 1,
                  formName: "DaysToSubmitTransactions",
                  title: "0-3",
                  type: "radio",
                  placeholder: "0-3",
                  value: "",
                },
                {
                  id: 2,
                  formName: "DaysToSubmitTransactions",
                  title: "4-7",
                  type: "radio",
                  placeholder: "4-7",
                  value: "",
                },
                {
                  id: 3,
                  formName: "DaysToSubmitTransactions",
                  title: "8-14",
                  type: "radio",
                  placeholder: "8-14",
                  value: "",
                },
                {
                  id: 4,
                  formName: "DaysToSubmitTransactions",
                  title: "12-14",
                  type: "radio",
                  placeholder: "12-14",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    },
    // TAB 2
    {
      id: 2,
      tabName: "Bank Information",
      value: "bankInformation",
      section: [
        // FIRST SECTION
        {
          sectionName: "Bank Info",
          fields: [
            {
              id: 1,
              formName: "BankName",
              title: "Bank Name",
              type: "input",
              placeholder: "Type the Bank name",
              value: "",
            },
            {
              id: 2,
              type: "multiple",
              formName: "",
              title: "",
              placeholder: "",
              value: "",
              multipleFields: [
                {
                  id: 1,
                  formName: "BankRouting",
                  title: "Bank Routing: *",
                  type: "input",
                  placeholder: "Type the Bank name",
                  value: "",
                },
                {
                  id: 2,
                  formName: "BankAccounting",
                  title: "Bank Accounting: *",
                  type: "input",
                  placeholder: "Type the Bank name",
                  value: "",
                },
              ],
            },
          ],
          cards: [
            // 1. TEST CARD
            {
              title: "1. Zone",
              colQty: "1",
              fields: [
                {
                  id: 1,
                  formName: "TimeZone",
                  title: "Time Zone",
                  type: "input",
                  placeholder: "",
                  value: "",
                },
              ],
            },
          ],
        },
        // SECOND SECTION
        {
          sectionName: "Tax Information",
          fields: [
            {
              id: 1,
              formName: "EIN",
              title: "EIN:",
              type: "input",
              placeholder: "#",
              value: "",
            },
            {
              id: 2,
              formName: "SICMCC",
              title: "SICMCC:",
              type: "input",
              placeholder: "#",
              value: "",
            },
            {
              id: 3,
              formName: "TypeOfGoods",
              title: "Type of Goods:",
              type: "input",
              placeholder: "#",
              value: "",
            },
          ],
          cards: [
            // -
            {
              title: "Testing second one card",
              colQty: "4",
              fields: [
                {
                  id: 1,
                  formName: "DaysToSubmitTransactions",
                  title: "0-3",
                  type: "radio",
                  placeholder: "0-3",
                  value: "",
                },
                {
                  id: 2,
                  formName: "DaysToSubmitTransactions",
                  title: "4-7",
                  type: "radio",
                  placeholder: "4-7",
                  value: "",
                },
                {
                  id: 3,
                  formName: "DaysToSubmitTransactions",
                  title: "8-14",
                  type: "radio",
                  placeholder: "8-14",
                  value: "",
                },
                {
                  id: 4,
                  formName: "DaysToSubmitTransactions",
                  title: "12-14",
                  type: "radio",
                  placeholder: "12-14",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    },
    // TAB 3
    {
      id: 3,
      tabName: "Programming Request",
      value: "programmimgRequest",
      section: [
        // FIRST SECTION
        {
          sectionName: "Programmimg Info",

          cards: [
            // 1. TEST CARD
            {
              title: "1. Zone",
              colQty: "1",
              fields: [
                {
                  id: 1,
                  formName: "TimeZone",
                  title: "Time Zone",
                  type: "input",
                  placeholder: "",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  buttons: [
    {
      id: 1,
      title: "Save Changes",
      type: "default",
    },
  ],
};
