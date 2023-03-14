import React, { useEffect } from 'react'

export default function Intro() {
 

  return (
    <>
        {/* Section 1 */}
        <div id="intro" className='w-full bg-[#4b1fcd] flex flex-col lg:flex-row relative'>
            <div className='flex flex-col items-center justify-center shrink lg:items-start'>
                <h2 className='font-bold text-7xl text-gray-100 font-leckton lg:w-[80%] 2xl:w-[90%] text-center lg:text-left lg:pl-24 pb-8'>JUMP INTO THE OCEAN</h2>
                <p className="text-2xl text-gray-100 font-medium text-center lg:text-start md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
            </div>

            <div className='flex flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 mb-20 lg:mt-14'>
                <div className="bg-[url('/town.png')] p-[20rem]"></div>
            </div>
        </div>

        {/* Section 2 */}
        <div id="intro" className='w-full bg-[#4b1fcd] flex flex-col lg:flex-row relative'>
            <div className='flex flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-4 mb-20 lg:mt-14'>
                <div className="bg-[url('/map.png')] p-[20rem] bg-no-repeat bg-cover"></div>
            </div>
            <div className='flex flex-col items-center justify-center shrink lg:items-end'>
                <h2 className='font-bold text-7xl text-gray-100 font-leckton lg:w-[80%] 2xl:w-[90%] text-center lg:text-right lg:pr-24 pb-8'>A MAGICAL WORLD AWAITS</h2>
                <p className="text-2xl text-gray-100 font-medium text-center lg:text-end md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pr-24 px-8 lg:px-4 -mt-4">Oceans of Terra is an underwater adventure game full of magic and wonder. Defend the underwater World against the evil Mermaid Princess, Delila and you shall have life long glory!</p>
            </div>     
        </div>

        <div id="intro" className='w-full bg-[#4b1fcd] flex flex-col justify-center items-center'>
            <p className='text-white font-leckon text-5xl mt-10 mb-2 p-4 font-semibold'>A JOURNEY OF EPIC PROPORTION BEGINS.</p>
            <p className='text-white font-leckon text-5xl mt-2 mb-[8rem] p-4 font-semibold'>OUR HEROS SET OUT TO SAVE THE KINGDOM FROM DESTRUCTION...</p>
    
        </div>
    </>
  );
}
