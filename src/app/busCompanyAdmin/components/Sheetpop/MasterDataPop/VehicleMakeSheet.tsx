import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircle } from 'lucide-react';

interface NewVehicle {
  make: string;
  model: string;
  year: string;
  capacity: number;
  description: string;
  status: string;
}

function VehicleMakeSheet({ onAddSuccess }: { onAddSuccess: () => void }) {
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [year, setYear] = React.useState('');
  const [capacity, setCapacity] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState(''); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/lib/POST/postVehicleMake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({make,model,year,capacity,description,status})
      });
  
      // Check if the response is not okay (status 2xx)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data received:', data);
      onAddSuccess();
      alert('Vehicle added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <Sheet>
      <SheetTrigger className='flex items-center'>
        <Button className='text-[12px] bg-[#48A0FF] py-2 h-fit'>
          <PlusCircle className='mr-1' size={12}/> Add
        </Button>
      </SheetTrigger>
      <SheetContent className='z-[9999]'>
        <SheetHeader>
          <SheetTitle>Add</SheetTitle>
          <SheetDescription>
            Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="name" className="text-left">Vehicle Make Name</Label>
              <Input id="name" value={make} onChange={(e)=>setMake(e.target.value)} placeholder='Name' className="col-span-3" />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="VehicleMakeFor" className="text-left">Vehicle Model</Label>
              <Input id="VehicleMakeFor" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="Vehicle Model" className="col-span-3" />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="Year" className="text-left">Year</Label>
              <Input id="Year" value={year} onChange={(e)=>setYear(e.target.value)} placeholder="Year" className="col-span-3" />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="Capacity" className="text-left">Capacity</Label>
              <Input type='number' id="Capacity" value={capacity} onChange={(e)=>setCapacity(e.target.value)} placeholder="Capacity" className="col-span-3" />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="description" className="text-left">Description</Label>
              <Input id="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <div>
                <Button type="submit">Add</Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default VehicleMakeSheet;
