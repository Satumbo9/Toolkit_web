import type { LucideIcon } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

export interface SidebarLink {
  icon: LucideIcon;
  route: string;
  desc: string;
  label: string;
  options: string[];
}

export interface ContentItem {
  [key: string]: string | number;
}

export type DataTypes = Record<string, number, boolean, Date, any>;

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  enableSorting?: boolean;
  pagination?: boolean;
  pageSize?: number;
  enableColumnFilter?: boolean;
  filteredBy?: string;
  enableVisibility?: boolean;
  actionsColumn?: boolean;
  editFunction?: any;
}
