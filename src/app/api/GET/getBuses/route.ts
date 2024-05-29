import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const bus = await prisma.bus.findMany();
    return NextResponse.json(bus, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while fetching bus companies' }, { status: 500 });
  }
}
