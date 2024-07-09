'use client'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PlusCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type BusCompany = {
  id: string;
  name: string;
};

type Props = {
  onAddSuccess: () => void;
};
function ApprovedDriversSheet({ onAddSuccess }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [email, setEmail] = useState(''); // New field
  const [mobile, setMobile] = useState(''); // New field
  const [companyId, setCompanyId] = useState('');
  const [busCompanies, setBusCompanies] = useState<BusCompany[]>([]);

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
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    
    const driverData = { firstName, lastName, licenseNumber, email, mobile, companyId };

    try {
      const response = await fetch('/api/POST/Driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driverData),
      });

      if (response.ok) {
        const newDriver = await response.json();
        console.log('Driver created:', newDriver);
        onAddSuccess(); // Notify parent component about the successful addition
        // Optionally, handle post-creation logic here
      } else {
        console.error('Error creating driver:', response.statusText);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  }

  return (
    <Sheet>
      <SheetTrigger className='flex items-center'>
        <Button className='text-[12px] bg-[#48A0FF] py-2 h-fit'>
          <PlusCircle className='mr-1' size={12}/> Add
        </Button>
      </SheetTrigger>
      <SheetContent className='z-[99998] overflow-y-scroll h-full'>
        <SheetHeader>
          <SheetTitle>Add Driver</SheetTitle>
          <SheetDescription>
            Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="firstName" className="text-left">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder='Enter First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="lastName" className="text-left">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder='Enter Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="licenseNumber" className="text-left">
              License Number
            </Label>
            <Input
              id="licenseNumber"
              placeholder='Enter License Number'
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input
              id="email"
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="mobile" className="text-left">
              Mobile
            </Label>
            <Input
              id="mobile"
              placeholder='Enter Mobile'
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="companyId" className="text-left">
              Company ID
            </Label>
            <Select value={companyId} onValueChange={setCompanyId}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent className='z-[99999]'>
                  {busCompanies.map((company) => (
                    <SelectItem key={company.id} value={company.id}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

export default ApprovedDriversSheet
