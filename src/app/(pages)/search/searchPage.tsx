'use client';


import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { CircularProgress } from '@mui/material'; // Import CircularProgress from Material-UI
import { AccessTimeSharp, LocationOnSharp, PanoramaFishEyeSharp } from '@mui/icons-material';
import FormBus from '@/components/FormBus';
import NoBusFound from '@/app/admin/components/NoBusFound';
import { useSearchParams } from 'next/navigation';
import { Bus } from 'lucide-react';
import { BookingFilterAccordion } from '@/components/FilterComponent';

type BusType = {
  id: string;
  name: string;
  plateNumber: string;
  busType: string;
  imageUrl: string;
  companyId: string;
};

type TripData = {
  id: string;
  date: string;
  price: number;
  busId: string;
  routeId: string;
  startLocationId: string;
  endLocationId: string;
  duration: number;
  distance: number;
  companyId: string;
};

type CompanyData = {
  id: string;
  name: string;
  email: string;
  logoUrl?: string;
};

type Route = {
  id: string;
  startLocationId: string;
  endLocationId: string;
};

type LocationType = {
  id: string;
  name: string;
};

type ExtendedTripData = TripData & {
  startLocationName: string;
  endLocationName: string;
  busType: string;
  formattedDate: string;
  logoUrl?: string;
  imageUrl?: string;
};

const defaultLogoUrl = 'default-logo-url'; // Define a default logo URL

export default function SearchPage() {
  return (
    <Suspense fallback={<CircularProgress/>}>
      <SearchResults />
    </Suspense>
  );
}

const SearchResults: React.FC = () => {
  const [results, setResults] = useState<ExtendedTripData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [buses, setBuses] = useState<BusType[]>([]);
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const [tripResponse, locationResponse, routeResponse, busResponse, companyResponse] = await Promise.all([
        fetch('/api/GET/getTrip'),
        fetch('/api/GET/getLocation'),
        fetch('/api/GET/getRoute'),
        fetch('/api/GET/getBuses'),
        fetch('/api/GET/getbusCompany'),
      ]);

      if (!tripResponse.ok || !locationResponse.ok || !routeResponse.ok || !busResponse.ok || !companyResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const locationData = await locationResponse.json();
      const routeData = await routeResponse.json();
      const busData = await busResponse.json();
      const companyData = await companyResponse.json();

      setLocations(Array.isArray(locationData) ? locationData : []);
      setRoutes(Array.isArray(routeData) ? routeData : []);
      setBuses(Array.isArray(busData) ? busData : []);
      setCompanyData(Array.isArray(companyData) ? companyData : []);
    } catch (error) {
      console.error('Error fetching initial data:', error);
      setError('Failed to fetch data. Please try again later.'); // Set error state on failure
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  }, []);

  useEffect(() => {
    fetchData(); // Fetch initial data when component mounts
  }, [fetchData]);

  const fetchResults = useCallback(async () => {
    setLoading(true); // Start loading state
    const fromLocation = searchParams.get('fromLocation');
    const toLocation = searchParams.get('toLocation');
    const date = searchParams.get('date');
    const returnDate = searchParams.get('returnDate');
    const ticketQuantity = searchParams.get('ticketQuantity');

    try {
      const response = await fetch(
        `/api/GET/getSearchByQuery?fromLocation=${fromLocation}&toLocation=${toLocation}&date=${date}&returnDate=${returnDate}&ticketQuantity=${ticketQuantity}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }

      const tripData: TripData[] = await response.json();
      const companyMap = new Map(companyData.map(company => [company.id, company]));

      // Map TripData to ExtendedTripData
      const mappedResults: ExtendedTripData[] = tripData.map(trip => {
        const route = routes.find(r => r.id === trip.routeId);
        const bus = buses.find(b => b.id === trip.busId);
        const company = bus?.companyId ? companyMap.get(bus.companyId) : undefined;

        const logoUrl = company?.logoUrl || defaultLogoUrl; // Use defaultLogoUrl if logoUrl is undefined

        return {
          ...trip,
          startLocationName: route ? locations.find(l => l.id === route.startLocationId)?.name || route.startLocationId : trip.startLocationId,
          endLocationName: route ? locations.find(l => l.id === route.endLocationId)?.name || route.endLocationId : trip.endLocationId,
          busType: bus ? bus.busType : trip.busId,
          imageUrl: bus ? bus.imageUrl : '',
          formattedDate: new Date(trip.date).toLocaleDateString(),
          logoUrl,
        };
      });

      setResults(mappedResults);
    } catch (error) {
      setError('An error occurred while fetching results');
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  }, [searchParams, routes, buses, locations, companyData]);

  useEffect(() => {
    fetchResults(); // Fetch results whenever searchParams or dependencies change
  }, [fetchResults]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress /> 
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Suspense fallback={<CircularProgress/>}>
    <div>
      <div className="relative w-full overflow-hidden">
        <FormBus />
      </div>
      {results.length > 0 ? (
        <div className='grid grid-cols-3'>
          <div className='grid grid-cols-1'>
            <div className='flex-col flex ml-5'>
              <h2 className='font-bold text-gray-400 text-[11px]'>SELECT YOUR TRIP</h2>
              <h1 className='font-bold text-[#48A0FF] text-[15px]'>Available Trips: {results.length} results</h1>
            </div>
          </div>
          <div className='grid grid-cols-1 col-span-2'>
            <div className='max-lg:hidden'>
              <div className='value flex bg-white items-center p-[2vh] rounded-md mr-[2vw]'>
                <div>
                  <h2 className='mr-3 font-semibold'>Sort By</h2>
                </div>
                <div className='flex items-center space-x-4 max-md:flex-row'>
                  <button className='px-2 font-semibold rounded-[0.4pc]' style={{ backgroundColor: '#48A0FF', color: '#F2F4F7' }}>
                    Cheapest
                  </button>
                  <button className='px-2 font-semibold rounded-[0.4pc]' style={{ backgroundColor: '#F2F4F7', color: '#48A0FF' }}>
                    Fastest
                  </button>
                  <button className='px-2 font-semibold rounded-[0.4pc]' style={{ backgroundColor: '#F2F4F7', color: '#48A0FF' }}>
                    Earliest
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='grid max-lg:hidden grid-cols-1 items-start justify-center'>
            <div className='booking-filter-accordion'>
              <BookingFilterAccordion />
            </div>
          </div>
          <div className='grid grid-cols-1 col-span-2 max-lg:col-span-3 items-start justify-center'>
            <div>
              {results.map(trip => (
                <div className='grid grid-cols-1 mb-5 w-full border border-gray-200 rounded-[1pc]' key={trip.id}>
                  <div className='flex max-md:flex-col'>
                    <div className='flex w-full p-[2vh] justify-between'>
                      <div className='flex flex-col justify-between'>
                        <div className='sectiontop'>
                          <div className='buspic'>
                            <img className='w-full rounded-full h-24 object-fill' src={trip.logoUrl ? `https://dzviyoyyyopfsokiylmm.supabase.co/storage/v1/object/public/${trip.imageUrl}` : defaultLogoUrl} alt='' />
                          </div>
                          <h2>
                            <PanoramaFishEyeSharp className='ic' />
                            {trip.startLocationName}
                          </h2>
                          <h3>
                            <AccessTimeSharp className='ic' /> 7:00am | Selected Date: {trip.formattedDate || 'No date selected'}
                          </h3>
                        </div>
                        <div className='sectionbottom'>
                          <h2>
                            <LocationOnSharp className='ic' />
                            {trip.endLocationName}
                          </h2>
                          <h3>
                            <AccessTimeSharp className='ic' /> 7:00am | Selected Date: {trip.formattedDate || 'No date selected'}
                          </h3>
                        </div>
                      </div>
                      <div className='rightloca flex flex-col items-center justify-between'>
                        <div className='flex items-center flex-col text-[2vh]'>
                          <div>
                            <img className='w-full rounded-full h-8 object-fill' src={trip.logoUrl ? `https://dzviyoyyyopfsokiylmm.supabase.co/storage/v1/object/public/${trip.logoUrl}` : defaultLogoUrl} alt='' />
                          </div>
                          <h2 className='font-semibold flex items-center text-[#48A0FF]'><Bus /> {trip.busType}</h2>
                        </div>
                        <h6 className='font-semibold'>GH₵{trip.price}</h6>
                        <div>
                          <button className='bg-[#48A0FF] p-2 rounded-[0.4pc] text-white font-bold'>Book</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NoBusFound />
      )}
    </div></Suspense>
  );
};
