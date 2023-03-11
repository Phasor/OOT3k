import React from 'react'
import Image from 'next/image'

export default function FixedImage() {
  return (
  <div className='h-[700px] w-screen bg-[#74acf7] relative'>
    <h3 className='text-[6rem] font-lucky text-gray-100 absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2'>Danger is Brewing</h3>
    <p className='text-2xl font-leckton text-gray-100 absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>Something was brewing many moons away as if someone was analyzing earth's movements day by day. What was on the horizon? Seemingly, no one knew. Yet, our heroes could feel danger brewing… Can you?</p>
    <div className="bg-[url('/OOT-many-moons.jpeg')] h-full bg-center bg-cover bg-fixed"></div>
  </div>

  )
}
