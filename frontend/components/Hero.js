import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
        <div className="w-full h-screen flex justify-center items-center bg-[#74acf7]">
            <div className='text-center'>
                <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Oceans</p>
                <p className='font-hero text-[4rem] text-white drop-shadow-xl'>of</p>
                <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Terror</p>
            </div>
        </div>
  )
}