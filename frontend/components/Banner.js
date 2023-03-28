import Image from 'next/image'
import { useEffect, useState } from 'react';

function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640;
  }
  return false;
}

export default function Banner() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMobile(isMobile());
    }

    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      setMobile(isMobile());
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div id="intro" className='w-full min-h-[30rem] bg-gradient-to-b from-[#1424BD] to-bg-blue flex flex-col justify-center items-center relative'>
        
        { mobile ? (
          <div className='mt-10' >
            <p className='text-black font-poppins font-medium text-2xl px-1 text-center filter drop-shadow-md z-40'>A JOURNEY OF</p>
            <p className='text-white font-poppins font-extrabold text-4xl px-1 text-center drop-shadow-lg z-40'>EPIC PROPORTION </p> 
            <p className='text-black font-poppins font-medium text-2xl px-1 text-center filter drop-shadow-md z-40'>BEGINS.</p>
          </div>
        ) 
        : (
          <>
            <p className='text-black font-poppins font-medium text-2xl md:text-4xl mb-2 md:mt-[20rem] p-4 text-center filter drop-shadow-lg opacity-100 z-40'>A JOURNEY OF <span className='text-4xl md:text-8xl font-extrabold text-white'>EPIC PROPORTION </span> BEGINS.</p>
          </>
          )
        }
        
        <p className='text-gray-900 font-poppins font-medium text-center text-2xl md:text-4xl mt-2 mb-[6rem] md:mb-[20rem] p-4 filter drop-shadow-md opacity-100 z-40'>OUR HEROS SET OUT TO SAVE THE SEA FROM DESTRUCTION...</p>
        <Image
            src="/fireworks.png"
            alt="Picture of explosion"
            width={500}
            height={500}
            className="absolute opacity-10 top-[3rem] md:top-[4rem] sm:h-[800px] sm:w-[800px] z-10"
            loading='lazy'
            fallback='/fireworks.png'
        />
        <div
          className='absolute top-[12rem] sm:top-[20rem] p-[3rem] sm:p-[8rem] bg-[#F9FE67] border rounded-full filter blur-xl sm:blur-2xl z-20'
        />
    </div>
  )
}

