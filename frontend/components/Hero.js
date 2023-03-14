import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
        <div className="w-full h-screen flex justify-center items-center bg-[#74acf7] relative">
            <div className='text-center '>
                <p className='font-leckton font-bold text-[18vw] md:text-[16vw] lg:text-[12vw] xl:text-[8vw] text-gray-200 drop-shadow-xl'>Oceans</p>
                <p className='font-leckton font-bold text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[4vw] text-gray-200 drop-shadow-xl'>of</p>
                <p className='font-leckton font-bold text-[18vw] md:text-[16vw] lg:text-[12vw] xl:text-[8vw] text-gray-200 drop-shadow-xl'>Terra</p>
            </div>

  
        </div>
  )
}