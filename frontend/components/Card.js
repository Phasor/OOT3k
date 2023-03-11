import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({profile}) {
  return (
    <div className=' flex flex-col max-w-[350px]'>
        <div className="">
            <div className='p-2 rounded w-full'>
                <svg class="h-80 w-80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="gray"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z"/>
                </svg>
            </div>

            <div className='flex justify-between'>
                <p className='p-2 text-2xl font-leckton font-semibold'>{profile.name}</p>
                <div className='bg-blue-500 h-10 w-10 rounded-lg flex justify-center items-center text-center p-2 mr-5 hover:scale-105'>
                    <Link href="https://twitter.com/cryptotoolhub">
                        <svg class="text-gray-100 fill-current h-12 w-12" viewBox="0 0 60 60">
                            <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <p className='font-raleway p-2 text-xl py-0 text-gray-100'>{profile.role}</p>
            <p className=' font-raleway p-2 text-l wrap'>{profile.description}</p>
        </div>
    </div>
  )
}
