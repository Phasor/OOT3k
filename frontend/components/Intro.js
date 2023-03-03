import React from 'react'

export default function Intro() {
  return (
        <div className='w-full h-screen bg-[#4b1fcd] flex relative'>
            <div class="custom-shape-divider-top-1677866635">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

            <div className='mx-auto p-4 flex justify-center space-x-20 w-[70%] border border-yellow-500'>
                <div className='text-center p-2 border rounded-lg shadow-lg flex flex-col justify-center items-center'>
                    <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Oceans</p>
                    <p className='font-hero text-[4rem] text-white drop-shadow-xl'>of</p>
                    <p className='font-hero text-[8rem] text-white drop-shadow-xl'>Terror</p>
                </div>
                <div className='text-center p-2 border rounded-lg shadow-lg flex flex-col justify-center items-center'>
                    <p className='text-white font-hero text-[2rem]'>Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
                </div>
            </div>

        </div>

  )
}
