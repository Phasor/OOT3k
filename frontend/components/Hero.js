import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='w-full absolute top-0 left-0 right-0'>
        <Image
            src="/banner2.jpeg"
            alt="Picture of Oceans of Terra"
            width={1920}
            height={1080}
        />
    </div>
  )
}
