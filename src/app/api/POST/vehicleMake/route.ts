// /src/app/api/POST/vehicleMake/route.ts
import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const plateNumber = formData.get('plateNumber') as string;
    const capacity = parseInt(formData.get('capacity') as string, 10);
    const busType = formData.get('busType') as string;
    const companyId = formData.get('companyId') as string;
    const imageUrl = formData.get('imageUrl') as File;

    if (!plateNumber || !capacity || !busType || !companyId || !imageUrl) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(`buses/${imageUrl.name}-${Date.now()}`, imageUrl, {
        cacheControl: '2592000',
        contentType: imageUrl.type,
      });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const newBus = await prisma.bus.create({
      data: {
        plateNumber,
        capacity,
        busType,
        companyId,
        imageUrl: imageData?.fullPath,
      },
    });

    return NextResponse.json(newBus, { status: 201 });
  } catch (error) {
    console.error('Error creating bus:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
