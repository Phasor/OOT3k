import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Community() {
  return (
    <section className='w-screen bg-bg-dg flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-8 gap-2 justify-center items-center'>
            <h3 className='sm:col-span-7 font-lekton text-3xl sm:text-5xl font-bold text-center'>Community Art Contest Winners</h3>
            <Image
                src="/trophy.png"
                alt="Picture of a trophy"
                width={50}
                height={50}
                loading='lazy'
                className="object-cover h-[40px] w-[40px] text-center mx-auto mt-10 sm:mt-0"
            />
        </div>

        {/* Pictures */}
        <div className='sm:max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-16 mt-[1rem] sm:mt-[3rem] mb-[3rem]'>

            {/* First winner */}
            <div className='p-3 sm:p-0 w-full flex flex-col justify-center items-center'>
                <Image
                    src="/comp1.jpg"
                    alt="Picture of a narwhal" 
                    width={400}
                    height={400}
                    loading='lazy'
                    className="object-cover h-[400px] w-[400px] sm:h-[250px] sm:w-[250px] mx-auto mt-10 sm:mt-0 shadow-xl rounded-md"
                />
                <div className='w-full sm:w-[250px] flex justify-between mt-3'>
                    <p className='text-md sm:text-lg font-poppins font-medium text-gray-800 mt-2'>Shill Water</p>
                    <div className='bg-blue-500 h-10 w-10 rounded-lg flex justify-center items-center text-center hover:scale-105'>
                        <Link href="https://twitter.com/ShillWater" title="Follow on Twitter" aria-label="Twitter link" aria-labelledby="twitter-label">
                            <svg class="text-gray-100 fill-current h-12 w-12" viewBox="0 0 60 60">
                                <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second winner */}
            <div className='p-3 sm:p-0 w-full flex flex-col justify-center items-center'>
                <Image
                    src="/comp2.jpg"
                    alt="Picture of a narwhal" 
                    width={400}
                    height={400}
                    loading='lazy'
                    className="object-cover h-[400px] w-[400px] sm:h-[250px] sm:w-[250px] mx-auto mt-10 sm:mt-0 shadow-xl rounded-md"
                />
                <div className='w-full flex justify-between mt-3'>
                    <p className='text-md sm:text-lg font-poppins font-medium text-gray-800 mt-2'>Zaraki</p>
                    <div className='bg-blue-500 h-10 w-10 rounded-lg flex justify-center items-center text-center hover:scale-105'>
                        <Link href="https://twitter.com/rizlapappi" title="Follow on Twitter" aria-label="Twitter link" aria-labelledby="twitter-label">
                            <svg class="text-gray-100 fill-current h-12 w-12" viewBox="0 0 60 60">
                                <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Third winner */}
            <div className='p-3 sm:p-0 w-full flex flex-col justify-center items-center'>
                <Image
                    src="/comp3.jpg"
                    alt="Picture of a narwhal" 
                    width={400}
                    height={400}
                    loading='lazy'
                    className="object-cover h-[400px] w-[400px] sm:h-[250px] sm:w-[250px] mx-auto mt-10 sm:mt-0 shadow-xl rounded-md"
                />
                <div className='w-full flex justify-between mt-3'>
                    <p className='text-md sm:text-lg font-poppins font-medium text-gray-800 mt-2'>Elena Brenner</p>
                    <div className='bg-blue-500 h-10 w-10 rounded-lg flex justify-center items-center text-center hover:scale-105'>
                        <Link href="https://twitter.com/IamBrennerLena" title="Follow on Twitter" aria-label="Twitter link" aria-labelledby="twitter-label">
                            <svg class="text-gray-100 fill-current h-12 w-12" viewBox="0 0 60 60">
                                <path d="M41.05 18.44a6.6 6.6 0 00-4.84-2.29c-3.66-.06-6.62 3.04-6.62 6.91 0 .55.05 1.09.17 1.6a18.68 18.68 0 01-13.66-7.55 7.33 7.33 0 00-.9 3.55 7.3 7.3 0 002.95 5.92 6.34 6.34 0 01-3-.92v.1c0 3.42 2.28 6.3 5.31 6.97a6.24 6.24 0 01-3 .1 6.74 6.74 0 006.2 4.93 12.8 12.8 0 01-9.81 2.9A17.89 17.89 0 0024 43.85c12.19 0 18.86-10.61 18.86-19.81l-.02-.9c1.3-.97 2.42-2.18 3.3-3.56-1.18.54-2.46.9-3.8 1.04a6.8 6.8 0 002.91-3.8c-1.28.77-2.7 1.33-4.2 1.62z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='flex justify-center items-center space-x-4 mt-10 mb-[7rem]'>
            <h4 className='font-lekton text-2xl text-gray-800'>We 
            <span>
                <Image 
                        src="/heart.png" 
                        alt="heart"
                        width={30}
                        height={30}
                        loading='lazy'
                        className="inline-block mx-2 hover:scale-105"
                />
            </span> 
            our Community</h4>

            <Image 
                src="/rainbow.png" 
                alt="heart"
                width={30}
                height={30}
                loading='lazy'
                className="mx-2 hover:scale-105"
            />
        </div>

    </section>
  )
}
