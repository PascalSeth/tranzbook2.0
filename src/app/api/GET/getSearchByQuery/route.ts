import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const fromLocation = url.searchParams.get('fromLocation') as string;
  const toLocation = url.searchParams.get('toLocation') as string;
  const date = url.searchParams.get('date') as string;

  try {
    const trips = await prisma.trip.findMany({
      where: {
        route: {
          startLocation: { name: fromLocation },
          endLocation: { name: toLocation }
        },
        date: new Date(date)
      },
      include: {
        bus: true,
        route: true,
        driver: true
      }
    });

    return NextResponse.json(trips, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while fetching trips' }, { status: 500 });
  }
}
