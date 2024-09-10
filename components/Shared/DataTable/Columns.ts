"use client";

import { JSX } from "react";
import { DataTypes } from "@/types";
import {
  ColumnDef,
  createColumnHelper,
  HeaderContext,
} from "@tanstack/react-table";

export type ColumnConfig<T extends DataTypes> = {
  accessorKey: keyof T;
  header: string | ((props: HeaderContext<T, any>) => JSX.Element);
  cell?: (info: { getValue(): any }) => JSX.Element;
};

export const createColumns = <T extends DataTypes>(
  config: ColumnConfig<T>[],
): ColumnDef<T, any>[] => {
  const columnHelper = createColumnHelper<T>();
  return config.map((c) =>
    columnHelper.accessor((row) => row[c.accessorKey], {
      id: c.accessorKey as string,
      header: c.header,
      cell: c.cell, // Include custom cell function if provided
    }),
  );
};
