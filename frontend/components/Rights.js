import React from 'react'
import Link from 'next/link'

export default function Rights() {
  return (
    <div className='w-screen min-h-[30rem] bg-bg-dg flex justify-center items-center'>
        <div className='p-2 sm:p-20 sm:max-w-[70vw] flex flex-col justify-center items-center border-t border-b border-gray-200'>
            <p className='font-lekton text-xl sm:text-2xl font-gray-800'>Terra holders are granted the same commercial rights as Yuga Labs provided for Cryptopunks</p>
            <p className='font-lekton text-lg sm:text-lg font-gray-800 mt-2'>Read the license <Link href="/license" className='underline text-blue-600'>here</Link></p>
        </div>
    </div>
  )
}
