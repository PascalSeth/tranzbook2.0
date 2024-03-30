"use client"

import * as React from "react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Agriculture } from "@mui/icons-material"
import Link from "next/link"

export function ProductToggle() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <h1 className="hover:cursor-pointer"> Product</h1>
      
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2 z-[999] text-black bg-white">
      <DropdownMenuItem className="rounded-[8px] hover:cursor-pointer  items-center flex font-semibold" >
      <Link href='/Blogs' className="rounded-[8px] hover:bg-orange-200  p-2 hover:text-white w-full hover:cursor-pointer  items-center flex font-semibold">
           <Agriculture className="mr-2"/>
          Agro-Prefinancing  
        </Link>
        </DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
