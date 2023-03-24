import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FixedImage() {
  return (
  <div className='h-[700px] w-screen bg-[#74acf7] relative'>
    <h3 className='text-6xl md:text-[6rem] text-center font-raleway font-bold text-gray-100 absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>Something is Stiring</h3>
    <p className='hidden sm:block mt-10 text-lg md:text-2xl font-raleway font-normal text-gray-100 absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>Something was brewing many moons away as if someone was analyzing earth's movements day by day. What was on the horizon? Seemingly, no one knew. Yet, our heroes could feel something exciting about to happen. Can you?</p>
    <div className='border border-gray-800 rounded-full text-center bg-[#1B27BF] hover:bg-[#274CCF] cursor-pointer hover:scale-105 text-white font-raleway font-bold text-xl md:text-2xl py-2 px-3 md:px-8 absolute top-[70%] sm:top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'><Link href="/mint" >Mint Your Terras</Link></div>
    <div className="bg-[url('/OOT-many-moons-compressed.jpeg')] h-full bg-center bg-cover bg-fixed"></div>

  </div>

  )
}
