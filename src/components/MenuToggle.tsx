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
import { Menu } from "lucide-react"
import Image from "next/image"


export function MenuSheet() {
  return (
    <Sheet> 
      <SheetTrigger asChild>
        <Button variant="ghost" size='sm' ><Menu/></Button>
      </SheetTrigger>
      <SheetContent className="z-[999] bg-[#DEF5FB]">
        <SheetHeader>
          <SheetTitle>
          <Image src='/pictures/logoNav.png' width={100} height={100} alt=''/>
          </SheetTitle>
        </SheetHeader>
      

      </SheetContent>
    </Sheet>
  )
}
