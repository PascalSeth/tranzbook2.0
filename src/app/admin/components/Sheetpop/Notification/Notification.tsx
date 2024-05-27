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
import { MessageCircle, MessageCirclePlusIcon, Plus, PlusCircle } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CheckboxReactHookFormMultipleDriver } from './FormselectDriver'
import { CheckboxReactHookFormMultipleUser } from './FormSelect'
 

function NotificationSheet({ onAddSuccess }: { onAddSuccess: () => void }) {
  
  return (
<Sheet>
  <SheetTrigger className='flex items-center'><Button className=' text-[12px] bg-[#48A0FF] py-2 h-fit'><MessageCirclePlusIcon className='mr-1' size={12}/>Push </Button></SheetTrigger>
  <SheetContent className='z-[9999]'>
            <SheetHeader>
              <SheetTitle >Push Notification </SheetTitle>
              <SheetDescription>
                 Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
 <Label htmlFor="pushTitle" className="text-left">
                  Users
                </Label>
    <ScrollArea className="h-fit max-h-[200px] w-[350px] rounded-md border p-1">
  <CheckboxReactHookFormMultipleUser/>
  </ScrollArea>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
 <Label htmlFor="pushTitle" className="text-left">
                  Drivers
                </Label>
    <ScrollArea className="h-fit max-h-[200px] w-[350px] rounded-md border p-1">
  <CheckboxReactHookFormMultipleDriver/>
  </ScrollArea>
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="pushTitle" className="text-left">
                  Push Title
                </Label>
                <Input id="pushTitle" placeholder='Title' className="col-span-3" />
              </div>
              <div className="grid grid-cols-1 items-center gap-4">
                <Label htmlFor="Message" className="text-left">
                  Message
                </Label>
                <Input id="Message" placeholder="Enter your Message" className="col-span-3" />
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

export default NotificationSheet  