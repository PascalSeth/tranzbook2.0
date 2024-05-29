import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { startLocationId, endLocationId, duration, distance, companyId } = await req.json();

    if (!startLocationId || !endLocationId || !duration || !distance || !companyId) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newRoute = await prisma.route.create({
      data: {
        startLocationId,
        endLocationId,
        duration,
        distance,
        companyId,
      },
    });

    return NextResponse.json(newRoute, { status: 201 });
  } catch (error) {
    console.error('Error creating route:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
