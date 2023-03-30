import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full bg-gray-100'>
        <div className='mx-auto min-h-[15rem] max-w-[90rem] flex justify-center items-center overflow-x-hidden bg-gray-100 border-t border-gray-200'>
            <div className='w-full flex flex-row justify-between items-center'>
                <Image
                    src="/OOTLogo.png"
                    alt="Oceans of Terra Logo"
                    height={150}
                    width={150}
                    loading="lazy"
                    className="object-cover h-[150px] w-[150px] p-2"
                />
                {/* Socials */}
                <div className='flex flex-col items-center justify-center ml-[5rem]'>
                    <p className='font-lekton text-gray-800 text-3xl font-bold mx-auto'>Follow Us</p>
                    <div className='flex justify-center items-center'>
                        <Link className=" hover:scale-105 mr-2" href="https://twitter.com/OceansOfTerra" target="_blank" >
                            <svg class="text-gray-800 fill-current h-12 w-12" viewBox="0 0 60 60">
                                <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                            </svg>
                        </Link>
                        <Link className=" hover:scale-105 mr-4" href="https://discord.gg/CBZNXrRVjH" target="_blank" >
                            <svg class="text-gray-800 fill-current h-8 w-8" viewBox="0 0 90 90">
                                <path d="M 78.527 20.998 c -10.973 -8.229 -21.412 -8.001 -21.412 -8.001 l -1.067 1.219 c 12.954 3.962 18.973 9.677 18.973 9.677 c -7.925 -4.343 -15.697 -6.477 -22.936 -7.315 c -5.486 -0.61 -10.744 -0.457 -15.392 0.152 c -0.457 0 -0.838 0.076 -1.295 0.152 c -2.667 0.229 -9.144 1.219 -17.297 4.801 c -2.819 1.295 -4.496 2.21 -4.496 2.21 s 6.325 -6.02 20.04 -9.982 l -0.762 -0.914 c 0 0 -10.439 -0.229 -21.412 8.001 c 0 0 -10.973 19.888 -10.973 44.424 c 0 0 6.401 11.049 23.241 11.582 c 0 0 2.819 -3.429 5.105 -6.324 c -9.677 -2.896 -13.335 -8.991 -13.335 -8.991 s 0.762 0.533 2.134 1.295 c 0.076 0.076 0.152 0.152 0.305 0.229 c 0.229 0.152 0.457 0.229 0.686 0.381 c 1.905 1.067 3.81 1.905 5.563 2.591 c 3.124 1.219 6.858 2.438 11.201 3.276 c 5.715 1.067 12.42 1.448 19.735 0.076 c 3.581 -0.61 7.239 -1.676 11.049 -3.277 c 2.667 -0.991 5.639 -2.438 8.763 -4.496 c 0 0 -3.81 6.248 -13.792 9.068 c 2.286 2.896 5.029 6.172 5.029 6.172 C 83.023 76.47 89.5 65.422 89.5 65.422 C 89.5 40.886 78.527 20.998 78.527 20.998 z M 30.751 58.335 c -4.267 0 -7.772 -3.81 -7.772 -8.458 s 3.429 -8.458 7.772 -8.458 s 7.848 3.81 7.772 8.458 C 38.523 54.525 35.094 58.335 30.751 58.335 z M 58.563 58.335 c -4.267 0 -7.772 -3.81 -7.772 -8.458 s 3.429 -8.458 7.772 -8.458 s 7.772 3.81 7.772 8.458 S 62.907 58.335 58.563 58.335 z"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col justify-center p-2'>
                    <p className='font-lekton font-semibold text-right text-gray-800'>Copyright Oceans of Terra 2023</p>
                    <p className='font-lekton font-semibold text-right text-gray-800 underline cursor-pointer'>Terms and Conditions</p>
                </div>

            </div>

        </div>
    </div>
  )
}
