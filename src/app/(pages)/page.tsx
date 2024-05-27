"use client"
import Bus from '@/components/homeNavbuttons/Bus';
import Cargo from '@/components/homeNavbuttons/Cargo';
import React, { useState} from 'react';
import Widgets from '../../components/Widgets';
import Why from '../../components/Why';
import { useTheme } from "next-themes"

import Faq from '../../components/Faq';
import Partner from '@/components/Partner';
import { PopularPlace } from '@/components/PopularPlaces';
type Props = {}

enum ButtonType {
    'Bus' = 'Bus',
    'Cargo' = 'Cargo',
  }

export default function UpperHome({}: Props) {
  const {theme}=useTheme()

    const [activeButton, setActiveButton] = useState<ButtonType>(ButtonType.Bus);

    const handleButtonClick = (button: ButtonType) => {
      setActiveButton(button);
    };
  return (
    <main className='flex flex-col w-full h-full items-center '>
    <div className={`bg-[#DEF5FB] ${theme === 'dark'? 'bg-gray-900':''} w-full rounded-b-[2pc] pb-20`} >
        <div className='flex p-2 flex-col items-center'>
          <div className='flex'>
    <button
      className='hlinks'
      onClick={() => handleButtonClick(ButtonType.Bus)}
      style={{
        backgroundColor: activeButton === ButtonType.Bus ? '#48A0FF' : '#F2F4F7',
        color: activeButton === ButtonType.Bus ? '#F2F4F7' : '#48A0FF',
      }}
    >
      Bus
    </button>
    <button
      className='hlinks'
      onClick={() => handleButtonClick(ButtonType.Cargo)}
      style={{
        backgroundColor: activeButton === ButtonType.Cargo ? '#48A0FF' : '#F2F4F7',
        color: activeButton === ButtonType.Cargo ? '#F2F4F7' : '#48A0FF',
      }}
    >
      Cargo
    </button></div>
  </div>
  <div className='Bus'>
    {activeButton === ButtonType.Bus && <Bus/>}
    {activeButton === ButtonType.Cargo && <Cargo/> }
  </div>
  
  </div>
  <div><Widgets/>
    <Why activeButton={activeButton}/>
     <PopularPlace />
      <Partner/>
  
    <section id='Faq'>
      <Faq/>
    </section>
    

  </div>
  </main>
  );
}

