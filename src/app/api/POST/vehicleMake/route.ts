// /pages/api/createBus.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { plateNumber, capacity, busType, companyId } = req.body;

  if (!plateNumber || !capacity || !busType || !companyId) {
    return res.status(400).json({ message: 'Missing required fields' });
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
    res.status(201).json(newBus);
  } catch (error) {
    console.error('Error creating bus:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
