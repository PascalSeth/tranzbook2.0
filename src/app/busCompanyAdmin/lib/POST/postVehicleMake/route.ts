import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const newVehicle = await req.json();
      console.log(newVehicle);
      const response = await fetch(`${process.env.URL}/vehicleMake/createVehicle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVehicle),
      });

      const data = await response.json();
      return NextResponse.json(data);
    } catch (error:any) {
  console.error('Error:', error);
  // Log additional error details
  if (error.response) {
    console.error('Response status:', error.response.status);
    console.error('Response data:', error.response.data);
  } else {
    console.error('Error message:', error.message);
  }
  return NextResponse.json({ message: 'Error creating vehicle' }, { status: 500 });
}
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}