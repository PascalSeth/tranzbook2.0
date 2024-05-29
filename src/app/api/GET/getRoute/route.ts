import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const route = await prisma.route.findMany();
    return NextResponse.json(route, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while fetching route companies' }, { status: 500 });
  }
}
