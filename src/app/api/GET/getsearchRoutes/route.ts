import prisma from "@/app/lib/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const { fromLocation, toLocation, date, returnDate, ticketQuantity } = req.query || {};

  const queryConditions: any = {};

  if (fromLocation && typeof fromLocation === 'string') {
    queryConditions['route.startLocation.name'] = fromLocation;
  }
  if (toLocation && typeof toLocation === 'string') {
    queryConditions['route.endLocation.name'] = toLocation;
  }
  if (date && typeof date === 'string') {
    queryConditions.date = new Date(date);
  }
  if (returnDate && typeof returnDate === 'string') {
    queryConditions.returnDate = new Date(returnDate);
  }
  if (ticketQuantity && typeof ticketQuantity === 'string') {
    queryConditions.ticketQuantity = parseInt(ticketQuantity, 10);
  }

  try {
    const trips = await prisma.trip.findMany({
      where: queryConditions,
      include: {
        bus: true,
        route: {
          include: {
            startLocation: true,
            endLocation: true,
          },
        },
      },
    });
    return NextResponse.json(trips);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while fetching trips' }, { status: 500 });
  }
}
