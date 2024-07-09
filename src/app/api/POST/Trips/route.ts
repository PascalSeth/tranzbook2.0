// pages/api/trip.js
import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { date, price, busId, routeId,driverId,departureTime } = await req.json();

    if (!date || !price || !busId || !routeId) {
      return NextResponse.json({ error: "Date, price, bus ID, and route ID are required" }, { status: 400 });
    }

    const newTrip = await prisma.trip.create({
      data: {
        date,
        price,
        busId,
        departureTime,
        routeId,
        driverId
      },
    });

    return NextResponse.json(newTrip, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while creating the trip' }, { status: 500 });
  }
}
