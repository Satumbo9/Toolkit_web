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
