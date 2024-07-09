'use client';

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDownIcon } from "@radix-ui/react-icons";
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
import ServiceLocation from '../../components/Sheetpop/serviceLocations/serviceLocationsSheet';

interface Data {
  id: string;
  startLocationId: string;
  endLocationId: string;
  duration: number;
  distance: number;
  companyId: string;
}

interface Location {
  id: string;
  name: string;
}

interface BusCompany {
  id: string;
  name: string;
}

const columns: ColumnDef<Data & { startLocationName: string; endLocationName: string; companyName: string; }>[] = [
  {
    accessorKey: "Sno",
    header: "Sr No",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  
  {
    accessorKey: "startLocationName",
    header: "Start Location",
    cell: ({ row }) => <div>{row.getValue("startLocationName")}</div>,
  },
  {
    accessorKey: "endLocationName",
    header: "End Location",
    cell: ({ row }) => <div>{row.getValue("endLocationName")}</div>,
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => <div>{row.getValue("duration")} minutes</div>,
  },
  {
    accessorKey: "distance",
    header: "Distance",
    cell: ({ row }) => <div>{row.getValue("distance")} km</div>,
  },
  {
    accessorKey: "companyName",
    header: "Company",
    cell: ({ row }) => <div>{row.getValue("companyName")}</div>,
  },
];

export function Location() {
  const [data, setData] = useState<Data[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [busCompanies, setBusCompanies] = useState<BusCompany[]>([]);
  const [sortedData, setSortedData] = useState<(Data & { startLocationName: string; endLocationName: string; companyName: string; })[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const fetchLocations = async () => {
    try {
      const [routeResponse, locationsResponse, companiesResponse] = await Promise.all([
        fetch('/api/GET/getRoute'),
        fetch('/api/GET/getLocation'),
        fetch('/api/GET/getbusCompany'),
      ]);

      if (!routeResponse.ok || !locationsResponse.ok || !companiesResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const routes = await routeResponse.json();
      const locationData = await locationsResponse.json();
      const companyData = await companiesResponse.json();

      setData(Array.isArray(routes) ? routes : []);
      setLocations(Array.isArray(locationData) ? locationData : []);
      setBusCompanies(Array.isArray(companyData) ? companyData : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    const locationMap = new Map(locations.map(location => [location.id, location.name]));
    const companyMap = new Map(busCompanies.map(company => [company.id, company.name]));

    const newSortedData = data.map(route => ({
      ...route,
      startLocationName: locationMap.get(route.startLocationId) || route.startLocationId,
      endLocationName: locationMap.get(route.endLocationId) || route.endLocationId,
      companyName: companyMap.get(route.companyId) || route.companyId,
    }));

    setSortedData(newSortedData);
  }, [data, locations, busCompanies]);

  const handleAddSuccess = () => {
    fetchLocations();
  };

  const table = useReactTable({
    data: sortedData,
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
      <ServiceLocation onAddSuccess={handleAddSuccess} />
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by ID..."
            value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("id")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableCaption>A list of your promo codes.</TableCaption>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
            {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
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

export default Location;
