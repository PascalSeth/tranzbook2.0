import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fromLocation, toLocation } = req.query;

  try {
    const routes = await prisma.route.findMany({
      where: {
        AND: [
          fromLocation ? { startLocationId: fromLocation as string } : {},
          toLocation ? { endLocationId: toLocation as string } : {}
          // Add more filtering conditions based on date, returnDate, and ticketQuantity if necessary
        ]
      },
      include: {
        startLocation: true,
        endLocation: true,
        company: true
      }
    });

    const result = routes.map(route => ({
      id: route.id,
      startLocationId: route.startLocationId,
      endLocationId: route.endLocationId,
      duration: route.duration,
      distance: route.distance,
      companyId: route.companyId,
      startLocationName: route.startLocation.name,
      endLocationName: route.endLocation.name,
      companyName: route.company.name
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching routes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
