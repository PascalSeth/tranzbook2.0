'use client'
import React, { useState } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'; // Import minus icon
import Image from 'next/image';

const Faq: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null); // State variable for tracking active button
  const [iconState, setIconState] = useState<boolean>(true); // State variable for tracking icon state

  const toggleText = (buttonId: number) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
    setIconState(!iconState); // Toggle icon state
  };

  return (
    <div className='flex bg-[#0068D4] w-screen flex-col text-white items-center justify-center'>
      <div className='p-[5vh] items-center flex flex-col'>
        <h3 className='text-[3.5vh] font-semibold p-[1vh] text-center'>Frequently Asked Questions</h3>
        <h4 className='font-semibold text-[2vh] p-[2vh] text-center'>Everything you need to know about the product and billing</h4>

        <div className='wrdcontainer'>
          <div className='wrd'>
            <h4>Is there any free trial available?</h4>
            {activeButton === 1 && <p>Yes you can try for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}
          </div>
          {activeButton === 1 ? (
            <RemoveCircleOutlineOutlinedIcon onClick={() => toggleText(1)} className='minus' />
          ) : (
            <AddCircleOutlineOutlinedIcon onClick={() => toggleText(1)} className='plus' />
          )}
        </div>

        <div className='wrdcontainer'>
          <div className='wrd'>
            <h4>Can I change my plan later?</h4>
            {activeButton === 2 && <p>Yes you can try for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}
          </div>
          {activeButton === 2 ? (
            <RemoveCircleOutlineOutlinedIcon onClick={() => toggleText(2)} className='minus' />
          ) : (
            <AddCircleOutlineOutlinedIcon onClick={() => toggleText(2)} className='plus' />
          )}        </div>

        <div className='wrdcontainer'>
          <div className='wrd'>
            <h4>What is your cancellation policy?</h4>
            {activeButton === 3 && <p>Yes you can try for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}
          </div>
          {activeButton === 3 ? (
            <RemoveCircleOutlineOutlinedIcon onClick={() => toggleText(3)} className='minus' />
          ) : (
            <AddCircleOutlineOutlinedIcon onClick={() => toggleText(3)} className='plus' />
          )}        </div>

        <div className='wrdcontainer'>
          <div className='wrd'>
            <h4>Can other info be added to an invoice?</h4>
            {activeButton === 4 && <p>Yes you can try for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}
          </div>
          {activeButton === 4 ? (
            <RemoveCircleOutlineOutlinedIcon onClick={() => toggleText(4)} className='minus' />
          ) : (
            <AddCircleOutlineOutlinedIcon onClick={() => toggleText(4)} className='plus' />
          )}        </div>

        <div className='wrdcontainer'>
          <div className='wrd'>
            <h4>How does billing work?</h4>
            {activeButton === 5 && <p>Yes you can try for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}
          </div>
          {activeButton === 5 ? (
            <RemoveCircleOutlineOutlinedIcon onClick={() => toggleText(5)} className='minus' />
          ) : (
            <AddCircleOutlineOutlinedIcon onClick={() => toggleText(5)} className='plus' />
          )}        </div>

        <div className='wrdcontainer'>
          <div className='wrd'>
            <h4>How do i change my account email? </h4>
            {activeButton === 6 && <p>Yes you can try for free for 30 days. If you want, we&apos;ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. </p>}
          </div>
          {activeButton === 6 ? (
            <RemoveCircleOutlineOutlinedIcon onClick={() => toggleText(6)} className='minus' />
          ) : (
            <AddCircleOutlineOutlinedIcon onClick={() => toggleText(6)} className='plus' />
          )}        </div>
      </div>

      <div className='teamcon'>
        <div className='top'>
          <Image width={120} height={120} src='/pictures/faqImage.png' alt='' className='w-screen h-14 object-contain' />
        </div>
        <div className='infor'>
          <h4>Still have questions?</h4>
          <h5>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team</h5>
        </div>
        <button><h4>Get in touch</h4></button>
      </div>
    </div>
  );
};

export default Faq;
