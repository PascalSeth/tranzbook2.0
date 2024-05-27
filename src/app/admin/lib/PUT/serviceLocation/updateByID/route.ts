import { Vibes } from "next/font/google";

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, countryISOCode, city, price } = data;

    if (!id || !countryISOCode || !city || typeof price !== 'number') {
      console.error('Invalid request data:', data);
      return new Response('Invalid request data', { status: 400 });
    }

    console.log(`Received request to update ID ${id}`);

    const res = await fetch(`${process.env.URL}/setPrice/updateCity/${id}`, {
      cache: 'reload',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        countryISOCode,
        city,
        price,
      }),
    });

    const text = await res.text();
    console.log('Response from external service:', text);

    if (!res.ok) {
      console.error('Failed to update data:', text);
      return new Response(`Failed to update data: ${text}`, { status: res.status });
    }

    let updatedProduct;
    try {
      updatedProduct = JSON.parse(text);
    } catch (error) {
      console.error('Failed to parse response JSON:', text);
      return new Response('Failed to parse response JSON', { status: 500 });
    }

    console.log(`Successfully updated status for ID ${id}`);
    return new Response(JSON.stringify({ product: updatedProduct }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
