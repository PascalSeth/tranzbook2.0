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
import TripSheet from '../../components/Sheetpop/Trips/TripSheet';

type Bus = {
  id: string;
  name: string;
  plateNumber: string;
  busType: string;
};

type TripData = {
  id: string;
  date: string;
  price: number;
  busId: string;
  routeId: string;
  startLocationId: string;
  endLocationId: string;
  duration: number;
  distance: number;
  companyId: string;
};

type Route = {
  id: string;
  startLocationId: string;
  endLocationId: string;
};

type Location = {
  id: string;
  name: string;
};

const columns: ColumnDef<TripData & { startLocationName: string; endLocationName: string; busType: string; }>[] = [
  {
    accessorKey: "Sno",
    header: "Sr No",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },

  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    accessorKey: "busType",
    header: "Bus Type",
    cell: ({ row }) => <div>{row.getValue("busType")}</div>,
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
];

export function Trip() {
  const [data, setData] = useState<TripData[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);
  const [sortedData, setSortedData] = useState<(TripData & { startLocationName: string; endLocationName: string; busType: string; })[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const fetchData = async () => {
    try {
      const [tripResponse, locationResponse, routeResponse, busResponse] = await Promise.all([
        fetch('/api/GET/getTrip'),
        fetch('/api/GET/getLocation'),
        fetch('/api/GET/getRoute'),
        fetch('/api/GET/getBuses'),
      ]);

      if (!tripResponse.ok || !locationResponse.ok || !routeResponse.ok || !busResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const tripData = await tripResponse.json();
      const locationData = await locationResponse.json();
      const routeData = await routeResponse.json();
      const busData = await busResponse.json();

      setData(Array.isArray(tripData) ? tripData : []);
      setLocations(Array.isArray(locationData) ? locationData : []);
      setRoutes(Array.isArray(routeData) ? routeData : []);
      setBuses(Array.isArray(busData) ? busData : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const locationMap = new Map(locations.map(location => [location.id, location.name]));
    const routeMap = new Map(routes.map(route => [route.id, route]));
    const busMap = new Map(buses.map(bus => [bus.id, bus.busType]));

    const newSortedData = data.map(trip => {
      const route = routeMap.get(trip.routeId);
      return {
        ...trip,
        startLocationName: route ? locationMap.get(route.startLocationId) || route.startLocationId : trip.startLocationId,
        endLocationName: route ? locationMap.get(route.endLocationId) || route.endLocationId : trip.endLocationId,
        busType: busMap.get(trip.busId) || trip.busId,
      };
    });

    setSortedData(newSortedData);
  }, [data, locations, routes, buses]);

  const handleAddSuccess = () => {
    fetchData();
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
      <TripSheet onAddSuccess={handleAddSuccess} />
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by Bus Type..."
            value={(table.getColumn("busType")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("busType")?.setFilterValue(event.target.value)}
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

export default Trip;
