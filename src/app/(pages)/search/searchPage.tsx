'use client';

import { BookingFilterAccordion } from '@/components/FilterComponent';
import FormBus from '@/components/FormBus';
import { AccessTimeSharp, LocationOnSharp, PanoramaFishEyeSharp } from '@mui/icons-material';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type Bus = {
  id: string;
  name: string;
  plateNumber: string;
  busType: string;
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

type Location = {
  id: string;
  name: string;
};

// Extended TripData type with additional properties
type ExtendedTripData = TripData & {
  startLocationName: string;
  endLocationName: string;
  busType: string;
  formattedDate: string;
  logoUrl?: string;
};

export function SearchPage() {
  const [data, setData] = useState<TripData[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [buses, setBuses] = useState<Bus[]>([]);
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);
  const [sortedData, setSortedData] = useState<ExtendedTripData[]>([]);

  const [activeButton, setActiveButton] = useState('Regular');

  const handleButtonClick = (button:any) => {
    setActiveButton(button);
  };


  const fetchData = async () => {
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

      const tripData = await tripResponse.json();
      const locationData = await locationResponse.json();
      const routeData = await routeResponse.json();
      const busData = await busResponse.json();
      const companyData = await companyResponse.json();

      console.log('Company Data:', companyData); // Debugging log for company data

      setData(Array.isArray(tripData) ? tripData : []);
      setLocations(Array.isArray(locationData) ? locationData : []);
      setRoutes(Array.isArray(routeData) ? routeData : []);
      setBuses(Array.isArray(busData) ? busData : []);
      setCompanyData(Array.isArray(companyData) ? companyData : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const locationMap = new Map(locations.map(location => [location.id, location.name]));
    const routeMap = new Map(routes.map(route => [route.id, route]));
    const busMap = new Map(buses.map(bus => [bus.id, bus.busType]));
    const companyMap = new Map(companyData.map(company => [company.id, company.logoUrl]));

    const newSortedData: ExtendedTripData[] = data.map(trip => {
      const route = routeMap.get(trip.routeId);
      return {
        ...trip,
        startLocationName: route ? locationMap.get(route.startLocationId) || route.startLocationId : trip.startLocationId,
        endLocationName: route ? locationMap.get(route.endLocationId) || route.endLocationId : trip.endLocationId,
        busType: busMap.get(trip.busId) || trip.busId,
        formattedDate: new Date(trip.date).toLocaleDateString(),
        logoUrl: companyMap.get(trip.companyId),
      };
    });

    console.log('Sorted Data with Logos:', newSortedData); // Debugging log for sorted data

    setSortedData(newSortedData);
  }, [data, locations, routes, buses, companyData]);

  const handleAddSuccess = () => {
    fetchData();
  };

  return (
    <div>
      <div className="relative  w-full overflow-hidden">
            <FormBus />
      </div>
   
      {sortedData.length > 0 ? (
        <div className='grid grid-cols-3'>
          <div className='grid grid-cols-1 '>
            <div className='flex-col flex ml-5'>
              <h2 className='font-bold text-gray-400 text-[11px]'>SELECT YOUR TRIP</h2>
              <h1 className='font-bold text-[#48A0FF] text-[15px]'>Available Trips: {sortedData.length} results</h1>
            </div>
          </div>
          <div className='grid grid-cols-1 col-span-2 '>
            <div className='max-lg:hidden'> 
               <div className='value flex bg-white items-center p-[2vh] rounded-md
                    mr-[2vw]'>
                     <div>
                       <h2 className='mr-3 font-semibold'>Sort By</h2>
                     </div>
                     <div className='flex items-center space-x-4 max-md:flex-row'>
                     <button
                onClick={() => handleButtonClick('Regular')}
                className='px-2 font-semibold rounded-[0.4pc]'
                style={{
                  backgroundColor: activeButton === 'Regular' ? '#48A0FF' : '#F2F4F7',
                  color: activeButton === 'Regular' ? '#F2F4F7' : '#48A0FF',
                }}
              >
                Cheapest
              </button>
              <button
                onClick={() => handleButtonClick('Fastest')}
                className='px-2 font-semibold rounded-[0.4pc]'
                style={{
                  backgroundColor: activeButton === 'Fastest' ? '#48A0FF' : '#F2F4F7',
                  color: activeButton === 'Fastest' ? '#F2F4F7' : '#48A0FF',
                }}
              >
                Fastest
              </button>
              <button
                onClick={() => handleButtonClick('Earliest')}
                className='px-2 font-semibold rounded-[0.4pc]'
                style={{
                  backgroundColor: activeButton === 'Earliest' ? '#48A0FF' : '#F2F4F7',
                  color: activeButton === 'Earliest' ? '#F2F4F7' : '#48A0FF',
                }}
              >
                Earliest
              </button></div>
                   </div></div>
          </div>
          <div className='grid max-lg:hidden grid-cols-1 items-start justify-center'>
        <BookingFilterAccordion/>
          </div>
          <div className='grid grid-cols-1 col-span-2 max-lg:col-span-3 items-start justify-center'>
            <div>
              {sortedData.map((trip) => (
                 <div className='grid grid-cols-1 mb-5 w-full border border-gray-200 rounded-[1pc]' key={trip.id}>
                 <div className='flex max-md:flex-col'>
       
                   <div className='flex w-full p-[2vh] justify-between  '>
                     <div className='flex flex-col  justify-between'>
                       <div className='buspic'>
                         <img className='w-full h-[16vh] object-fill' src={trip.logoUrl} alt='' />
                       </div>
                       <div className='sectiontop '>
                         <h2>
                           <PanoramaFishEyeSharp className='ic' />
                           {trip.startLocationName}
                         </h2>
                         <h3>
                           <AccessTimeSharp className='ic' /> 7:00am | Selected Date: {trip.formattedDate ? trip.formattedDate : 'No date selected'}
                         </h3>
                       </div>
                       <div className='sectionbottom'>
                         <h2>
                           <LocationOnSharp className='ic' />
                           {trip.endLocationName}
                         </h2>
                         <h3>
                           <AccessTimeSharp className='ic' /> 7:00am | Selected Date: {trip.formattedDate ? trip.formattedDate : 'No date selected'}
                         </h3>
                       </div>
                     </div>
                     <div className='rightloca flex flex-col items-center justify-between'>
                       <h6 className='font-semibold'>${trip.price}</h6>
                       <div >
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
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchPage;