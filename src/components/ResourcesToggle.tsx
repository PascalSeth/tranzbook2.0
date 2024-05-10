"use client"

import * as React from "react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CampaignOutlined, WorkOutlineOutlined, } from "@mui/icons-material"
import { GalleryThumbnails, HelpCircleIcon } from "lucide-react"
import Link from "next/link"

export function ResourcesToggle() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <h1 className=" hover:cursor-pointer"> Resources</h1>
      
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=" z-[999] text-black bg-white">
      <DropdownMenuItem className="" >
        <Link href='/Blogs' className="rounded-[8px] hover:bg-orange-200 p-2 hover:text-white w-full hover:cursor-pointer  items-center flex font-semibold">
           <CampaignOutlined className="mr-2"/>
          Blog  
        </Link>
        </DropdownMenuItem>
        <DropdownMenuItem >
        <Link href='/Careers' className="rounded-[8px] hover:bg-orange-200 p-2 hover:text-white w-full hover:cursor-pointer  items-center flex font-semibold">
        <WorkOutlineOutlined className="mr-2"/>
          Careers
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem >
        <Link href='/Gallery' className="rounded-[8px] hover:bg-orange-200 p-2 hover:text-white w-full hover:cursor-pointer  items-center flex font-semibold">

        <GalleryThumbnails className="mr-2"/>
          Gallery

          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem  >
        <Link href='' className="rounded-[8px] hover:bg-orange-200 p-2 hover:text-white w-full hover:cursor-pointer  items-center flex font-semibold">
        <HelpCircleIcon className="mr-2"/>
          FAQ
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
