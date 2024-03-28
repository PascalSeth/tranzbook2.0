"use client"
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){
    const {getUser}=getKindeServerSession();
    const user= await getUser()

    if(!user || user=== null || !user.id){
        throw new Error("Something went Wrong.... Sorry")
    }

    let dbUser=await prisma.user.findUnique({
        where:{
            id:user.id,
        }
    });

    if (!dbUser){
        dbUser=await prisma.user.create({
            data :{
                email:user.email ?? '',
                firstName: user.given_name ?? '',
                lastName:user.family_name ?? '',
                id:user.id,
                profileImage:user.picture ?? `https://avatar.vercel.sh/${user.given_name}`

            }
        })
    }
    return NextResponse.redirect("http://localhost:3000") 
}