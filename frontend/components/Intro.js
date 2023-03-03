import React from 'react'

export default function Intro() {
  return (
        <div className='w-full h-screen bg-[#4b1fcd] flex '>
    

            <div className='mx-auto p-4 flex justify-center space-x-20 w-[70%]'>
                <div className='text-center p-2 flex flex-col justify-center items-center'>
                    <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Oceans</p>
                    <p className='font-hero text-[4rem] text-white drop-shadow-xl'>of</p>
                    <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Terror</p>
                </div>
                <div className='text-center p-2 flex flex-col justify-center items-center'>
                    <p className='text-white font-hero text-[2rem]'>Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
                </div>
            </div>

        </div>

  )
}
