'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar,  AvatarImage } from "./ui/avatar";
import Link from "next/link";

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://th-thumbnailer.cdn-si-edu.com/gnVVC1OLQs1cWyFWBciZSwXKon8=/1072x720/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg" alt="" />
                    </Avatar>
        
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-[99998]">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Pascal Seth</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            pascalelikem@gmail.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href='/profile'>
                       Profile </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                       <Link href='/settings'>Settings</Link> 
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="">Log out</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}