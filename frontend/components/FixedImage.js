import React from 'react'
import Image from 'next/image'

export default function FixedImage() {
  return (
    <div className='h-screen w-screen bg-[#74acf7] px-20 flex-col justify-center items-center'>
        <h3 className='text-[10rem] font-lucky text-center text-gray-200 my-10'>Enter the Deep</h3>
        <div className="bg-[url('/banner2.jpeg')] p-[20rem] bg-no-repeat bg-cover bg-center bg-fixed"></div>
    </div>
  )
}
