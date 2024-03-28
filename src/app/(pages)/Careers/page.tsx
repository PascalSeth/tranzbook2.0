"use client"
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div><section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Explore Careers in Bus and Cargo Transportation
        </h2>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img
            alt="Bus and cargo transportation"
            src="/careers.png"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-16">
          <article className="space-y-4 text-gray-600">
            <p>
              Interested in pursuing a career in bus and cargo transportation? Discover a world of
              opportunities where you can play a vital role in ensuring goods and people are
              transported safely and efficiently.
            </p>
  
            <p>
              Whether you&apos;re fascinated by the logistics of moving cargo across continents or enjoy
              the hustle and bustle of urban bus transportation, there&apos;s a career path for you. From
              bus drivers to logistics coordinators, explore the diverse roles available in this
              dynamic industry.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}