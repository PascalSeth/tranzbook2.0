import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import man from '../../public/pictures/manHomepage.png';
import bus from '../../public/pictures/busHomepage.jpeg';

interface WhyProps {
  activeButton: string;
}

const Why: React.FC<WhyProps> = ({ activeButton }) => {
  return (
    <div className=''> 
              <h5 className='text-center max-md:text-[4vh] p-6 font-sans font-semibold text-[6vh]'>Why TranzBook</h5>


    <div className='grid grid-cols-2 gap-10 max-lg:grid-cols-1  max-lg:gap-0 z-10 mx-[10%]'>
      <div className='left-text'>
        {activeButton !== 'Cargo' && (
          <>
            <h4>Passengers</h4>
            <div className='facts'>
              <FactListItem
                title="Convenience"
                description="Our amazing platform helps you find comfortable buses for all your travel needs right at the comfort of your house or office. Avoid all the inconvenience and stress of going to a bus station to book your travel ticket, just TranzBook it right on your phone or computer."
              />
              <FactListItem
                title="Affordability"
                description="Our technology also offers customers the platform to find and compare fares from different buses and find the best fares for their travel. You want to get low fare buses for your next trip? Then just TranzBook it."
              />
              <FactListItem
                title="Safety and security"
                description="All our partner buses are comfortable, safe and secured. Our drivers are top-notch professionals, well-equipped to give you the best travel experience. Our buses are also being tracked for your safety. Our customers travel in comfortable buses and sleep while we watch over them."
              />
              <FactListItem
                title="Save money while you travel"
                description="You will enjoy the following when using TranzBook; Enjoy amazing discounts by consistently booking your travel tickets here. Access to referral mind-blowing discounts when you recommend TranzBook to your family and friends."
              />
            </div>
          </>
        )}
        {activeButton === 'Cargo' && (
          <>
            <h4>Goods Owners</h4>
            <div className='facts'>
              <FactListItem
                title="Increased Efficiency"
                description="TranzBook streamline the booking process, enabling goods owners to manage their bookings more efficiently. This can reduce the amount of time and resources required to manage bookings, allowing goods owners to focus on other aspects of their business."
              />
              <FactListItem
                title="Cost Savings"
                description="By providing access to a large network of carriers and trucks, TranzBook helps goods owners to find the most cost-effective shipping options. Additionally, the platform offers pricing optimization tools to ensure that goods owners are paying competitive prices for their goods delivery."
              />
              <FactListItem
                title="Access to a Large Network of Carriers"
                description="Also, we provide goods owners with access to a large network of carriers and trucks. This can enable goods owners to find the right carrier for their cargo and ensure timely delivery."
              />
              <FactListItem
                title="Real-Time Visibility"
                description="Our platform provides real-time visibility into movements and tracking. This can enable goods owners to monitor their cargo and track its location and delivery status."
              />
            </div>
          </>
        )}
      </div>
      <motion.div
        className='imagepic rounded-b-[2pc]'
      >
        <Image quality={100} src={man} alt='' className='imagepic rounded-b-[2pc] ' />
      </motion.div>
      <motion.div

        className='imagepic max-lg:hidden rounded-b-[2pc]'
      >
        <Image quality={100} src={bus} alt='' className='whyImage rounded-b-[2pc]' />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0.2 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5 }}
        className='righttxt ml-[2vw]'
      >
        {activeButton !== 'Cargo' && (
          <>
            <h4>Bus Owners</h4>
            <FactListItem
              title="Hustle free passengers"
              description="Bus operators will have the opportunity to get consistent passengers to travel in their buses. We help you worry no more about moving an empty bus."
            />
            <FactListItem
              title="Revenue Tracking"
              description="Our technology helps bus owners get accurate revenue information and not worry anymore about false revenue reports from bus operators."
            />
            <FactListItem
              title="Training"
              description="Bus drivers and conductors get access to our world-class training on best transport practices and industry changes. This will help them deliver quality services to passengers."
            />
            <FactListItem
              title="Guarantee tracking services"
              description="We help provide safety and security for bus owners and passengers as we track the movement of buses."
            />
          </>
        )}
        {activeButton === 'Cargo' && (
          <>
            <h4>Truck Owners</h4>
            <FactListItem
              title="Competitive Advantage"
              description="Our platform offers a wider range of vehicle options and provides transparent pricing and availability information. Our customer service team is available 24/7 to ensure a seamless booking experience."
            />
            <FactListItem
              title="Increased Revenue"
              description="By providing access to more customers and cargo bookings, TranzBook can help truck owners to increase their revenue. Additionally, the platform can offer pricing optimization tools to ensure that truck owners are charging competitive prices for their services."
            />
            <FactListItem
              title="Access to New Business Opportunities"
              description="TranzBook provides access to new business opportunities, such as connecting truck owners with new customers and cargo bookings. This can help truck owners to expand their business and generate more revenue."
            />
            <FactListItem
              title="Improved Visibility"
              description="At TranzBook, we also provide real-time visibility into cargo movements and tracking, enabling truck owners to monitor their cargo and vehicles at all times. This can help truck owners to make informed decisions about their operations, such as optimizing routes and improving delivery times."
            />
          </>
        )}
      </motion.div>
      <motion.div

        className='imagepic max-lg:block lg:hidden rounded-b-[2pc]'
      >
        <Image quality={100} src={bus} alt='' className='imagepic rounded-b-[2pc]' />
      </motion.div>
     
    </div>    </div>
  );
};

interface FactListItemProps {
  title: string;
  description: string;
}

const FactListItem: React.FC<FactListItemProps> = ({ title, description }) => (
  <>
    <h2><CheckCircleIcon className='check' />{title}</h2>
    <h5>{description}</h5>
  </>
);

export default Why;
