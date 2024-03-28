'use client'
import React from 'react'
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RingVolumeOutlinedIcon from '@mui/icons-material/RingVolumeOutlined';
import {motion} from 'framer-motion'

interface Widget {
  icon: React.FC; // Type for MUI icon component
  title: string;
  subtitle: string;
}

const widgets: Widget[] = [
  {
    icon: DirectionsBusFilledOutlinedIcon,
    title: 'Traveling to any region in Ghana?',
    subtitle: 'Find a comfortable and safe bus for your travel. Do not stress, just TranzBook it.',
  },
  {
    icon: LocalShippingOutlinedIcon,
    title: 'Concern about your goods?',
    subtitle: 'Find and book safe and low fare trucks/cargos for your goods.',
  },
  {
    icon: CompareArrowsIcon,
    title: 'To and from Ghana?',
    subtitle: 'Find cars to Nigeria, Togo, Benin, Burkina Faso, Côte d\'Ivoire, Mali etc',
  },
  {
    icon: RingVolumeOutlinedIcon,
    title: '24/7 Support',
    subtitle: 'Our amazing team is on standby to help you.',
  },
];

function Widgets() {
  return (
    <motion.div
      initial={{ x: -550 }}
      animate={{ x: 0 }}
      transition={{ duration: 2.5 }}
      className="flex items-center -mt-12 mb-[5vh] justify-center w-full"
    >
      <motion.div className="flex items-center max-md:flex-col ">
        {widgets.map((widget) => (
          <div key={widget.title} className="flex flex-col h-[32vh] bg-white rounded-xl p-[1vh] m-[1vh] w-[20vw] 
max-md:w-full max-md:h-[26vh] max-lg:w-fit  ">
            <div className=" text-white bg-[#48A0fF] w-fit max-lg:p-[1.3vw] rounded-2xl p-[0.9vw]
">
              <widget.icon  />
            </div>
            <div className="caption">
              <h4 className=" p-[0.5vw] pt-[3vh] text-black font-semibold text-[16px]">{widget.title}</h4>
              <h6 className="px-[0.5vw] text-[14px] text-[#475467]">{widget.subtitle}</h6>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Widgets;
