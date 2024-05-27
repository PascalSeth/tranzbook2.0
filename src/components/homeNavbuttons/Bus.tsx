'use client'
import React from 'react';
// import FormNew from './FormNew';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import FormBus from '../FormBus';

const Bus: React.FC = () => {
  const [text, count] = useTypewriter({
    words: ['Check Bus Schedules, Compare Prices and Book Ticket Online'],
    loop: false,
    delaySpeed: 3000,
  
  });

  return (
    <div className='flex flex-col items-center overflow-x-hidden w-[100%] justify-center '>
      <div className='flex flex-col items-center text-center'>
        <h4 className='text-[#FDB022] text-[4vh] max-sm:text-[3vh] max-md:text-[2.4vh] font-bold'>Book A Truck, Move Goods Easily</h4>
        <h5 className='text-[#475467] text-[2vh] max-lg:text-[1.9vh] w-full font-semibold'>
          <span>{text}<Cursor /></span>
        </h5>
      </div>
      <div>
        <FormBus/>
      </div>
      <div>
        <Image
        width='50'
        className='w-full'
        height={100}
          src='/pictures/busIlustration 1.svg'
          alt=''
        />
      </div>
    </div>
  );
}

export default Bus;
