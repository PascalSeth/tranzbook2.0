'use client'
import React from 'react'
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
import { Plus, PlusCircle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type Props = {}

function ApprovedDriversSheet({}: Props) {
  return (

<Sheet>
  <SheetTrigger className='flex items-center'><Button className=' text-[12px] bg-[#48A0FF] py-2 h-fit'><PlusCircle className='mr-1' size={12}/>Add </Button></SheetTrigger>
  <SheetContent className='z-[99998] overflow-y-scroll h-full'>
            <SheetHeader>
              <SheetTitle >Add </SheetTitle>
              <SheetDescription>
                 Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
         
            <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="ModelName" className="text-left">
                  Service Area
                </Label>
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent className='z-[99999] overflow-y-scroll'>
  <SelectItem value="Individual">Service Location</SelectItem>
  </SelectContent>
</Select>
              </div>
         
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                 Name
                </Label>
                <Input id="name" placeholder='Enter Name' className="col-span-3" />
              </div>
         
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="ModelName" className="text-left">
                  Gender
                </Label>
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Male">Male</SelectItem>
    <SelectItem value="Female">Female</SelectItem>
    <SelectItem value="Other">Other</SelectItem>
  </SelectContent>
</Select>
              </div>

              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                 Email
                </Label>
                <Input id="Email" placeholder='Enter Email' className="col-span-3" />
              </div>
         
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="ModelName" className="text-left">
                  Select Type
                </Label>
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="SUV">SUV</SelectItem>
    <SelectItem value="TATA">TATA</SelectItem>
    <SelectItem value="TRUCK">TRUCK</SelectItem>
  </SelectContent>
</Select>

              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="ModelName" className="text-left">
                  Car Make
                </Label>
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Select">Select</SelectItem>
    <SelectItem value="Yes">Yes</SelectItem>
    <SelectItem value="No">No</SelectItem>
  </SelectContent>
</Select>

              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
</Sheet>

      
  )
}

export default ApprovedDriversSheet  