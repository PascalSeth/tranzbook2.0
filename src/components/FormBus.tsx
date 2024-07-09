'use client';

import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { PanoramaFishEyeRounded } from '@mui/icons-material';
import { SearchIcon } from 'lucide-react';
import { ComboboxForm } from './ComboBox';
import { useRouter } from 'next/navigation';
import { CalendarForm } from './Calendar';

export default function FormBus() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [ticketQuantity, setTicketQuantity] = useState(0);

  const router = useRouter();

  const handleFromLocationSelect = (location: string) => {
    setFromLocation(location);
    if (location === toLocation) {
      setToLocation('');
    }
  };

  const handleToLocationSelect = (location: string) => {
    setToLocation(location);
    if (location === fromLocation) {
      setFromLocation('');
    }
  };

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
    if (selectedDate && selectedDate.getTime() === returnDate?.getTime()) {
      setReturnDate(null);
    }
  };

  const handleReturnDateChange = (selectedReturnDate: Date | null) => {
    setReturnDate(selectedReturnDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = {
      fromLocation,
      toLocation,
      date: date ? date.toISOString() : '',
      returnDate: returnDate ? returnDate.toISOString() : '',
      ticketQuantity,
    };
    const queryString = new URLSearchParams({
      ...query,
      ticketQuantity: ticketQuantity.toString(),
    }).toString();

    router.push(`/search?${queryString}`);
  };

  return (
    <div className="grid max-lg:grid-cols-1 border-[#fdb022] my-5 w-full max-lg:rounded-t-[1pc] max-lg:rounded-b-none rounded-[1pc] border-2 grid-cols-[1fr_auto] justify-items-center justify-center items-center">
      <form onSubmit={handleSubmit} className="grid grid-cols-5 w-full max-lg:grid-cols-2">
        <div className="flex items-center lg:rounded-l-[1pc] max-lg:rounded-tl-[1pc] bg-white border-r-2 max-lg:border-none border-[#48A0ff] p-1">
          <PanoramaFishEyeRounded className="text-blue-500 text-xl mr-2" />
          <div className="flex text-gray-400 flex-col">
            <label className="text-[#48A0ff] font-semibold text-xs">FROM</label>
            <ComboboxForm
              onLocationSelect={handleFromLocationSelect}
              disabledOptions={[toLocation]}
              locationType="FROM"
            />
          </div>
        </div>

        <div className="flex max-lg:rounded-tr-[1pc] items-center bg-white border-r-2 max-lg:border-none border-[#48A0ff] p-1">
          <LocationOnIcon className="text-blue-500 text-xl mr-2" />
          <div className="flex text-gray-400 flex-col">
            <label className="text-[#74afef] font-semibold text-xs">TO</label>
            <ComboboxForm
              onLocationSelect={handleToLocationSelect}
              disabledOptions={[fromLocation]}
              locationType="TO"
            />
          </div>
        </div>

        <div className="flex items-center bg-white border-r-2 max-lg:border-none border-[#48A0ff] p-1">
          <CalendarMonthIcon className="text-blue-500 text-xl mr-2" />
          <div className="flex text-gray-400 flex-col">
            <label className="text-[#48A0ff] font-semibold text-xs">DATE</label>
            <CalendarForm onDateChange={handleDateChange} />
          </div>
        </div>

        <div className="flex items-center bg-white border-r-2 max-lg:border-none border-[#48A0ff] p-1">
          <CalendarTodayIcon className="text-blue-500 text-xl mr-2" />
          <div className="flex text-gray-400 flex-col">
            <label className="text-[#48A0ff] font-semibold text-xs">RETURN DATE</label>
            <CalendarForm
              onDateChange={handleReturnDateChange}
              disabledDates={date ? [date] : []}
            />
          </div>
        </div>

        <div className="flex items-center max-lg:col-span-2 bg-white max-lg:border-none p-1">
          <ConfirmationNumberIcon className="text-blue-500 text-xl mr-2" />
          <div className="flex text-gray-400 flex-col">
            <label className="text-[#48A0ff] font-semibold text-xs">TICKET QUANTITY</label>
            <input
              type="number"
              min="0"
              value={ticketQuantity}
              onChange={(e) => setTicketQuantity(parseInt(e.target.value))}
              placeholder="0"
              className="border-none outline-none bg-transparent w-full"
            />
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="flex items-center w-full h-full rounded-r-[1pc] max-lg:rounded-none justify-center hover:bg-[#48a0ff81] bg-[#48A0ff] text-white border-none p-1 cursor-pointer"
        onClick={handleSubmit}
      >
        <SearchIcon className="mr-2" />
        Search
      </button>
    </div>
  );
}
