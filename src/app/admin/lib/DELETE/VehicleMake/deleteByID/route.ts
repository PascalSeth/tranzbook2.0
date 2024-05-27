export async function DELETE(request: Request) {
    try {
        const data = await request.json();
        const { id, onDelete } = data; // Extract the id and onDelete status from the request body

        if (!id) {
            console.error('ID parameter is missing');
            return new Response('ID parameter is missing', { status: 400 });
        }

        console.log(`Received request to delete item with ID ${id}`);

        // Toggle the onDelete status
        const newOnDelete = onDelete === 0 ? 1 : 0;

        const res = await fetch(`${process.env.URL}/vehicleMake/deleteVehicleMake/${id}`, {
            cache: 'reload',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, onDelete: newOnDelete }), // Include the updated onDelete status in the request body
        });

        if (!res.ok) {
            console.error('Failed to delete data');
            return new Response('Failed to delete data', { status: res.status });
        }

        console.log(`Successfully deleted item with ID ${id}`);
        return new Response('Item deleted successfully', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    } catch (error) {
        console.error('Error deleting data:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
