import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const { name} = await req.json();

  if (!name) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const newBus = await prisma.location.create({
      data: {
      name
    }
    });
    return NextResponse.json(newBus, { status: 201 });
  } catch (error) {
    console.error('Error creating bus:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
