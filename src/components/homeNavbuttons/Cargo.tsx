import React from 'react';
// import Cargoform from './Cargoform';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Cargo: React.FC = () => {
//   const [text, count] = useTypewriter({
//     words: [
//       'Check Cargo Truck availability,Compare Prices Book Your Truck to Move Your Goods'
//     ],
//     delaySpeed: 2000,
//     loop: false,
//   });

  return (
    <div className='flex flex-col items-center m-[4vw] mb-[3vh]'>
      <div className='flex max-lg:flex-col-reverse items-center'>
        <div className='flex max-lg:mt-5 flex-col items-center p-[2vw] bg-white mr-[2vw] shadow-lg'>
          <h5>Discover trucks for your goods</h5>
          {/* <Cargoform /> */}
        </div>

        <div className='items-center flex flex-col text-center'>
          <h4 className='text-[#FDB022] text-[6vh] max-sm:text-[4vh] max-md:text-[4.4vh] font-semibold'>Book A Truck, Move Goods Easily</h4>
          <div className='h-[6vh]'>
            {/* <h5 className='text-[#475467] text-[2vh] max-lg:text-[1.9vh] w-full font-medium'>
              <span>
                {text}<Cursor />
              </span>
            </h5> */}
          </div>
          <img className='h-full' src='/pictures/TBcargo.svg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Cargo;
