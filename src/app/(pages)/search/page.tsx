'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Data {
  id: string;
  startLocationId: string;
  endLocationId: string;
  duration: number;
  distance: number;
  companyId: string;
  startLocationName?: string;
  endLocationName?: string;
  companyName?: string;
}

interface Location {
  id: string;
  name: string;
}

interface Company {
  id: string;
  name: string;
}

const fetchLocationsAndCompanies = async () => {
  const [locationsResponse, companiesResponse] = await Promise.all([
    fetch('/api/GET/getLocation'),
    fetch('/api/GET/getbusCompany'),
  ]);

  const [locations, companies]: [Location[], Company[]] = await Promise.all([
    locationsResponse.json(),
    companiesResponse.json(),
  ]);

  return { locations, companies };
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const fromLocation = searchParams.get('fromLocation');
  const toLocation = searchParams.get('toLocation');
//   const date = searchParams.get('date');
//   const returnDate = searchParams.get('returnDate');
//   const ticketQuantity = searchParams.get('ticketQuantity');

  const [results, setResults] = useState<Data[]>([]);
  const [locationsMap, setLocationsMap] = useState<Record<string, string>>({});
  const [companiesMap, setCompaniesMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { locations, companies } = await fetchLocationsAndCompanies();

        const locationsMap = locations.reduce((acc: Record<string, string>, location: Location) => {
          acc[location.id] = location.name;
          return acc;
        }, {});

        const companiesMap = companies.reduce((acc: Record<string, string>, company: Company) => {
          acc[company.id] = company.name;
          return acc;
        }, {});

        setLocationsMap(locationsMap);
        setCompaniesMap(companiesMap);

        const response = await fetch(`/api/GET/getsearchRoutes?fromLocation=${fromLocation}&toLocation=${toLocation}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        const data: Data[] = await response.json();

        const resultsWithNames = data.map((result) => ({
          ...result,
          startLocationName: locationsMap[result.startLocationId],
          endLocationName: locationsMap[result.endLocationId],
          companyName: companiesMap[result.companyId],
        }));

        setResults(resultsWithNames);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [fromLocation, toLocation]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((result) => (
            <li key={result.id} className="border p-4 rounded shadow">
              <p><strong>Start Location:</strong> {result.startLocationName}</p>
              <p><strong>End Location:</strong> {result.endLocationName}</p>
              <p><strong>Duration:</strong> {result.duration} minutes</p>
              <p><strong>Distance:</strong> {result.distance} km</p>
              <p><strong>Company:</strong> {result.companyName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
