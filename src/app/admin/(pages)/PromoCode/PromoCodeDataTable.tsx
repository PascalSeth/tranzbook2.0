'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CaretSortIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Actionbutton } from './Action';
import PromoCodeSheet from '../../components/Sheetpop/PromoCodeSheet/PromoCode';

interface Data {
  id: string;
  user_type: string;
  coupon_type: string;
  code: string;
  count: number;
  expired_at: {
    _seconds: number;
    _nanoseconds: number;
  };
  value: number;
  status: number;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  updateAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  isDelete: number;
}


export function PromoCode() {
  const [data, setData] = useState<Data[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const getPromoCode = async () => {
    try {
      const response = await fetch('/lib/GET/PromoCode/getallCoupon');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(Array.isArray(data.product) ? data.product : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPromoCode();
  }, []);

  const handleAddSuccess = () => {
    getPromoCode();
  };
const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "Sno",
    header: "Sr No",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => <div>{row.getValue("code")}</div>,
  },
  {
    accessorKey: "user_type",
    header: "User Type",
    cell: ({ row }) => {
      const userType = row.getValue("user_type");
      return <div>{userType === 1 ? 'Driver' : userType === 0 ? 'User' : 'All'}</div>;
    },},
  {
    accessorKey: "coupon_type",
    header: "Coupon Type",
    cell: ({ row }) =>
       <div>{row.getValue("coupon_type")=== 1 ? 'Numeric' : 'Percentage'}</div>,
  },
  {
    accessorKey: "count",
    header: "Count",
    cell: ({ row }) => <div>{row.getValue("count") }</div>,
  },
  {
    accessorKey: "expired_at",
    header: "Expiry Date",
    cell: ({ row }) => {
      const expiredAt = row.getValue("expired_at") as { _seconds: number; _nanoseconds: number } | undefined;
      return (
        <div>
          {expiredAt ? new Date(expiredAt._seconds * 1000).toLocaleString() : 'N/A'}
        </div>
      );
    },
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => <div>{row.getValue("value")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className={`${row.getValue("status") === 1 ? 'text-green-500' : 'text-red-500'} font-semibold`}>
        {row.getValue("status") === 1 ? 'Active' : 'Inactive'}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="text-center text-[#48A0FF]">
        <Actionbutton onDelete={row.original.isDelete} id={row.original.id} status={row.getValue("status")} refreshData={getPromoCode} />
      </div>
    ),
  },
];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <PromoCodeSheet onAddSuccess={handleAddSuccess} />
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter Code..."
            value={(table.getColumn("code")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("code")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
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
                      className="capitalize"
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
        </div>
        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of your coupons.</TableCaption>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
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
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoCode;
