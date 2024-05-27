'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Data = {
  id: string;
  srNodata: string;
  countryISOCode: string;
  price: number;
  city: string;
  status: number;
};

export default function EditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPageContent />
    </Suspense>
  );
}

const EditPageContent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [vehicleData, setVehicleData] = useState<Data | undefined>(undefined);
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id') as string;

  useEffect(() => {
    const getVehicleById = async () => {
      if (!id) return;

      try {
        const response = await fetch(`/lib/GET/serviceLocation/getCityById?id=${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch vehicle data');
        }

        const data = await response.json();
        setVehicleData(data.product);
        setCountry(data.product.countryISOCode);
        setCity(data.product.city);
        setPrice(data.product.price);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getVehicleById();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!vehicleData) return;

    try {
      const response = await fetch(`/lib/PUT/serviceLocation/updateByID?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          countryISOCode: country,
          city: city,
          price: price,
        }),
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to update vehicle data');
        } else {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to update vehicle data');
        }
      }

      router.push('/serviceLocations'); // Change to your desired route after success
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!vehicleData) {
    return <div>No data found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2 className='text-[#48A0FF] font-semibold mb-8'>Edit Vehicle Make</h2>
      <form className='grid grid-cols-1 items-center gap-8' onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="Country" className="text-left">Country</Label>
          <Input
            id="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Country'
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="City" className="text-left">City</Label>
          <Input
            id="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter City'
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="Price" className="text-left">Price</Label>
          <Input
            id="Price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            placeholder='Enter Price'
            className="col-span-3"
            type="number"
          />
        </div>

        <div>
          <Button className='bg-[#48A0FF] hover:bg-[#0a8891b1]' type="submit">Save</Button>
        </div>
      </form>
    </Suspense>
  );
}
