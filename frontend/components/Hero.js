import React from 'react'
import Image from 'next/image'

function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640;
  }
  return false;
}


export default function Hero() {

  const mobile = isMobile();

  return (
    <>
      { mobile ? 
        (
            <div className="w-full h-[110vh] flex justify-center items-center relative bg-[url('/muCompressed.png')] bg-top bg-cover bg-no-repeat mt-[75px]"></div>
        ) : 
        
        ( 
          <div className="w-full h-[110vh] flex justify-center items-center mt-[80px] md:mt-[70px]">
              <Image
                src="/Muacademy.png"
                alt="Picture of the Mu Academy, underwater sunken ship scene."
                height={1500}
                width={1500}
                quality={90}
          
                placeholder="blur"
                blurDataURL="/muLoading.jpeg"
                className="object-cover h-full w-full"
              />
            </div>
        )
      }
    </>
  )
}


