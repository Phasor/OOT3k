import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
        <div className="w-full h-screen flex justify-center items-center bg-[#74acf7] relative">
            <div className='text-center '>
                <p className='font-leckton text-[18vw] md:text-[16vw] lg:text-[12vw] xl:text-[8vw] text-white drop-shadow-xl'>Oceans</p>
                <p className='font-leckton text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[4vw] text-white drop-shadow-xl'>of</p>
                <p className='font-leckton text-[18vw] md:text-[16vw] lg:text-[12vw] xl:text-[8vw] text-white drop-shadow-xl'>Terror</p>
            </div>
            <div>
              <Image 
                src="/mermaid.png"
                alt="Image of a mermaid holding a wand"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 slide-up2 xl:block w-[200px] md:w-[300px] lg:w-[350px] xl:w-[450px]"
              />
            </div>
            <Image 
              src="/narwhale.png"
              alt="Image of a narwhale"
              width={450}
              height={450}
              className="absolute bottom-0 left-0 slide-up2 hidden xl:block"
            />
            <div class="custom-shape-divider-bottom-1677869480" className="z-50">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="slide-up1">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
        </div>
  )
}