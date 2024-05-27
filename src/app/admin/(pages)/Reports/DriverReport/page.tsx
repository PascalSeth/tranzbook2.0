import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { CalendarForm } from './Calendar'
import { CalendarFormTo } from './CalendarTo'

type Props = {}

function DriverReport({}: Props) {
  return (
    <Card>
          <CardHeader>
            <CardTitle>Driver Report</CardTitle>
            <CardDescription>
            Get your driver report from here
            </CardDescription>
          </CardHeader>
          <CardContent className=" grid grid-cols-2 max-lg:grid-cols-1 gap-10">

            <div className="">
              <Label >Select Status</Label>
              <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select Status" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Active">Active</SelectItem>
  <SelectItem value="InActive">InActive</SelectItem>
  </SelectContent>
</Select>  
          </div>

          <div className="">
              <Label >Approval Status</Label>
              <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select Status" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Approved">Approved</SelectItem>
  <SelectItem value="Dissaproved">Dissaproved</SelectItem>
  </SelectContent>
</Select>  
          </div>
           
           
           
            <div className="">
              <Label >Date Option</Label>
              <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Date" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Date">Date</SelectItem>
  <SelectItem value="Today">Today</SelectItem>
  <SelectItem value="This Week">This Week</SelectItem>
  <SelectItem value="This Month">This Month</SelectItem>
  <SelectItem value="This Year">This Year</SelectItem>

  </SelectContent>
</Select>     
         </div>

            <div className="">
              <CalendarForm/>
            </div>

            <div className="">
             <CalendarFormTo/>
            </div>

            <div className="">
              <Label htmlFor="username">Vehicle Type</Label>
              <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select Vehicle Type" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Select Vehicle Type">Select Vehicle Type</SelectItem>
  <SelectItem value="Tesla">Tesla</SelectItem>
  <SelectItem value="SUV">SUV</SelectItem>
  <SelectItem value="Sedan">csv</SelectItem>
  </SelectContent>
</Select> 
            </div>

            <div className="">
              <Label htmlFor="username">Download Format</Label>
              <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Download Format" />
  </SelectTrigger>
  <SelectContent className='z-[99999]'>
  <SelectItem value="Select File Format">Download Format</SelectItem>
  <SelectItem value="xlsx">xlsx</SelectItem>
  <SelectItem value="xls">xls</SelectItem>
  <SelectItem value="csv">csv</SelectItem>
  </SelectContent>
</Select> 
            </div>
          </CardContent>
          <CardFooter>
            <Button>Download</Button>
          </CardFooter>
        </Card>  )
}

export default DriverReport