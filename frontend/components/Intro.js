import React from 'react'

export default function Intro() {
  return (
        <div className='w-full h-screen bg-[#4b1fcd] flex '>
            <div className='mx-auto p-4 lg:max-w-[70%] grid grid-cols-1 md:grid-cols-2 gap:5 md:gap-10'>
                <div className=' text-center p-2 flex flex-col justify-center items-center'>
                    <p className='font-hero text-[12vw] md:text-[7vw] lg:text-[6vw] xl:text-[4vw] text-white drop-shadow-xl'>Adventure</p>
                    <p className='font-hero text-[12vw] md:text-[7vw] lg:text-[6vw] xl:text-[4vw] text-white drop-shadow-xl'>Game</p>
                </div>
                <div className='text-left p-2 sm:flex sm:flex-col sm:justify-center '>
                    <p className='text-white font-hero text-[5vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw]'>Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
                </div>
            </div>
        </div>

  )
}
