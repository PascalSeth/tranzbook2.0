import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const newLocation = await req.json();
      console.log('Received new location:', newLocation);

      const response = await fetch(`${process.env.URL}/setPrice/createCity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocation),
      });

      const data = await response.json();
      console.log('Response from backend:', data);

      if (!response.ok) {
        throw new Error(`Backend error: ${data.message || 'Unknown error'}`);
      }

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
      return NextResponse.json({ message: 'Error creating location' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}
