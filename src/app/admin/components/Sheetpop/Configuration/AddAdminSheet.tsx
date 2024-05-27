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
import {  CircleFadingPlusIcon, MessageCircle, MessageCirclePlusIcon, Plus, PlusCircle } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CheckboxReactHookFormMultipleDriver } from '../Notification/FormselectDriver'
import { CheckboxReactHookFormMultipleUser } from '../Notification/FormSelect'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
 
type Props = {}

function AddAdminDoc({}: Props) {
  return (
<Sheet>
  <SheetTrigger className='flex items-center'><Button className=' 
  text-[12px] bg-[#48A0FF] py-2 h-fit'>
    <CircleFadingPlusIcon className='mr-1' size={12}/>
  Add Admin
  </Button>
  </SheetTrigger>
  <SheetContent className='z-[999]'>
  <ScrollArea className="h-full w-[350px] ">
  <SheetHeader>
              <SheetTitle >Add </SheetTitle>
              <SheetDescription>
                 Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
             
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="ModelName" className="text-left">
                  Role
                </Label>
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Role" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Admin">Admin</SelectItem>
  <SelectItem value="Dispatcher">Dispatcher</SelectItem>
  <SelectItem value="Super Admin">Super Admin</SelectItem>
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
            <Label htmlFor="Address" className="text-left">
                 Address
                </Label>
                <Input id="Address" placeholder='Enter Address' className="col-span-3" />
              </div>

              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Mobile" className="text-left">
                 Mobile
                </Label>
                <Input id="Mobile" placeholder='Enter Mobile' className="col-span-3" />
              </div>

              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Email" className="text-left">
                 Email
                </Label>
                <Input id="Email" placeholder='Enter Email' className="col-span-3" />
              </div>
            
              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Password" className="text-left">
                 Password
                </Label>
                <Input id="Password" placeholder='Enter Password' className="col-span-3" />
              </div>

              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Confirm Password" className="text-left">
                 Confirm Password
                </Label>
                <Input id="Confirm Password" placeholder=' Confirm your password' className="col-span-3" />
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="Country" className="text-left">
                  Country
                </Label>
                <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Country" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Select">Select Country</SelectItem>
  </SelectContent>
</Select>
              </div>

              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="State" className="text-left">
                 State
                </Label>
                <Input id="State" placeholder='Enter State' className="col-span-3" />
              </div>
            
              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="City" className="text-left">
                 City
                </Label>
                <Input id="City" placeholder='Enter City' className="col-span-3" />
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Postal Code" className="text-left">
                 Postal Code
                </Label>
                <Input id="Postal Code" placeholder='Enter Postal Code' className="col-span-3" />
              </div>
             </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
            </ScrollArea>
          </SheetContent>
</Sheet>
  )
}

export default AddAdminDoc  