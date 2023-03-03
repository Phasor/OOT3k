import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    // <div className="w-full h-0 absolute bg-no-repeat inset-0 bg-cover bg-center md:bg-top  border-b-4 border-black " style={{backgroundImage: 'url(/banner2.jpeg)', paddingTop: '56.52%'}}>
    //     <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-hero text-8xl text-gray-900'>Oceans of Terra</p>
    // </div>
    <div className="w-full h-0 absolute bg-no-repeat inset-0 bg-cover bg-center md:bg-top  border-b-4 border-black " style={{backgroundImage: 'url(/banner2.jpeg)', paddingTop: '56.52%'}}>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-hero text-8xl text-gray-900" style={{top: '20%'}}>
            Oceans
        </p>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-hero text-8xl text-gray-900" style={{top: '30%'}}>
            of
        </p>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-hero text-8xl text-gray-900" style={{top: '40%'}}>
            Terra
        </p>
    </div>

  )
}