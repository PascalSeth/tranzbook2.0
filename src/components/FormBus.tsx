'use client'
import { PanoramaFishEyeRounded } from '@mui/icons-material'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

export default function formBus({}: Props) {
  return (
    <div className='flex max-lg:flex-col p-5 justify-center w-full'>
      <form className='flex items-center border-[2px] rounded-l-xl max-lg:flex-col 
       border-[#fdb022] border-r-0 max-lg:border-r max-lg:rounded-t-xl max-lg:rounded-bl-none '>
        <div className='flex w-[16vw] rounded-l-xl max-lg:rounded-t-xl  bg-white max-lg:w-full border-b max-lg:border-b-[#48A0ff] items-center max-lg:border-r-0 border-r p-0.5 h-fit border-r-[#48A0ff]'>
          <PanoramaFishEyeRounded className='text-blue-500 text-[20px] mr-2' />
          <div className='flex flex-col'> 
            <label className='text-[#48A0ff] font-semibold text-[10px]'>FROM</label>
            <input placeholder='ORIGIN' className='text-[16px] border-none outline-none bg-transparent w-[12vw] max-lg:w-full'/>
          </div>
        </div>

        <div className='flex w-[16vw] bg-white max-lg:w-full border-b max-lg:border-b-[#48A0ff] items-center max-lg:border-r-0 border-r p-0.5 h-fit border-r-[#48A0ff]'>
          <PanoramaFishEyeRounded className='text-blue-500 text-[20px] mr-2' />
          <div className='flex flex-col'>
            <label className='text-[#74afef] font-semibold text-[10px]'>TO</label>
            <input placeholder='DESTINATION' className='border-none outline-none bg-transparent w-[12vw] max-lg:w-full'/>
          </div>
        </div>

        <div className='flex items-center max-md:flex-col'>
        <div className='flex w-[16vw] bg-white max-lg:w-full border-b max-lg:border-b-[#48A0ff] items-center  border-r p-0.5 h-fit border-r-[#48A0ff]'>
          <PanoramaFishEyeRounded className='text-blue-500 text-[20px] mr-2' />
          <div className='flex flex-col'>
            <label className='text-[#48A0ff] font-semibold text-[10px]'>DATE</label>
            <input placeholder='' className='border-none outline-none bg-transparent w-[12vw] max-lg:w-full'/>
          </div>
        </div>

        <div className='flex w-[16vw] bg-white max-lg:w-full border-b max-lg:border-b-[#48A0ff] items-center max-lg:border-r-0 border-r p-0.5 h-fit border-r-[#48A0ff]'>
          <PanoramaFishEyeRounded className='text-blue-500 text-[20px] mr-2' />
          <div className='flex flex-col'>
            <label className='text-[#48A0ff] font-semibold text-[10px]'>RETURN DATE
</label>
            <input placeholder='' className='border-none outline-none bg-transparent w-[12vw] max-lg:w-full'/>
          </div>
        </div>
        </div>

        <div className='flex w-[16vw]  bg-white max-lg:w-full border-b items-center max-lg:border-r-0 border-r p-0.5 h-fit'>
          <PanoramaFishEyeRounded className='text-blue-500 text-[20px] mr-2' />
          <div className='flex flex-col'>
            <label className='text-[#48A0ff] font-semibold text-[10px]'>TICKET QUANTITY</label>
            <input placeholder='0' className='border-none outline-none bg-transparent w-[12vw] max-lg:w-full'/>
          </div>
        </div>
      </form>
       
      <button className='search-button'>
            <SearchIcon/>
            Search
          </button>
    </div>
  )
}