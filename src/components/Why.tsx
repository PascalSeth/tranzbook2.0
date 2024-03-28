'use client'
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface WhyProps {
  activeButton: string;
}

const Why: React.FC<WhyProps> = ({ activeButton }) => {
    
  return (
    <div className=' flex flex-col z-10 items-center mx-[15%]'>
      <div className='flex'>
        <h5 className='text-center max-md:text-[4vh] font-sans font-semibold text-[6vh]'>Why TranzBook</h5>
      </div>
      <motion.div
      initial={{x:-500,opacity:0.2}}
      animate={{x:0,opacity:1 }}
      transition={{duration:2.5}}
      className='flex items-center  max-md:flex-col max-md:items-center max-lg:flex-col max-lg:items-center'>
        <div className='left-text'>
          {activeButton !== 'Cargo' && (
            <>
              <h5>Passengers</h5>
              <div className='facts'>
                <h2>
                  <CheckCircleIcon className='check' />
                  Convenience:
                </h2>
                <h5>
                  Our amazing platform helps you find comfortable buses for all your travel needs right at the comfort of your house or office. Avoid all the inconvenience and stress of going to a bus station to book your travel ticket, just TranzBook it right on your phone or computer.
                </h5>
                <h2>
                  <CheckCircleIcon className='check' />
                  Affordability:
                </h2>
                <h5>
                  Our technology also offers customers the platform to find and compare fares from different buses and find the best fares for their travel. You want to get low fare buses for your next trip? Then just TranzBook it.
                </h5>
                <h2>
                  <CheckCircleIcon className='check' />
                  Safety and security:
                </h2>
                <h5>
                  All our partner buses are comfortable, safe and secured. Our drivers are top notch professionals, well equipped to give you the best travel experience. Our buses are also being tracked for your safety. Our customers travel in comfortable buses and sleep while we watch over them
                </h5>
                <h2>
                  <CheckCircleIcon className='check' />
                  Save money while you travel:
                </h2>
                <h5>
                  You will enjoy the following when using TranzBook; Enjoy amazing discounts by consistently booking your travel tickets here. Access to referral mind blowing discounts when you recommend TranzBook to your family and friends.
                </h5>
              </div>
            </>
          )}
          {activeButton === 'Cargo' && (
            <>
              <h5>Goods Owners</h5>
              <div className='facts'>
                <h2>
                  <CheckCircleIcon className='check' />
                 Increased Efficiency: 
                </h2>
                <h5>
                 TranzBook streamline the booking
process, enabling goods owners to manage their
bookings more efficiently. This can reduce the amount
of time and resources required to manage bookings,
allowing goods owners to focus on other aspects of
their business.  </h5>
                <h2>
                  <CheckCircleIcon className='check' />
                 Cost Savings:  
                </h2>
                <h5>
                By providing access to a large network
of carriers and trucks, TranzBook helps goods owners
to find the most cost-effective shipping options.
Additionally, the platform offers pricing optimization
tools to ensure that goods owners are paying
competitive prices for their goods delivery. </h5>
            
                <h2>
                  <CheckCircleIcon className='check' />
                  Access to a Large Network of Carriers:
                </h2>
                <h5>
                 Also, we
provide goods owners with access to a large network
of carriers and trucks. This can enable goods owners
to find the right carrier for their cargo and ensure
timely delivery.</h5>   
                 <h2>
<CheckCircleIcon className='check' />
                Real-Time Visibility:
                </h2>
                <h5>
               Our platform provides real-time
visibility into movements and tracking. This can enable
goods owners to monitor their cargo and track its
location and delivery status.</h5>
              </div>
            </>
          )}
        </div>
        <div className='imagepic'>
          <Image width={150} height={60} src='/pictures/manHomepage.png' alt=''
                    className='h-full w-[60vw] ml-[2vw]' />
        </div>
      </motion.div>
      <motion.div
      initial={{x:500,opacity:0.2}}
      animate={{x:0,opacity:1 }}
      transition={{duration:2.5}} className='owners'>
        <div className='lefth'>
          <Image  width={250} height={60} src='/pictures/busHomepage.png' alt=''
          className='h-full w-[50vw] object-cover' />
        </div>
        <div className='righttxt ml-[2vw]'>
         
          {activeButton !== 'Cargo' && (
            <> <h4>Bus Owners</h4>
            <h2><CheckCircleIcon className='check' />Hustle free passengers: </h2>
              <h5>
                
                Bus operators will have the opportunity to get consistent passengers to travel in their buses. We help you worry no more about moving an empty bus.
              </h5>
              <h2><CheckCircleIcon className='check' />Revenue Tracking: </h2>
              <h5>
                
                Our technology helps bus owners get accurate revenue information and not worry anymore about false revenue reports from bus operators.
              </h5>
              <h2><CheckCircleIcon className='check' />
                Training:</h2>
              <h5>
                 Bus drivers and conductors get access to our world class training on best transport practices and industry changes. This will help them deliver quality services to passengers.
              </h5>
              <h2><CheckCircleIcon className='check' />
                Guarantee tracking services:</h2>

              <h5>
                 We help provide safety and security for bus owners and passengers as we track the movement of buses.
              </h5>
            </>
          )}
          {activeButton === 'Cargo' && (
            <>
              <h4>Truck Owners</h4>
              <h2><CheckCircleIcon className='check' />Competitive Advantage:</h2>
<h5>
                
                 Our platform offers a wider range of vehicle options and provides transparent pricing and availability information. Our customer service team is available 24/7 to ensure a seamless booking experience.              </h5>
                <h2><CheckCircleIcon className='check' />Increased Revenue:</h2>
 <h5>
                
                 By providing access to more
customers and cargo bookings, TranzBook can help
truck owners to increase their revenue. Additionally,
the platform can offer pricing optimization tools to
ensure that truck owners are charging competitive
prices for their services.              </h5>
                <h2><CheckCircleIcon className='check' />Access to New Business Opportunities:</h2>
 <h5>
                
                 TranzBook
provides access to new business opportunities, such
as connecting truck owners with new customers and
cargo bookings. This can help truck owners to
expand their business and generate more revenue.              </h5>
                <h2><CheckCircleIcon className='check' />Improved Visibility: </h2>
<h5>
                
                At TranzBook, we also provide
real-time visibility into cargo movements and
tracking, enabling truck owners to monitor their
cargo and vehicles at all times. This can help truck
owners to make informed decisions about their
operations, such as optimizing routes and improving
delivery times.              </h5>
            </>
          )}
        </div>
      </motion.div>
    </div> 
  );
}

export default Why;
