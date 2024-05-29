import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const location = await prisma.location.findMany();
    return NextResponse.json(location, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while fetching location companies' }, { status: 500 });
  }
}
