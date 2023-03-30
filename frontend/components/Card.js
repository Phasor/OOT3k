import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({profile}) {
  return (
    <div className='flex flex-col items-center p-2 max-w-[200px]'>
        <div className="">
            <Image
                src={profile.image}
                alt={profile.name}
                width={350}
                height={350}
                className='rounded-t-lg h-100 w-100'
                loading='lazy'
            />

            <div className='flex justify-between mt-3'>
                <p className='text-lg sm:text-xl font-poppins font-medium text-gray-800 mt-2'>{profile.name}</p>
                <div className='bg-blue-500 h-10 w-10 rounded-lg flex justify-center items-center text-center hover:scale-105'>
                    <Link href={profile.twitter} title="Follow on Twitter" aria-label="Twitter link" aria-labelledby="twitter-label">
                        <svg class="text-gray-100 fill-current h-12 w-12" viewBox="0 0 60 60">
                            <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <p className='font-raleway font-semibold text-xl text-gray-100'>{profile.role}</p>
            <p className='font-raleway text-gray-800 text-l wrap '>{profile.description}</p>
        </div>
    </div>
  )
}
