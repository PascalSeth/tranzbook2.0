"use client"

import * as React from "react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function AccountToggle() {
 const {getUser}=getKindeServerSession()
 const user= await getUser()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <img className="hover:cursor-pointer w-8 h-8 rounded-full" 
         src={
            user?.picture ?? "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
         }
          alt=""/>
      
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2 z-[999] bg-white">
      <DropdownMenuItem className="rounded-[8px] hover:cursor-pointer  items-center flex font-semibold" >
      <div className="rounded-[8px] hover:bg-orange-200 p-2 hover:text-white w-full hover:cursor-pointer  items-center flex font-semibold">
            <LogoutLink>Logout</LogoutLink>
        </div>
        </DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
