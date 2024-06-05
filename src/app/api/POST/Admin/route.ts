// pages/api/admin.js
import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req:NextRequest) {
  try {
    const {  email, password, firstName,lastName,companyId } = await req.json();

    if ( !email || !password|| !firstName || !lastName || !companyId) {
      return NextResponse.json({ error: "Name, email, companyId, firstName, lastName and password are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newadmin = await prisma.admin.create({
      data: {
        firstName,
        lastName,
        companyId,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newadmin, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while creating the bus company' }, { status: 500 });
  }
}
