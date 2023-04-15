import React from 'react'
import Link from 'next/link'

export default function Rights() {
  return (
    <div className='w-screen min-h-[30rem] bg-bg-dg flex justify-center items-center'>
        <div className='mx-10 py-10 sm:py-20 sm:max-w-[70vw] flex flex-col justify-center items-center border-t border-b border-gray-200'>
            <p className='text-center font-lekton text-xl sm:text-2xl font-gray-800'>Oceans of Terra: Origins holders have exclusive rights to license their PFP image</p>
            <p className='font-lekton text-md sm:text-lg font-gray-800 mt-3'>Read the license <Link href="/license" className='underline text-blue-600'>here</Link></p>
        </div>
    </div>
  )
}
