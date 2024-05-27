export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const res = await fetch(`${process.env.URL}/setPrice/getAll`, {
    cache: 'no-cache',  
    headers: {
          'Content-Type': 'application/json',
  
      },
  });

  const product = await res.json();
  console.log(product)

  return Response.json({ product });
}
