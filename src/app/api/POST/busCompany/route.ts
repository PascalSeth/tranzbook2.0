import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const logoUrl = formData.get('logoUrl') as File;

    if (!name || !email || !password || !logoUrl) {
      return NextResponse.json({ error: "Name, email, password, and logo are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('images')
      .upload(`/logos/${logoUrl.name}-${Date.now()}`, logoUrl, {
        cacheControl: '2592000',
        contentType: logoUrl.type,
      });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const newBusCompany = await prisma.busCompany.create({
      data: {
        name,
        email,
        password: hashedPassword,
        logoUrl: imageData?.fullPath,
      },
    });

    return NextResponse.json(newBusCompany, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'An error occurred while creating the bus company' }, { status: 500 });
  }
}
