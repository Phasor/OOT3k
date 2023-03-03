import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
        <section id="intro" className='w-full h-screen bg-[#4b1fcd] flex '>
            <div className='mx-auto lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap:5 md:gap-10'>
                <div className=' text-center flex flex-col justify-center items-center relative'>
                    <p className='font-hero text-[12vw] md:text-[7vw] lg:text-[6vw] xl:text-[4vw] text-white drop-shadow-xl'>Adventure</p>
                    <p className='font-hero text-[12vw] md:text-[7vw] lg:text-[6vw] xl:text-[4vw] text-white drop-shadow-xl'>Game</p>
                    <Image 
                        src="/turtle-cropped.png"
                        alt="Image of a turtle"
                        width={250}
                        height={250}
                        className="absolute bottom-0 left-4 sm:left-0 w-[100px] lg:w-[300px] p-0 m-0"
                    />
                </div>
                <div className='text-center sm:text-left p-4 sm:flex sm:flex-col sm:justify-center '>
                    <p className='text-white font-hero text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw]'>Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
                </div>
            </div>
        </section>

  )
}
