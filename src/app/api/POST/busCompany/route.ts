// pages/api/buscompany.js
import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req:NextRequest) {
  try {
    const { name, email, password, logoUrl } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newBusCompany = await prisma.busCompany.create({
      data: {
        name,
        email,
        password: hashedPassword,
        logoUrl,
      },
    });

    return NextResponse.json(newBusCompany, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while creating the bus company' }, { status: 500 });
  }
}
