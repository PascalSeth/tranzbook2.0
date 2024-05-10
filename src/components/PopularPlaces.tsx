import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import PopularLocation from "./PopularPlacesLocation";

export function PopularPlace() {
  const imageUrls = [
    '/Regions/EasternRegion.png',
    '/Regions/CapeCoast.png',
    '/Regions/Kumasi.png',
    '/Regions/NorthernRegion.png',
    '/Regions/VoltaRegion.png',
    '/Regions/AccraRegion.png',
  ];

  const descriptions = [
    "Aburi Botanical Garden",
    "Cape Coast Castle",
    "Kumasi Zoo",
    "Larabanga Mosque",
    "Adomi Bridge",
    "Kwame Nkrumah Masuoleum"
    // Add more descriptions as needed
  ];

  const regionTitles: string[] = [
    'East Region',
    'Cape Coast',
    'Kumasi',
    'Northern Region',
    'Volta Region',
    'Greater Accra Region'
  ];
  
  return (
    <div className="flex flex-col items-center p-5">
      <div className="">
        <h1 className="text-[5vh] font-bold text-center mb-4">        
          Top Location Picks
        </h1>
      </div>

      <div className="max-lg:hidden relative grid grid-cols-3 gap-5   items-center">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="rounded-[2pc]  hover:text-[#48A0FF] cursor-pointer">
            <DirectionAwareHover imageUrl={imageUrl}>
              <p className="font-bold text-xl">{descriptions[index]}</p>
            </DirectionAwareHover>
            <p className="font-bold text-[2.5vh] px-4">{regionTitles[index]}</p>
          </div>
        ))}
      </div>

      <div className="lg:hidden relative ">
        <PopularLocation/>
      </div>
    </div>
  );
}
