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

type BusCompany = {
  id: string;
  name: string;
};

type Props = {
  onAddSuccess: () => void;
};

function BusSheet({ onAddSuccess }: Props) {
  const [plateNumber, setPlateNumber] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [busType, setBusType] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [busCompanies, setBusCompanies] = useState<BusCompany[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the list of bus companies
    const fetchBusCompanies = async () => {
      try {
        const response = await fetch('/api/GET/getbusCompany');
        if (!response.ok) {
          throw new Error('Failed to fetch bus companies');
        }
        const data = await response.json();
        setBusCompanies(data);
      } catch (error) {
        console.error('Error fetching bus companies:', error);
      }
    };

    fetchBusCompanies();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!plateNumber || !capacity || !busType || !companyId) {
      setError('All fields are required.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/POST/vehicleMake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plateNumber, capacity, busType, companyId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received:', data);
      onAddSuccess();
      alert('Bus added successfully!');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to add bus.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Button className="text-[12px] bg-[#48A0FF] py-2 h-fit">
          <PlusCircle className="mr-1" size={12} /> Add Bus
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[999]">
        <SheetHeader>
          <SheetTitle>Add Bus</SheetTitle>
          <SheetDescription>Click save when you're done.</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="plateNumber" className="text-left">
                Plate Number
              </Label>
              <Input
                id="plateNumber"
                placeholder="Plate Number"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="capacity" className="text-left">
                Capacity
              </Label>
              <Input
                id="capacity"
                placeholder="Capacity"
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="busType" className="text-left">
                Bus Type
              </Label>
              <Input
                id="busType"
                placeholder="Bus Type"
                value={busType}
                onChange={(e) => setBusType(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="companyId" className="text-left">
                Company
              </Label>
              <select
                id="companyId"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="col-span-3 border rounded p-2"
              >
                <option value="" disabled>
                  Select a company
                </option>
                {busCompanies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
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

export default BusSheet;
