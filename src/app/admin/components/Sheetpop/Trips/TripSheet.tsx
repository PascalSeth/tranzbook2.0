import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PlusCircle } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { CalendarDate } from './Calendar';

type Route = {
  id: string;
  date: string;
  price: number;
  busId: string;
  routeId: string;
};

type BusCompany = {
  id: string;
  name: string;
};

type Props = {
  onAddSuccess: () => void;
};

async function fetchBusCompanies() {
  try {
    const response = await fetch('/api/GET/getbusCompany');
    if (!response.ok) {
      throw new Error('Failed to fetch bus companies');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching bus companies:', error);
    return [];
  }
}

async function fetchroutes() {
  try {
    const response = await fetch('/api/GET/getRoute');
    if (!response.ok) {
      throw new Error('Failed to fetch routes');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching routes:', error);
    return [];
  }
}

function TripSheet({ onAddSuccess }: Props) {
  const [date, setDate] = useState('');
  const [price, setPrice] = useState(0);
  const [busId, setBusId] = useState('');
  const [routeId, setRouteId] = useState('');
  const [busCompanies, setBusCompanies] = useState<BusCompany[]>([]);
  const [routes, setroutes] = useState<Route[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      setDate(selectedDate.toISOString());
    }
  };

  useEffect(() => {
    // Fetch bus companies and routes
    const fetchData = async () => {
      const [companiesData, routesData] = await Promise.all([
        fetchBusCompanies(),
        fetchroutes()
      ]);
      setBusCompanies(companiesData);
      setroutes(routesData);
    };

    fetchData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!date || !price || !busId || !routeId) {
      setError('All fields are required.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/POST/Trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, price, busId, routeId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received:', data);
      onAddSuccess();
      alert('Trip added successfully!');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to add trip.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Button className="text-[12px] bg-[#48A0FF] py-2 h-fit">
          <PlusCircle className="mr-1" size={12} /> Add Trip
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[999]">
        <SheetHeader>
          <SheetTitle>Add Trip</SheetTitle>
          <SheetDescription>Click save when you&apos;re done.</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="date" className="text-left">
                Date
              </Label>
              <CalendarDate onDateChange={handleDateChange} />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="price" className="text-left">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="busId" className="text-left">
                Bus ID
              </Label>
              <Select value={busId} onValueChange={setBusId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a bus ID" />
                </SelectTrigger>
                <SelectContent className="z-[99999]">
                  {busCompanies.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="routeId" className="text-left">
                Route ID
              </Label>
              <Select value={routeId} onValueChange={setRouteId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a route ID" />
                </SelectTrigger>
                <SelectContent className="z-[99999]">
                  {routes.map((route) => (
                    <SelectItem key={route.id} value={route.id}>
                      {route.routeId}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Save changes'}
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default TripSheet;