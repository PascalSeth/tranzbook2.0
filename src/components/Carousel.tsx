"use client"
import React from 'react'

type Props = {}

export default function Carousel({}: Props) {
  return (
<section>
  <div className="mx-auto max-w-full-2xl px-4  sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="/blog.png"
            className="absolute inset-0 h-full w-full rounded-[1pc] object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

<div className="p-8 sm:p-16 lg:p-24">
  <h2 className="text-2xl font-bold sm:text-3xl">
    Welcome to Our Transport Blog!
  </h2>

  <p className="mt-4 text-gray-600">
    Are you passionate about all things transportation? Whether you&apos;re a seasoned commuter, a thrill-seeking adventurer, or just someone fascinated by the intricacies of travel, you&apos;ve come to the right place. Our blog is your go-to destination for insightful articles, exciting updates, and valuable tips covering everything from public transit to personal mobility solutions.
  </p>

  <a
    href="#"
    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  >
    Get in Touch
  </a>
</div>

      </div>
    </div>
  </div>
</section>  )
}