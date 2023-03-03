import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
        <div className="w-full h-screen flex justify-center items-center bg-[#74acf7] relative">
            <div className='text-center'>
                <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Oceans</p>
                <p className='font-hero text-[4rem] text-white drop-shadow-xl'>of</p>
                <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Terror</p>
            </div>
            <Image 
              src="/mermaid.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="absolute bottom-0 right-0 slide-up2"
            />
            <div class="custom-shape-divider-bottom-1677869480" className="z-50">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="slide-up1">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
        </div>
  )
}