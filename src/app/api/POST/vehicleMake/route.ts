// /src/app/api/POST/vehicleMake/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const { plateNumber, capacity, busType, companyId } = await req.json();

  if (!plateNumber || !capacity || !busType || !companyId) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const newBus = await prisma.bus.create({
      data: {
        plateNumber,
        capacity,
        busType,
        companyId,
      },
    });
    return NextResponse.json(newBus, { status: 201 });
  } catch (error) {
    console.error('Error creating bus:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
