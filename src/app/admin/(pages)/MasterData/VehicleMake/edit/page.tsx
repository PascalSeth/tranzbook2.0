'use client';

import React, { Suspense, useEffect, useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Timestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type Data = {
  id: string;
  srNodata: number;
  make: string;
  model: string;
  year: number;
  description: string;
  status: number;
  capacity: number;
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('id') as string;
  const [vehicleData, setVehicleData] = useState<Data | undefined>(undefined);
  const [formData, setFormData] = useState<Partial<Data>>({});

  useEffect(() => {
    const getVehicleById = async () => {
      if (!vehicleId) return;

      try {
        const response = await fetch(`/lib/GET/VehicleMake/getallbyvehiclemakeID?id=${vehicleId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch vehicle data');
        }

        const data = await response.json();
        console.log(data);
        setVehicleData(data.product);
        setFormData(data.product);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getVehicleById();
  }, [vehicleId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/lib/PUT/VehicleMake/updatevehiclemake`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update vehicle data');
      }

      const data = await response.json();
      console.log(data);

      router.push('/vehicles'); // Redirect after successful update
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
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
          <Label htmlFor="make" className="text-left">
            Vehicle Make Name
          </Label>
          <Input id="make" value={formData.make || ''} onChange={handleChange} placeholder=' Name' className="col-span-3" />
        </div>

        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="model" className="text-left">
            Vehicle Model
          </Label>
          <Input id="model" value={formData.model || ''} onChange={handleChange} placeholder=' Enter Model' className="col-span-3" />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="year" className="text-left">
            Year
          </Label>
          <Input id="year" value={formData.year?.toString() || ''} onChange={handleChange} placeholder='Enter Year' className="col-span-3" />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="capacity" className="text-left">
            Capacity
          </Label>
          <Input type='number' id="capacity" value={formData.capacity?.toString() || ''} onChange={handleChange} placeholder='Enter Capacity' className="col-span-3" />
        </div>
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="description" className="text-left">
            Description
          </Label>
          <Input  id="description" value={formData.description?.toString() || ''} onChange={handleChange} placeholder='Enter Capacity' className="col-span-3" />
        </div>

        <div>
          <Button className='bg-[#48A0FF] hover:bg-[#0a8891b1]' type="submit">Save</Button>
        </div>
      </form>
    </Suspense>
  );
}
