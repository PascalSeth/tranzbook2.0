import Link from 'next/link';
import React from 'react';

type Props = {}

function NoBusFound({}: Props) {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <img className="hidden lg:block" src="https://i.cbc.ca/1.5559709.1588871282!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/greyhound-bus-toronto-may-2020.JPG" alt="No Buses Available" />
        <img className="hidden md:block lg:hidden" src="https://i.cbc.ca/1.5559709.1588871282!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/greyhound-bus-toronto-may-2020.JPG" alt="No Buses Available" />
        <img className="md:hidden" src="https://i.cbc.ca/1.5559709.1588871282!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/greyhound-bus-toronto-may-2020.JPG" alt="No Buses Available" />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">No Buses Found</h1>
        <p className="py-4 text-base text-gray-800">Unfortunately, we couldn&apos;t find any buses matching your search criteria. This might be due to an incorrect link or the absence of available buses.</p>
        <p className="py-2 text-base text-gray-800">We apologize for the inconvenience. Please return to our homepage to continue your search or explore other options.</p>
      <Link href='/'>
        <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Return to Homepage</button>
      </Link>
      </div>
    </div>
  )
}

export default NoBusFound;
