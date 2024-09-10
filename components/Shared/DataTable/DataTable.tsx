"use client";

import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTableProps } from "@/types";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
  MoreHorizontal,
  Filter,
  PenBox,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { toast } from "@/components/ui/use-toast";

/**
 * Read the docs!!
 
* Step 1: Set the page that you're going to create this data table to 'use client' at the top of the page. (AKA first line of the code).
 
* Step 2: Import ColumnConfig and createColumns from folder components/Shared/DataTable/Columns. Then, import DataTypes from folder types.
 
* Step 3: Declare a json data if you are willing to use a mock-up data for now, declaring json data is optional if you already have data that had been fetched from the database already.
 
* Step 4: Create columnsConfig to declare which fields are there the table needs to render. For example,
 * const columnsConfig: ColumnConfig<<DataTypes>DataTypes>[] = [{accessorKey: 'column's name', header: 'this header name can be any name you want it to show at the header', cell: Price}]
 * As you can see, the "cell: Price" is optional. You declare it or not, it doesn't matter. Use this "cell: Something", when you want to config how that cell row is gonna look like.
 * Like my example, I pass the function of Price to format number of price to display as US dollar sign, and you can import it from folder components/Shared/DataTable/CellFormat.tsx
 
* Step 5: After you declared columnsConfig, you need to declare a createColumns. For example, "const columns = createColumns(columnsConfig);"
 
* Step 6: Render DataTable on the page, <DataTable columns={columns (Pass the const columns we just created here)} data={data (This data can be your json mock-up data or the data that you've fetched from the database.)} />
 
* Step 7: Done, you can now see the data being rendered on the table. Enjoy
 */
export default function DataTable<TData>({
  columns,
  data,
  enableSorting = false,
  pagination = true,
  enableColumnFilter = false,
  filteredBy,
  enableVisibility = false,
  actionsColumn = true,
  editFunction,
}: DataTableProps<TData>) {
  const [sorting, setSoring] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleEditClick = (row: any) => {
    editFunction(row.original);
  };

  const allColumns = React.useMemo(() => {
    const actionColumn: ColumnDef<TData, any> = {
      accessorKey: "action",
      header: "Actions",
      cell: ({ row }) => {
        const original: any = row.getAllCells()[0].getValue();
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="size-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(original.toString());
                  toast({
                    title: "Copied!",
                    description: "The ID has been successfully copied",
                    variant: "default",
                  });
                }}
                className="cursor-pointer"
              >
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer gap-2"
                onClick={() => handleEditClick(row)}
              >
                <PenBox />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                View payment details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    };

    return actionsColumn ? [...columns, actionColumn] : columns;
  }, [actionsColumn, columns, handleEditClick]);

  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSoring,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    getFilteredRowModel: enableColumnFilter ? getFilteredRowModel() : undefined,
    onColumnFiltersChange: enableColumnFilter ? setColumnFilters : undefined,
    onColumnVisibilityChange: enableVisibility
      ? setColumnVisibility
      : undefined,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  if (enableColumnFilter && !filteredBy) {
    throw new Error(
      "The filteredBy prop is required when enable the column filter!",
    );
  }
  return (
    <div>
      {enableColumnFilter && (
        <div className="flex items-center justify-end px-5 py-4">
          <Input
            placeholder={`Filter ${filteredBy}...`}
            value={
              (table
                .getColumn(filteredBy as string)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table
                .getColumn(filteredBy as string)
                ?.setFilterValue(e.target.value)
            }
            className="max-w-sm"
          />
          {enableVisibility && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto gap-2">
                  <Filter />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="cursor-pointer capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell ??
                          ((info) => {
                            const value = info.getValue();
                            return value instanceof Date
                              ? format(value, "MMM d, yyyy")
                              : value;
                          }),
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {pagination && (
          <div className="flex items-center justify-center space-x-2 px-2 py-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <span className="flex items-center gap-1">
                    <Input
                      defaultValue={table.getState().pagination.pageIndex + 1}
                      onChange={(e) => {
                        const page = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        table.setPageIndex(page);
                      }}
                      className="max-w-[70px]"
                      placeholder="Jump to..."
                    />
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <ChevronsLeft />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <ChevronLeft />
                  </Button>
                </PaginationItem>
                <PaginationItem className="flex gap-3">
                  {table.getState().pagination.pageIndex + 1} <span>of</span>{" "}
                  {table.getPageCount()}
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <ChevronRight />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                    <ChevronsRight />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Select
                    value={table.getState().pagination.pageSize.toString()}
                    onValueChange={(value: string) =>
                      table.setPageSize(Number(value))
                    }
                  >
                    <SelectTrigger className="w-[70px]">
                      <SelectValue placeholder="Select show size." />
                    </SelectTrigger>
                    <SelectContent>
                      {[10, 20, 40, 50].map((item) => (
                        <SelectItem key={item} value={item.toString()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
