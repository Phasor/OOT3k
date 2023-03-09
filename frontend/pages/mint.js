import React from 'react'
import Image from 'next/image'

export default function Mint() {
  return (
    <div className='w-screen h-screen flex flex-col border-2 overflow-x-hidden'>
      <div className='h-20 m-3 border-b border-gray-600 flex justify-start items-center'>
        <div className='flex flex-col ml-5 mb-2 justify-center items-center'>
          <p className='font-singleDay text-4xl'>Home</p> 
          <Image
            src="/waves.png"
            height={80}
            width={80}
            className="object-cover"
          />
        </div>
      </div>
        <div className='flex w-screen mt-[10rem] justify-center items-center'>
            <Image
                src="/narwhale-sketch.png"
                height={350}
                width={350}
                className="border-2 border-gray-500 rounded-sm"
            />
        </div>
    </div>
  )
}
