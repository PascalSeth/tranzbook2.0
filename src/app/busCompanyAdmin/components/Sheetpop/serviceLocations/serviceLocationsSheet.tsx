'use client';
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
import { ComboboxForm } from '@/app/admin/(pages)/serviceLocations/Comoboxcountry';

interface NewVehicle {
  countryISOCode: string;
  city: string;
  price: number;
}

function ServiceLocation({ onAddSuccess }: { onAddSuccess: () => void }) {
  const [countryISOCode, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [price, setPrice] = React.useState('');
  const handleCountrySelect = (countryISOCode: string) => {
    setCountry(countryISOCode); 
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/lib/POST/postserviceLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          countryISOCode,
          city,
          price: parseFloat(price), 
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received:', data);
      onAddSuccess();
      alert('Service location added successfully!');
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
              <Label htmlFor="name" className="text-left">Country</Label>
              <ComboboxForm onCountrySelect={handleCountrySelect} />         
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="City" className="text-left">City</Label>
              <Input id="City" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City" className="col-span-3" />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="Price" className="text-left">Price</Label>
              <Input type='number' id="Price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" className="col-span-3" />
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

export default ServiceLocation;
