'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PromoCalendarForm } from '../Calendar';

type Data = {
  id: string;
  code: string;
  user_type: number;
  coupon_type: number;
  count: number;
  expired_at: {
    _seconds: number;
    _nanoseconds: number;
  };
  value: number;
  status: number;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  updateAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  isDelete: number;
};

export default function EditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPageContent />
    </Suspense>
  );
}

const EditPageContent = () => {
  const [userType, setUserType] = useState<string>('');
  const [couponType, setCouponType] = useState<string>('');
  const [count, setCountNumber] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [expiredAt, setExpiredAt] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const searchParams = useSearchParams();
  const PromoCodeId = searchParams.get('id') as string;
  const [promoData, setPromoData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    const getPromoCodeById = async () => {
      if (!PromoCodeId) return;

      try {
        const response = await fetch(`/lib/GET/PromoCode/getCouponID?id=${PromoCodeId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch promo code data');
        }

        const data = await response.json();
        console.log(data);
        setPromoData(data.product);
        setUserType(data.product.user_type.toString());
        setCouponType(data.product.coupon_type.toString());
        setCountNumber(data.product.count.toString());
        setValue(data.product.value.toString());
        setExpiredAt(new Date(data.product.expired_at._seconds * 1000));
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPromoCodeById();
  }, [PromoCodeId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userType || !couponType || !count || !expiredAt || !value) {
      setError('All fields are required.');
      return;
    }

    let userTypeValue: number;
    switch (userType) {
      case '0':
        userTypeValue = 0;
        break;
      case '1':
        userTypeValue = 1;
        break;
      case '2':
        userTypeValue = 2;
        break;
      default:
        throw new Error('Invalid user type');
    }

    let couponTypeValue: number;
    switch (couponType) {
      case '0':
        couponTypeValue = 0;
        break;
      case '1':
        couponTypeValue = 1;
        break;
      default:
        throw new Error('Invalid coupon type');
    }

    setIsSubmitting(true);
    setError(null);

    const requestBody = {
      coupon_type: couponTypeValue,
      user_type: userTypeValue,
      value: parseFloat(value),
      count: parseInt(count, 10),
      expired_at: expiredAt.toISOString(),
    };

    console.log('Request Body:', requestBody); // Log the request body for debugging

    try {
      const response = await fetch('/lib/PUT/PromoCode/updateByCouponID', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert('Promo Code updated successfully!');
      router.push('/promo-codes'); // Redirect after successful update
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to update promo code.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!promoData) {
    return <div>No data found</div>;
  }

  return (
    <>
      <h2 className='text-[#48A0FF] font-semibold mb-8'>Edit Promo Code</h2>
      <form className='grid grid-cols-1 items-center gap-8' onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="Pcode" className="text-left">Code</Label>
            <h6 className='text-[12px]'>will be auto generated</h6>
            <Input
              id="Pcode"
              placeholder='Code'
              disabled
              className="col-span-3"
              value={promoData.code}
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="userType" className="text-left">User Type</Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select User Type" />
              </SelectTrigger>
              <SelectContent className='z-[99999]'>
                <SelectItem value="0">User</SelectItem>
                <SelectItem value="1">Driver</SelectItem>
                <SelectItem value="2">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="couponType" className="text-left">Coupon Type</Label>
            <Select value={couponType} onValueChange={setCouponType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Coupon Type" />
              </SelectTrigger>
              <SelectContent className='z-[99999]'>
                <SelectItem value="0">Percentage</SelectItem>
                <SelectItem value="1">Numeric</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="countNumber" className="text-left">Count Number</Label>
            <Input
              type='number'
              min={0}
              id="countNumber"
              placeholder='Enter Count Number'
              className="col-span-3"
              value={count}
              onChange={(e) => setCountNumber(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="value" className="text-left">Value</Label>
            <Input
              type='number'
              min={0}
              id="value"
              placeholder='Enter Value'
              className="col-span-3"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <PromoCalendarForm value={expiredAt ?? undefined} onDateChange={setExpiredAt} />
          </div>
        </div>
        <div>
          <Button className='bg-[#48A0FF] hover:bg-[#0a8891b1]' type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </>
  );
};
