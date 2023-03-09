import React from 'react'
import Image from 'next/image'

export default function Mint() {
  return (
    <div className='w-screen h-screen'>
      <div className='w-full flex justify-center items-center'>
        
        {/* Navbar */}
        <div className='mx-3 w-full h-20 border-b border-gray-600 flex justify-between items-center'>
          
            <div className='flex flex-col mb-2 ml-8 justify-center items-center cursor-pointer hover:scale-105'>
              <p className='font-singleDay text-4xl'>Home</p> 
              <Image
                src="/waves.png"
                height={80}
                width={80}
                className="object-cover"
              />
            </div>
          
          {/* Connect Button */}
          <div className='relative mt-2 mr-8 h-12 cursor-pointer hover:scale-105'>
            <Image
              src="/corner-scribble.png"
              height={200}
              width={200}
              className="absolute bottom-1"
            />
            <p className='font-singleDay text-3xl ml-4'>CONNECT</p>
          </div>
        </div>
      </div>


      {/* Minting Section */}
        <div className='flex flex-col w-screen mt-[10rem] justify-center items-center'>
            <Image
                src="/narwhale-sketch.png"
                height={350}
                width={350}
                className="border-2 border-gray-500 rounded-sm"
            />
            <p className='font-singleDay text-2xl mt-10'>How many Terra's do you want to mint?</p>
        </div>
    </div>
  )
}
